import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaAws, FaDocker, FaPython } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins, SiGrafana, SiPrometheus, SiMysql, SiAnsible } from 'react-icons/si';
import Scene3D from './components/Scene3D';
import ParticleField from './components/ParticleField';
import ScrollLight from './components/ScrollLight';
import './App.css';

// SVG Components
const CircleDecoration = () => (
  <svg className="absolute top-20 right-20 w-24 h-24 text-blue-500/20" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
  </svg>
);

const DotsDecoration = () => (
  <svg className="absolute bottom-20 left-20 w-24 h-24 text-blue-500/20" viewBox="0 0 100 100">
    {[...Array(16)].map((_, i) => (
      <circle
        key={i}
        cx={25 + (i % 4) * 20}
        cy={25 + Math.floor(i / 4) * 20}
        r="3"
        fill="currentColor"
      />
    ))}
  </svg>
);

function App() {
  const skills = [
    { name: 'Python & Lua', icon: <FaPython className="text-2xl" /> },
    { name: 'AWS & Cloud', icon: <FaAws className="text-2xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-2xl" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-2xl" /> },
    { name: 'Terraform', icon: <SiTerraform className="text-2xl" /> },
    { name: 'Jenkins', icon: <SiJenkins className="text-2xl" /> },
    { name: 'Grafana', icon: <SiGrafana className="text-2xl" /> },
    { name: 'Prometheus', icon: <SiPrometheus className="text-2xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-2xl" /> },
    { name: 'Ansible', icon: <SiAnsible className="text-2xl" /> },
  ];

  const workHistory = [
    {
      title: 'Software Engineer',
      company: 'Quest Global',
      period: 'May 2023 - Present',
      points: [
        'Built and maintained automated functional testing pipelines using LUA and C#, reducing manual effort by 30%.',
        'Integrated AWS and GCP services into CI/CD pipelines using Jenkins and Terraform.',
        'Managed cloud infrastructure provisioning and monitoring using Terraform, Prometheus, and Grafana.',
        'Ensured 99%+ data integrity through ETCS L2 dataset validation in production environments.'
      ]
    },
    {
      title: 'Application Support Engineer',
      company: 'Intense Technology',
      period: 'June 2022 - May 2023',
      points: [
        'Led migration from Alibaba Cloud to AWS, improving cost efficiency and system performance.',
        'Automated cloud resource monitoring and reporting using Python and Bash scripts.',
        'Supported production and UAT environments, ensuring high availability and performance.',
        'Collaborated with cross-functional teams to troubleshoot deployment issues and streamline workflows.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative">
        <Scene3D />
        <ParticleField />
        <CircleDecoration />
        <DotsDecoration />
        <div className="absolute top-0 right-0 p-4 flex gap-4 z-10">
          <a href="https://linkedin.com/in/aditya-portfolio" target="_blank" rel="noopener noreferrer" 
             className="text-2xl hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:aditya.ankur" className="text-2xl hover:text-blue-400 transition-colors">
            <FaEnvelope />
          </a>
          <a href="tel:+917301186656" className="text-2xl hover:text-blue-400 transition-colors">
            <FaPhone />
          </a>
        </div>
        <ScrollLight />
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-lg"
          >
            DevOps Engineer with 3+ years of experience in automation testing, scripting, and deployment support. 
            Skilled in Python, C#, LUA, and cloud-native tools. Proven track record in functional and automation testing, 
            log monitoring, and operational workflow management in cloud environments. 
            Adept at working in agile teams to deliver high-quality, stable solutions.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-12"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 p-4 bg-gray-700 rounded-lg backdrop-blur-sm bg-opacity-50"
              >
                {skill.icon}
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-12"
          >
            Work Experience
          </motion.h2>
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-blue-400">{job.title}</h3>
                <p className="text-gray-400 mb-4">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold text-blue-400">B.Tech in Computer Science & Engineering</h3>
            <p className="text-gray-400">IILM College of Engineering & Technology | 2018 - 2022</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Contact
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.a 
              href="mailto:aditya.ankur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg text-blue-400"
            >
              <FaEnvelope className="text-2xl" />
              <span>aditya.ankur</span>
            </motion.a>
            <motion.a 
              href="tel:+917301186656"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg text-blue-400"
            >
              <FaPhone className="text-2xl" />
              <span>+91 7301186656</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/aditya-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg text-blue-400"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
