import Link from "next/link"
import { ThemeToggle } from "./theme-toggle";
export default async function Menu() {
    return (
        <div id="menu" className="fixed top-0 right-0 w-full h-full bg-[#F8F5F0] dark:bg-[#10172a] dark:text-[#c9cfdf] z-50 flex flex-col items-center justify-center">
            <Link href="#about" className="text-2xl mb-4 hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">About</ Link>
            <Link href="#skills" className="text-2xl mb-4 hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">Skills</ Link>
            <Link href="#projects" className="text-2xl mb-4 hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">Projects</ Link>
            <Link href="#contact" className="text-2xl mb-4 hover:underline hover:text-gray-300 transition-all duration-300 ease-in-out">Contact</ Link>
        </div>
    )
}