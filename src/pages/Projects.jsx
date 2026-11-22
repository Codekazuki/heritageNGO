import { PageIntro, CtaBand } from "../components/Shared";
import { projects } from "../data/content";
import React from "react";

export default function Projects() {
  return (
    <>
      <PageIntro
        eyebrow='OUR PROJECTS'
        title={
          <>
            Ideas made <em>real.</em>
          </>
        }
        text='Explore the kinds of initiatives we champion — bringing people together to celebrate culture, care for nature and create opportunities.'
        image='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85'
      />
      <section className='section-pad'>
        <div className='container'>
          <div className='projects-note' data-reveal>
            <span className='eyebrow'>OUR AREAS OF ACTION</span>
            <p>
              Our project portfolio will grow with our partnerships and the
              priorities of the communities we serve. The themes below represent
              the work we are committed to advancing.
            </p>
          </div>
          <div className='all-projects'>
            {projects.map((p, i) => (
              <article
                className='project-card project-card-large'
                key={p.title}
                data-reveal
              >
                <div
                  className='project-image'
                  style={{ backgroundImage: `url(${p.image})` }}
                >
                  <span className='project-index'>0{i + 1}</span>
                </div>
                <div className='project-info'>
                  <span className='eyebrow'>{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className='disclaimer'>
            Project themes shown are illustrative areas of focus, not claims of
            completed programmes or measured impact.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
