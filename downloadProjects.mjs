import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Google Drive folder ID from the URL
const FOLDER_ID = "1AetZi31MSFxbShq_P3xKw-hIz2agUgwl";
const TEMP_DIR = path.join(__dirname, "temp-downloads");
const PUBLIC_DIR = path.join(__dirname, "public", "projects");
const PROJECTS_DATA_PATH = path.join(__dirname, "src", "data", "projects.ts");

/**
 * Check if ffmpeg is installed
 */
async function checkFfmpeg() {
  try {
    await execAsync("ffmpeg -version");
    return true;
  } catch (error) {
    console.log("⚠️  ffmpeg not found - video optimization will be skipped");
    return false;
  }
}

/**
 * Check if gdown is installed
 */
async function checkGdown() {
  try {
    await execAsync("gdown --version");
    console.log("✓ gdown is installed\n");
    return true;
  } catch (error) {
    console.error("❌ gdown is not installed");
    console.error("Install it with: pip install gdown\n");
    return false;
  }
}

/**
 * Download folder from Google Drive using gdown
 */
async function downloadFromDrive(forceDownload = false) {
  // Check if temp directory already has files
  if (!forceDownload && fs.existsSync(TEMP_DIR)) {
    const existingFiles = getAllFiles(TEMP_DIR).filter(
      (f) => !f.name.startsWith(".")
    );
    if (existingFiles.length > 0) {
      console.log(`⏭️  Found ${existingFiles.length} files in temp directory`);
      console.log("   Skipping download (use --force to re-download)\n");
      return true;
    }
  }

  console.log("⬇️  Downloading from Google Drive...\n");

  // Clean temp directory
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(TEMP_DIR, { recursive: true });

  try {
    const url = `https://drive.google.com/drive/folders/${FOLDER_ID}`;
    const { stdout, stderr } = await execAsync(
      `gdown --folder "${url}" -O "${TEMP_DIR}" --remaining-ok`,
      { maxBuffer: 1024 * 1024 * 10 }
    );

    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);

    console.log("\n✓ Download completed\n");
    return true;
  } catch (error) {
    console.error("❌ Download failed:", error.message);
    return false;
  }
}

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles = [], basePath = "") {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const relativePath = basePath ? path.join(basePath, file) : file;

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles, relativePath);
    } else {
      // Skip hidden files and system files
      if (!file.startsWith(".") && !file.startsWith("_")) {
        arrayOfFiles.push({
          fullPath,
          relativePath,
          name: file,
        });
      }
    }
  });

  return arrayOfFiles;
}

/**
 * Organize files by project folders
 */
