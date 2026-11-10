import { useEffect, useRef, useState } from 'react'
import { CONTACT, SKILLS, PROJECTS, JOBS, T, PROJECT_CARD_LABELS, getProjectDetails } from './content.js'

import ProjectCard from './ProjectCard.jsx'
import SkillsSection from './SkillsSection.jsx'
import HeroBackground from './HeroBackground.jsx'
import CustomCursor from './CustomCursor.jsx'
import './custom-cursor.css'

const LANGS = [
  { code: 'ko', label: '한' },
  { code: 'en', label: 'EN' },
  { code: 'uz', label: 'UZ' },
]

/* ---------- small inline icons (no icon library needed) ---------- */
const Icon = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
  ),
  telegram: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M21 4 3 11l6 2.5M21 4l-3 16-9-6.5M21 4 9 13.5V19l3-3.2"/></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" d="M5 3h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 7.1 7.1l1.4-2.3L21 15.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.5 9h3v12h-3V9Zm5.5 0h2.9v1.7h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.62V21h-3v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V21H9V9Z"/></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8"/></svg>
  ),
  download: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg>
  ),
  external: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5m0-5-8 8M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"/></svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>
  ),
}

function HeroTechBadge({ label, tooltip, index }) {
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const tooltipId = `hero-tech-tooltip-${index}`
  return (
    <li className={`hero-tech-badge hero-tech-${index}`} tabIndex={0}
      aria-describedby={tooltipId}
      onMouseEnter={() => { setHovered(true); setDismissed(false) }}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => { setFocused(true); setDismissed(false) }}
      onBlur={() => setFocused(false)}
      onKeyDown={event => { if (event.key === 'Escape') setDismissed(true) }}>
      <span className="hero-tech-mark" aria-hidden="true">{['N', 'N', 'AI', '◇'][index]}</span>{label}
      <span className="hero-tech-tooltip" role="tooltip" id={tooltipId}
        hidden={dismissed || (!hovered && !focused)}>{tooltip}</span>
    </li>
  )
}

function Avatar() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="avatar-frame">
      {failed ? (
        <div className="avatar avatar-fallback" aria-hidden="true">T</div>
      ) : (
        <img className="avatar" src={`${import.meta.env.BASE_URL}images/avatar.jpg`} alt="Tina (Madina Burieva)" onError={() => setFailed(true)} />
      )}
    </div>
  )
}

/* ---------- contact form ---------- */
function ContactForm({ t }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const useMail = !CONTACT.formEndpoint

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    if (useMail) {
      const body = `${data.message}\n\n— ${data.name} (${data.email})`
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Portfolio: ' + data.name)}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(CONTACT.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form panel" onSubmit={onSubmit}>
      <h3>{t.form.title}</h3>
      <div className="form-row">
        <label>
          <span>{t.form.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{t.form.email}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label>
        <span>{t.form.message}</span>
        <textarea name="message" rows="6" required />
      </label>
      <button className="btn btn-solid" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t.form.sending : t.form.send}
      </button>
      <p className="form-note" role="status">
        {status === 'sent' && t.form.sent}
        {status === 'error' && t.form.error}
        {status === 'idle' && useMail && t.form.mailNote}
      </p>
    </form>
  )
}

