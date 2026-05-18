const { useState, useEffect, useRef } = React;

// —————————————— Reusable placeholder ——————————————
function Placeholder({ label, className = "" }) {
  return (
    <>
      <div className="ph-stripes"></div>
      <div className="ph-label">{label}</div>
    </>
  );
}

// real photo, fills the frame
function Photo({ src, alt = "", focus = "50% 50%" }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover", objectPosition: focus,
        display: "block",
      }}
    />
  );
}

function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

function ArrowUR() {
  return (
    <svg className="arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// —————————————— Nav ——————————————
function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"top " + (scrolled ? "scrolled" : "")}>
      <div className="wrap row">
        <a href="#top" className="brand">
          <span className="dot"></span>
          <span>ShiR<i>E</i>state</span>
        </a>
        <div className="nav-links" style={{ display: "flex" }}>
          <a href="#about">{t.nav.about}</a>
          <a href="#values">{t.nav.values}</a>
          <a href="#approach">{t.nav.approach}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
          </div>
          <a href="#contact" className="btn" style={{ padding: "10px 18px" }}>
            {t.nav.cta} <ArrowUR />
          </a>
        </div>
      </div>
    </nav>
  );
}

// —————————————— Hero ——————————————
function Hero({ t }) {
  return (
    <section className="hero wrap" id="top" data-screen-label="01 Hero">
      <div className="hero-grid">
        <div>
          <h1 style={{ marginTop: 22 }}>
            {t.hero.h1_a} <span className="it">{t.hero.h1_b}</span>{t.hero.h1_c}
          </h1>
        </div>
        <div className="hero-meta">
          <p className="lede">{t.hero.sub}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn">{t.hero.cta_primary} <ArrowUR /></a>
            <a href="#approach" className="btn ghost">{t.hero.cta_secondary}</a>
          </div>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="big">
          <Photo src="assets/photo-portrait-laptop.jpg" alt="Елизавета Шилова" focus="55% 30%" />
        </div>
        <div className="side">
          <div className="small-frame">
            <Photo src="assets/photo-flatlay.jpg" alt="" focus="50% 50%" />
          </div>
          <div className="small-frame">
            <Photo src="assets/photo-location.jpg" alt="Montreal" focus="50% 60%" />
          </div>
        </div>
      </div>
      <div className="caption" style={{
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "var(--ink-mute)",
        paddingTop: 14, marginTop: 16, borderTop: "1px solid var(--line)",
        display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap",
      }}>
        <span>↳ Liza Shilova · Founder, ShiREstate</span>
        <span>Photo placeholder · drop final shot</span>
      </div>
    </section>
  );
}

// —————————————— Press strip ——————————————
function Press({ t }) {
  return (
    <section className="press" data-screen-label="02 Press">
      <div className="wrap inner">
        <Eyebrow>{t.press.eyebrow}</Eyebrow>
        <div className="logos">
          {t.press.items.map((p, i) => <span key={i}>{p}</span>)}
        </div>
      </div>
    </section>
  );
}

