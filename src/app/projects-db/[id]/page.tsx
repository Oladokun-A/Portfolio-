import {Project} from "@/app/projects-db/page"
import {getProject} from "@/prisma-db"
import EditProjectForm from "./project-edit-form"
import {notFound} from "next/navigation"

export const dynamic = "force-dynamic"
export default async function EditProjectPage({params}:{params: Promise<{id: string}>}) {

    
    const {id} = await params;
    const project: Project | null = await getProject(parseInt(id));
    
    if (!project) {
        notFound()
    }

    return <EditProjectForm project={project}/>
    
}