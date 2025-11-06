import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-24 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative p-12 md:p-20 rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl shadow-2xl"
      >
        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-[140px] opacity-20 pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight relative"
        >
          Let’s build something impactful together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed"
        >
          Whether it's a product idea, collaboration, or freelance project —
          I’d love to hear from you. I usually respond within a few hours.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:zayedans022@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Send Email
          </a>

          <a
            href="https://linkedin.com/in/zayed-s-ansari-02z"
            target="_blank"
            className="px-6 py-3 border border-white/20 text-gray-300 rounded-lg hover:border-white/40 hover:text-white transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
