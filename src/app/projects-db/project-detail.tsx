"use client"
import {useUser} from "@clerk/nextjs"
import { useOptimistic } from "react";
import { removeProject } from "@/actions/products"
import Link from "next/link";

export type Project = {
    id: number;
    title: string;
    description: string;
    demoUrl: string | null
}
export const ProjectDetail =  ({projects} : {projects: Project[]}) => {
   const {isLoaded, user} = useUser()
   const roles = user?.publicMetadata?.role
   const isAdmin = roles === "admin"
   const isModerator = roles === "moderator"

    const [optimisticProjects, setOptimisticProjects] = useOptimistic(projects, (currentProjects, projectId) => {
        return currentProjects.filter(project => project.id !== projectId)
    })
    const removeProjectbyId = async (projectId: number) => {
        setOptimisticProjects(projectId)
        await removeProject(projectId)
    }
    return (
        <div className="flex justify-center">

        
        <div className="p-5 bg-amber-50 md:max-w-[60%] lg:max-w-[50%] dark:bg-[#10172af5] dark:text-[#3065f8] min-h-full">
            <h1 className="text-3xl font-bold">Projects</h1>
            <ul>
                {optimisticProjects.map((project) => (
                    <li key={project.id} className="my-5 rounded-lg shadow-lg p-3 bg-amber-100 dark:bg-[#10172a] dark:border">
                        {isAdmin || isModerator ? (
                            <Link className="font-bold " href={`/projects-db/${project.id}`}>{project.title}</Link>
                        ) : (
                            <h3 className="font-bold " >{project.title}</h3>
                        )}
                        <p className="py-4">{project.description}</p>
                        <div className="flex items-center justify-between">
                            <Link className="border p-2 py-1 rounded-md text-green-500 hover:text-green-700 hover:cursor-pointer" href={project.demoUrl ?? "#"}>Live demo</Link >
                            {(isAdmin || isModerator) && (
                                <form action={removeProjectbyId.bind(null, project.id)}>
                                    <button type="submit" className="border p-2 py-1 rounded-md text-red-500 hover:text-red-700 hover:cursor-pointer">
                                        Remove project
                                    </button>
                                </form>
                            )}
                        </div>
                        
                    </li>
                ))}
            </ul>
            {( isAdmin || isModerator) && (
                <Link href="/projects-db-create" className="border p-2 py-1 rounded-md text-blue-500 hover:text-blue-700 hover:cursor-pointer">
                    Add new project
                </Link>
            )}
        </div>
        </div>
    )
}