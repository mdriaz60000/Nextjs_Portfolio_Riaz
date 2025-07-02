"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Container from "@/components/shared/Container/Container";
import { projects } from "@/lib/projectData";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <Container>
      <div className="py-10 space-y-8">
        {/* Project Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Title and Description */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Full Details */}
        {project.fullDetails && (
          <div className="pt-6">
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.fullDetails}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <Button asChild variant="outline">
            <a href={project.frontendGithub} target="_blank">
              <Github className="w-4 h-4 mr-2" />
              Frontend
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={project.backendGithub} target="_blank">
              <Github className="w-4 h-4 mr-2" />
              Backend
            </a>
          </Button>
          <Button asChild>
            <a href={project.liveUrl} target="_blank">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </Container>
  );
}
