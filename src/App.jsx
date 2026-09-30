import { profile, projects, skills } from './data.js';

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function LinkButton({ href, children, variant = 'quiet', download = false }) {
  const inactive = !href;
  return (
    <a className={`button button-${variant}${inactive ? ' button-inactive' : ''}`} href={href || '#contact'} {...(download && href ? { download: true } : {})} aria-label={inactive ? `${children} — add link in src/data.js` : undefined}>
      {children}<Arrow diagonal={variant !== 'primary'} />
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Bhavit Goyal, home"><span className="wordmark-mark">bg</span><span>BHAVIT GOYAL</span></a>
      <nav aria-label="Main navigation" className="nav-links">
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a>
      </nav>
      <a className="header-contact" href="#contact">Let’s talk <Arrow diagonal /></a>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-art" aria-label="Abstract code window and orbit illustration" role="img">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
      <div className="code-window">
        <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>building / learning</span><span className="window-live"><i /> IN PROGRESS</span></div>
        <div className="code-body">
          <div className="code-line"><span className="line-no">01</span><span className="code-purple">class</span>&nbsp; <span className="code-blue">Developer</span> {'{'}</div>
          <div className="code-line indent"><span className="line-no">02</span><span className="code-purple">String</span> focus = <span className="code-green">"Java + DSA"</span>;</div>
          <div className="code-line indent"><span className="line-no">03</span><span className="code-purple">void</span> <span className="code-blue">build</span>() {'{'}</div>
          <div className="code-line indent deeper"><span className="line-no">04</span>learn(); <span className="code-comment">// every day</span></div>
          <div className="code-line indent deeper"><span className="line-no">05</span>makeSomething();</div>
          <div className="code-line indent"><span className="line-no">06</span>{'}'}</div>
          <div className="code-line"><span className="line-no">07</span>{'}'}<span className="cursor">_</span></div>
        </div>
      </div>
      <div className="art-caption"><span className="caption-dot" /> CURIOUS BY DEFAULT <span className="caption-line" /></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> FIRST SEMESTER / BENNETT UNIVERSITY</div>
        <h1>Learning to build.<br /><span>Building to learn.</span></h1>
        <p className="hero-role">Bhavit Goyal <span>—</span> CSE Student &amp; Developer</p>
        <p className="hero-description">Exploring Java, DSA, C# and Unity — one problem, one practical project, one step at a time.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore projects <Arrow /></a>
          <LinkButton href={profile.github}>GitHub</LinkButton>
          <LinkButton href={profile.linkedin}>LinkedIn</LinkButton>
          <LinkButton href={profile.resume} download>Resume</LinkButton>
        </div>
      </div>
      <HeroVisual />
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
    </section>
  );
}

function SectionHeading({ index, eyebrow, title, aside }) {
  return <div className="section-heading"><div><div className="section-eyebrow"><span>{index}</span> / {eyebrow}</div><h2>{title}</h2></div>{aside && <p className="section-aside">{aside}</p>}</div>;
}

function About() {
  return (
    <section className="section-wrap about-section" id="about">
      <SectionHeading index="01" eyebrow="A LITTLE ABOUT ME" title={<>Curiosity in,<br /><span>code out.</span></>} aside="A student. A builder. A work in progress." />
      <div className="about-content"><p className="about-lead">I’m a first-semester B.Tech Computer Science &amp; Engineering student at Bennett University, learning the fundamentals by putting them to use.</p><div className="about-right"><p>Right now, I’m building my foundation in programming and data structures while sharpening how I approach problems. I’ve also spent hands-on time making games in Unity with C# — a fun way to turn ideas into something you can actually play.</p><p>I’m interested in getting better through practice and making useful, practical projects along the way.</p><a className="text-link" href="#projects">A few things I’ve made <Arrow /></a></div></div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills"><div className="section-wrap skills-inner"><SectionHeading index="02" eyebrow="TOOLS & FOUNDATIONS" title={<>What I’m <span>working with.</span></>} aside="The toolkit is growing, one concept at a time." /><div className="skill-grid">{skills.map((group) => <article className="skill-card" key={group.title}><span className="skill-label">{group.label}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}><span className="skill-bullet" />{item}</li>)}</ul></article>)}</div></div></section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card"><div className="project-preview">
      {project.video ? <video className="project-video" src={project.video} autoPlay muted loop playsInline preload="metadata" aria-label={`${project.title} project video`} /> : <div className="video-empty"><span className="video-kicker">PROJECT VIDEO</span><strong>{project.title}</strong><span className="video-empty-copy">No preview video added yet</span></div>}
    </div>
      <div className="project-info"><div className="project-top"><span className="project-number">PROJECT / {project.number}</span><div className="tech-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
        <h3>{project.title} <span>— {project.subtitle}</span></h3><p className="project-description">{project.description}</p>
        <div className="feature-label">BUILT WITH</div><ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        {project.playUrl ? <a className="play-now-button" href={project.playUrl} target="_blank" rel="noreferrer"><span className="play-now-symbol" aria-hidden="true">▶</span>Play Now<Arrow diagonal /></a> : <button className="play-now-button" type="button" disabled><span className="play-now-symbol" aria-hidden="true">▶</span>Play Now</button>}
        {(project.demoUrl || project.sourceUrl) && <div className="project-links" aria-label={`${project.title} links`}>
          {project.demoUrl && <a className="project-link" href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <Arrow diagonal /></a>}
          {project.sourceUrl && <a className="project-link" href={project.sourceUrl} target="_blank" rel="noreferrer">Source code <Arrow diagonal /></a>}
        </div>}
      </div>
    </article>
  );
}

