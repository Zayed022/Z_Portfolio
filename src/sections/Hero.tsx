import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl tracking-tight"
      >
        Hi, I’m <span className="text-white">Mohd Zayed Ansari</span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          I build optimize, scalable digital experiences.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
      >
        Full Stack Developer passionate about creating modern UI and
        high-performance applications. I transform ideas into elegant solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex gap-4"
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
    </section>
  );
}
