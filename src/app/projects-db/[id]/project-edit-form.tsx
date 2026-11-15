"use client"
import { useActionState } from "react";
import { Submit } from "@/app/components/submit";
import {FormState, editProject} from "@/actions/products"
import { Project } from "@/app/projects-db/page"

export default function EditProjectForm({project}: {project: Project}) {

    const initialState: FormState = {
        errors: {},
    }
    const editProjectwithId = editProject.bind(null, project.id)
    const [state, formAction, isPending] = useActionState(editProjectwithId, initialState)
   
    return (
        <div className="flex justify-center items-center min-h-screen dark:bg-[#10172aea] dark:text-[#3065f8] ">
        <form action={formAction} className="flex flex-col items-center justify-center p-5 bg-amber-50 border-2 rounded-lg md:max-w-[60%] lg:max-w-[50%] dark:bg-[#10172a]">
            <h1 className="text-2xl mb-3">Edit Project</h1>
            
            <div style={{marginBottom: "20px"}}>
                <label style={{ borderRadius: "8px", }}>
                <p>Title</p>
                <input type="text" defaultValue={project.title} name="title" className="border rounded-lg  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " />
                </label>
                {state.errors.title && <p style={{color: "red"}}>{state.errors.title}</p>}
            </div>
            
            <div style={{marginBottom: "20px"}}>
            <label style={{ borderRadius: "8px", }}>
                <p>Demo Url</p>
                <input type="url" defaultValue={project.demoUrl ?? ""} name="DemoUrl" className="border rounded-lg  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "/>
            </label>    
            {state.errors.demoUrl && <p style={{color: "red"}}>{state.errors.demoUrl}</p>}
            </div>

            <div style={{marginBottom: "20px"}}>
            <label style={{ borderRadius: "8px", }}>
                <p>Description</p>
                <input type="text" defaultValue={project.description} name="description" className="border rounded-lg  p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </label>
            {state.errors.description && <p style={{color: "red"}}>{state.errors.description}</p>}
            </div>
            <Submit ></Submit>
        </form>
        </div>
    )
    
}