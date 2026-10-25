import { SIGNUP_URL, courses } from '@/lib/courses';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/' className='text-xl font-bold tracking-tight text-white'>
      Li<span className='text-brand'>Do</span>Ku
    </Link>
  );
}

export function SiteNav({ active }: { active?: string }) {
  return (
    <nav className='sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6'>
        <Logo />
        <div className='flex items-center gap-1 sm:gap-6'>
          <div className='hidden items-center gap-6 sm:flex'>
            {courses.map((c) => (
              <Link
                key={c.id}
                href={`/${c.id}`}
                className={`text-sm transition ${active === c.id ? `${c.accent.text} font-semibold` : 'text-zinc-400 hover:text-white'}`}
              >
                {c.name}
              </Link>
            ))}
            <Link href='/#how' className='text-sm text-zinc-400 transition hover:text-white'>
              How it works
            </Link>
          </div>
          <a href={SIGNUP_URL} className='bg-brand px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:brightness-110'>
            Start learning
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className='border-t border-white/10'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6'>
        <Logo />
        <div className='flex gap-6'>
          {courses.map((c) => (
            <Link key={c.id} href={`/${c.id}`} className='hover:text-white'>
              {c.name}
            </Link>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} LiDoKu. All rights reserved.</p>
      </div>
    </footer>
  );
}
