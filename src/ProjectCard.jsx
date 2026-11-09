import { useState } from 'react'

function validUrl(value, github = false) {
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol) && (!github || url.hostname === 'github.com')
  } catch { return false }
}

function GitHubIcon() {
  return (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>)
}

export default function ProjectCard({ project, details, labels, description }) {
  const [failedImage, setFailedImage] = useState(null)
  const heading = 'project-' + project.id
  const title = details.title || project.name
  const hasTitleHero = project.id === 'security' || project.id === 'face-detection'
  const features = (details.cardFeatures || details.features).slice(0, 4)
  const links = [
    validUrl(project.githubProfile, true) && { href: project.githubProfile, label: details.githubProfileLabel, github: true },
    validUrl(project.frontendRepo, true) && { href: project.frontendRepo, label: details.frontendCode, github: true },
    validUrl(project.repo, true) && { href: project.repo, label: details.backendCode || 'GitHub', github: true },
    validUrl(project.live) && { href: project.live, label: labels.website },
  ].filter(Boolean)

  return (
    <article className="project panel" aria-labelledby={heading}>
      {hasTitleHero ? <div className="project-media project-title-hero" aria-hidden="true">
        <span>{title}</span>
      </div> : project.showImage !== false && <div className="project-media">
        {project.image && failedImage !== project.image ? (
          <img className="project-img" src={project.image} alt={title + ' ' + (details.imageLabel || labels.screenshot)} loading="lazy" onError={() => setFailedImage(project.image)} />
        ) : (
          <div className="project-img shot-fallback">
            <span>{title}</span>
            <p>{labels.missingScreenshot}</p>
          </div>
        )}
      </div>}
      <div className="project-body">
        <header>
          {details.category && <p className="project-category">{details.category}</p>}
          <h3 id={heading}>{title}</h3>
          <p className="project-description">{description}</p>
        </header>
        <section className="project-section">
          <h4>{labels.solution}</h4>
          <p>{details.solution || details.summary || labels.pending}</p>
        </section>
        <section className="project-section">
          <h4>{labels.features}</h4>
          {features.length ? <ul className="project-features">{features.map(feature => <li key={feature}>{feature}</li>)}</ul> : <p className="project-placeholder">{labels.pending}</p>}
        </section>
        <section className="project-section">
          <h4>{labels.stack}</h4>
          {project.stackGroups ? <div className="project-stack-groups">{project.stackGroups.map(group => <div className="project-stack-group" key={group.key}>
            <p className="project-stack-label">{details.stackLabels?.[group.key] || labels[group.key]}</p>
            <ul className="chips chips-sm">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>)}</div> : project.tags.length ? <ul className="chips chips-sm">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> : <p className="project-placeholder">{labels.pending}</p>}
        </section>
        {links.length > 0 && <div className="project-links">{links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.github && <GitHubIcon />}{link.label}<span aria-hidden="true">&#8599;</span></a>)}</div>}
      </div>
    </article>
  )
}
