import {
  ArrowDown,
  ArrowUpRight,
  Sprout,
  Globe2,
  BookOpen,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { focusAreas, projects } from "../data/content";
import { CtaBand } from "../components/Shared";
import React from "react";

const icons = [BookOpen, Sprout, Globe2, Users];
export default function Home() {
  return (
    <>
      <section className='hero'>
        <div className='hero-image' />
        <div className='hero-shade' />
        <div className='container hero-content'>
          <div className='hero-copy'>
            <span className='eyebrow eyebrow-light'>
              CULTURE · NATURE · COMMUNITY
            </span>
            <h1>
              Our heritage is
              <br />
              our <em>future.</em>
            </h1>
            <p>
              We work to preserve the richness of our cultures, protect the
              natural world and empower communities to thrive.
            </p>
            <div className='hero-actions'>
              <Link className='button button-ivory' to='/our-work'>
                Discover our work <ArrowUpRight size={17} />
              </Link>
              <Link className='text-link text-link-light' to='/about'>
                Who we are <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className='hero-bottom container'>
          <span>ROOTED IN THE PAST. INVESTED IN TOMORROW.</span>
          <a href='#intro' aria-label='Scroll down'>
            <ArrowDown size={18} />
          </a>
          <span>01 / 04</span>
        </div>
      </section>
      <section className='intro-section section-pad' id='intro'>
        <div className='container intro-grid'>
          <div data-reveal>
            <span className='eyebrow'>A FOUNDATION FOR WHAT MATTERS</span>
            <h2>
              Protecting the things
              <br />
              that make us <em>who we are.</em>
            </h2>
          </div>
          <div className='intro-copy' data-reveal>
            <p className='lead'>
              Heritage Cultural and Natural Foundation exists to connect people
              with the value of their cultural identity and the natural
              environment.
            </p>
            <p>
              We believe lasting progress begins when communities are equipped
              to honour their past, care for their surroundings and shape their
              own future.
            </p>
            <Link className='text-link' to='/about'>
              Discover our story <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className='focus-section section-pad'>
        <div className='container'>
          <div className='section-heading' data-reveal>
            <div>
              <span className='eyebrow'>WHAT GUIDES US</span>
              <h2>
                Our areas of <em>focus.</em>
              </h2>
            </div>
            <p>
              Four connected pathways towards a more inclusive, resilient and
              sustainable future.
            </p>
          </div>
          <div className='focus-grid'>
            {focusAreas.map((item, i) => {
              const Icon = icons[i];
              return (
                <article className='focus-card' key={item.number} data-reveal>
                  <div
                    className='focus-photo'
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <span>{item.number}</span>
                  </div>
                  <div className='focus-card-body'>
                    <Icon size={22} strokeWidth={1.5} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className='statement-section'>
        <div className='statement-image' />
        <div className='statement-content' data-reveal>
          <span className='eyebrow eyebrow-light'>OUR BELIEF</span>
          <h2>
            When we care for
            <br />
            our roots, we help
            <br />
            our <em>future flourish.</em>
          </h2>
          <p>
            Culture gives us identity. Nature gives us life. Communities give us
            strength. Our work brings them together.
          </p>
          <Link className='text-link text-link-light' to='/our-work'>
            Explore our approach <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className='projects-section section-pad'>
        <div className='container'>
          <div className='section-heading' data-reveal>
            <div>
              <span className='eyebrow'>FROM PURPOSE TO ACTION</span>
              <h2>
                Work that makes
                <br />
                <em>a difference.</em>
              </h2>
            </div>
            <Link className='text-link' to='/projects'>
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className='project-grid'>
            {projects.map((p, i) => (
              <article className='project-card' key={p.title} data-reveal>
                <Link
                  to='/projects'
                  className='project-image'
                  style={{ backgroundImage: `url(${p.image})` }}
                  aria-label={`Explore ${p.title}`}
                >
                  <span className='round-arrow'>
                    <ArrowUpRight size={19} />
                  </span>
                </Link>
                <div className='project-info'>
                  <span className='eyebrow'>{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