function organizeFilesByProject(files) {
  const projects = {};

  files.forEach((file) => {
    const parts = file.relativePath.split(path.sep);
    const projectFolder = parts[0];

    if (!projectFolder || projectFolder.startsWith(".")) return;

    if (!projects[projectFolder]) {
      projects[projectFolder] = {
        id: projectFolder
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
        name: projectFolder,
        videos: [],
        photos: [],
      };
    }

    // Create properly encoded URL path
    const relativePath = file.relativePath.replace(/\\/g, "/");
    const encodedPath = relativePath
      .split("/")
      .map((part) => encodeURIComponent(part))
      .join("/");
    const publicPath = `/projects/${encodedPath}`;
    const ext = path.extname(file.name).toLowerCase();

    if ([".mp4", ".webm", ".mov", ".avi", ".mkv"].includes(ext)) {
      projects[projectFolder].videos.push({ src: publicPath });
    } else if (
      [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"].includes(ext)
    ) {
      projects[projectFolder].photos.push({ src: publicPath });
    }
  });

  return Object.values(projects).filter(
    (p) => p.photos.length > 0 || p.videos.length > 0
  );
}

/**
 * Generate project items from organized files
 */
function generateProjectItems(projects) {
  return projects.map((project) => {
    // Use first photo, or first video if no photos available
    const firstPhoto =
      project.photos[0]?.src ||
      project.videoThumbnail ||
      project.videos[0]?.src ||
      "";

    return {
      id: project.id,
      title: project.name.toUpperCase(),
      description: `${project.name.toUpperCase()} - PROJECT DESCRIPTION`,
      subtitle: `${project.name.toUpperCase()} - PROJECT SUBTITLE`,
      image: firstPhoto,
      videos: project.videos,
      photos: project.photos,
    };
  });
}

/**
 * Update projects.ts file with new data
 */
function updateProjectsFile(projectItems) {
  const content = `interface MediaItem {
  src: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  image: string;
  videos: MediaItem[];
  photos: MediaItem[];
}

export const projectItems: ProjectItem[] = ${JSON.stringify(
    projectItems,
    null,
    2
  )};
`;

  fs.writeFileSync(PROJECTS_DATA_PATH, content, "utf8");
  console.log(`✓ Updated ${path.relative(__dirname, PROJECTS_DATA_PATH)}\n`);
}

/**
 * Move downloaded files to public directory
 */
function moveToPublic() {
  console.log("📦 Moving files to public directory...\n");

  // Clean existing projects folder
  if (fs.existsSync(PUBLIC_DIR)) {
    fs.rmSync(PUBLIC_DIR, { recursive: true, force: true });
  }

  // Move from temp to public
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  const files = getAllFiles(TEMP_DIR);

  files.forEach((file) => {
    const destPath = path.join(PUBLIC_DIR, file.relativePath);
    const destDir = path.dirname(destPath);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    fs.copyFileSync(file.fullPath, destPath);
    console.log(`  ✓ ${file.relativePath}`);
  });

  console.log(`\n✓ Moved ${files.length} files\n`);
  return files;
}

/**
 * Generate thumbnail from video using ffmpeg
 */
async function generateVideoThumbnail(videoPath, outputPath) {
  try {
    // Generate thumbnail from 1 second into the video
    await execAsync(
      `ffmpeg -i "${videoPath}" -ss 00:00:01 -vframes 1 -q:v 2 "${outputPath}" -y`,
      { maxBuffer: 1024 * 1024 * 10 }
    );
    console.log(`  ✓ Generated thumbnail: ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`  ✗ Failed to generate thumbnail: ${error.message}`);
    return false;
  }
}

/**
 * Optimize video using ffmpeg (high quality, smaller size)
 */
async function optimizeVideo(videoPath, outputPath) {
  try {
    // Use H.264 with CRF 23 (high quality), 1080p max, efficient preset
    // CRF 23 is visually lossless for most content
    await execAsync(
      `ffmpeg -i "${videoPath}" -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 192k -movflags +faststart "${outputPath}" -y`,
      { maxBuffer: 1024 * 1024 * 10 }
    );

    // Check file sizes
    const originalSize = fs.statSync(videoPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savedPercent = (
      ((originalSize - optimizedSize) / originalSize) *
      100
    ).toFixed(1);

    console.log(`  ✓ ${path.basename(videoPath)}`);
    console.log(
      `    ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(
        optimizedSize /
        1024 /
        1024
      ).toFixed(1)}MB (saved ${savedPercent}%)`
    );
    return true;
  } catch (error) {
    console.error(`  ✗ Failed to optimize: ${error.message}`);
    return false;
  }
}

/**
 * Process and optimize all videos
 */
async function processAllVideos(hasFfmpeg) {
  if (!hasFfmpeg) {
    console.log("⏭️  Skipping video optimization (ffmpeg not available)\n");
    return;
  }

  console.log("🎬 Optimizing video files...\n");

  const videoExtensions = [".mp4", ".webm", ".mov", ".avi", ".mkv"];
  const allFiles = getAllFiles(PUBLIC_DIR);
  const videoFiles = allFiles.filter((file) =>
    videoExtensions.includes(path.extname(file.name).toLowerCase())
  );

  if (videoFiles.length === 0) {
    console.log("  No videos found to optimize\n");
    return;
  }

  console.log(`  Found ${videoFiles.length} videos to optimize\n`);

  for (const file of videoFiles) {
    const videoPath = file.fullPath;
    const tempPath = `${videoPath}.tmp.mp4`;

    const optimized = await optimizeVideo(videoPath, tempPath);

    if (optimized) {
      // Replace original with optimized version
      fs.unlinkSync(videoPath);
      fs.renameSync(tempPath, videoPath);
    } else if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }

  console.log("\n");
}

/**
 * Generate thumbnails for projects without photos
 */
async function generateProjectThumbnails(projects, hasFfmpeg) {
  if (!hasFfmpeg) {
    return projects;
  }

  console.log("🖼️  Generating thumbnails for video-only projects...\n");

  for (const project of projects) {
    // Only generate thumbnail if project has no photos but has videos
    if (project.photos.length === 0 && project.videos.length > 0) {
      const firstVideo = project.videos[0];
      const videoFileName = decodeURIComponent(firstVideo.src.split("/").pop());
      const videoPath = path.join(PUBLIC_DIR, project.name, videoFileName);

      if (!fs.existsSync(videoPath)) {
        console.log(`  ⚠️  Video not found: ${videoPath}`);
        continue;
      }

      // Generate thumbnail
      const thumbFileName = `${path.parse(videoFileName).name}-thumb.jpg`;
      const thumbPath = path.join(PUBLIC_DIR, project.name, thumbFileName);
      const thumbGenerated = await generateVideoThumbnail(videoPath, thumbPath);

      if (thumbGenerated) {
        const encodedThumbPath = `/projects/${encodeURIComponent(
          project.name
        )}/${encodeURIComponent(thumbFileName)}`;
        project.videoThumbnail = encodedThumbPath;
      }

      console.log(`  ✓ Processed: ${project.name}\n`);
    }
  }

  return projects;
}

/**
 * Main function
 */
async function main() {
  console.log("🚀 Starting Google Drive download...\n");
  console.log(`📂 Folder ID: ${FOLDER_ID}`);
  console.log(`📍 Destination: ${path.relative(__dirname, PUBLIC_DIR)}\n`);

  // Check if gdown is installed
  const hasGdown = await checkGdown();
  if (!hasGdown) {
    console.error("Please install gdown first:");
    console.error("  pip install gdown");
    console.error("  or");
    console.error("  pip3 install gdown\n");
    process.exit(1);
  }

  // Check if ffmpeg is installed
  const hasFfmpeg = await checkFfmpeg();
  console.log("");

  // Check for --force flag
  const forceDownload = process.argv.includes("--force");
  if (forceDownload) {
    console.log("🔄 Force download enabled\n");
  }

  // Download from Google Drive
  const downloaded = await downloadFromDrive(forceDownload);
  if (!downloaded) {
    console.error("❌ Failed to download files");
    process.exit(1);
  }

  // Move files to public directory
  const files = moveToPublic();

  // Optimize all videos after download
  await processAllVideos(hasFfmpeg);

  // Organize files and generate project data
  console.log("📦 Organizing projects...\n");
  let projects = organizeFilesByProject(files);

  // Generate thumbnails for projects without photos
  projects = await generateProjectThumbnails(projects, hasFfmpeg);

  const projectItems = generateProjectItems(projects);

  console.log(`✨ Generated ${projectItems.length} projects:\n`);
  projectItems.forEach((p) => {
    console.log(`   • ${p.title}`);
    console.log(`     ${p.photos.length} photos, ${p.videos.length} videos`);
  });
  console.log("");

  // Update projects.ts
  updateProjectsFile(projectItems);

  // Clean up temp directory (optional, keep with --keep-temp flag)
  if (!process.argv.includes("--keep-temp") && fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    console.log("🗑️  Cleaned up temporary files\n");
  } else if (fs.existsSync(TEMP_DIR)) {
    console.log(
      `💾 Keeping temporary files in: ${path.relative(__dirname, TEMP_DIR)}\n`
    );
  }

  console.log("✅ All done!\n");
}

// Run the script
main().catch((error) => {
  console.error("\n❌ Script failed:", error.message);
  process.exit(1);
});
