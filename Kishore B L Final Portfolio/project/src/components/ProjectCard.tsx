import { ExternalLink, Github } from 'lucide-react';
import GlassButton from './GlassButton';
import GlassCard from './GlassCard';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  github?: string;
};

const ProjectCard = ({ title, description, tags, demo, github }: ProjectCardProps) => {
  return (
    <GlassCard className="flex h-full flex-col gap-6 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {demo ? (
          <GlassButton href={demo} target="_blank" rel="noreferrer">
            Live Demo <ExternalLink size={14} />
          </GlassButton>
        ) : null}
        {github ? (
          <GlassButton href={github} target="_blank" rel="noreferrer">
            GitHub <Github size={14} />
          </GlassButton>
        ) : null}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
