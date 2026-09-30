"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Brain, 
  Database,
  Building2,
  GitBranch,
  MapPin,
  Download,
  Loader2
} from "lucide-react";

export default function Portfolio() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      // Dynamically import html2pdf to avoid SSR issues
      const html2pdf = (await import('html2pdf.js')).default;
      
      const element = document.getElementById('resume-content');
      
      const opt = {
        margin:       10,
        filename:     'Khim_Fermhee_Ronquillo_Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
          scale: 2,
          useCORS: true,
          ignoreElements: (el: Element) => el.id === 'export-button'
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Generate PDF blob and open in new tab
      const pdfBlobUrl = await html2pdf().from(element).set(opt).output('bloburl');
      window.open(pdfBlobUrl, '_blank');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans print:bg-white print:py-0">
      <div id="resume-content" className="max-w-5xl mx-auto space-y-12 print:space-y-6">
        
        {/* Header Section */}
        <header className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 print:border-none print:shadow-none print:p-0">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Khim Fermhee Ronquillo
            </h1>
            <h2 className="text-xl md:text-xl text-blue-600 font-semibold mt-3 tracking-wide">
              SOFTWARE DEVELOPER / SYSTEMS SUPPORT ENGINEER / AI-ASSISTED DEVELOPER
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
              Software Developer with 10+ years of experience developing, maintaining, and supporting web applications, enterprise systems, and database-driven platforms. Skilled in working within existing codebases, troubleshooting software issues, performing root cause analysis, and delivering reliable solutions. Strong background in debugging, database troubleshooting, API integrations, software testing, deployment support, and data quality management, with excellent problem-solving, documentation, and communication skills.
            </p>
          </div>
          <div className="flex flex-col space-y-3 shrink-0 bg-slate-50 p-6 rounded-xl border border-slate-100 print:bg-white print:border-none print:p-0 print:space-y-1">
            <a href="mailto:khimfermheeronquillo@gmail.com" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5 mr-3 text-blue-500 print:text-slate-600" />
              khimfermheeronquillo@gmail.com
            </a>
            <div className="flex items-center text-slate-600">
              <Phone className="w-5 h-5 mr-3 text-blue-500 print:text-slate-600" />
              +639560668343
            </div>
            <div className="flex items-center text-slate-600">
              <MapPin className="w-5 h-5 mr-3 text-blue-500 print:text-slate-600" />
              Baguio City, Philippines
            </div>
            <button 
              id="export-button"
              onClick={handleExport}
              disabled={isExporting}
              className="mt-4 flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-colors print:hidden"
            >
              {isExporting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />}
              {isExporting ? 'Generating...' : 'Export to PDF'}
            </button>
          </div>
        </header>

        {/* Tech Stack Section */}
        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100 print:border-none print:shadow-none print:p-0">
          <div className="flex items-center gap-3 mb-8 print:mb-4">
            <Code className="w-8 h-8 text-blue-600 print:hidden" />
            <h3 className="text-2xl font-bold text-slate-900">Tech Stack</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:gap-4">
            <div className="space-y-6 print:space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3 print:mb-1">
                  <Code className="w-5 h-5 text-indigo-500 print:hidden" />
                  <h4 className="font-semibold text-slate-900">Languages & Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Node.js", "PHP (Laravel, Symfony, CodeIgniter)", "C#", "VB.NET", "Python", "ASP.NET"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 print:bg-transparent print:border print:border-slate-300 print:px-1 print:py-0 text-slate-700 text-xs rounded-full font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3 print:mb-1">
                  <Database className="w-5 h-5 text-indigo-500 print:hidden" />
                  <h4 className="font-semibold text-slate-900">Databases</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["MSSQL", "MySQL", "PostgreSQL", "SQLite", "SQL Query Optimization", "Stored Procedures", "Database Design", "Data Integrity", "Data Quality Management", "Database Troubleshooting", "Backup & Recovery"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 print:bg-transparent print:border print:border-slate-300 print:px-1 print:py-0 text-slate-700 text-xs rounded-full font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 print:space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3 print:mb-1">
                  <Brain className="w-5 h-5 text-indigo-500 print:hidden" />
                  <h4 className="font-semibold text-slate-900">AI-Assisted Development</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Claude", "Claude Code", "OpenAI API", "Azure OpenAI", "Azure AI Studio", "Gemini", "Ollama", "Prompt Engineering", "AI-Assisted Debugging", "AI Workflows", "LLM Integration", "PromptFlow"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 print:bg-transparent print:border print:border-slate-300 print:px-1 print:py-0 text-slate-700 text-xs rounded-full font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3 print:mb-1">
                  <GitBranch className="w-5 h-5 text-indigo-500 print:hidden" />
                  <h4 className="font-semibold text-slate-900">Version Control & DevOps</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Azure DevOps", "AWS EC2", "NPM", "Composer", "Deployment Management", "Release Validation"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 print:bg-transparent print:border print:border-slate-300 print:px-1 print:py-0 text-slate-700 text-xs rounded-full font-medium">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Assisted Development Experience */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 print:bg-none print:bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-blue-100 print:border-none print:shadow-none print:p-0">
          <div className="flex items-center gap-3 mb-6 print:mb-4">
            <Brain className="w-8 h-8 text-blue-600 print:hidden" />
            <h3 className="text-2xl font-bold text-slate-900">AI-Assisted Development Experience</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2.5 text-slate-700 leading-relaxed print:text-sm">
            <li>Utilize Claude, OpenAI, Azure OpenAI, Gemini, and Ollama to accelerate software development, debugging, code reviews, documentation, and workflow automation.</li>
            <li>Validate AI-generated code through testing, debugging, and manual review to ensure accuracy, security, maintainability, and compliance with project requirements.</li>
            <li>Use AI tools to investigate production issues, analyze codebases, generate implementation options, and improve development efficiency.</li>
            <li>Apply structured prompting techniques and engineering best practices to maximize AI-assisted development effectiveness while maintaining human oversight and quality control.</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100 print:border-none print:shadow-none print:p-0">
          <div className="flex items-center gap-3 mb-10 print:mb-4">
            <Briefcase className="w-8 h-8 text-blue-600 print:hidden" />
            <h3 className="text-2xl font-bold text-slate-900">Work Experience</h3>
          </div>

          <div className="space-y-12 print:space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent print:before:hidden">
            
            {/* Pines International Academy */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 print:hidden">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] print:w-full p-6 print:p-0 rounded-2xl border border-slate-100 print:border-none bg-white shadow-sm print:shadow-none transition-all hover:shadow-md print:hover:shadow-none">
                <h4 className="text-xl font-bold text-slate-900">Pines International Academy</h4>
                
                <div className="space-y-8 print:space-y-6 mt-6 print:mt-4">
                  <div className="relative pl-4 print:pl-0 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full print:before:hidden">
                    <h5 className="font-semibold text-slate-800">Programmer (Remote Learning Solutions Inc.)</h5>
                    <p className="text-xs font-medium text-blue-600 print:text-slate-600 mb-3 print:mb-2">2023 – Present</p>
                    <div className="text-sm text-slate-600 leading-relaxed print:text-xs">
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                        <li>Develop, maintain, and troubleshoot web applications, student information systems, and internal business platforms used across multiple departments.</li>
                        <li>Build and deploy interactive Kiosk systems for institutional use.</li>
                        <li>Investigate user-reported application issues, perform root cause analysis, and implement reliable solutions while minimizing operational disruption.</li>
                        <li>Work within existing production codebases to enhance functionality, resolve defects, and improve workflows without impacting system stability.</li>
                        <li>Utilize AI-assisted development tools including Claude and OpenAI technologies to accelerate development, troubleshoot issues, and document technical solutions.</li>
                        <li>Write and optimize SQL queries, maintain database integrity, and troubleshoot data-related issues across business-critical applications.</li>
                        <li>Perform testing, regression testing, deployment validation, and post-release verification to ensure application reliability and data accuracy.</li>
                        <li>Collaborate with stakeholders to gather requirements, resolve issues, and improve operational efficiency through software enhancements.</li>
                        <li>Maintain technical documentation, workflows, and system records to support ongoing platform operations.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative pl-4 print:pl-0 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full print:before:hidden">
                    <h5 className="font-semibold text-slate-800">IT / Web Developer / Programmer</h5>
                    <p className="text-xs font-medium text-blue-600 print:text-slate-600 mb-3 print:mb-2">2019 – 2021</p>
                    <div className="text-sm text-slate-600 leading-relaxed print:text-xs">
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                        <li>Developed and maintained education management platforms including PinesPortal, Pinestalking, and Gate Keeper systems.</li>
                        <li>Supported platform operations by troubleshooting application issues, resolving data inconsistencies, and maintaining system reliability.</li>
                        <li>Managed database structures, SQL queries, and integrations supporting student services and operational workflows.</li>
                        <li>Investigated user-reported issues and collaborated with stakeholders to identify root causes and implement effective solutions.</li>
                        <li>Improved platform functionality by developing enhancements within existing production systems while maintaining data integrity.</li>
                        <li>Maintained technical documentation, user workflows, and operational procedures.</li>
                        <li>Created features for students to easily access class schedules, test results, and financial reports, as well as schedule manager consultations.</li>
                        <li>Built an official website platform for online class offerings, featuring comprehensive teacher profiles, introduction videos, and a 4-step interactive learning system.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sahei Core Technologies */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 print:hidden">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] print:w-full p-6 print:p-0 rounded-2xl border border-slate-100 print:border-none bg-white shadow-sm print:shadow-none transition-all hover:shadow-md print:hover:shadow-none">
                <h4 className="text-xl font-bold text-slate-900">Sahei Core Technologies Co.</h4>
                <div className="mt-3 relative pl-4 print:pl-0 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full print:before:hidden">
                  <h5 className="font-semibold text-slate-800">Software Engineer</h5>
                  <p className="text-xs font-medium text-slate-500 mb-3 print:mb-2">2021 – 2023</p>
                  <div className="text-sm text-slate-600 leading-relaxed print:text-xs">
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Developed and maintained enterprise software applications, APIs, databases, and business systems supporting daily operations and business processes.</li>
                      <li>Created scalable Election Systems for secure voting and tallying, alongside Accounting Systems for financial management.</li>
                      <li>Developed Fintech solutions (Payment Gateways), Inventory Systems, POS Systems, Booking Systems, and Crop Programming Systems.</li>
                      <li>Investigated software defects, integration issues, and database inconsistencies, identifying root causes and implementing long-term solutions.</li>
                      <li>Designed and optimized SQL queries, database structures, and application workflows to improve performance, reliability, and data quality.</li>
                      <li>Maintained and enhanced existing codebases using PHP, Node.js, JavaScript, C#, and SQL technologies.</li>
                      <li>Performed software testing, debugging, deployment validation, and post-deployment monitoring to ensure stable releases.</li>
                      <li>Worked with Git and GitHub-based version control workflows for source code management, collaboration, and release tracking.</li>
                      <li>Documented software changes, issue resolutions, technical processes, and recurring support issues.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* TEKNONHOST IT SOLUTIONS */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 print:hidden">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] print:w-full p-6 print:p-0 rounded-2xl border border-slate-100 print:border-none bg-white shadow-sm print:shadow-none transition-all hover:shadow-md print:hover:shadow-none">
                <h4 className="text-xl font-bold text-slate-900">TEKNONHOST IT SOLUTIONS</h4>
                <div className="mt-3 relative pl-4 print:pl-0 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full print:before:hidden">
                  <h5 className="font-semibold text-slate-800">Programmer</h5>
                  <p className="text-xs font-medium text-slate-500 mb-3 print:mb-2">2016 – 2019</p>
                  <div className="text-sm text-slate-600 leading-relaxed mt-3 print:mt-1 print:text-xs">
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Developed and maintained population management, POS, clinic management, RFID, and biometric attendance systems.</li>
                      <li>Designed databases, implemented business logic, and ensured data integrity across multiple business-critical applications.</li>
                      <li>Troubleshot software defects, database issues, and hardware-software integration challenges.</li>
                      <li>Collaborated with clients to investigate operational issues, gather requirements, and deliver software improvements.</li>
                      <li>Conducted testing, validation, and deployment activities to ensure system reliability and user satisfaction.</li>
                      <li>Developed a Registry of Barangay Inhabitants and Migrants for the Commission on Population Philippines to track population movements.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Admedix */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 print:hidden">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] print:w-full p-6 print:p-0 rounded-2xl border border-slate-100 print:border-none bg-white shadow-sm print:shadow-none transition-all hover:shadow-md print:hover:shadow-none">
                <h4 className="text-xl font-bold text-slate-900">Admedix</h4>
                
                <div className="space-y-8 print:space-y-6 mt-6 print:mt-4">
                  <div className="relative pl-4 print:pl-0 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full print:before:hidden">
                    <h5 className="font-semibold text-slate-800">Programmer (Admedix / JSV Software)</h5>
                    <p className="text-xs font-medium text-slate-500 mb-3 print:mb-2">2017 – 2019</p>
                    <div className="text-sm text-slate-600 leading-relaxed print:text-xs">
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                        <li>Developed platforms for anatomy reference, medical information, and patient resource management for medical offices.</li>
                        <li>Created an integrated suite of hospital and patient management tools.</li>
                        <li>Built a semi-private, family-friendly social media platform featuring family trees and private albums for multimedia sharing.</li>
                        <li>Implemented social features including messaging, chat, journals, estate records, and health/diet/exercise tracking.</li>
                        <li>Developed content creation tools for publishing articles, blogs, workouts, events, comics, and games.</li>
                        <li>Integrated e-commerce capabilities for advertising and selling user-generated works.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative pl-4 print:pl-0 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full print:before:hidden">
                    <h5 className="font-semibold text-slate-800">Programmer</h5>
                    <p className="text-xs font-medium text-slate-500 mb-3 print:mb-2">2016 – 2016</p>
                    <p className="text-sm text-slate-600 leading-relaxed print:text-xs">
                      Focused on learning and developing applications using the Symfony PHP framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100 mb-12 print:border-none print:shadow-none print:p-0 print:mb-0">
          <div className="flex items-center gap-3 mb-6 print:mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600 print:hidden" />
            <h3 className="text-2xl font-bold text-slate-900">Education</h3>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 print:bg-white print:border-none print:p-0">
            <h4 className="text-lg font-bold text-slate-900">University of the Cordilleras</h4>
            <p className="text-blue-600 print:text-slate-800 font-medium mt-1">Bachelor of Science in Information Technology</p>
            <p className="text-slate-500 text-sm mt-2 print:mt-1">Graduated in 2016</p>
          </div>
        </section>
        
        <footer className="text-center pb-12 pt-6 print:hidden">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Khim Fermhee Ronquillo. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  );
}
