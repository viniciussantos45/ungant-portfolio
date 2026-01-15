interface MediaItem {
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
  lives?: MediaItem[];
}

export const projectItems: ProjectItem[] = [
  {
    id: "aftermovie",
    title: "AFTERMOVIE",
    description: "Captação e edição de aftermovies para eventos e festas",
    subtitle: "Eventos & Festas",
    image:
      "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/Co%CC%81pia%20de%20Co%CC%81pia%20de%20Senhor%20Boteco-thumb.jpg",
    videos: [
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/Co%CC%81pia%20de%20Co%CC%81pia%20de%20Senhor%20Boteco.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/Co%CC%81pia%20de%20Modular%20-%20Halloween.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/C%C3%B3pia%20de%20R_kylie_003.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/Dre%20Guazelli.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/MC%20Davi%20no%20Espa%C3%A7o%20Liv.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/REELS%204K.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/AFTERMOVIE/barreiraeobaskla.mp4",
      },
    ],
    photos: [],
  },
  {
    id: "chevrolet",
    title: "CHEVROLET",
    description: "Produção audiovisual para campanha Chevrolet",
    subtitle: "Campanha Publicitária",
    image:
      "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CHEVROLET%20/MOF_SHORT_SUBTITLE-thumb.jpg",
    videos: [
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CHEVROLET%20/MOF_SHORT_SUBTITLE.mp4",
      },
    ],
    photos: [],
  },
  {
    id: "corporativo",
    title: "CORPORATIVO",
    description: "CORPORATIVO - PROJECT DESCRIPTION",
    subtitle: "CORPORATIVO - PROJECT SUBTITLE",
    image:
      "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/2025_Evento_G4_TRACTION_JOURNEY__lw-thumb.jpg",
    videos: [
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/2025_Evento_G4_TRACTION_JOURNEY__lw.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/2025_G4_TRACTION_JOURNEY_MAR%C3%87O_PREVIA%20v2.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/AFTERMOVIE_V1.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/CELESTE_4K.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/CRIMINALPLAYER_DIA01_V2.mov",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/CRIMINALPLAYER_DIA02_V1.mov",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/Ecommerce%20Brasil%202022.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/FINAL_2.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/INAUGURAC%CC%A7A%CC%83O%20ESCRITO%CC%81RIO%20CASTROL%20-%202025%20.mov",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/INPACTO_2024_DIA_01_4K_MP4.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/LEO%20TRADER%20AFTERMOVIE.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/M300%2025.09%20-%20SAMEDAY%20.MOV",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/METODO%20300%20AFTERMOVIE_V3.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/MONTAGEM.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/RUGBAR_V3%20.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/SAMEDAY%20-%20Galaxy.mov",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/SAMEDAY%20-%20Imersa%CC%83o%20Orion%20.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/SAMEDAY_HULK.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/VIDEO01_MARCOSMALUF.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/outlet.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/CORPORATIVO/vert_asociedadev2.mp4",
      },
    ],
    photos: [],
  },
  {
    id: "fashion-film",
    title: "FASHION FILM",
    description: "FASHION FILM - PROJECT DESCRIPTION",
    subtitle: "FASHION FILM - PROJECT SUBTITLE",
    image:
      "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/FASHION%20FILM/PIET_MOV-thumb.jpg",
    videos: [
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/FASHION%20FILM/PIET_MOV.mov",
      },
    ],
    photos: [],
  },
  {
    id: "heinz",
    title: "HEINZ ",
    description: "HEINZ  - PROJECT DESCRIPTION",
    subtitle: "HEINZ  - PROJECT SUBTITLE",
    image:
      "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/HEINZ%20/EP01_SEM_VINHETA-thumb.jpg",
    videos: [
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/HEINZ%20/EP01_SEM_VINHETA.mp4",
      },
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/HEINZ%20/EP02_KRAFTHEINZ_V2.mp4",
      },
    ],
    photos: [],
  },
  {
    id: "infantil",
    title: "INFANTIL ",
    description: "INFANTIL  - PROJECT DESCRIPTION",
    subtitle: "INFANTIL  - PROJECT SUBTITLE",
    image:
      "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/INFANTIL%20/MATTEO_VERTICAL%20-thumb.jpg",
    videos: [
      {
        src: "https://r2-ungant.whitecommand.com/portfolio/projects_temporary/INFANTIL%20/MATTEO_VERTICAL%20.mp4",
      },
    ],
    photos: [],
  },
];
