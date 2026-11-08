import { getProjects } from "@/prisma-db"
import { ProjectDetail } from "./project-detail";
export type Project = {
    id: number;
    title: string;
    description: string;
    demoUrl: string | null
}
export default async function ProjectsDBPage() {
   
    const projects: Project[] = await getProjects()

   
    return <ProjectDetail projects={projects}></ProjectDetail>
}