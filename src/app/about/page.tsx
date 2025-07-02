"use client"
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Download, Mail, Github, Linkedin, } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Container from "@/components/shared/Container/Container";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Mongoose", "MongoDB"] },
    { category: "Tools", items: ["Git", "Figma", "Docker", "Vercel"] },
  ];

  return (
    <Container>
   <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className=" py-12 space-y-12"
    >
      {/* Hero Section */}
      <motion.section 
        variants={container}
        className="flex flex-col md:flex-row gap-8 items-center"
      >
        <motion.div variants={item} className="space-y-4 md:w-2/3">
          <Badge variant="secondary" className="text-sm">
            Full Stack Developer
          </Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight"
          >
            Hi, I am Mohammad Riaz
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            I build exceptional digital experiences with modern web technologies. 
            Passionate about clean code, intuitive design, and solving real-world problems.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 pt-2"
          >
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 pt-2 rounded-full transition-all border border-muted hover:border-primary/30"
          >
            <Button variant="ghost" size="icon">
              <Link href="https://github.com/mdriaz60000"><Github className="h-5 w-5" /></Link>
              
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://www.linkedin.com/in/mohammad-riaz-56z84/">  <Linkedin className="h-5 w-5" /></Link>
            
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://wa.me/01610595684">< FaWhatsapp className="h-5 w-5" /> </Link>
              
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://www.facebook.com/riaz60000">< FaSquareFacebook className="h-5 w-5" /></Link>
              
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="#">   < FaXTwitter className="h-5 w-5" /></Link>
            
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="md:w-1/3 flex justify-center"
        >
          <Avatar className="h-64 w-64">
            <AvatarImage 
              src="https://i.ibb.co/sJtjvQk1/Chat-GPT-Image-Jun-23-2025-11-48-44-AM.png"
              className="rounded-full  border-4 border-primary/20" 
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.section>

      <Separator />

      {/* Skills Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={item} className="text-2xl font-semibold mb-6">
          My Skills
        </motion.h2>
        <motion.div variants={container} className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={cardVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="outline">
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Personal Section */}
      <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div variants={cardVariants}>
          <Card>
            <CardHeader>
              <CardTitle>My Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I believe in user-centered design and robust, maintainable code. 
                Every project is an opportunity to create something meaningful.
              </p>
              <p>
                When I am not coding, you can find me contributing to open source, 
                writing technical articles, or exploring new technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={cardVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-medium">Computer Science Degree</h3>
                  <p className="text-sm text-muted-foreground">University of Technology, 2023</p>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-medium">Web Development Course</h3>
                  <p className="text-sm text-muted-foreground">Programing Hero, 2023</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </motion.div>
    </Container>
 
  );
}