export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Work</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1: Honeypot */}
          <div id="project-1" className="bg-background rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-background-light relative">
              {/* Replace with actual project image */}
              <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                Project Image Placeholder
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Google Cloud Honeypot & Threat Visualization <span className='text-text-muted text-base font-normal'>(In Progress)</span></h3>
              <p className="text-text-muted mb-4">
                This project is currently in progress and not yet available for public viewing. Please check back soon for updates!
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">Google Cloud</span>
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">Honeypot</span>
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">Data Visualization</span>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary opacity-50 cursor-not-allowed" disabled>Live Demo</button>
                <button className="px-6 py-2 border border-primary text-primary rounded-lg opacity-50 cursor-not-allowed" disabled>
                  View Code
                </button>
              </div>
            </div>
          </div>

          {/* Project 2: E-Commerce */}
          <div id="project-2" className="bg-background rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-background-light relative">
              {/* Replace with actual project image */}
              <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                Project Image Placeholder
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Full-Stack E-Commerce Application <span className='text-text-muted text-base font-normal'>(In Progress)</span></h3>
              <p className="text-text-muted mb-4">
                This project is currently in progress and not yet available for public viewing. Please check back soon for updates!
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">Supabase</span>
                <span className="px-3 py-1 bg-background-light rounded-full text-sm">Bitcart</span>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary opacity-50 cursor-not-allowed" disabled>Live Demo</button>
                <button className="px-6 py-2 border border-primary text-primary rounded-lg opacity-50 cursor-not-allowed" disabled>
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 