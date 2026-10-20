import Navbar from './components/Navbar'
import About from './components/about'
import Skill from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import Hero from './components/hero'
export default function Home() {
  return (
    <main className="flex flex-col items-center px-20 text-[#FAF9F6] bg-[#cabc8f] lg:px-80 sm:px-20 dark:bg-[#10172a] dark:text-[#3065f8] font-sans text-[14px]">
      <Navbar />
      <Hero />
      <About />
      <Skill/>
      <Projects/>
      <Contact></Contact>
      <p className="mt-4 text-sm text-gray-500 text-center"> Turning ideas into digital experiences, one line of code at a time. </p>
    </main>
  )
}