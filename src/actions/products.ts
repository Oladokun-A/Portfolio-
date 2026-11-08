"use server"

import { addProject, deleteProject } from "@/prisma-db"
import {redirect} from "next/navigation"
import { updateProject } from "@/prisma-db"
export type Errors = {
    title?: string;
    demoUrl?: string;
    description?: string;
}
export type FormState = {
    errors: Errors;
}

export async function createProject(prevState: FormState, formData: FormData){
        const title = formData.get("title") as string;
        const demoUrl = formData.get("DemoUrl") as string;
        const description = formData.get("description") as string;

        const errors: Errors = {};
        if(!title) errors.title = "Title is required"
        if(!demoUrl) errors.demoUrl = "Demo Url is required"
        if(!description) errors.description = "Description is required"
        if(Object.keys(errors).length > 0) {
            return {errors};
        }
        await addProject( title, demoUrl, description )
        redirect("/projects-db")
    }
export async function editProject(id: number, prevState: FormState, formData: FormData){
        const title = formData.get("title") as string;
        const demoUrl = formData.get("DemoUrl") as string;
        const description = formData.get("description") as string;

        const errors: Errors = {};
        if(!title) errors.title = "Title is required"
        if(!demoUrl) errors.demoUrl = "Demo Url is required"
        if(!description) errors.description = "Description is required"
        if(Object.keys(errors).length > 0) {
            return {errors};
        }
        await updateProject( id, title, demoUrl, description)
        redirect("/projects-db")
    }

    export async function removeProject(id: number){
        await deleteProject(id)
        redirect("/projects-db")
    }