/* ---------- page ---------- */
export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      return LANGS.some(language => language.code === saved) ? saved : 'ko'
    } catch { return 'ko' }
  })
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [projectsExpanded, setProjectsExpanded] = useState(false)
  const t = T[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const updateHeight = () => document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`)
    const observer = new ResizeObserver(updateHeight)
    observer.observe(header)
    updateHeight()
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--header-height')
    }
  }, [])

  useEffect(() => {
    const sections = ['skills', 'work', 'projects', 'contact'].map(id => document.getElementById(id)).filter(Boolean)
    let raf = 0
    const update = () => {
      raf = 0
      const headerHeight = headerRef.current?.getBoundingClientRect().height || 0
      const readingLine = headerHeight + Math.min(window.innerHeight * 0.25, 180)
      let current = null
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= readingLine) current = section.id
      })
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = sections.at(-1)?.id || current
      }
      setActiveSection(current)
    }
    const queue = () => { if (!raf) raf = requestAnimationFrame(update) }
    const observer = new ResizeObserver(queue)
    observer.observe(document.querySelector('main'))
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', queue)
    queue()
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', queue)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    navRef.current?.querySelector('a')?.focus({ preventScroll: true })
    const onKey = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus({ preventScroll: true })
      }
    }
    const onOutside = event => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 761px)')
    const onDesktop = () => { if (desktop.matches) setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onOutside)
    desktop.addEventListener('change', onDesktop)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onOutside)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [menuOpen])

  const nav = [
    ['skills', t.nav.skills],
    ['work', t.nav.work],
    ['projects', t.nav.projects],
    ['contact', t.nav.contact],
  ]

  const contactRows = [
    CONTACT.email && { icon: 'mail', label: t.labels.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    CONTACT.phone && { icon: 'phone', label: t.labels.phone, value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^0-9+]/g, '')}` },
    CONTACT.telegram && { icon: 'telegram', label: t.labels.telegram, value: '@' + CONTACT.telegram, href: `https://t.me/${CONTACT.telegram}` },
    CONTACT.github && { icon: 'github', label: t.labels.github, value: CONTACT.github, href: `https://github.com/${CONTACT.github}` },
    CONTACT.linkedin && { icon: 'linkedin', label: t.labels.linkedin, value: 'LinkedIn', href: CONTACT.linkedin },
    { icon: 'pin', label: t.labels.location, value: t.location },
  ].filter(Boolean)

  return (
    <>
      <HeroBackground />
      <CustomCursor />

      <header className="top" ref={headerRef}>
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>Tina Burieva</a>
        <nav className={`nav ${menuOpen ? 'open' : ''}`} id="main-navigation" ref={navRef} aria-label={t.navA11y.main}>
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => {
                if (menuOpen) menuButtonRef.current?.focus({ preventScroll: true })
                setMenuOpen(false)
              }}>{label}</a>
          ))}
        </nav>
        <div className="lang" role="group" aria-label={t.navA11y.language}>
          {LANGS.map((l) => (
            <button key={l.code} type="button" aria-pressed={lang === l.code} onClick={() => setLang(l.code)}>
              {l.label}
            </button>
          ))}
        </div>
        <button className="menu-btn" type="button" ref={menuButtonRef}
          aria-label={menuOpen ? t.navA11y.close : t.navA11y.open}
          aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          {Icon.menu}
        </button>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero hero-premium">
          <div className="hero-text">
            <p className="greeting">{t.greeting}</p>
            <h1 className="name">
              <span className="name-big">Tina</span>
              <span className="name-full">Madina Burieva</span>
            </h1>
            <p className="role">{t.role}</p>
            <p className="hero-specialty">{t.heroSpecialty}</p>
            <div className="summary">
              {t.summary.split('\n\n').map(paragraph => (
                <p key={paragraph}>
                  {t.heroHighlights.reduce((parts, phrase) => parts.flatMap(part =>
                    typeof part === 'string'
                      ? part.split(phrase).flatMap((text, index) => index === 0
                        ? [text]
                        : [<strong key={phrase}>{phrase}</strong>, text])
                      : [part]
                  ), [paragraph])}
                </p>
              ))}
            </div>
            <div className="actions">
              <a className="btn btn-solid" href={CONTACT.cv} download>
                {Icon.download}{t.cv}
              </a>
              <a className="btn btn-ghost" href="#projects">{t.seeProjects}</a>
            </div>
            <div className="socials">
              {CONTACT.github && <a href={`https://github.com/${CONTACT.github}`} target="_blank" rel="noreferrer" aria-label="GitHub">{Icon.github}</a>}
              {CONTACT.telegram && <a href={`https://t.me/${CONTACT.telegram}`} target="_blank" rel="noreferrer" aria-label="Telegram">{Icon.telegram}</a>}
              {CONTACT.linkedin && <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">{Icon.linkedin}</a>}
              {CONTACT.email && <a href={`mailto:${CONTACT.email}`} aria-label="Email">{Icon.mail}</a>}
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-portrait-stage">
              <Avatar />
              <ul className="hero-tech">
                {['Next.js', 'NestJS', 'LLM / AI', 'System Design'].map((tech, index) => (
                  <HeroTechBadge key={tech} label={tech} index={index} tooltip={t.heroBadgeTooltips[index]} />
                ))}
              </ul>
            </div>
            <p className="badge"><span className="dot" />{t.badge}</p>
          </div>

          <dl className="stats">
            {t.stats.map((s) => (
              <div key={s.l}>
                <dt>{s.n}</dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* SKILLS */}
        <SkillsSection groups={SKILLS} t={t} />

        {/* EXPERIENCE */}
        <section id="work" className="section">
          <div className="section-head">
            <h2>{t.workTitle}</h2>
          </div>
          <ol className="timeline">
            {JOBS.map((j) => {
              const jt = t.jobs[j.id]
              return (
                <li key={j.id} className="job">
                  <div className="job-when">
                    <span><time dateTime={j.start}>{jt.start}</time></span>
                    <span><time dateTime={j.end}>{jt.end}</time></span>
                  </div>
                  <article className="panel job-card">
                    <header>
                      <h3>{jt.title}</h3>
                      <p className="job-co">{j.company}</p>
                      <p className="job-place">{Icon.pin}{jt.place}</p>
                    </header>
                    <ul>
                      {jt.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </article>
                </li>
              )
            })}
          </ol>
          <div className="edu">
            <h3>{t.eduTitle}</h3>
            <p>{t.edu}</p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-head">
            <h2>{t.projectsTitle}</h2>
            <p>{t.projectsIntro}</p>
          </div>
          <div className="projects" id="project-grid">
            {(projectsExpanded ? PROJECTS : PROJECTS.slice(0, 2)).map((p) => (
              <ProjectCard key={p.id} project={p} details={getProjectDetails(p.id, lang)}
                labels={PROJECT_CARD_LABELS[lang]} description={t.projects[p.id]}
                liveLabel={t.live} codeLabel={t.code} />
            ))}
          </div>
          {PROJECTS.length > 2 && (
            <div className="project-toggle">
              <button className="btn btn-ghost" type="button"
                aria-expanded={projectsExpanded} aria-controls="project-grid"
                onClick={() => setProjectsExpanded(expanded => !expanded)}>
                {projectsExpanded ? t.showLessProjects : t.viewAllProjects}
              </button>
            </div>
          )}
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="contact">
            <div className="contact-details panel">
              <div className="section-head">
                <h2>{t.contactTitle}</h2>
                <p>{t.contactIntro}</p>
              </div>
              <ul className="contact-list">
                {contactRows.map((r) => (
                  <li key={r.icon}>
                    <span className="ci">{Icon[r.icon]}</span>
                    <span>
                      <span className="cl">{r.label}</span>
                      {r.href ? (
                        <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{r.value}</a>
                      ) : (
                        <span className="cv">{r.value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm t={t} />
          </div>
        </section>
      </main>

      <footer className="foot">
        <p>© {new Date().getFullYear()} Madina (Tina) Burieva</p>
        <p>{t.footer}</p>
      </footer>
    </>
  )
}
