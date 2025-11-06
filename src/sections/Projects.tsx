import { motion } from "framer-motion";
import GrokartImg from "../assets/GrokartImg.png"
import SK from "../assets/SK.jpg"
import Ad from "../assets/Ad.jpg"
import AI from "../assets/AI.png"
import AI2 from "../assets/AI2.png"

const projects = [
  {
    title: "Grokart Web App",
    description: "A quick-commerce application that aims to deliver everything in minutes!",
    image: GrokartImg,
    live: "https://www.grokartapp.com/",
  },
  {
    title: "SK Reality",
    description: "A website of a construction firm in Lonavala.",
    image: SK ,
    github: "https://github.com/Zayed022/BuildStrong",
    live: "https://skrealityconstruction.com/",
  },
  {
    title: "Grokart Mobile App",
    description: "A mobile app of Grokart - A quick commerce application.",
    image: GrokartImg,
    github: "https://github.com/Zayed022/Grokart-Mobile-Application",
    live: "https://play.google.com/store/apps/details?id=com.grokart.app&pcampaignid=web_share",
  },
  {
    title: "Asif Dairy Mobile App",
    description: "A commercial mobile app for the client",
    image: Ad,
    github: "https://github.com/Zayed022/Dairy-Shop-App-",
    live: "https://play.google.com/store/apps/details?id=com.dairyshopapp&pcampaignid=web_share",
  },
   {
    title: "AI Integrated Diet Plan Generator",
    description: "A final year project that generates diet based on user prefence and details",
    image: AI,
    github: "https://github.com/Zayed022/AI-Integrated-Diet-Plan-Generator",
  },
  {
    title: "AI Powered Job Match Platform",
    description: "A platform to find jobs.",
    image: AI2,
    github: "https://github.com/Zayed022/AI-Powered-Job-Match-Platform",
  },
  {
    title: "Grokart Delivery Partner App",
    description: "A delivery partner app of Grokart ecosystem.",
    image: GrokartImg,
    github: "https://github.com/Zayed022/Grokart-A-mobile-application-for-delivery-partners",
  },
  {
    title: "Grokart Shop App",
    description: "A shop app of Grokart ecosystem.",
    image: GrokartImg,
    github: "https://github.com/Zayed022/Grokart---A-Mobile-Application-for-Shop",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-24 bg-gray-950 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 hover:shadow-blue-400/20 hover:shadow-xl transition-all"
>
  <div className="overflow-hidden flex items-center justify-center bg-black/10">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-52 object-contain group-hover:scale-105 transition-transform duration-700"
  />
</div>


  <div className="p-5">
    <h3 className="text-xl font-semibold">{project.title}</h3>
    <p className="text-gray-400 text-lg mt-2">{project.description}</p>

    <div className="flex gap-6 mt-4 text-md font-medium">
      <a href={project.github} target="_blank" className="text-cyan-400 hover:underline">GitHub</a>
      {project.live && project.live !== "#" && (
        <a href={project.live} target="_blank" className="text-blue-400 hover:underline">Live</a>
      )}
    </div>
  </div>
</motion.div>

        ))}
      </div>
    </section>
  );
}
