export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Paige Hokanson</span>, a Cybersecurity Incident Responder
        </h1>
        <p className="text-xl sm:text-2xl text-text-muted mb-8">
          I specialize in advanced threat detection and rapid incident response. Leveraging elite GIAC certifications and deep expertise in Splunk SIEM, I investigate and neutralize sophisticated cyber attacks across cloud and on-premises environments—ensuring organizations stay resilient and secure in an evolving digital landscape.
        </p>
        <a href="#projects" className="btn-primary inline-block">
          View My Work
        </a>
      </div>
    </section>
  )
} 