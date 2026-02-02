import { ArrowDown, Code2, Cpu, Layout, Mail, MapPin, PenTool, Phone, Sparkles } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useMemo, useState } from 'react';
import GlassButton from './components/GlassButton';
import GlassCard from './components/GlassCard';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SectionWrapper from './components/SectionWrapper';
import { timeline } from './data/experience';
import { projects } from './data/projects';
import { skillGroups } from './data/skills';
import { socials } from './data/socials';
import resumeUrl from './assets/Resume_Kishore_25.pdf';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const contactDetails = useMemo(
    () => [
      { label: 'Location', value: 'Bengaluru, India', icon: MapPin },
      { label: 'Phone', value: '+91 98765 43210', icon: Phone },
      { label: 'Email', value: 'kishore.bl.design@gmail.com', icon: Mail },
    ],
    []
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const nextErrors: typeof errors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please share your name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'An email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Use a valid email address.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Tell me a bit about your project.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-mesh min-h-screen">
      <div className="relative z-10">
        <Navbar />

        <main className="relative">
          <section id="hero" className="section-spacing pt-16">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
              <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                <GlassCard className="relative space-y-6 p-6 sm:p-10">
                  <div className="absolute inset-0 rounded-3xl border border-white/20 bg-white/10 blur-2xl" />
                  <div className="relative space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      UI/UX Designer · Web Developer · Content Creator
                    </p>
                    <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                      Crafting premium digital experiences with a{' '}
                      <span className="text-gradient">glassmorphic edge</span>.
                    </h1>
                    <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                      I help brands translate complex ideas into elegant, intuitive interfaces. From UI systems to
                      production-ready front-end builds, I deliver polished experiences that feel effortless and
                      premium.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <GlassButton href="#projects">View Projects</GlassButton>
                      <GlassButton href="#contact">Contact Me</GlassButton>
                      <GlassButton href={resumeUrl} target="_blank" rel="noreferrer">
                        Resume
                      </GlassButton>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                      {socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-slate-900 dark:hover:text-white"
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </GlassCard>
                <div className="relative">
                  <div className="orbit-wrap" aria-hidden="true">
                    <div className="orbit-ring">
                      <div className="orbit-icon -top-2 left-1/2 -translate-x-1/2">
                        <Sparkles size={18} />
                      </div>
                      <div className="orbit-icon top-1/2 -right-3 -translate-y-1/2">
                        <Code2 size={18} />
                      </div>
                      <div className="orbit-icon -bottom-2 left-1/2 -translate-x-1/2">
                        <Layout size={18} />
                      </div>
                      <div className="orbit-icon top-1/2 -left-3 -translate-y-1/2">
                        <Cpu size={18} />
                      </div>
                    </div>
                    <div className="orbit-ring is-slow">
                      <div className="orbit-icon top-6 left-8">
                        <PenTool size={18} />
                      </div>
                      <div className="orbit-icon bottom-6 right-8">
                        <MapPin size={18} />
                      </div>
                    </div>
                    <GlassCard className="relative z-10 flex h-52 w-52 items-center justify-center overflow-hidden rounded-full sm:h-64 sm:w-64">
                      <img
                        src="https://raw.githubusercontent.com/ak31e/Images-of-Portfolio-/Landing-page/Pfofile%203.png"
                        alt="Kishore B L portrait"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </GlassCard>
                  </div>
                  <GlassCard className="reveal mx-auto mt-6 max-w-sm space-y-4 p-5 text-sm" data-reveal>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      Available for projects
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Specializing in high-fidelity UI design, design systems, and modern React interfaces.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <MapPin size={16} /> Bengaluru, India
                    </div>
                  </GlassCard>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <ArrowDown size={18} />
                Scroll to explore
              </div>
            </div>
          </section>

          <SectionWrapper
            id="about"
            eyebrow="About"
            title="Designing with clarity, shipping with confidence."
            subtitle="I combine visual craft with clean engineering to deliver experiences that feel effortless, modern, and uniquely yours."
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <GlassCard className="reveal space-y-4 p-6" data-reveal>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  I am Kishore B L, a UI/UX designer and web developer focused on premium experiences for digital-first
                  brands. My approach blends strategic UX, polished visuals, and production-ready front-end development
                  so teams can move from concept to launch with confidence.
                </p>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  I specialize in building cohesive design systems, translating them into responsive interfaces, and
                  mentoring teams on AI-powered workflows that elevate creativity and speed.
                </p>
              </GlassCard>
              <div className="grid gap-4">
                {[
                  { label: 'Years of practice', value: '4+' },
                  { label: 'Projects delivered', value: '30+' },
                  { label: 'Design systems built', value: '8' },
                  { label: 'Workshops hosted', value: '12' },
                ].map((stat) => (
                  <GlassCard key={stat.label} className="reveal flex items-center justify-between p-5" data-reveal>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</span>
                    <span className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</span>
                  </GlassCard>
                ))}
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper
            id="skills"
            eyebrow="Skills"
            title="A balanced stack of design, technology, and storytelling."
            subtitle="Grouped capabilities that help me deliver the full journey from concept to build."
          >
            <div className="grid gap-6 md:grid-cols-2">
              {skillGroups.map((group) => (
                <GlassCard key={group.title} className="reveal space-y-4 p-6" data-reveal>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                  <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-900 dark:bg-white" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper
            id="projects"
            eyebrow="Projects"
            title="Featured work with a glassy, premium finish."
            subtitle="A selection of recent engagements showcasing immersive UI, responsive design, and thoughtful storytelling."
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="reveal" data-reveal>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper
            id="experience"
            eyebrow="Experience"
            title="Highlights from my journey."
            subtitle="A blend of client work, development practice, and academic foundations."
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {timeline.map((item) => (
                <GlassCard key={item.title} className="reveal space-y-4 p-6" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.details}</p>
                </GlassCard>
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper
            id="contact"
            eyebrow="Contact"
            title="Let’s build something elegant together."
            subtitle="Share your goals and I’ll respond within two business days."
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-4">
                {contactDetails.map(({ label, value, icon: Icon }) => (
                  <GlassCard key={label} className="reveal flex items-center gap-4 p-5" data-reveal>
                    <div className="rounded-2xl border border-white/40 bg-white/70 p-3 dark:border-white/10 dark:bg-white/10">
                      <Icon size={20} className="text-slate-900 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{label}</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{value}</p>
                    </div>
                  </GlassCard>
                ))}
                <GlassCard className="reveal space-y-3 p-5" data-reveal>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Prefer a quick chat? I’m open to collaboration, mentorship, or design partnerships.
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/40 bg-white/70 px-4 py-2 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </div>
              <GlassCard className="reveal p-6" data-reveal>
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input mt-2"
                      placeholder="Your full name"
                      required
                    />
                    {errors.name ? <p className="mt-1 text-xs text-rose-500">{errors.name}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input mt-2"
                      placeholder="you@email.com"
                      required
                    />
                    {errors.email ? <p className="mt-1 text-xs text-rose-500">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="glass-input mt-2 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                    {errors.message ? <p className="mt-1 text-xs text-rose-500">{errors.message}</p> : null}
                  </div>
                  {submitted ? (
                    <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                      Thanks! I have your message and will reply soon.
                    </p>
                  ) : null}
                  <GlassButton className="w-full justify-center" type="submit">
                    Send message
                  </GlassButton>
                </form>
              </GlassCard>
            </div>
          </SectionWrapper>
        </main>

        <footer className="border-t border-white/30 bg-white/60 py-8 text-center text-xs text-slate-500 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-400">
          © 2025 Kishore B L · Crafted with care and glassmorphism.
        </footer>
      </div>
    </div>
  );
};

export default App;
