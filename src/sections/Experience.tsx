import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Grokart",
    location: "Thane, India",
    duration: "Feb 2024 — Present",
    points: [
      "Launched Grokart, a hyper-local quick commerce grocery delivery platform for Bhiwandi.",
      "Built customer web app & mobile app (React + React Native) with cart, payments, location-based delivery logic.",
      "Designed and developed complete Backend of the Grokart ecosystem",
      "Developed admin dashboard and delivery partner app with real-time order tracking using WebSockets.",
      "Integrated Razorpay & COD workflows, processed 250+ live beta orders.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    location: "Remote, India",
    duration: "2023 — Present",
    points: [
      "Delivered many custom full-stack applications for businesses, automating manual workflows.",
      "Handled entire product cycle: requirements, UI/UX, backend architecture, deployment, and maintenance.",
      "Built admin dashboards and REST APIs improving business operations efficiency by up to 40%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-24 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-white/10 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-10 pb-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-10px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_3px_rgba(0,200,255,0.35)] group-hover:scale-110 transition" />

            {/* Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 group-hover:border-blue-400/40 group-hover:shadow-blue-400/30 group-hover:shadow-lg rounded-2xl p-6 transition-all">
              <h3 className="text-3xl font-semibold leading-tight">
                {exp.role} — <span className="text-cyan-300">{exp.company}</span>
              </h3>
              <p className="text-green-400 text-lg mt-1">{exp.location}</p>
              <p className="text-gray-500 text-lg">{exp.duration}</p>

              <ul className="mt-4 space-y-2 text-gray-300 text-lg leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="text-cyan-400 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
