import { useEffect, useRef } from 'react'
import './skills.css'

// Local Simple Icons assets; every displayed technology must also exist in SKILLS.
const LOGOS = [
  ['React', 'react'], ['Next.js', 'nextdotjs'], ['NestJS', 'nestjs'],
  ['TypeScript', 'typescript'], ['GraphQL', 'graphql'], ['MongoDB', 'mongodb'],
  ['PostgreSQL', 'postgresql'], ['Docker', 'docker'],
]

export default function SkillsSection({ groups, t }) {
  const stripRef = useRef(null)
  const listed = new Set(groups.flatMap(group => group.items))
  const logos = LOGOS.filter(([name]) => listed.has(name))

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    let inView = false
    const sync = () => { strip.dataset.paused = String(!inView || document.hidden) }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      sync()
    })
    observer.observe(strip)
    document.addEventListener('visibilitychange', sync)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="section-head">
        <h2 id="skills-heading">{t.skillsTitle}</h2>
        <p>{t.skillsIntro}</p>
      </div>
      <div className="skills-grid">
        {groups.map((group, index) => (
          <article className={`skill-card${group.key === 'ai' ? ' skill-card-featured' : ''}`} key={group.key} aria-labelledby={`skill-${group.key}`}>
            <header className="skill-card-head">
              <span className="skill-category-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3 id={`skill-${group.key}`}>{t.cats[group.key]}</h3>
            </header>
            <ul className="skill-badges">
              {group.items.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="skills-logo-strip" ref={stripRef} data-paused="true"
        tabIndex={0} role="region" aria-labelledby="skills-heading">
        <div className="skills-logo-track">
          {[false, true].map(duplicate => (
            <ul className={`skills-logo-group${duplicate ? ' skills-logo-duplicate' : ''}`} aria-hidden={duplicate || undefined} key={String(duplicate)}>
              {logos.map(([name, slug]) => (
                <li key={name}>
                  <img src={`${import.meta.env.BASE_URL}images/skills/${slug}.svg`} alt="" width="28" height="28" loading="lazy" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <section className="skills-languages" aria-labelledby="languages-heading">
        <h3 id="languages-heading">{t.languagesTitle}</h3>
        <dl className="languages-grid">
          {t.languages.map(language => (
            <div className="language-card" key={language.id}>
              <dt>{language.name}</dt>
              <dd><span aria-hidden="true">— </span>{language.proficiency}</dd>
            </div>
          ))}
        </dl>
      </section>
    </section>
  )
}
