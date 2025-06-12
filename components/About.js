export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-text-muted mb-6">
            As a dedicated Cybersecurity Incident Responder, I thrive on the front lines of digital defense—investigating, containing, and eradicating threats to protect critical assets. My work is driven by a passion for proactive threat detection, rapid response, and continuous improvement of security postures in both cloud and on-premises environments. I hold multiple GIAC certifications and have a proven track record leveraging Splunk SIEM and other advanced tools to neutralize sophisticated cyber attacks and empower organizations to stay resilient in an ever-evolving threat landscape.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Incident Response & Digital Forensics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Threat Detection & Intelligence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Splunk SIEM Engineering & Analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Cloud Security (AWS, Azure)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Malware Analysis & Reverse Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Security Automation & Scripting (Python, PowerShell)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  GIAC Certified (GCFA, GCIH, GSEC, GFACT)
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-semibold">Help Desk Technician</h4>
                  <p className="text-text-muted">22nd Century Technologies Inc. • Aug 2023 - Oct 2023</p>
                </li>
                <li>
                  <h4 className="font-semibold">Information Technology Specialist</h4>
                  <p className="text-text-muted">UW Medicine • Nov 2022 - Jan 2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 