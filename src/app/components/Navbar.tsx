import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { currentUser } from "@clerk/nextjs/server";
import { Show, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <nav className="sticky top-0 z-30 not-even:flex flex-row items-center justify-between w-full min-w-screen py-4 px-8 text-black bg-[#F8F5F0] dark:bg-[#10172a] dark:text-[#3065f8] dark:border-b-[#3065f8] border-b-2 mb-10 border-gray-200">
      <div className="flex items-center gap-3">
        <Show when="signed-in">
          <UserButton />
        </Show>
        <p className="text-md">Hi, {user?.firstName || "there"}!</p>
      </div>

      <div className="flex space-x-4 items-center">
        {/* Desktop Links (Hidden on mobile) */}
        <Link href="#about" className="hidden md:inline text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
          About
        </Link>
        <Link href="#skills" className="hidden md:inline text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
          Skills
        </Link>
        <Link href="#projects" className="hidden md:inline text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
          Projects
        </Link>
        <Link href="#contact" className="hidden md:inline text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
          Contact
        </Link>

        <ThemeToggle />

        {/* Hidden Checkbox Controller (ID matches all htmlFor attributes below) */}
        <input
          type="checkbox"
          id="mobile-menu-toggle"
          className="peer hidden"
          aria-hidden="true"
        />

        {/* Hamburger Button (Visible only on mobile) */}
        <label
          htmlFor="mobile-menu-toggle"
          aria-label="Open menu"
          className="cursor-pointer md:hidden"
        >
          <Image
            src="/icons/bars-solid-full (3).svg"
            alt="Menu"
            width={24}
            height={24}
            className="dark:invert"
          />
        </label>

        {/* Backdrop Overlay (Closes menu when clicking outside) */}
        <label
          htmlFor="mobile-menu-toggle"
          aria-label="Close menu"
          className="pointer-events-none fixed inset-0 z-40 bg-black/50 opacity-0 transition-opacity duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100 md:hidden"
        />

        {/* Slide-Out Side Pane */}
        <aside className="fixed top-0 right-0 z-50 h-full w-64 translate-x-full transform bg-[#F8F5F0] dark:bg-[#10172a] p-6 shadow-xl transition-transform duration-300 ease-in-out peer-checked:translate-x-0 md:hidden">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
            <span className="font-semibold text-gray-900 dark:text-white">Menu</span>
            <label
              htmlFor="mobile-menu-toggle"
              aria-label="Close menu"
              className="cursor-pointer rounded-md p-1 text-2xl leading-none text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white"
            >
              &times;
            </label>
          </div>
          <div className="mt-6 flex flex-col space-y-4">
            <Link href="#about" className="text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
              About
            </Link>
            <Link href="#skills" className="text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
              Skills
            </Link>
            <Link href="#projects" className="text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
              Projects
            </Link>
            <Link href="#contact" className="text-md hover:underline hover:text-gray-400 transition-all duration-300 ease-in-out">
              Contact
            </Link>
          </div>
        </aside>
      </div>
    </nav>
  );
}