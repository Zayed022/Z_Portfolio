import { motion } from "framer-motion";
import { Code2, Server, Wrench, Cloud } from "lucide-react";

const skillGroups = [
  {
    icon: <Code2 size={28} className="text-cyan-400" />,
    title: "Frontend Engineering",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive UI / UX",
    ],
  },
  {
    icon: <Server size={28} className="text-blue-400" />,
    title: "Backend & Systems",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets (Real-time)",
      "Authentication (JWT, OAuth)",
      "Database Design",
      "System Design",
      "API Architecture",
      "Scalable Backend Systems",
    ],
  },
  {
    icon: <Cloud size={28} className="text-indigo-400" />,
    title: "DevOps & Cloud",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Nginx",
      "Deployment (Vercel / Netlify)",
      "Load Balancing",
      "Caching Strategies",
    ],
  },
  {
    icon: <Wrench size={28} className="text-purple-400" />,
    title: "Tools & Workflow",
    skills: [
      "Git / GitHub",
      "MongoDB / MySQL / Supabase",
      "Postman",
      "Jira",
      "Figma",
      "VS Code",
      "NPM / Yarn",
      "Vite / Webpack",
    ],
  },
];

export default function TechnicalExpertise() {
  return (
    <section id="skills" className="px-6 md:px-24 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
      >
        Technical Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 hover:border-blue-400/40 hover:shadow-blue-400/20 hover:shadow-xl rounded-2xl p-7 transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              {group.icon}
              <h3 className="text-2xl font-semibold">
                {group.title}
              </h3>
            </div>

            <ul className="space-y-2 text-gray-300 text-lg leading-relaxed">
              {group.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="hover:text-white transition-colors"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}