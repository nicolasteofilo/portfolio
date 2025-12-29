import type { ComponentType } from "react";
import projectsData from "./projects.json";

const mdxContext = require.context("./project-descriptions", false, /\.mdx$/);
const descriptionMap: Record<string, ComponentType | undefined> = {};

mdxContext.keys().forEach((key: string) => {
  const id = key.replace("./", "").replace(/\.mdx$/, "");
  descriptionMap[id] = mdxContext(key).default;
});

export const projects = projectsData.projects.map((project) => ({
  ...project,
  Description: project.descriptionMdx ? descriptionMap[project.descriptionMdx] : undefined,
}));
