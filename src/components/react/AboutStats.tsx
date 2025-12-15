"use client";

import { CameraIcon, UsersIcon, VideoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: CameraIcon,
    value: "500+",
    label: "Projetos Fotográficos",
    color: "text-primary",
  },
  {
    icon: VideoIcon,
    value: "200+",
    label: "Vídeos Produzidos",
    color: "text-primary",
  },
  {
    icon: UsersIcon,
    value: "150+",
    label: "Clientes Satisfeitos",
    color: "text-primary",
  },
  {
    icon: UsersIcon,
    value: "15+",
    label: "Prêmios Recebidos",
    color: "text-primary",
  },
];

const skills = [
  { name: "Fotografia Urbana", level: 95 },
  { name: "Produção de Vídeo", level: 90 },
  { name: "Edição & Pós-Produção", level: 92 },
  { name: "Direção Criativa", level: 88 },
];

export default function AboutStats() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6  backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-primary/30 transition-all cursor-pointer group"
          >
            <stat.icon
              className={`w-10 h-10 ${stat.color} mb-4 group-hover:scale-110 transition-transform`}
              weight="duotone"
            />
            <div className="text-3xl font-black text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-secondary/80">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Bars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="p-8  backdrop-blur-sm rounded-2xl border border-primary/10"
      >
        <h3 className="text-2xl font-bold text-foreground mb-6">
          Nossa Expertise
        </h3>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-secondary">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-secondary/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.6 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Featured Achievement */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
        className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-2xl border border-primary/20 relative overflow-hidden group cursor-pointer"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl group-hover:blur-xl transition-all"></div>
        <div className="relative z-10">
          <UsersIcon className="w-12 h-12 text-primary mb-4" weight="duotone" />
          <h3 className="text-xl font-bold text-foreground mb-3">
            Destaque do Ano
          </h3>
          <p className="text-secondary/90 leading-relaxed">
            Reconhecidos como um dos estúdios mais inovadores em fotografia
            urbana contemporânea.
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center p-8  backdrop-blur-sm rounded-2xl border border-primary/10"
      >
        <p className="text-lg text-secondary mb-4">
          Pronto para criar algo incrível?
        </p>
        <motion.a
          href="/contato"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Entre em Contato
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}
