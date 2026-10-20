export default function Contact() {
  return (
    <section id="contact" className="flex flex-col justify-center border-t py-20">
        <div className="flex flex-col justify-center py-2">
          <h1 className="text-[32px] font-serif italic mb-4">Contact Me</h1>
          <p className="text-left">
              Have a project in mind or looking for a passionate developer to bring your ideas to life? I would love to hear from you. Whether it's a collaboration, freelance opportunity, or simply a tech conversation, feel free to reach out.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-4">
                  <div className="flex flex-col gap-2 min-w-full border px-2 py-4">
                    <p>Email me</p>
                    <div className="flex gap-2 items-center justify-between">
                      <p>abdullaholabisi08@gmail.com</p>
                      <a href="mailto:abdullaholabisi08@gmail.com" className="hover:text-blue-300 italic" target="_blank" rel="noopener noreferrer">
                        →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 min-w-full border px-2 py-4">
                    <p>Connection on LinkedIn</p>
                    <div className="flex gap-2 items-center justify-between">
                      <p>Grow your professional network with me. </p>
                      <a href="https://www.linkedin.com/in/abdullah-oladokun-21391536b/" className="hover:text-blue-300 italic" target="_blank" rel="noopener noreferrer">
                        →
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 min-w-full border px-2 py-4">
                    <p>Explore My Code</p>
                    
                    <div className="flex gap-2 items-center justify-between">
                      <p>Check out my GitHub profile to see my latest projects and contributions.</p>
                      <a href="https://github.com/Oladokun-A" className="hover:text-blue-300 italic" target="_blank" rel="noopener noreferrer">
                        →
                      </a>
                    </div>
                  </div>
              
              
            </div>
        </div>
    </section>
    
  );
}