// —————————————— About / Hi I'm Liza ——————————————
function About({ t, lang }) {
  return (
    <section className="about" id="about" data-screen-label="03 About">
      <div className="wrap about-grid">
        <div className="about-portrait">
          <Photo src="assets/photo-portrait-smile.jpg" alt="Елизавета Шилова" focus="50% 25%" />
        </div>
        <div className="about-content">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <div className="hi">{t.about.hi}</div>
          <h2>{t.about.h2}</h2>

          <dl className="about-facts">
            {t.about.facts.map(([k, v], i) => (
              <div className="fact" key={i}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <p>{t.about.paragraphs[0]}</p>
          <p>{t.about.paragraphs[1]}</p>
          <p>{t.about.paragraphs[2]}</p>
          <p>{t.about.paragraphs[3]}</p>

          <div className="signature">
            <div className="sig-name">{lang === "ru" ? "Елизавета Шилова" : "Liza Shilova"}</div>
            {t.about.signature_meta && <div className="sig-meta">{t.about.signature_meta}</div>}
          </div>
          <div>
            <a href="#contact" className="btn ghost" style={{ marginTop: 8 }}>
              {t.about.cta} <ArrowUR />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// —————————————— Services ——————————————
function Services({ t }) {
  return (
    <section className="services" id="services" data-screen-label="05 Services">
      <div className="wrap">
        <SectionHead eyebrow={t.services.eyebrow} h2={t.services.h2} sub={t.services.sub} />
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <div className="service" key={i}>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>{s.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              <a href="#contact" className="service-cta">{s.cta} <ArrowUR /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// —————————————— Pre-CTA wide portrait ——————————————
function PreCTA({ t }) {
  return (
    <section className="precta" data-screen-label="08 Pre-CTA">
      <div className="precta-frame">
        <Placeholder label={t.preCta.portrait_label} />
        <div className="precta-content">
          <div className="inner">
            <div>
              <Eyebrow>{t.preCta.eyebrow}</Eyebrow>
              <h2 style={{ marginTop: 18 }}>{t.preCta.h2}</h2>
            </div>
            <p>{t.preCta.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// —————————————— Marquee ——————————————
function Marquee({ items }) {
  const list = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {list.map((s, i) => <span key={i}>{s}</span>)}
      </div>
    </div>
  );
}

// —————————————— Stats ——————————————
function Stats({ t }) {
  return (
    <section className="stats wrap" data-screen-label="02 Stats">
      <Eyebrow>{t.stats.eyebrow}</Eyebrow>
      <div className="stats-grid" style={{ marginTop: 32 }}>
        {t.stats.items.map((s, i) => (
          <div className="stat" key={i}>
            <div className="num">{s.num}<span className="sup">{s.sup}</span></div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// —————————————— Problems (Context) ——————————————
function Problems({ t }) {
  return (
    <section className="problems" id="problems" data-screen-label="06 Problems">
      <div className="wrap">
        <div className="problems-head">
          <div className="sec-num">{t.problems.eyebrow}</div>
          <h2>
            {t.problems.h2_a}<em>{t.problems.h2_em}</em>{t.problems.h2_b}<br />
            {t.problems.h2_c}
          </h2>
        </div>
        <div className="problems-grid">
          {t.problems.items.map((p, i) => (
            <div className="problem" key={i}>
              <div className="pn">{p.num}</div>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// —————————————— Strategies (Goals) ——————————————
function Strategies({ t }) {
  return (
    <section className="strategies" id="strategies" data-screen-label="07 Strategies">
      <div className="wrap">
        <div className="strats-head">
          <div className="sec-num">{t.strategies.eyebrow}</div>
          <h2>
            {t.strategies.h2_a}{t.strategies.h2_b}<em>{t.strategies.h2_em}</em>{t.strategies.h2_c}
          </h2>
        </div>
        <div className="strats-grid">
          {t.strategies.items.map((s, i) => (
            <div className="strat" key={i}>
              <div className="strat-icon">{s.icon}</div>
              <div className="goal">{s.goal}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// —————————————— Section head ——————————————
function SectionHead({ eyebrow, h2, sub, id, inverse }) {
  return (
    <div className="section-head" id={id}>
      <div className="head-meta">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{h2}</h2>
      </div>
      <p style={{ fontSize: 18, lineHeight: 1.55, color: inverse ? "color-mix(in srgb, var(--bg) 70%, transparent)" : "var(--ink-soft)", maxWidth: "52ch" }}>
        {sub}
      </p>
    </div>
  );
}

// —————————————— Values ——————————————
function Values({ t }) {
  return (
    <section className="block" data-screen-label="03 Values">
      <div className="wrap">
        <SectionHead id="values" eyebrow={t.values.eyebrow} h2={t.values.h2} sub={t.values.sub} />
        <div className="values-grid">
          {t.values.items.map((v, i) => (
            <div className="value" key={i}>
              <div className="idx">{v.idx}</div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
              <div className="glyph">{v.glyph}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// —————————————— Journey (A → B) ——————————————
function Journey({ t }) {
  const j = t.journey;
  return (
    <section className="journey" id="journey" data-screen-label="08 Journey">
      <div className="wrap">
        <div className="journey-head">
          <div className="sec-num">{j.eyebrow}</div>
          <h2>{j.h2_a}<em>{j.h2_b}</em></h2>
        </div>
        <p className="journey-intro">{j.intro}</p>

        <div className="ab">
          <div className="point">
            <div className="tag">{j.a.tag}</div>
            <div className="big">{j.a.big}</div>
            <h3>{j.a.title}</h3>
            <ul>{j.a.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
          <div className="arrow-cell" aria-hidden="true">
            <svg viewBox="0 0 80 24" fill="none">
              <path d="M0 12 H72 M62 4 L72 12 L62 20" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <div className="point b">
            <div className="tag">{j.b.tag}</div>
            <div className="big">{j.b.big}</div>
            <h3>{j.b.title}</h3>
            <ul>{j.b.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// —————————————— Approach ——————————————
function Approach({ t }) {
  return (
    <section className="approach block" data-screen-label="04 Approach">
      <div className="wrap">
        <SectionHead id="approach" eyebrow={t.approach.eyebrow} h2={t.approach.h2} sub={t.approach.sub} inverse />
        <div className="steps">
          {t.approach.steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// —————————————— Portfolio ——————————————
function Portfolio({ t }) {
  return (
    <section className="block" data-screen-label="05 Track record">
      <div className="wrap">
        <SectionHead id="cases" eyebrow={t.portfolio.eyebrow} h2={t.portfolio.h2} sub={t.portfolio.sub} />
        <div className="portfolio">
          {t.portfolio.cases.map((c, i) => (
            <div className="case" key={i}>
              <div className="img"><Placeholder label={c.img} /></div>
              <h3>{c.name}</h3>
              <div className="meta">
                {c.rows.map(([k, v], j) => (
                  <div className="row" key={j}>
                    <span className="k">{k}</span>
                    <span className="v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// —————————————— Testimonials ——————————————
function Testimonials({ t }) {
  return (
    <section className="block" data-screen-label="06 Testimonials">
      <div className="wrap">
        <SectionHead eyebrow={t.testimonials.eyebrow} h2={t.testimonials.h2} sub={t.testimonials.sub} />
        <div className="quotes">
          {t.testimonials.items.map((q, i) => (
            <div className="quote" key={i}>
              <div className="body">{q.body}</div>
              <div className="who">
                <div className="avatar"><Placeholder label="" /></div>
                <div>
                  <div className="name">{q.name}</div>
                  <div className="role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// —————————————— CTA / Consultation ——————————————
function CTA({ t }) {
  const [sent, setSent] = useState(false);
  const [channel, setChannel] = useState(t.cta.form.contact_options[0]);
  return (
    <section className="cta" id="contact" data-screen-label="07 Consultation">
      <div className="wrap cta-grid">
        <div>
          <Eyebrow>{t.cta.eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 20 }}>{t.cta.h2}</h2>
          <ul className="cta-list">
            {t.cta.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
        <form className="consultation" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="two">
            <div className="field">
              <label>{t.cta.form.name}</label>
              <input type="text" required placeholder="—" />
            </div>
            <div className="field">
              <label>{t.cta.form.email}</label>
              <input type="email" required placeholder="—" />
            </div>
          </div>
          <div className="two">
            <div className="field">
              <label>{t.cta.form.phone}</label>
              <input type="tel" required placeholder="—" />
            </div>
            <div className="field">
              <label>{t.cta.form.country}</label>
              <input type="text" required placeholder="—" />
            </div>
          </div>
          <div className="field">
            <label>{t.cta.form.contact}</label>
            <div className="channel-toggle" role="radiogroup">
              {t.cta.form.contact_options.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  role="radio"
                  aria-checked={channel === opt}
                  className={channel === opt ? "active" : ""}
                  onClick={() => setChannel(opt)}
                >
                  {opt}
                </button>
              ))}
              <input type="hidden" name="channel" value={channel} />
            </div>
          </div>
          <div className="field">
            <label>{t.cta.form.budget}</label>
            <select defaultValue="">
              <option value="" disabled>—</option>
              {t.cta.form.budget_options.map((o, i) => <option key={i}>{o}</option>)}
            </select>
          </div>
          <div className="field">
            <label>{t.cta.form.message}</label>
            <textarea placeholder="—" rows="3" />
          </div>
          <div className="submit">
            <button type="submit" className="btn accent">
              {sent ? "✓" : t.cta.form.submit} <ArrowUR />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// —————————————— Footer ——————————————
function Footer({ t }) {
  return (
    <footer className="site wrap" data-screen-label="08 Footer">
      <div className="row">
        <div>
          <div className="brand" style={{ marginBottom: 18 }}>
            <span className="dot"></span>
            <span>ShiR<i>E</i>state</span>
          </div>
          <p className="tag">{t.footer.tag}</p>
        </div>
        {t.footer.cols.map((c, i) => (
          <div key={i}>
            <h4>{c.h}</h4>
            <ul>{c.links.map((l, j) => {
              const isExt = l.href && /^https?:/.test(l.href);
              return (
                <li key={j}>
                  <a href={l.href} target={isExt ? "_blank" : undefined} rel={isExt ? "noopener" : undefined}>
                    {l.label}
                  </a>
                </li>
              );
            })}</ul>
          </div>
        ))}
      </div>
      <div className="fineprint">
        <span>{t.footer.fine_left}</span>
        <span>{t.footer.fine_right}</span>
      </div>
    </footer>
  );
}

// —————————————— Tweaks ——————————————
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "ru",
  "accent": "#2E4A36",
  "serif": "Cormorant Garamond",
  "showDraftPill": false
}/*EDITMODE-END*/;

const SERIF_OPTIONS = ["Cormorant Garamond", "Instrument Serif", "DM Serif Display", "Playfair Display"];
const ACCENTS = ["#2E4A36", "#1F3A2B", "#3F5E47", "#4A5E3C"];

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useState(t.lang || "en");
  const copy = window.COPY[lang];

  // sync lang into persisted tweaks
  useEffect(() => { if (t.lang !== lang) setTweak("lang", lang); }, [lang]);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // apply accent
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  // load + apply serif
  useEffect(() => {
    const family = t.serif;
    if (!document.querySelector(`link[data-font="${family}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:ital@0;1&display=swap`;
      link.setAttribute("data-font", family);
      document.head.appendChild(link);
    }
    document.documentElement.style.setProperty("--serif", `"${family}", Georgia, serif`);
  }, [t.serif]);

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={copy} />
      <Hero t={copy} />
      <About t={copy} lang={lang} />
      <Marquee items={copy.marquee} />
      <Problems t={copy} />
      <Strategies t={copy} />
      <Values t={copy} />
      <Journey t={copy} />
      <Approach t={copy} />
      <Services t={copy} />
      <PreCTA t={copy} />
      <CTA t={copy} />
      <Footer t={copy} />

      {t.showDraftPill && (
        <div className="draft-note">
          <span className="pulse"></span>
          <span>{copy.draft} · v0.1</span>
        </div>
      )}

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label="Content">
          <window.TweakRadio
            label="Language"
            value={lang}
            onChange={setLang}
            options={[{ value: "en", label: "EN" }, { value: "ru", label: "RU" }]}
          />
          <window.TweakToggle
            label="Draft pill"
            value={t.showDraftPill}
            onChange={(v) => setTweak("showDraftPill", v)}
          />
        </window.TweakSection>
        <window.TweakSection label="Visual">
          <window.TweakColor
            label="Accent"
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={ACCENTS}
          />
          <window.TweakSelect
            label="Heading font"
            value={t.serif}
            onChange={(v) => setTweak("serif", v)}
            options={SERIF_OPTIONS.map(s => ({ value: s, label: s }))}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
