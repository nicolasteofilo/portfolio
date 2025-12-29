"use client";

import { useRef } from "react";
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { Github } from "@/components/icons";
import { Globe } from "lucide-react";

export default function Home() {

  function ScrollScaleElement({ children, className }: {
    children: React.ReactNode;
    className?: string;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1.05, 0.95]);

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ scale }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <main className="flex flex-col max-w-3xl mx-auto gap-4 sm:gap-8 bg-background p-6 pb-24 sm:pt-16 sm:pb-28 sm:px-4">

      <section className="flex flex-col gap-8 w-full" style={{ "--stagger": 2 } as React.CSSProperties}>

        <div className="flex justify-between place-items-center ">
          <h2 className="text-lg font-medium">Projects</h2>
        </div>

        {projects.map((project) => (
          <ScrollScaleElement
            key={project.id}
            className="flex flex-col gap-4 w-full rounded-xl border border-border/50 bg-muted/40 p-4 sm:p-6"
          >
            {project.image?.src && (
              <Link className="flex flex-col gap-2" href={project.detailPath}>
                <Image
                  priority
                  width={project.image.width}
                  height={project.image.height}
                  alt={project.image.alt}
                  src={project.image.src}
                  className="bg-white rounded-lg"
                />
              </Link>
            )}

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Link
                  className="w-fit inline-flex rounded-md text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:text-accent-foreground"
                  href={project.detailPath}
                >
                  <h3 className="text-base font-medium">{project.title}</h3>
                </Link>
                <div className="text-base leading-relaxed text-muted-foreground space-y-2">
                  {project.Description ? (
                    <project.Description />
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>
              </div>

              {project.technologies.length > 0 && (
                <ul className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech.id} className="flex items-center">
                      <Badge variant="secondary" className="text-xs font-normal">
                        {tech.name}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}

              {(project.links.github || project.links.live) && (
                <div className="flex flex-wrap items-center gap-2">
                  {project.links.live && (
                    <Button asChild variant="secondary" size="sm" className="rounded-full px-4 gap-2">
                      <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                        Live
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild variant="outline" size="sm" className="rounded-full px-4 gap-2">
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </ScrollScaleElement>
        ))}

      </section>

    </main>
  );
}
