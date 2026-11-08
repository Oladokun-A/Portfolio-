"use client"
import { useActionState } from "react";
import { Submit } from "../components/submit";
import {FormState, createProject} from "@/actions/products"

export default function AddProjectPage(){
    const initialState: FormState = {
        errors: {},
    }
    const [state, formAction, isPending] = useActionState(createProject, initialState)
   
    return (
        <div className="flex justify-center items-center min-h-screen dark:bg-[#10172aea] dark:text-[#3065f8] ">

        
        <form action={formAction} className="flex flex-col items-center justify-center p-5 bg-amber-50 border-2 rounded-lg md:max-w-[60%] lg:max-w-[50%] dark:bg-[#10172a]">
            <h1 className="text-2xl mb-3">Add Project</h1>
            <div className="mb-8 flex flex-col">
                <label style={{ borderRadius: "8px", }}>
                <p>Title</p>
                <input type="text" name="title" className="border rounded-lg  p-2"/>
                </label>
                {state.errors.title && <p style={{color: "red"}}>{state.errors.title}</p>}
            </div>
            
            <div className="mb-8 flex flex-col">
            <label style={{ borderRadius: "8px", }}>
                <p>Demo Url</p>
                <input type="url" name="DemoUrl" className="border rounded-lg  p-2 "/>
            </label>
            {state.errors.demoUrl && <p style={{color: "red"}}>{state.errors.demoUrl}</p>}
            </div>

            <div className="mb-8 flex flex-col">
            <label style={{ borderRadius: "8px", }}>
                <p>Description</p>
                <input type="text" name="description" className="border rounded-lg  p-2 "/>
            </label>
            {state.errors.description && <p style={{color: "red"}}>{state.errors.description}</p>}
            </div>
            <Submit></Submit>
        </form>
        </div>
    )
    
}