import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science",
    institution: "Savitribai Phule Pune University",
    year: "Jun 2021 — May 2025",
    
    details:
      " Data Structures and Algorithms, Computer Networks, Operating System, Database Management System, Cloud Computing, Artificial Intelligence, System Design, DevOps",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "NES College, Bhiwandi",
    year: "2018 — 2020",
    details: "PCM stream with Computer Science specialization.",
  },
  
];

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-24 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
      >
        Education
      </motion.h2>

      <div className="relative border-l border-white/10 ml-4">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-10 pb-12 group"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute left-[-10px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_4px_rgba(0,200,255,0.3)] group-hover:scale-110 transition" />

            {/* Card */}
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 group-hover:border-blue-400/40 group-hover:shadow-blue-400/20 group-hover:shadow-lg rounded-2xl p-6 transition-all">
              <h3 className="text-2xl font-semibold leading-tight">{item.degree}</h3>
              <p className="text-cyan-300 text-lg mt-1">{item.institution}</p>
              <p className="text-gray-400 text-md mt-1">{item.year}</p>
             
              <p className="text-gray-300 text-lg mt-4 leading-relaxed">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
