"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Brain,
  Code2,
  Smartphone,
  Cloud,
  GraduationCap,
  Briefcase,
  Globe,
  Menu,
  X,
  Pencil,
  Eraser,
  Highlighter,
  Download,
  Printer,
} from "lucide-react";
import { useState } from "react";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.4 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wiggleAnimation = {
  hover: {
    rotate: [-1, 1, -1, 1, 0],
    transition: { duration: 0.4 },
  },
};

// Sketch Card Component
const SketchCard = ({
  children,
  className = "",
  hover = true,
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  rotate?: number;
}) => {
  return (
    <motion.div
      className={`relative bg-white border-2 border-[#2d2d2d] p-6 ${className}`}
      style={{
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        boxShadow: "4px 4px 0px #2d2d2d",
        rotate: rotate,
      }}
      whileHover={
        hover
          ? {
              scale: 1.02,
              boxShadow: "8px 8px 0px #2d2d2d",
              rotate: rotate + (Math.random() > 0.5 ? 1 : -1),
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-[#fdfbf7] border-2 border-[#2d2d2d] px-6 py-4 relative"
          style={{
            borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
            boxShadow: "4px 4px 0px #2d2d2d",
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-3xl font-bold text-[#2d2d2d] relative"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              BPK
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ffeb3b] -z-10 transform -rotate-2" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-[#2d2d2d] hover:text-black font-bold text-lg relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2, rotate: Math.random() * 4 - 2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-2 bg-[#ffeb3b]/60 group-hover:w-full transition-all duration-300 -z-10 transform -rotate-1" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#2d2d2d]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#2d2d2d] font-bold text-lg hover:underline decoration-wavy decoration-[#ffeb3b]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const name = "B Pavan Kumar";
  const role = "Machine Learning Engineer";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden"
    >
      {/* Decorative Doodles */}
      <motion.div
        className="absolute top-32 left-10 text-[#2d2d2d]/20 hidden lg:block"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sparkles size={64} strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-[#2d2d2d]/20 hidden lg:block"
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Brain size={80} strokeWidth={1.5} />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border-2 border-[#2d2d2d] bg-[#ffeb3b] text-[#2d2d2d] font-bold transform -rotate-2"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              }}
            >
              <Pencil size={16} />
              <span>Available for Opportunities</span>
            </motion.div>

            <div className="mb-6 relative">
              <motion.h1 className="text-6xl md:text-8xl font-bold text-[#2d2d2d] leading-tight">
                Hello, I&apos;m <br />
                <span className="relative inline-block mt-2">
                  {name}
                  <svg
                    className="absolute w-full h-4 -bottom-2 left-0 text-[#ffeb3b] -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                    />
                  </svg>
                </span>
              </motion.h1>
            </div>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-4xl font-bold text-[#4a4a4a] mb-8 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="border-b-4 border-[#2d2d2d] border-dashed pb-1">
                {role}
              </span>
              <Code2 className="inline-block animate-bounce" />
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[#4a4a4a] mb-8 font-bold text-lg"
            >
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-[#2d2d2d]" />
                <span>Hyderabad, Telangana</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-[#2d2d2d] text-white font-bold text-xl hover:bg-black transition-colors transform hover:-rotate-2"
                style={{
                  borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                  boxShadow: "4px 4px 0px #888",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="https://github.com/pavanpavaman"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] font-bold text-xl hover:bg-gray-50 transition-colors flex items-center gap-2 transform hover:rotate-2"
                style={{
                  borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px",
                  boxShadow: "4px 4px 0px #2d2d2d",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
                GitHub
              </motion.a>
              <motion.a
                href="#resume"
                className="px-8 py-4 bg-[#ffeb3b] border-2 border-[#2d2d2d] text-[#2d2d2d] font-bold text-xl hover:bg-[#ffd600] transition-colors flex items-center gap-2 transform hover:-rotate-1"
                style={{
                  borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                  boxShadow: "4px 4px 0px #2d2d2d",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={24} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Sketchy Circle Border */}
              <svg
                className="absolute inset-0 w-full h-full text-[#2d2d2d] animate-spin-slow"
                viewBox="0 0 100 100"
                style={{ animationDuration: "30s" }}
              >
                <path
                  d="M50 5 C 75 5 95 25 95 50 C 95 75 75 95 50 95 C 25 95 5 75 5 50 C 5 25 25 5 50 5 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeDasharray="4 2"
                />
                <path
                  d="M50 2 C 78 2 98 22 98 50 C 98 78 78 98 50 98 C 22 98 2 78 2 50 C 2 22 22 2 50 2 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  strokeDasharray="10 5"
                  transform="rotate(15 50 50)"
                />
              </svg>

              {/* Image Container - replaced placeholder with actual profile image */}
              <div
                className="absolute inset-4 overflow-hidden border-4 border-[#2d2d2d] bg-white"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <div className="w-full h-full relative bg-[#e0e0e0]">
                  <Image
                    src="/profile/my_profile_photo.png"
                    alt="Pavan Kumar Profile"
                    fill
                    sizes="(min-width: 768px) 384px, 288px"
                    style={{ objectFit: "cover" }}
                    className="block"
                  />
                </div>
              </div>

              {/* Floating Stickers */}
              <motion.div
                className="absolute -top-4 -right-4 bg-[#ffeb3b] p-3 border-2 border-[#2d2d2d] transform rotate-12"
                style={{
                  borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                  boxShadow: "3px 3px 0px #2d2d2d",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="text-[#2d2d2d]" size={32} />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-[#ff9e80] p-3 border-2 border-[#2d2d2d] transform -rotate-6"
                style={{
                  borderRadius: "15px 225px 15px 255px / 255px 15px 225px 15px",
                  boxShadow: "3px 3px 0px #2d2d2d",
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Code2 className="text-[#2d2d2d]" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-[#2d2d2d]" size={48} strokeWidth={3} />
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d2d2d] inline-block relative z-10">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#80deea] -z-10 transform -rotate-1 opacity-60" />
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SketchCard className="p-8 md:p-12 bg-[#fff9c4]" rotate={1}>
              <p className="text-xl md:text-2xl text-[#2d2d2d] leading-relaxed font-medium">
                Innovative Machine Learning Engineer with a strong background in
                Electrical and Electronics Engineering. Specialized in building
                end-to-end AI-driven applications. Experienced in architecting
                Agentic RAG systems, deploying Computer Vision models using ViT
                and CLIP, and developing cross-platform mobile solutions using
                Flutter. Proven ability to bridge the gap between complex ML
                research and user-centric production environments.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="text-[#2d2d2d] font-bold text-lg transform -rotate-3 border-b-2 border-[#2d2d2d]">
                  - B Pavan Kumar
                </div>
              </div>
            </SketchCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: <Brain className="text-[#2d2d2d]" size={24} />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "ViT", "CLIP", "FAISS"],
      bg: "bg-[#ffccbc]", // Light Orange
    },
    {
      title: "Generative AI",
      icon: <Sparkles className="text-[#2d2d2d]" size={24} />,
      skills: [
        "LangChain",
        "LlamaIndex",
        "OpenAI GPT-4o",
        "Gemini Pro",
        "Agentic Workflows",
      ],
      bg: "bg-[#e1bee7]", // Light Purple
    },
    {
      title: "Backend & Web",
      icon: <Code2 className="text-[#2d2d2d]" size={24} />,
      skills: ["Flask", "Python", "REST APIs", "Docker"],
      bg: "bg-[#b2dfdb]", // Light Teal
    },
    {
      title: "Mobile",
      icon: <Smartphone className="text-[#2d2d2d]" size={24} />,
      skills: ["Flutter", "Dart", "Firebase", "Supabase"],
      bg: "bg-[#c8e6c9]", // Light Green
    },
    {
      title: "Cloud",
      icon: <Cloud className="text-[#2d2d2d]" size={24} />,
      skills: ["GCP", "Cloud Buckets", "Model Deployment"],
      bg: "bg-[#bbdefb]", // Light Blue
    },
  ];

  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d2d2d] inline-block relative">
              Technical Skills
              <svg
                className="absolute w-full h-6 -bottom-3 left-0 text-[#ff9e80] -z-10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0 50 5 T 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                custom={index}
              >
                <SketchCard
                  className={`p-6 h-full ${category.bg}`}
                  rotate={index % 2 === 0 ? -1 : 1}
                >
                  <div className="flex items-center gap-3 mb-4 border-b-2 border-[#2d2d2d] pb-2 border-dashed">
                    <div className="p-2 border-2 border-[#2d2d2d] bg-white rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#2d2d2d]">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 text-lg font-bold bg-white border-2 border-[#2d2d2d] text-[#2d2d2d]"
                        style={{
                          borderRadius:
                            "255px 15px 225px 15px / 15px 225px 15px 255px",
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: Math.random() * 6 - 3,
                          backgroundColor: "#ffeb3b",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </SketchCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d2d2d] inline-block relative">
              Experience
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#ce93d8] -z-10 transform rotate-1 opacity-60" />
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SketchCard className="p-8 md:p-12 relative overflow-visible bg-white">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-[#2d2d2d] border-r-2 border-dashed border-gray-400" />

              <div className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 w-6 h-6 bg-[#2d2d2d] rounded-full -translate-x-[11px] border-4 border-white" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-3xl font-bold text-[#2d2d2d]">
                    Machine Learning Engineer
                  </h3>
                  <span className="text-xl font-bold bg-[#ffeb3b] px-3 py-1 border-2 border-[#2d2d2d] transform -rotate-2 inline-block mt-2 md:mt-0">
                    April 2025 – Present
                  </span>
                </div>
                <h4 className="text-2xl text-[#4a4a4a] mb-6 font-bold">
                  Pavaman Technologies
                </h4>
                <ul className="space-y-4 text-[#2d2d2d] text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl leading-none">👉</span>
                    <span>
                      Built a confidential Enterprise ML Solution, managing the
                      pipeline from data processing to inference.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl leading-none">👉</span>
                    <span>
                      Developed an Internal Data Acquisition System (Mobile App
                      + Admin Dashboard) to streamline image/video collection
                      for model training.
                    </span>
                  </li>
                </ul>
              </div>
            </SketchCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Agentic RAG Pathologist System",
      description:
        'A "Pathologist Brain" using LangChain and GPT-4o. Multi-agent setup (Disease Expert, Chemical Advisor).',
      outcome: "Accurate chemical dosage and organic prevention methods.",
      tech: ["LangChain", "GPT-4o", "Pinecone", "FAISS"],
      bg: "bg-[#e1bee7]",
      icon: <Brain size={48} />,
      imageType: "brain",
    },
    {
      title: "PlantCare App",
      description:
        "Deployed 3 custom models (ViT + CLIP) to detect diseases in Cotton, Guava, and Lemon.",
      features: "Localization (Telugu), Weather dashboard, Auth.",
      tech: ["Flutter", "Firebase", "Python Flask", "ViT"],
      bg: "bg-[#c8e6c9]",
      icon: <Smartphone size={48} />,
      imageType: "app",
    },
  ];

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d2d2d] inline-block relative">
              Featured Projects
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#ffcc80] -z-10 transform -rotate-1 opacity-60" />
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <SketchCard
                  className="h-full flex flex-col"
                  rotate={index % 2 === 0 ? 1 : -1}
                >
                  {/* Image Area */}
                  <div className="w-full h-56 mb-6 border-2 border-[#2d2d2d] bg-white flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {project.imageType === "brain" ? (
                       <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                         <Brain size={120} strokeWidth={1} className="text-[#2d2d2d]" />
                         <div className="absolute top-0 right-0 animate-bounce">
                           <Sparkles size={40} className="text-[#ffeb3b] fill-[#ffeb3b] stroke-[#2d2d2d]" />
                         </div>
                       </div>
                    ) : (
                      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-32 h-32 bg-[#81c784] rounded-3xl border-4 border-[#2d2d2d] flex items-center justify-center shadow-[4px_4px_0px_#2d2d2d]">
                           <Smartphone size={64} className="text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold mb-3 text-[#2d2d2d] decoration-wavy decoration-[#ffeb3b] underline">
                    {project.title}
                  </h3>
                  <p className="text-[#4a4a4a] mb-4 text-lg font-medium">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    {project.outcome && (
                      <div className="bg-[#f0f4c3] p-3 border-2 border-[#2d2d2d] mb-4 transform -rotate-1">
                        <p className="text-[#2d2d2d] text-sm font-bold">
                          🏆 Outcome: {project.outcome}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-bold bg-[#2d2d2d] text-white transform hover:rotate-3 transition-transform"
                          style={{
                            borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SketchCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Education Section
const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d2d2d] inline-block relative">
              Education
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#90caf9] -z-10 transform rotate-1 opacity-60" />
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SketchCard className="p-8 md:p-12 bg-white" rotate={-1}>
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="p-6 border-2 border-[#2d2d2d] bg-[#bbdefb] rounded-full transform rotate-3 shadow-[4px_4px_0px_#2d2d2d]">
                  <GraduationCap className="text-[#2d2d2d]" size={48} />
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#2d2d2d] mb-2">
                    B.Tech in Electrical and Electronics Engineering
                  </h3>
                  <p className="text-xl text-[#4a4a4a] mb-2 font-bold">
                    Sri Krishnadevaraya University
                  </p>
                  <p className="text-[#666] font-bold bg-[#e0e0e0] inline-block px-2 py-1 transform -rotate-1">
                    2019 – 2023
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="mt-10 pt-8 border-t-2 border-dashed border-[#2d2d2d]">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-[#2d2d2d]" size={24} />
                  <h4 className="text-2xl font-bold text-[#2d2d2d]">Languages</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {[
                    { lang: "Telugu", level: "Native", bg: "bg-[#ffccbc]" },
                    { lang: "English", level: "Professional", bg: "bg-[#c5cae9]" },
                    { lang: "Hindi", level: "Conversational", bg: "bg-[#dcedc8]" },
                  ].map((item) => (
                    <motion.div
                      key={item.lang}
                      className={`px-6 py-3 border-2 border-[#2d2d2d] ${item.bg}`}
                      style={{
                        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                        boxShadow: "3px 3px 0px #2d2d2d",
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: Math.random() * 6 - 3,
                      }}
                    >
                      <span className="text-[#2d2d2d] font-bold text-lg">{item.lang}</span>
                      <span className="text-[#4a4a4a] text-sm ml-2 font-medium block">
                        {item.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SketchCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Resume Section
const ResumeSection = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-32 px-4 bg-[#fdfbf7] print:p-0 print:bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16 print:hidden">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d2d2d] inline-block relative">
              My Resume
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#ffcc80] -z-10 transform rotate-1 opacity-60" />
            </h2>
            <p className="text-[#4a4a4a] mt-6 text-xl font-medium">
              View or download my professional background
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center mb-8 print:hidden">
            <motion.button
              onClick={handlePrint}
              className="flex items-center gap-2 px-8 py-4 bg-[#2d2d2d] text-white font-bold text-xl hover:bg-black transition-colors transform hover:-rotate-2 shadow-[6px_6px_0px_#888]"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={24} />
              Download PDF / Print
            </motion.button>
          </motion.div>

          {/* Resume Document */}
          <motion.div variants={fadeInUp} className="print:m-0">
            <div 
              className="bg-white border-2 border-[#2d2d2d] p-8 md:p-16 shadow-[12px_12px_0px_#2d2d2d] print:shadow-none print:border-none relative overflow-hidden"
              style={{
                borderRadius: "2px 2px 2px 2px",
              }}
            >
              {/* Decorative Paper Lines for UI only */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none print:hidden" 
                   style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px)', backgroundSize: '100% 2rem' }} />

              {/* Header */}
              <div className="border-b-4 border-[#2d2d2d] pb-8 mb-8 relative">
                <h3 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">B Pavan Kumar</h3>
                <div className="flex flex-wrap gap-y-2 gap-x-6 text-lg font-bold text-[#4a4a4a]">
                  <span className="flex items-center gap-2"><MapPin size={18}/> Hyderabad, Telangana</span>
                  <span className="flex items-center gap-2"><Phone size={18}/> +91 9381238714</span>
                  <span className="flex items-center gap-2"><Mail size={18}/> pavandhanush9581@gmail.com</span>
                  <span className="flex items-center gap-2"><Github size={18}/> github.com/pavanpavaman</span>
                </div>
                <div className="absolute top-0 right-0 hidden md:block print:hidden">
                   <div className="bg-[#ffeb3b] px-4 py-2 border-2 border-[#2d2d2d] font-bold transform rotate-6">
                     RESUME
                   </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
                  <Pencil size={20} className="print:hidden" /> Professional Summary
                </h4>
                <p className="text-lg leading-relaxed text-[#2d2d2d] font-medium">
                  Innovative Machine Learning Engineer with a strong background in Electrical and Electronics Engineering. 
                  Specialized in building end-to-end AI-driven applications. Experienced in architecting Agentic RAG systems, 
                  deploying Computer Vision models using ViT and CLIP, and developing cross-platform mobile solutions using Flutter. 
                  Proven ability to bridge the gap between complex ML research and user-centric production environments, 
                  handling everything from data collection to cloud deployment.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
                  <Code2 size={20} className="print:hidden" /> Technical Skills
                </h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {[
                    { label: "Machine Learning", items: "TensorFlow, PyTorch, Scikit-learn, ViT, CLIP, FAISS" },
                    { label: "Generative AI", items: "LangChain, LlamaIndex, GPT-4o, Gemini Pro, Agentic Workflows" },
                    { label: "Backend & Web", items: "Flask, Python, REST APIs, Docker" },
                    { label: "Mobile & Full-Stack", items: "Flutter, Dart, Firebase, Supabase" },
                    { label: "Cloud & DevOps", items: "GCP, Cloud Buckets, Model Deployment, Git" },
                    { label: "Tools", items: "VS Code, GitHub Copilot, Stitch UI" }
                  ].map((skill) => (
                    <div key={skill.label} className="flex flex-col">
                      <span className="font-bold text-[#2d2d2d]">• {skill.label}:</span>
                      <span className="text-[#4a4a4a] font-medium">{skill.items}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="print:hidden" /> Professional Experience
                </h4>
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-bold text-[#2d2d2d]">Pavaman Technologies | Machine Learning Engineer</h5>
                    <span className="font-bold text-[#4a4a4a]">April 2025 – Present</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-[#2d2d2d] font-medium">
                    <li>
                      <span className="font-bold">Confidential Enterprise ML Solution:</span> Architected and deployed a scalable machine learning system for a proprietary business use case. Managed the pipeline from data processing to model inference optimization.
                    </li>
                    <li>
                      <span className="font-bold">Internal Data Acquisition System:</span> Developed a custom mobile application to streamline organizational data collection (Images/Videos) for model training.
                      <ul className="list-circle ml-5 mt-2 space-y-1 text-[#4a4a4a]">
                        <li>Built an Admin Dashboard featuring real-time analytics and charts to monitor data upload statistics.</li>
                        <li>Reduced data cleaning time by implementing validation checks at the source of upload.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="print:hidden" /> Key Projects
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-xl font-bold text-[#2d2d2d]">1. Agentic RAG Pathologist System (Agricultural AI)</h5>
                    <p className="text-[#4a4a4a] font-bold mb-2 italic">A Multi-Agent System for Disease Diagnosis and Treatment</p>
                    <ul className="list-disc ml-5 space-y-1 text-[#2d2d2d] font-medium">
                      <li>Designed a "Pathologist Brain" using LangChain and GPT-4o/Gemini Pro as an intelligent agent.</li>
                      <li>Utilizes a multi-agent setup (Disease Expert, Chemical Advisor, Safety Validator) to analyze CV model predictions.</li>
                      <li>Integrated Pinecone/FAISS to retrieve context from research papers and government PDFs.</li>
                      <li>Outcome: Provides farmers with precise chemical dosages and organic prevention methods.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-[#2d2d2d]">2. PlantCare: End-to-End AI Mobile Application</h5>
                    <p className="text-[#4a4a4a] font-bold mb-2 italic">Full-Stack Flutter App with Custom ML Deployment</p>
                    <ul className="list-disc ml-5 space-y-1 text-[#2d2d2d] font-medium">
                      <li>Solo Development: Built complete mobile ecosystem independently (UI/UX, Backend, Auth, ML).</li>
                      <li>ML Engine: Deployed 3 custom models (ViT + CLIP) on GCP via Flask for leaf disease detection.</li>
                      <li>Localization: Implemented multi-language support (Telugu) for accessibility.</li>
                      <li>Features: Real-time weather dashboards, Firebase Auth, and persistent profiles.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education & Languages */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
                    <GraduationCap size={20} className="print:hidden" /> Education
                  </h4>
                  <p className="font-bold text-[#2d2d2d]">B.Tech in Electrical and Electronics Engineering</p>
                  <p className="text-[#4a4a4a] font-medium">Sri Krishnadevaraya University</p>
                  <p className="text-[#4a4a4a] font-medium">2019 – 2023</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
                    <Globe size={20} className="print:hidden" /> Languages
                  </h4>
                  <div className="flex flex-wrap gap-x-4 font-bold text-[#2d2d2d]">
                    <span>Telugu (Native)</span>
                    <span>English (Professional)</span>
                    <span>Hindi (Conversational)</span>
                  </div>
                </div>
              </div>

              {/* Declaration */}
              <div className="mt-12 pt-8 border-t-2 border-dashed border-[#2d2d2d]">
                <h4 className="text-xl font-bold text-[#2d2d2d] mb-4">Declaration</h4>
                <p className="text-[#4a4a4a] italic font-medium mb-6">
                  I hereby declare that the above-mentioned information is true and correct to the best of my knowledge and belief.
                </p>
                <div className="flex flex-col items-end">
                  <div className="text-2xl font-bold text-[#2d2d2d] border-b-2 border-[#2d2d2d] px-4">
                    B Pavan Kumar
                  </div>
                  <span className="text-sm font-bold text-[#4a4a4a] mt-1">Signature</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-[#2d2d2d]" size={24} />,
      label: "Phone",
      value: "+91 9381238714",
      href: "tel:+919381238714",
      bg: "bg-[#b2dfdb]",
    },
    {
      icon: <Mail className="text-[#2d2d2d]" size={24} />,
      label: "Email",
      value: "pavandhanush9581@gmail.com",
      href: "mailto:pavandhanush9581@gmail.com",
      bg: "bg-[#e1bee7]",
    },
    {
      icon: <Github className="text-[#2d2d2d]" size={24} />,
      label: "GitHub",
      value: "pavanpavaman",
      href: "https://github.com/pavanpavaman",
      bg: "bg-[#ffccbc]",
    },
    {
      icon: <MapPin className="text-[#2d2d2d]" size={24} />,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: null,
      bg: "bg-[#fff9c4]",
    },
  ];

  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#2d2d2d] inline-block relative">
              Let&apos;s Connect
              <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#ffab91] -z-10 transform -rotate-1 opacity-60" />
            </h2>
            <p className="text-[#4a4a4a] mt-6 text-xl max-w-2xl mx-auto font-medium">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div key={item.label} variants={fadeInUp}>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                    whileHover={{ scale: 1.02 }}
                  >
                    <SketchCard
                      className={`p-6 ${item.bg}`}
                      rotate={index % 2 === 0 ? 1 : -1}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 border-2 border-[#2d2d2d] bg-white rounded-full">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[#4a4a4a] text-sm font-bold uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-[#2d2d2d] font-bold text-lg flex items-center gap-2">
                            {item.value}
                            <ExternalLink size={16} className="text-[#2d2d2d]" />
                          </p>
                        </div>
                      </div>
                    </SketchCard>
                  </motion.a>
                ) : (
                  <SketchCard
                    className={`p-6 ${item.bg}`}
                    rotate={index % 2 === 0 ? 1 : -1}
                    hover={false}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 border-2 border-[#2d2d2d] bg-white rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[#4a4a4a] text-sm font-bold uppercase tracking-wider">
                          {item.label}
                        </p>
                        <p className="text-[#2d2d2d] font-bold text-lg">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </SketchCard>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <motion.a
              href="mailto:pavandhanush9581@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#2d2d2d] text-white font-bold text-xl hover:bg-black transition-colors transform hover:-rotate-2 shadow-[6px_6px_0px_#888]"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
              <span>Send me an Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t-2 border-[#2d2d2d] bg-[#fdfbf7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#2d2d2d,#2d2d2d_10px,transparent_10px,transparent_20px)] opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-[#4a4a4a] font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} B Pavan Kumar. Hand-crafted with ❤️
          </motion.p>
          <motion.p
            className="text-[#4a4a4a] font-medium flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with
            <span className="font-bold bg-[#ffeb3b] px-2 border border-[#2d2d2d] transform -rotate-2">
              Next.js
            </span>
            +
            <span className="font-bold bg-[#80deea] px-2 border border-[#2d2d2d] transform rotate-2">
              Tailwind
            </span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fdfbf7] text-[#2d2d2d] overflow-x-hidden selection:bg-[#ffeb3b] selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
