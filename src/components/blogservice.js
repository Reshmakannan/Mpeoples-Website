import React, { useEffect, useRef, useState } from 'react';
import "../Style/blogservice.css";

const SERVICES = [
  {
    iconClass: 'ti ti-palette',
    title: 'UI / UX Design',
    description: "Looking for interfaces that truly connect with your users? Our design team crafts intuitive, pixel-perfect experiences — from early wireframes to complete, production-ready design systems.",
    tagsLabel: 'Tools & Methods',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'User Research'],
    features: [
      'End-to-end UX research and wireframing',
      'Interactive prototypes and usability testing',
      'Consistent, scalable component libraries',
    ],
  },
  {
    iconClass: 'ti ti-code',
    title: 'Web Development',
    description: "Looking for a professional website that truly represents your brand? Our dev team creates stunning, mobile-friendly, SEO-optimized websites that load fast and convert visitors into customers.",
    tagsLabel: 'Tech Stack',
    tags: ['React.js', 'Next.js', 'Node.js', 'PHP', 'WordPress'],
    features: [
      'Custom responsive design for all screen sizes',
      'Integrated contact forms, chatbots, booking systems',
      'SEO-optimized, fast-loading page architecture',
    ],
  },
  {
    iconClass: 'ti ti-device-mobile',
    title: 'App Development',
    description: "Looking to reach users on every device? We build native and cross-platform mobile apps that feel effortless — combining performance, reliability, and a polished user experience.",
    tagsLabel: 'Platforms & Frameworks',
    tags: ['Flutter', 'React Native', 'iOS', 'Android'],
    features: [
      'Cross-platform apps from a single codebase',
      'Offline-first architecture and push notifications',
      'App Store and Play Store deployment support',
    ],
  },
  {
    iconClass: 'ti ti-cloud',
    title: 'SaaS Development',
    description: "Looking to launch your own software product? We build end-to-end SaaS platforms — from multi-tenant architecture and subscription billing to cloud deployment and continuous delivery.",
    tagsLabel: 'Infrastructure & APIs',
    tags: ['Microservices', 'REST APIs', 'Stripe', 'AWS', 'Docker'],
    features: [
      'Multi-tenancy and role-based access control',
      'Stripe subscription and billing integration',
      'CI/CD pipelines and scalable cloud hosting',
    ],
  },
  {
    iconClass: 'ti ti-speakerphone',
    title: 'Digital Marketing',
    description: "Looking to grow your audience and drive real results? We craft data-driven marketing strategies — putting your brand in front of the right people at the right time, every time.",
    tagsLabel: 'Channels & Tools',
    tags: ['SEO', 'Google Ads', 'Meta Ads', 'Email', 'Analytics'],
    features: [
      'On-page and technical SEO audits',
      'Paid ad campaigns with measurable ROAS',
      'Conversion rate optimisation and A/B testing',
    ],
  },
  {
    iconClass: 'ti ti-brush',
    title: 'Graphic Design',
    description: "Looking for a brand identity that makes a lasting impression? Our creative team produces bold, on-brand visuals and assets that tell your story powerfully — across print and digital.",
    tagsLabel: 'Creative Tools',
    tags: ['Adobe Illustrator', 'Photoshop', 'Canva Pro', 'InDesign'],
    features: [
      'Logo, brand identity and style guide creation',
      'Social media graphics and campaign assets',
      'Print-ready brochures, banners and packaging',
    ],
  },
  {
    iconClass: 'ti ti-movie',
    title: 'Video Editing',
    description: "Looking to stop the scroll and tell your brand's story visually? We produce cinematic brand films and social-ready edits that captivate audiences and communicate your message instantly.",
    tagsLabel: 'Production Tools',
    tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion'],
    features: [
      'Brand films, promos and product showcases',
      'Short-form reels optimised for social platforms',
      'Motion graphics and animated intros',
    ],
  },
];

const STATS = [
  { target: 250, label: 'Projects Delivered', desc: 'Across startups, SMEs, and enterprise clients worldwide' },
  { target: 10,  label: 'Industries Served',  desc: 'From fintech and healthcare to e-commerce and education' },
  { target: 25,  label: 'Team Members',        desc: 'Designers, developers, and strategists working in sync' },
];

function useCountUp(target, duration = 1600, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let s = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      s += step;
      if (s >= target) { s = target; clearInterval(timer); }
      setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function StatCard({ stat, trigger }) {
  const count = useCountUp(stat.target, 1600, trigger);
  return (
    <div className="sstat">
      <div className="snum-wrap">
        <span className="snum">{count}</span>
        <span className="splus">+</span>
      </div>
      <div className="slbl">{stat.label}</div>
      <div className="sdesc">{stat.desc}</div>
    </div>
  );
}

export default function ServicesSection() {
  const stripRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">

        <div className="services-header">
          <p className="services-eyebrow">What We Do</p>
          <h2 className="services-title">Services Built for <span>Digital Excellence</span></h2>
          <p className="services-subtitle">
            From concept to launch, we partner with startups and enterprises to deliver
            solutions that are scalable, secure, and built to last.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc) => (
            <div className="service-card" key={svc.title}>
              <div className="card-top-bar" />
              <div className="card-body">
                <div className="card-head">
                  <div className="service-icon-wrap"><i className={svc.iconClass} aria-hidden="true" /></div>
                  <h3 className="service-card-title">{svc.title}</h3>
                </div>
                <p className="service-card-desc">{svc.description}</p>
                <div className="card-divider" />
                <div className="tags-label">{svc.tagsLabel}</div>
                <div className="service-card-tags">
                  {svc.tags.map((t) => <span className="service-tag" key={t}>{t}</span>)}
                </div>
                <div className="card-divider" style={{ marginTop: 18 }} />
                <ul className="features">
                  {svc.features.map((f) => (
                    <li key={f}><span className="feat-dot" />{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-strip" ref={stripRef}>
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} trigger={triggered} />
          ))}
        </div>

      </div>
    </section>
  );
}