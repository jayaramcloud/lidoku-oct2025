import { SiteFooter, SiteNav } from '@/components/site-chrome';
import { TerminalDemo } from '@/components/terminal-demo';
import { SIGNUP_URL, courses } from '@/lib/courses';
import Link from 'next/link';

const steps = [
  {
    title: 'Open a lesson',
    text: 'Read the chapter on the left. Next to it, a terminal is already connecting.',
  },
  {
    title: 'Get your own machine',
    text: 'A fresh, isolated virtual machine starts for you in seconds. You are root. Break things freely; nobody else is on it.',
  },
  {
    title: 'Do the work, check it',
    text: 'Type the commands for real, then hit Check my work. Each step is verified on your machine, with a hint when something is off.',
  },
];

const features = [
  { title: 'Nothing to install', text: 'Everything runs in the browser tab. No VirtualBox, no Docker Desktop, no cloud account.' },
  { title: 'A real machine, not a simulator', text: 'A Firecracker microVM with its own kernel and internet access: the same tech behind AWS Lambda.' },
  { title: 'Safe to break', text: 'Each learner gets an isolated machine that is thrown away after the session. rm -rf / away.' },
  { title: 'Feedback as you go', text: 'Lessons come with tasks that are checked on your machine, so you know when you got it right.' },
];

export default function Home() {
  return (
    <div className='min-h-screen'>
      <SiteNav />

      {/* Hero */}
      <section className='bg-grid relative border-b border-white/10'>
        <div className='mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-28'>
          <div>
            <p className='mb-5 inline-flex items-center gap-2 border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand'>
              <span className='size-1.5 rounded-full bg-brand' /> Hands-on labs in your browser
            </p>
            <h1 className='text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Learn Linux, Docker &amp; Kubernetes on a <span className='text-brand'>real machine</span>
            </h1>
            <p className='mt-6 max-w-xl text-lg text-zinc-400'>
              Every lesson comes with your own isolated Linux machine, right next to the text. Ready in seconds, nothing to install, yours to
              break.
            </p>
            <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
              <a href={SIGNUP_URL} className='bg-brand px-6 py-3 text-center font-semibold text-zinc-950 transition hover:brightness-110'>
                Start learning
              </a>
              <a href='#how' className='border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/5'>
                See how it works
              </a>
            </div>
          </div>
          <TerminalDemo />
        </div>
      </section>

      {/* How it works */}
      <section id='how' className='scroll-mt-16 border-b border-white/10'>
        <div className='mx-auto max-w-6xl px-4 py-20 sm:px-6'>
          <h2 className='text-3xl font-bold tracking-tight text-white'>How it works</h2>
          <p className='mt-3 max-w-2xl text-zinc-400'>Reading about commands only gets you so far. Here you run them.</p>
          <ol className='mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3'>
            {steps.map((s, i) => (
              <li key={s.title} className='bg-background p-6'>
                <span className='font-mono text-sm text-brand'>0{i + 1}</span>
                <h3 className='mt-3 text-lg font-semibold text-white'>{s.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-zinc-400'>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className='mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((f) => (
              <div key={f.title}>
                <h3 className='font-semibold text-white'>{f.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-zinc-400'>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id='courses' className='scroll-mt-16 border-b border-white/10'>
        <div className='mx-auto max-w-6xl px-4 py-20 sm:px-6'>
          <h2 className='text-3xl font-bold tracking-tight text-white'>Training paths</h2>
          <p className='mt-3 max-w-2xl text-zinc-400'>Each path has its own lab machine, set up for what you are learning.</p>
          <div className='mt-12 grid gap-6 md:grid-cols-3'>
            {courses.map((c) => (
              <Link key={c.id} href={`/${c.id}`} className={`group flex flex-col border border-white/10 bg-zinc-900/40 p-6 transition ${c.accent.border}`}>
                <div className='flex items-center justify-between'>
                  <h3 className={`text-2xl font-bold ${c.accent.text}`}>{c.name}</h3>
                  <span
                    className={`border px-2 py-0.5 text-[11px] font-semibold ${c.labsReady ? `${c.accent.ring} ${c.accent.bg} ${c.accent.text}` : 'border-white/15 text-zinc-400'}`}
                  >
                    {c.labsReady ? 'Labs live' : 'Labs coming soon'}
                  </span>
                </div>
                <p className='mt-3 text-sm leading-relaxed text-zinc-400'>{c.tagline}</p>
                <div className='mt-5 border border-white/10 bg-zinc-950 p-3 font-mono text-[12px] text-zinc-400'>
                  <p className='mb-1 font-sans text-[11px] font-semibold uppercase tracking-wide text-zinc-500'>{c.machine}</p>
                  {c.sampleCommands.map((cmd) => (
                    <p key={cmd} className='truncate'>
                      <span className='text-brand'>$</span> {cmd}
                    </p>
                  ))}
                </div>
                <span className='mt-6 text-sm font-semibold text-white group-hover:underline'>View the {c.name} path →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About + instructor */}
      <section id='about' className='scroll-mt-16 border-b border-white/10'>
        <div className='mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-white'>About LiDoKu</h2>
            <p className='mt-5 text-zinc-400'>
              LiDoKu provides comprehensive training and resources for modern DevOps technologies. Whether you&apos;re a beginner or an experienced
              professional, our courses are designed to help you master Linux, Docker, and Kubernetes.
            </p>
            <p className='mt-4 text-zinc-400'>
              Our mission is to make infrastructure and container technologies accessible and practical for everyone in the software development
              ecosystem.
            </p>
          </div>
          <div className='border border-white/10 bg-zinc-900/40 p-6 sm:p-8'>
            <p className='text-xs font-semibold uppercase tracking-wide text-zinc-500'>Led by an industry expert</p>
            <div className='mt-5 flex items-start gap-5'>
              <div className='flex size-16 shrink-0 items-center justify-center bg-gradient-to-br from-brand to-sky-500 text-xl font-bold text-zinc-950'>
                SK
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>Suma Kadur</h3>
                <p className='font-semibold text-brand'>Head of Cloud DevOps/SecOps/SRE</p>
                <p className='mt-1 text-sm text-zinc-300'>Strategic Leader in Infrastructure &amp; Developer Experience</p>
              </div>
            </div>
            <p className='mt-5 text-sm leading-relaxed text-zinc-400'>
              With over 20 years of experience driving CloudOps, AI Operations, Platform Engineering &amp; Compliance, Suma brings deep expertise
              and real-world insights to every course.
            </p>
            <div className='mt-5 flex flex-wrap gap-2'>
              {['Cloud DevOps', 'SecOps', 'SRE', 'Platform Engineering', 'AI Operations', 'Compliance'].map((t) => (
                <span key={t} className='border border-white/10 px-2.5 py-1 text-xs text-zinc-300'>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className='mx-auto max-w-3xl px-4 py-20 text-center sm:px-6'>
          <h2 className='text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl'>Your first lab machine is a click away</h2>
          <p className='mt-4 text-zinc-400'>Create an account, open a lesson, and start typing.</p>
          <a href={SIGNUP_URL} className='mt-8 inline-block bg-brand px-8 py-3 font-semibold text-zinc-950 transition hover:brightness-110'>
            Start learning
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
