'use client'

import { useState, useEffect } from 'react'
import { Timeline } from '@/components/ui/timeline'

const usps = [
  { icon: '💡', title: 'Tailored Solutions',   text: "Programs customized to your organization's goals and challenges." },
  { icon: '🎯', title: 'Innovative Framework', text: 'Proprietary methods for impactful, application-driven results.' },
  { icon: '📚', title: 'Diverse Offerings',    text: 'Courses across industries, skill levels, and emerging fields.' },
  { icon: '⚡', title: 'Flexible Delivery',    text: 'Online and offline options tailored to your needs.' },
  { icon: '🌟', title: 'Expert Guidance',      text: 'Learn from industry leaders with real-world success.' },
  { icon: '📈', title: 'Proven Impact',        text: 'Trusted by leading organisations for measurable ROI.' },
]

const segColors = ['#1e40af', '#1d4ed8', '#2563EB', '#3b82f6', '#60a5fa', '#93c5fd']

const timelineData = [
  {
    title: 'Tailored Solutions',
    content: (
      <div className="edge-timeline-card flex items-start gap-4 rounded-2xl border p-5">
        <div className="text-4xl">💡</div>
        <div>
          <p className="text-sm font-semibold text-blue-700 mb-1">Tailored Solutions</p>
          <p className="text-sm text-slate-600">Programs customized to your organization&apos;s goals and challenges.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Innovative Framework',
    content: (
      <div className="edge-timeline-card flex items-start gap-4 rounded-2xl border p-5">
        <div className="text-4xl">🎯</div>
        <div>
          <p className="text-sm font-semibold text-blue-700 mb-1">Innovative Framework</p>
          <p className="text-sm text-slate-600">Proprietary methods for impactful, application-driven results.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Diverse Offerings',
    content: (
      <div className="edge-timeline-card flex items-start gap-4 rounded-2xl border p-5">
        <div className="text-4xl">📚</div>
        <div>
          <p className="text-sm font-semibold text-blue-700 mb-1">Diverse Offerings</p>
          <p className="text-sm text-slate-600">Courses across industries, skill levels, and emerging fields.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Flexible Delivery',
    content: (
      <div className="edge-timeline-card flex items-start gap-4 rounded-2xl border p-5">
        <div className="text-4xl">⚡</div>
        <div>
          <p className="text-sm font-semibold text-blue-700 mb-1">Flexible Delivery</p>
          <p className="text-sm text-slate-600">Online and offline options tailored to your needs.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Expert Guidance',
    content: (
      <div className="edge-timeline-card flex items-start gap-4 rounded-2xl border p-5">
        <div className="text-4xl">🌟</div>
        <div>
          <p className="text-sm font-semibold text-blue-700 mb-1">Expert Guidance</p>
          <p className="text-sm text-slate-600">Learn from industry leaders with real-world success.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Proven Impact',
    content: (
      <div className="edge-timeline-card flex items-start gap-4 rounded-2xl border p-5">
        <div className="text-4xl">📈</div>
        <div>
          <p className="text-sm font-semibold text-blue-700 mb-1">Proven Impact</p>
          <p className="text-sm text-slate-600">Trusted by leading organisations for measurable ROI.</p>
        </div>
      </div>
    ),
  },
]

function MobilePieChart() {
  const [active, setActive] = useState(null)
  const [spin, setSpin] = useState(true)
  const [deg, setDeg] = useState(0)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const updateThemeState = () => {
      setIsDark(html.getAttribute('data-theme') === 'dark')
    }

    updateThemeState()
    const observer = new MutationObserver(updateThemeState)
    observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!spin) return
    const id = setInterval(() => setDeg(d => (d + 0.25) % 360), 16)
    return () => clearInterval(id)
  }, [spin])

  const n = usps.length
  const sweep = 360 / n
  const R = 110
  const hole = 54
  const cx = 140
  const cy = 140

  const toXY = (angleDeg, radius) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
  }

  const arcPath = (start, end) => {
    const a = toXY(start, R), b = toXY(end, R)
    const c = toXY(end, hole), d = toXY(start, hole)
    const lg = end - start > 180 ? 1 : 0
    return `M${a.x},${a.y} A${R},${R} 0 ${lg} 1 ${b.x},${b.y} L${c.x},${c.y} A${hole},${hole} 0 ${lg} 0 ${d.x},${d.y}Z`
  }

  return (
    <div className="flex flex-col items-center gap-5 px-4">
      <div className="relative" style={{ width: 280, height: 280 }}>
        <svg
          width={280} height={280} viewBox="0 0 280 280"
          style={{ transform: `rotate(${deg}deg)`, transition: spin ? 'none' : 'transform 0.5s ease' }}
        >
          {usps.map((u, i) => {
            const s = i * sweep
            const e = s + sweep - 2
            const ip = toXY(s + sweep / 2, (R + hole) / 2)
            const isA = active === i
            return (
              <g
                key={i}
                style={{
                  transform: isA ? 'scale(1.07)' : 'scale(1)',
                  transformOrigin: `${cx}px ${cy}px`,
                  transition: 'transform 0.25s',
                  cursor: 'pointer',
                }}
                onClick={() => { setActive(isA ? null : i); setSpin(isA) }}
              >
                <path
                  d={arcPath(s, e)}
                  fill={isA ? (isDark ? '#1e293b' : '#EFF6FF') : segColors[i]}
                  stroke={isA ? segColors[i] : isDark ? '#334155' : '#fff'}
                  strokeWidth={isA ? 2 : 1}
                />
                <text
                  x={ip.x} y={ip.y}
                  textAnchor="middle" dominantBaseline="central" fontSize="17"
                  style={{ transform: `rotate(${-deg}deg)`, transformOrigin: `${ip.x}px ${ip.y}px`, userSelect: 'none' }}
                >
                  {u.icon}
                </text>
              </g>
            )
          })}
          <circle cx={cx} cy={cy} r={hole - 3} fill={isDark ? '#0f172a' : 'white'} />
          <text x={cx} y={cy - 7} textAnchor="middle" fontSize="11" fontWeight="800" fill={isDark ? '#cbd5e1' : '#1e293b'}>OUR</text>
          <text x={cx} y={cy + 7} textAnchor="middle" fontSize="11" fontWeight="800" fill={isDark ? '#cbd5e1' : '#1e293b'}>USPs</text>
        </svg>
        <div className="pointer-events-none absolute inset-0 rounded-full" style={{ boxShadow: '0 0 48px rgba(37,99,235,0.18)' }} />
      </div>

      <div
        className={`edge-mobile-detail w-full max-w-xs rounded-2xl border transition-all duration-300 overflow-hidden ${
          active !== null ? 'edge-mobile-detail-active' : ''
        }`}
        style={{
          maxHeight: active !== null ? 160 : 0,
          opacity: active !== null ? 1 : 0,
        }}
      >
        {active !== null && (
          <div className="p-4 flex items-start gap-3">
            <span className="text-2xl mt-0.5">{usps[active].icon}</span>
            <div>
              <h3 className="edge-mobile-title font-bold text-sm">{usps[active].title}</h3>
              <p className="edge-mobile-text text-xs mt-1 leading-relaxed">{usps[active].text}</p>
            </div>
          </div>
        )}
      </div>

      <p className="edge-mobile-hint text-xs -mt-2">
        {active !== null ? 'Tap again to close' : 'Tap a segment to explore'}
      </p>
    </div>
  )
}

export default function EdgeSection() {
  return (
    <section id="accredian-edge" className="edge-section bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="text-center text-slate-500 mt-2 mb-4 text-sm">
          Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
        </p>

        <div className="block lg:hidden">
          <MobilePieChart />
        </div>

        <div className="hidden lg:block">
          <Timeline data={timelineData} />
        </div>
      </div>
    </section>
  )
}