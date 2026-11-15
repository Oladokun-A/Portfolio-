import {auth} from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import {checkRole} from "@/utils/roles"

export default async function ProjectsDBLayout(
    {children} : {children: React.ReactNode}
){
    const {redirectToSignIn, userId} = await auth()
    
    if(!userId){
        redirect ("/sign-in")
    }
    
    const isAdmin = await checkRole("admin") || await checkRole("moderator")
    if(!isAdmin){
        redirect("/sign-in")
    }
    return <>{children}</>
}