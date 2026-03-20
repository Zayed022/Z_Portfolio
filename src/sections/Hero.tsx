import { motion } from "framer-motion";
import Self from "../assets/Self.jpg"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-24 mt-10"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-7xl font-bold leading-tight max-w-4xl tracking-tight"
          >
            Hi, I’m <span className="text-white">Mohd Zayed Ansari</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              I build optimized, scalable digital experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Full Stack Software Engineer specializing in building scalable web
            and mobile applications with modern technologies. I transform ideas
            into production-ready solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg shadow hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-30"></div>

            {/* Profile Image */}
            <img
              src={Self} // 👉 replace with your image path
              alt="Mohd Zayed Ansari"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/10 shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}