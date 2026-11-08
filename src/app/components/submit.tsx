"use client"
import { useFormStatus } from "react-dom";

export const Submit = ()=> {
    const {pending} = useFormStatus()

    return (
        <button 
            type="submit" 
            disabled = {pending}
            //style={{backgroundColor: "green", minWidth: "7rem", paddingTop: "7px", paddingBottom: "7px", borderRadius: "8px", boxShadow: "2px 2px 5px", marginBottom: "20px", cursor: "pointer",}}
            className="border p-2 rounded-lg cursor-pointer text-green-400 hover:text-green-700">
               {!pending ? "Add product" : "Adding product"}
        </button>
    )
}