"use client"
import { motion } from "framer-motion";
import { CalendarDays, Clock,  ArrowUpRight } from "lucide-react";
import { Badge } from "../../ui/badge";

import { 
  Card, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../../ui/card";
import Image from "next/image";
import Container from "../Container/Container";

const blogPosts = [
  {
    title: "Custom React Hook",
    description: "Learn architectural patterns and best practices for building React apps that grow with your user base.",
    tags: ["React", "Performance", "Architecture"],
    date: "2023-11-15",
    readTime: "8 min",
    author: "Alex Johnson",
    slug: "scalable-react-apps",
    image: "https://i.ibb.co/HS5pCV2/download.png"
  },
  {
    title: "The Future of CSS with Tailwind",
    description: "Exploring how utility-first CSS is changing the way we think about styling web applications.",
    tags: ["Tailwind", "CSS", "Frontend"],
    date: "2023-10-28",
    readTime: "5 min",
    author: "Sarah Chen",
    slug: "future-of-css",
    image: "https://i.ibb.co/5W5QkQYB/download.jpg"
  },
  {
    title: "TypeScript Best Practices in 2023",
    description: "Essential TypeScript patterns and techniques every developer should know.",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    date: "2023-09-12",
    readTime: "6 min",
    author: "Michael Rodriguez",
    slug: "typescript-best-practices",
    image: "https://i.ibb.co/fdHwwXXD/download-1.png"
  },
  {
    title: "Next.js 13 App Router Deep Dive",
    description: "A comprehensive guide to the new App Router features in Next.js 13.",
    tags: ["Next.js", "React", "Performance"],
    date: "2023-08-05",
    readTime: "10 min",
    author: "Emma Wilson",
    slug: "nextjs-app-router",
    image: "/blog-nextjs.jpg"
  },
  {
    title: "State Management Solutions Compared",
    description: "Zustand, Redux, Jotai, and more - which state management solution is right for your project?",
    tags: ["React", "State Management", "Frontend"],
    date: "2023-07-22",
    readTime: "7 min",
    author: "David Kim",
    slug: "state-management-comparison",
    image: "/blog-state.jpg"
  },
  {
    title: "Building Accessible Web Applications",
    description: "Practical techniques to ensure your web apps are usable by everyone.",
    tags: ["Accessibility", "Web Standards", "Inclusive Design"],
    date: "2023-06-14",
    readTime: "9 min",
    author: "Lisa Wong",
    slug: "accessible-web-apps",
    image: "/blog-a11y.jpg"
  }
];

export function BlogPage() {
  return (

    <Container>
          <section className="py-4 md:py-8 lg:py-12">
      <div className="">
        <motion.div
          className="space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="text-sm">
            Insights & Tutorials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Explore our collection of technical articles, tutorials, and industry insights.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index < 3}
                  />
    
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {post.title}
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
    </Container>

  );
}