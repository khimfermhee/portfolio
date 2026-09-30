import { 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Server, 
  Shield, 
  Brain, 
  Cpu, 
  Database,
  Building2,
  Calendar
} from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Khim Fermhee Ronquillo
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mt-2">
              Senior Software Engineer & Web Developer
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl leading-relaxed">
              10+ years of software development experience covering web and desktop applications, enterprise systems, database-driven applications, education platforms, healthcare systems, POS, RFID/biometric solutions, and custom business software.
            </p>
          </div>
          <div className="flex flex-col space-y-3 shrink-0">
            <a href="mailto:khimfermheeronquillo@gmail.com" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5 mr-3 text-slate-400" />
              khimfermheeronquillo@gmail.com
            </a>
            <div className="flex items-center text-slate-600">
              <Phone className="w-5 h-5 mr-3 text-slate-400" />
              09560668343
            </div>
          </div>
        </header>

        {/* Tech Stack Section */}
        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">Technical Expertise</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Languages & Frameworks</h4>
                  <p className="text-slate-600 text-sm mt-1">C#, VB.NET, Python, ASP.NET, PHP (Laravel, Symfony, CodeIgniter), Node.js</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Server className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Web Development</h4>
                  <p className="text-slate-600 text-sm mt-1">HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, Vue.js, PWA, WordPress</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Databases</h4>
                  <p className="text-slate-600 text-sm mt-1">MSSQL, MySQL, PostgreSQL, SQLite; query optimization, indexing, procedures</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">DevOps & Infrastructure</h4>
                  <p className="text-slate-600 text-sm mt-1">Git, Azure DevOps, AWS EC2, Composer, NPM, server configuration</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">AI & LLM Integration</h4>
                  <p className="text-slate-600 text-sm mt-1">OpenAI API, Azure OpenAI/AI Studio, Ollama, Claude, Gemini, Prompt Engineering</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Cloud, Security & Hardware</h4>
                  <p className="text-slate-600 text-sm mt-1">Cloudflare, WAF, DDoS protection, Biometrics, RFID/NFC, API integration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">Professional Experience (By Tenure)</h3>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Pines International Academy */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-slate-900">Pines International Academy</h4>
                <p className="text-sm font-medium text-slate-500 mb-4 flex items-center gap-1.5 mt-1">
                  <Calendar className="w-4 h-4" /> Multiple Tenures • Baguio City
                </p>
                
                <div className="space-y-6">
                  <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                    <h5 className="font-semibold text-slate-800">Programmer (Remote Learning Solutions Inc.)</h5>
                    <p className="text-xs font-medium text-blue-600 mb-2">Sep 2023 – Present</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Develop and maintain school information systems, web applications, and internal software solutions.
                    </p>
                  </div>
                  
                  <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                    <h5 className="font-semibold text-slate-800">IT / Web Developer / Programmer</h5>
                    <p className="text-xs font-medium text-blue-600 mb-2">Jul 2019 – Jan 2021</p>
                    <div className="text-sm text-slate-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                        <li>Developed a centralized student app designed to cater to specific requests and foster faster information dissemination.</li>
                        <li>Created features for students to easily access class schedules, levels, test results, announcements, calendars, and financial reports.</li>
                        <li>Implemented functionality for students to send specific and personal requests and schedule consultations with managers.</li>
                        <li>Built an official website platform for online class offerings, allowing students to explore materials and pricing.</li>
                        <li>Developed comprehensive teacher profiles featuring introduction videos, specialties, and satisfaction rates with direct contact capabilities.</li>
                        <li>Integrated a blog system for online study guides and implemented a 4-step interactive learning system.</li>
                        <li>Developed a gatekeeper system to monitor student entry and exit within the Academy.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sahei Core Technologies */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-slate-900">Sahei Core Technologies CO.</h4>
                <div className="mt-3 relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full">
                  <h5 className="font-semibold text-slate-800">Software Engineer</h5>
                  <p className="text-xs font-medium text-slate-500 mb-2">Jan 2021 – Jun 2023 • Baguio City</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Developed and maintained software applications, APIs, databases, and business systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Admedix */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-slate-900">Admedix</h4>
                <p className="text-sm font-medium text-slate-500 mb-4 flex items-center gap-1.5 mt-1">
                  <Calendar className="w-4 h-4" /> Multiple Tenures • Baguio City
                </p>
                
                <div className="space-y-6">
                  <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full">
                    <h5 className="font-semibold text-slate-800">Programmer (Admedix / JSV Software)</h5>
                    <p className="text-xs font-medium text-slate-500 mb-2">Aug 2017 – Jan 2019</p>
                    <div className="text-sm text-slate-600 leading-relaxed">
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
                  
                  <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full">
                    <h5 className="font-semibold text-slate-800">Programmer</h5>
                    <p className="text-xs font-medium text-slate-500 mb-2">Jan 2016 – Jun 2016 • Philippines</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Focused on learning and developing applications using the Symfony PHP framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEKNONHOST IT SOLUTIONS */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md">
                <h4 className="text-xl font-bold text-slate-900">TEKNONHOST IT SOLUTIONS</h4>
                <div className="mt-3 relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-400 before:rounded-full">
                  <h5 className="font-semibold text-slate-800">Programmer</h5>
                  <p className="text-xs font-medium text-slate-500 mb-2">Sep 2016 – Jul 2019 • Baguio City</p>
                  <div className="text-sm text-slate-600 leading-relaxed mt-3">
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Developed a Registry of Barangay Inhabitants and Migrants for the Commission on Population Philippines to track population movements.</li>
                      <li>Institutionalized demographic data banking and management in selected LGUs.</li>
                      <li>Developed personalized Point of Sale (POS) and Clinic Management systems.</li>
                      <li>Built a personalized Employee Management system utilizing RFID and Biometrics.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">Education</h3>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <h4 className="text-lg font-bold text-slate-900">University of the Cordilleras</h4>
            <p className="text-blue-600 font-medium mt-1">Bachelor of Science in Information Technology</p>
            <p className="text-slate-500 text-sm mt-2">Graduated in 2016</p>
          </div>
        </section>
        
        <footer className="text-center pb-12 pt-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Khim Fermhee Ronquillo. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  );
}
