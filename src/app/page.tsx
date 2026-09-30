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
                    <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                      <div>
                        <h6 className="font-semibold text-slate-700 mb-1">A. Pines Portal</h6>
                        <ul className="list-disc pl-5 space-y-1 text-slate-600">
                          <li>A centralized student app designed to cater to specific requests and foster faster information dissemination.</li>
                          <li>Students can easily access class schedules, levels, test results, announcements, calendars, and financial reports (cash balance and points).</li>
                          <li>Students can send in specific and personal requests such as additional blankets for their quarters.</li>
                          <li>Schedule consultations with respective managers for faster evaluation of the student&apos;s educational needs.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-slate-700 mb-1">B. Pinestalking-11talk</h6>
                        <ul className="list-disc pl-5 space-y-1 text-slate-600">
                          <li>Official website of Pines International Academy&apos;s online class offerings.</li>
                          <li>Platform for aspiring students to explore online class materials and view pricing tables for courses.</li>
                          <li>Features comprehensive teacher profiles with introduction videos, specialties, classes they teach, and satisfaction rates.</li>
                          <li>Past students can contact teachers directly via a &quot;contact me&quot; option in profiles.</li>
                          <li>Integrated a blog system for online study guides and navigation.</li>
                          <li>Implemented a 4-step learning system: students learn vocabulary and expressions before taking their class through initial quizzes, English audio files, and follow-up conversations.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-slate-700 mb-1">C. PIA / CBOA Gate Keeper</h6>
                        <ul className="list-disc pl-5 space-y-1 text-slate-600">
                          <li>System that monitors students who go outside and inside the Academy.</li>
                        </ul>
                      </div>
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
                    <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                      <div>
                        <h6 className="font-semibold text-slate-700 mb-1">A. Avmedix</h6>
                        <ul className="list-disc pl-5 space-y-1 text-slate-600">
                          <li>Anatomy reference and medical information.</li>
                          <li>Patient resource and data management for medical offices.</li>
                          <li>Integrated suite of hospital and patient management tools.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-slate-700 mb-1">B. Zabulu</h6>
                        <p className="mb-2">Semi-private, family-friendly social media platform with features grouped into:</p>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-slate-700 block">Your Life (Category):</span>
                            <ul className="list-disc pl-5 space-y-1 text-slate-600">
                              <li>Family tree.</li>
                              <li>Private albums for family members (photos, videos, music).</li>
                              <li>Messaging, chat, journals, and estate records.</li>
                              <li>Health records, diet, and exercise tracking.</li>
                            </ul>
                          </div>
                          <div>
                            <span className="font-medium text-slate-700 block">The World (Category):</span>
                            <ul className="list-disc pl-5 space-y-1 text-slate-600">
                              <li>Resources: Creating and publishing articles, blogs, and workouts.</li>
                              <li>Entertainment: Making events, comics, and games.</li>
                              <li>World: Commerce, advertising, and selling your own works.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                  <div className="text-sm text-slate-600 leading-relaxed space-y-3 mt-3">
                    <div>
                      <h6 className="font-semibold text-slate-700">A. Registry of Barangay Inhabitants and Migrants</h6>
                      <p className="text-xs text-slate-500 mb-1">Commission on Population Philippines</p>
                      <p>Focused on institutionalizing the use of generated data for tracking population movements and planning for a suitable POPDEV initiative at the local level. Institutionalized demographic data banking and management in selected LGUs.</p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-700">B. Personalized Point of Sale System</h6>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-700">C. Personalized Clinic Management System</h6>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-700">D. Personalized Employee Management</h6>
                      <p>Utilizing RFID and Biometrics.</p>
                    </div>
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
