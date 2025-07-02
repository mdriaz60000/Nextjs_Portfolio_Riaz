  "use client";

  import { Button as UIButton } from "../../ui/button";
  import { Badge as UIBadge } from "../../ui/badge";
  import Image from "next/image";
  import { Atom, Database } from "lucide-react";
  import { SiExpress } from "react-icons/si";
  import { RiNextjsFill } from "react-icons/ri";
  import { TbBrandMongodb } from "react-icons/tb";
  import Link from "next/link";
  import { motion } from "framer-motion";
  import { useEffect, useState } from "react";
  import Container from "../Container/Container";

  // Wrap components with motion
  const MotionButton = motion(UIButton);
  const MotionBadge = motion(UIBadge);

  export function HeroBanner() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    };

    const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const floatingTech = {
      hidden: { opacity: 0, scale: 0.5 },
      show: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.5 + i * 0.1,
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
      }),
      hover: { y: -5, transition: { duration: 0.2 } },
    };

    const backgroundCircle = {
      hidden: { opacity: 0, scale: 0.8 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.5, ease: "easeOut" },
      },
    };

    return (
      <Container>
      <section className="relative w-full py-12 md:py-16 lg:py-20 xl:py-28 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute inset-0 overflow-hidden">
          {isMounted && (
            <>
              <motion.div
                initial="hidden"
                animate="show"
                variants={backgroundCircle}
                className="absolute left-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
              />
              <motion.div
                initial="hidden"
                animate="show"
                variants={backgroundCircle}
                transition={{ delay: 0.3 }}
                className="absolute right-20 bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
              />
            </>
          )}
        </div>

        <div className="container relative z-10 ">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            {/* Left Side */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={container}
              className="flex flex-col justify-center space-y-4"
            >
              <motion.div variants={item}>
                <MotionBadge
                  variant="secondary"
                  className="text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Full-Stack Developer
                </MotionBadge>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              >
                Building Digital Experiences
              </motion.h1>

              <motion.p
                variants={item}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                I craft performant, accessible web applications with modern
                technologies. Focused on creating solutions that users love.
              </motion.p>

              {/* Tech Icons */}
              <motion.div variants={container} className="flex flex-wrap gap-3 pt-2">
                {[
                  {
                    icon: <Atom className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                    bg: "bg-blue-100 dark:bg-blue-900/30",
                  },
                  {
                    icon: <RiNextjsFill className="w-5 h-5 text-gray-900 dark:text-gray-100" />,
                    bg: "bg-gray-100 dark:bg-gray-800",
                  },
                  {
                    icon: <SiExpress className="w-5 h-5 text-black dark:text-white" />,
                    bg: "bg-gray-200 dark:bg-gray-700",
                  },
                  {
                    icon: <Database className="w-5 h-5 text-green-600 dark:text-green-400" />,
                    bg: "bg-green-100 dark:bg-green-900/30",
                  },
                  {
                    icon: <TbBrandMongodb className="w-5 h-5 text-green-600 dark:text-green-400" />,
                    bg: "bg-green-100 dark:bg-green-900/30",
                  },
                ].map(({ icon, bg }, index) => (
                  <motion.div
                    key={index}
                    variants={floatingTech}
                    custom={index}
                    whileHover="hover"
                    className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center cursor-pointer hover:shadow-md transition-all`}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                variants={container}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <motion.div variants={item}>
                  <Link href="https://github.com/mdriaz60000">
                    <MotionButton
                      size="lg"
                      className="text-lg w-full min-[400px]:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View My GitHub
                    </MotionButton>
                  </Link>
                </motion.div>
                <motion.div variants={item}>
                  <Link href="/contact">
                    <MotionButton
                      size="lg"
                      variant="outline"
                      className="text-lg w-full min-[400px]:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Me
                    </MotionButton>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <div className=" sm: pt-4 lg:flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="https://i.ibb.co/sJtjvQk1/Chat-GPT-Image-Jun-23-2025-11-48-44-AM.png"
                    alt="Profile image"
                    width={400}
                    height={400}
                    className="rounded-full object-cover border-4 border-primary/20 hover:border-primary/40 transition-all"
                    priority
                  />
                </motion.div>

                {/* Floating icons around image */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="show"
                  variants={floatingTech}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800 cursor-pointer"
                >
                  <Atom className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="show"
                  variants={floatingTech}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800 cursor-pointer"
                >
                  <RiNextjsFill className="w-8 h-8 text-gray-900 dark:text-gray-100" />
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="show"
                  variants={floatingTech}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800 cursor-pointer"
                >
                  <Database className="w-8 h-8 text-green-600 dark:text-green-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      </Container>

    );
  }
