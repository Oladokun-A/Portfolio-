import Link from "next/link";
export default function Projects() {
  return (
    <section id="projects" className="flex flex-col justify-center border-t py-20 ">
        <div className="flex flex-col justify-center  py-2">
          <h1 className="text-[32px] font-serif italic mb-4">Past Projects</h1>
          <p className="text-left mb-10">
            A selection of projects that showcase my skills in front-end development, UI design, and problem-solving. Each project reflects my commitment to creating responsive, user-friendly, and visually engaging web experiences.          </p> 
          <div className="flex justify-around flex-col sm:flex-row sm:flex-wrap sm:justify-start sm:gap-2">
            <div className="my-1 border rounded-md sm:max-w-[45%] p-5"> 
              <h4 className="font-bold pb-4">Typing test program</h4>
              <p> A responsive typing speed application that tracks typing accuracy, speed, and performance across multiple game modes </p>
              <div className="flex mt-4">
                <a href="https://typing-test-liart.vercel.app" target="_blank" rel="noopener noreferrer" className="border px-2 text-[10px] rounded-sm">Live Demo</a>
              </div>
            </div>
            <div className="my-1 border rounded-md sm:max-w-[45%] p-5">
              <h4 className="font-bold pb-4">Digital Landing Page</h4>
              <p>A modern, responsive landing page for a digital banking service with interactive elements and smooth animations.</p>
              <div className="flex mt-4">
                <a href="https://digitalbank-landing-page-b3ig.vercel.app" target="_blank" rel="noopener noreferrer" className="border px-2 text-[10px] rounded-sm">Live Demo</a>
              </div>
            </div>
            <div className="my-1 border rounded-md sm:max-w-[45%] p-5">
              <h4 className="font-bold pb-4">Product List with Cart</h4>
              <p> A modern e-commerce interface that allows users to browse products, manage a shopping cart, and experience a simplified online shopping workflow </p>
              <div className="flex mt-4">
                <a href="https://product-list-with-cart-main-ashen-nine.vercel.app" target="_blank" rel="noopener noreferrer" className="border px-2 text-[10px] rounded-sm">Live Demo</a>
              </div>
            </div>
            <div className="my-1 border rounded-md sm:max-w-[45%] p-5">
              <h4 className="font-bold pb-4">Newsletter Page</h4>
              <p> A clean and responsive newsletter subscription page focused on user engagement and e-mail list growth </p>
              <div className="flex mt-4">
                <a href="https://news-six-rose.vercel.app" target="_blank" rel="noopener noreferrer" className="border px-2 text-[10px] rounded-sm">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
    </section>    
  );
}