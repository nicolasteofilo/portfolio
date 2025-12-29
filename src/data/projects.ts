import type { ComponentType } from "react";
import projectsDataJson from "./projects.json";

type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Project = {
  id: string;
  title: string;
  description?: string;
  descriptionMdx?: string;
  detailPath: string;
  technologies: { id: string; name: string; icon: string }[];
  links: { github: string; live: string };
  image?: ProjectImage;
};

const projectsData = projectsDataJson as { projects: Project[] };

const mdxContext = require.context("./project-descriptions", false, /\.mdx$/);
const descriptionMap: Record<string, ComponentType | undefined> = {};

mdxContext.keys().forEach((key: string) => {
  const id = key.replace("./", "").replace(/\.mdx$/, "");
  const mdxModule = mdxContext(key) as { default?: ComponentType };
  descriptionMap[id] = mdxModule.default;
});

export const projects = projectsData.projects.map((project) => ({
  ...project,
  Description: project.descriptionMdx ? descriptionMap[project.descriptionMdx] : undefined,
}));
