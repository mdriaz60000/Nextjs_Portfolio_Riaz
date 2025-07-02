"use client";

import { Badge as UIBadge } from "../../ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiCanva,
  SiVercel,
  SiNetlify,
  SiOpenai,
  SiGithub,
  SiPrisma
} from "react-icons/si";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";
import Container from "../Container/Container";
import { VscVscodeInsiders } from "react-icons/vsc";


const MotionBadge = motion(UIBadge);

export function SkillsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const floatingTech = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    hover: { y: -5, scale: 1.05, transition: { duration: 0.2 } },
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "React Router", icon: <TbBrandReactNative className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" />, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/30" },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" />, color: "text-gray-900 dark:text-gray-100", bg: "bg-gray-100 dark:bg-gray-800" },
        { name: "HTML5", icon: <SiHtml5 className="w-5 h-5" />, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" },
        { name: "CSS3", icon: <SiCss3 className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" />, color: "text-cyan-500", bg: "bg-cyan-100 dark:bg-cyan-900/30" },
        { name: "Vite", icon: <SiVite className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "Redux", icon: <TbBrandRedux className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { name: "Express", icon: <SiExpress className="w-5 h-5" />, color: "text-gray-900 dark:text-gray-100", bg: "bg-gray-200 dark:bg-gray-700" },
                { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" />, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/30" },
         { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { name: "Mongoose", icon: <SiMongodb className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Prisma", icon: <SiPrisma className="w-5 h-5" />, color: "text-blue-800 dark:text-blue-300", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Firebase", icon: <SiFirebase className="w-5 h-5" />, color: "text-yellow-600", bg: "bg-yellow-100 dark:bg-yellow-900/30" },
      ]
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Figma", icon: <SiFigma className="w-5 h-5" />, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900/30" },
        { name: "Canva", icon: <SiCanva className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { name: "Vercel", icon: <SiVercel className="w-5 h-5" />, color: "text-black dark:text-white", bg: "bg-gray-200 dark:bg-gray-700" },
        { name: "Netlify", icon: <SiNetlify className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { name: "ChatGPT", icon: <SiOpenai className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { name: "Git", icon: <SiGithub className="w-5 h-5" />, color: "text-gray-900 dark:text-gray-100", bg: "bg-gray-200 dark:bg-gray-700" },
        { name: "GitHub", icon: <SiGithub className="w-5 h-5" />, color: "text-gray-900 dark:text-gray-100", bg: "bg-gray-200 dark:bg-gray-700" },
        { name: "VsCode", icon: <VscVscodeInsiders className="w-5 h-5" />, color: "text-gray-900 dark:text-gray-100", bg: "bg-green-100 dark:bg-green-900/30" },
      ]
    }
  ];

  return (
    <Container>
      <section className="relative w-full py-4 md:py-8 lg:py-12 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute inset-0 overflow-hidden">
          {isMounted && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute left-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute right-20 bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
              />
            </>
          )}
        </div>

        <div className=" relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="flex flex-col justify-center space-y-8"
          >
            <motion.div variants={item} className="text-center">
              <MotionBadge
                variant="secondary"
                className="text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Technical Expertise
              </MotionBadge>
            </motion.div>

            <motion.h2
              variants={item}
              className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            >
              My Tech Stack
            </motion.h2>

            <motion.p
              variants={item}
              className="max-w-3xl mx-auto text-center text-muted-foreground md:text-lg"
            >
              Here are the technologies and tools I work with to build amazing digital experiences.
            </motion.p>

            {/* Skills Grid */}
            <motion.div variants={container} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className={category.skills[0].color}>{category.skills[0].icon}</span>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        custom={skillIndex}
                        initial="hidden"
                        animate="show"
                        variants={floatingTech}
                        whileHover="hover"
                        className={`flex flex-col items-center p-3 rounded-lg ${skill.bg} cursor-default`}
                      >
                        <div className={`${skill.color} mb-1`}>{skill.icon}</div>
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
}