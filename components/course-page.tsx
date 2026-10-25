import { SiteFooter, SiteNav } from '@/components/site-chrome';
import { type Course, SIGNUP_URL } from '@/lib/courses';
import Link from 'next/link';

function List({ items, mark }: { items: string[]; mark: string }) {
  return (
    <ul className='space-y-2 text-sm text-zinc-300'>
      {items.map((item) => (
        <li key={item} className='flex gap-2'>
          <span className='text-brand'>{mark}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CoursePage({ course: c }: { course: Course }) {
  return (
    <div className='min-h-screen'>
      <SiteNav active={c.id} />

      {/* Hero */}
      <section className='bg-grid border-b border-white/10'>
        <div className='mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-24'>
          <div>
            <p className={`text-sm font-semibold ${c.accent.text}`}>Training path</p>
            <h1 className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl'>{c.name}</h1>
            <p className='mt-6 max-w-xl text-lg text-zinc-400'>{c.tagline}</p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <a href={SIGNUP_URL} className='bg-brand px-6 py-3 text-center font-semibold text-zinc-950 transition hover:brightness-110'>
                Start the {c.name} path
              </a>
              <a href='#modules' className='border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/5'>
                See the modules
              </a>
            </div>
          </div>
          <div className={`self-start border bg-zinc-950 ${c.accent.ring}`}>
            <div className='flex items-center justify-between border-b border-white/10 bg-zinc-900 px-4 py-2 text-xs'>
              <span className='inline-flex items-center gap-2 font-semibold text-zinc-200'>
                <span className={`size-2 rounded-full ${c.accent.dot}`} />
                Your lab machine
              </span>
              <span className={c.labsReady ? c.accent.text : 'text-zinc-500'}>{c.labsReady ? 'Live' : 'Coming soon'}</span>
            </div>
            <div className='space-y-1 px-4 py-4 font-mono text-[13px] text-zinc-400'>
              <p className='pb-2 font-sans text-sm text-zinc-300'>{c.machine}, next to every lesson.</p>
              {c.sampleCommands.map((cmd) => (
                <p key={cmd}>
                  <span className='text-brand'>root@lab:~# </span>
                  {cmd}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className='border-b border-white/10'>
        <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6'>
          <h2 className='text-2xl font-bold text-white'>What you&apos;ll learn</h2>
          <p className='mt-4 max-w-3xl text-zinc-400'>{c.overview}</p>
          <div className='mt-10 grid gap-8 md:grid-cols-2'>
            <div>
              <h3 className={`mb-3 font-semibold ${c.accent.text}`}>Core skills</h3>
              <List items={c.coreSkills} mark='✓' />
            </div>
            <div>
              <h3 className={`mb-3 font-semibold ${c.accent.text}`}>Advanced topics</h3>
              <List items={c.advancedTopics} mark='✓' />
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id='modules' className='scroll-mt-16 border-b border-white/10'>
        <div className='mx-auto max-w-6xl px-4 py-16 sm:px-6'>
          <h2 className='text-2xl font-bold text-white'>Course modules</h2>
          <ol className='mt-8 divide-y divide-white/10 border border-white/10'>
            {c.modules.map((m, i) => (
              <li key={m.title} className='grid gap-2 p-5 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline'>
                <span className='font-mono text-sm text-brand'>0{i + 1}</span>
                <div>
                  <h3 className='font-semibold text-white'>{m.title}</h3>
                  <p className='mt-1 text-sm text-zinc-400'>{m.description}</p>
                </div>
                <span className='text-xs text-zinc-500'>{m.duration}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Details */}
      <section className='border-b border-white/10'>
        <div className='mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2'>
          <div className='space-y-8'>
            <div>
              <h3 className={`mb-3 font-semibold ${c.accent.text}`}>Prerequisites</h3>
              <p className='text-sm text-zinc-300'>{c.prerequisites}</p>
            </div>
            <div>
              <h3 className={`mb-3 font-semibold ${c.accent.text}`}>What&apos;s included</h3>
              <List items={c.included} mark='•' />
            </div>
          </div>
          <div className='space-y-8'>
            <div>
              <h3 className={`mb-3 font-semibold ${c.accent.text}`}>Who it&apos;s for</h3>
              <List items={c.audience} mark='•' />
            </div>
            <div>
              <h3 className={`mb-3 font-semibold ${c.accent.text}`}>By the end, you&apos;ll be able to</h3>
              <List items={c.outcomes} mark='•' />
            </div>
          </div>
        </div>
      </section>

      {/* Format */}
      <section className='border-b border-white/10'>
        <div className='mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3'>
          <div>
            <h3 className='mb-3 font-semibold text-white'>Course format</h3>
            <List items={['Self-paced online learning', 'Lifetime access to course materials', 'Regular content updates', 'Community forum access']} mark='•' />
          </div>
          <div>
            <h3 className='mb-3 font-semibold text-white'>Support</h3>
            <List items={['Email support from instructors', 'Q&A sessions (monthly)', 'Peer community support', 'Course completion certificate']} mark='•' />
          </div>
          <div>
            <h3 className='mb-3 font-semibold text-white'>Course investment</h3>
            <p className='text-2xl font-bold text-white'>Contact for pricing</p>
            <p className='mt-1 text-sm text-zinc-400'>Flexible payment options available</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className='mx-auto max-w-3xl px-4 py-20 text-center sm:px-6'>
          <h2 className='text-3xl font-bold tracking-tight text-white'>{c.cta.title}</h2>
          <p className='mt-4 text-zinc-400'>{c.cta.text}</p>
          <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
            <a href={SIGNUP_URL} className='bg-brand px-8 py-3 font-semibold text-zinc-950 transition hover:brightness-110'>
              Start the {c.name} path
            </a>
            <Link href='/#courses' className='border border-white/15 px-8 py-3 font-semibold text-white transition hover:bg-white/5'>
              All training paths
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
