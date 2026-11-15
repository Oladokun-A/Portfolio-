import Link from "next/link"
import { ThemeToggle } from "./theme-toggle";
import {currentUser} from "@clerk/nextjs/server"
import {Show, UserButton} from "@clerk/nextjs"

export default async function Navbar() {
  const user = await currentUser()
  console.log("user", user)
  return (
    <nav className ="sticky top-0 not-even:flex flex-row items-center justify-between  w-full py-4 px-8 text-black bg-[#F8F5F0] dark:bg-[#10172a] dark:text-[#3065f8] dark:border-b-[#3065f8] border-b-2  min-w-screen mb-10 border-gray-200">
        <div>
          <Show when="signed-in">
            <UserButton />
          </Show>
      
        <p className="text-md ">Hi, {user?.firstName || "there"}!</p>
        </div>
        <div className="flex space-x-4 items-center">
            <Link href="#about" className="text-md hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">About</ Link>
            <Link href="#skills" className="text-md hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">Skills</ Link>
            <Link href="#projects" className="text-md hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">Projects</ Link>
            <Link href="#contact" className="text-md hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">Contact</ Link>
            <ThemeToggle />
        </div>
    </nav>
  )
}