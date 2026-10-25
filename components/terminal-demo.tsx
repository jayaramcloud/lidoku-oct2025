'use client';

import { useEffect, useState } from 'react';

// A scripted replay of real lab sessions (outputs as captured from Lidoku's lab machines)
type Line = { kind: 'cmd' | 'out' | 'check'; text: string };
type Scene = { track: 'Linux' | 'Docker'; dot: string; lines: Line[] };

const scenes: Scene[] = [
  {
    track: 'Linux',
    dot: 'bg-emerald-400',
    lines: [
      { kind: 'cmd', text: 'uname -sr' },
      { kind: 'out', text: 'Linux 6.1.155' },
      { kind: 'cmd', text: 'mkdir lab && cd lab && pwd' },
      { kind: 'out', text: '/root/lab' },
      { kind: 'cmd', text: 'echo hello > notes.txt' },
      { kind: 'check', text: 'Create a directory called lab' },
      { kind: 'check', text: 'Write hello into ~/lab/notes.txt' },
    ],
  },
  {
    track: 'Docker',
    dot: 'bg-sky-400',
    lines: [
      { kind: 'cmd', text: 'docker run --rm hello-world | head -2' },
      { kind: 'out', text: '' },
      { kind: 'out', text: 'Hello from Docker!' },
      { kind: 'cmd', text: 'docker run -d -p 8080:80 nginx:alpine' },
      { kind: 'out', text: '3f9c1d0a7b2e…' },
      { kind: 'cmd', text: 'curl -s localhost:8080 | grep -o "<title>.*</title>"' },
      { kind: 'out', text: '<title>Welcome to nginx!</title>' },
      { kind: 'check', text: 'Publish nginx on port 8080' },
    ],
  },
];

const TYPE_MS = 38;
const LINE_PAUSE_MS = 450;
const SCENE_PAUSE_MS = 2600;

export function TerminalDemo() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [shown, setShown] = useState(0); // fully shown lines
  const [typed, setTyped] = useState(0); // characters of the line being typed
  const scene = scenes[sceneIdx];

  useEffect(() => {
    // Reduced motion: show every scene's final state, no animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(scene.lines.length);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    if (shown >= scene.lines.length) {
      timer = setTimeout(() => {
        setSceneIdx((i) => (i + 1) % scenes.length);
        setShown(0);
        setTyped(0);
      }, SCENE_PAUSE_MS);
    } else {
      const line = scene.lines[shown];
      if (line.kind === 'cmd' && typed < line.text.length) {
        timer = setTimeout(() => setTyped((t) => t + 1), TYPE_MS);
      } else {
        timer = setTimeout(
          () => {
            setShown((s) => s + 1);
            setTyped(0);
          },
          line.kind === 'cmd' ? LINE_PAUSE_MS : 160,
        );
      }
    }
    return () => clearTimeout(timer);
  }, [scene, shown, typed]);

  const current = scene.lines[shown];
  const checks = scene.lines.filter((l) => l.kind === 'check');
  const doneChecks = scene.lines.slice(0, shown).filter((l) => l.kind === 'check').length;

  return (
    <div className='w-full overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl shadow-brand/5' aria-label='Example lab session'>
      <div className='flex items-center gap-3 border-b border-white/10 bg-zinc-900 px-3 py-2 text-xs'>
        <span className='flex gap-1.5'>
          <span className='size-2.5 rounded-full bg-zinc-700' />
          <span className='size-2.5 rounded-full bg-zinc-700' />
          <span className='size-2.5 rounded-full bg-zinc-700' />
        </span>
        <span className='inline-flex items-center gap-1.5 font-semibold text-zinc-300'>
          <span className={`size-2 rounded-full ${scene.dot}`} />
          {scene.track} lab
        </span>
        <span className='ml-auto text-zinc-500'>your own machine · 01:59:12 left</span>
      </div>
      <div className='h-64 space-y-1 px-4 py-3 font-mono text-[13px] leading-relaxed'>
        {scene.lines.slice(0, shown).map((line, i) =>
          line.kind === 'check' ? null : (
            <p key={i} className={line.kind === 'cmd' ? 'text-zinc-100' : 'text-zinc-400'}>
              {line.kind === 'cmd' && <span className='text-brand'>root@lab:~# </span>}
              {line.text || ' '}
            </p>
          ),
        )}
        {current?.kind === 'cmd' && (
          <p className='text-zinc-100'>
            <span className='text-brand'>root@lab:~# </span>
            {current.text.slice(0, typed)}
            <span className='cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-brand' />
          </p>
        )}
      </div>
      <div className='border-t border-white/10 bg-zinc-900/60 px-4 py-2.5 text-xs'>
        <div className='mb-1.5 flex items-center justify-between text-zinc-400'>
          <span className='font-semibold text-zinc-300'>Your tasks</span>
          <span>
            {doneChecks}/{checks.length} done
          </span>
        </div>
        {checks.map((c, i) => (
          <p key={c.text} className={i < doneChecks ? 'text-emerald-300' : 'text-zinc-500'}>
            {i < doneChecks ? '✓' : '○'} {c.text}
          </p>
        ))}
      </div>
    </div>
  );
}