function Projects() {
  return <section className="section-wrap projects-section" id="projects"><SectionHeading index="03" eyebrow="SELECTED PROJECTS" title={<>Made to <span>move.</span></>} aside="Game worlds, built one mechanic at a time." /><div className="project-list">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>;
}

function Education() {
  return (
    <section className="education-section" id="education"><div className="section-wrap"><SectionHeading index="04" eyebrow="THE LEARNING PATH" title={<>Where I’m <span>learning.</span></>} /><div className="education-list"><article className="education-row"><div className="edu-year">2026 — NOW</div><div className="edu-detail"><h3>Bennett University</h3><p>B.Tech <span>·</span> Computer Science &amp; Engineering</p></div><div className="edu-current"><i /> CURRENT</div></article><article className="education-row"><div className="edu-year">2025</div><div className="edu-detail"><h3>Silver Oak Public School</h3><p>Class 12th <span>·</span> Senior Secondary</p></div><div className="edu-current edu-past">COMPLETED</div></article></div></div></section>
  );
}

function Learning() {
  const topics = ['Java', 'Data Structures & Algorithms', 'Problem Solving', 'Software Development'];
  return <section className="learning-section"><div className="section-wrap learning-inner"><div className="learning-copy"><div className="section-eyebrow"><span>05</span> / CURRENTLY LEARNING</div><h2>Still in the<br /><span>making.</span></h2><p>Building the fundamentals that make good ideas work.</p></div><ul className="learning-list">{topics.map((topic, index) => <li key={topic}><span className="learn-number">0{index + 1}</span><span>{topic}</span></li>)}</ul><div className="learning-orbit" aria-hidden="true"><div /><div /></div></div></section>;
}

function Contact() {
  const contacts = [
    { label: 'EMAIL', value: profile.email, href: profile.email ? `mailto:${profile.email}` : '', placeholder: 'Add email address' },
    { label: 'GITHUB', value: profile.github, href: profile.github, placeholder: 'Add GitHub profile' },
    { label: 'LINKEDIN', value: profile.linkedin, href: profile.linkedin, placeholder: 'Add LinkedIn profile' },
  ];
  return <section className="contact-section" id="contact"><div className="section-wrap"><div className="section-eyebrow"><span>06</span> / GET IN TOUCH</div><div className="contact-heading"><h2>Have a good<br /><span>one in mind?</span></h2><p>I’m always up for learning something new, talking through an idea, or building a project.</p></div><div className="contact-grid">{contacts.map((contact) => <div className="contact-item" key={contact.label}><span>{contact.label}</span>{contact.href ? <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{contact.value}<Arrow diagonal /></a> : <span className="contact-placeholder">{contact.placeholder}</span>}</div>)}</div><div className="contact-bottom"><a className="wordmark" href="#home"><span className="wordmark-mark">bg</span><span>BHAVIT GOYAL</span></a><span><span className="footer-star">✳</span></span><a href="#home" className="back-top">BACK TO TOP ↑</a></div></div></section>;
}

export default function App() {
  return <><Header /><main><Hero /><div className="page-rule" /><About /><Skills /><Projects /><Education /><Learning /><Contact /></main></>;
}
