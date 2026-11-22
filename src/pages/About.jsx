import { PageIntro, CtaBand } from "../components/Shared";
import { HeartHandshake, Eye, Compass } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow='GET TO KNOW US'
        title={
          <>
            A purpose rooted
            <br />
            in <em>what matters.</em>
          </>
        }
        text='We are a foundation committed to the preservation of cultural heritage, the protection of nature and the progress of communities.'
        image='https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=85'
      />
      <section className='section-pad'>
        <div className='container about-lead'>
          <div data-reveal>
            <span className='eyebrow'>WHO WE ARE</span>
            <h2>
              Honouring our past.
              <br />
              Shaping <em>our tomorrow.</em>
            </h2>
          </div>
          <div data-reveal>
            <p className='lead'>
              Heritage Cultural and Natural Foundation is built on a simple
              belief: the things we inherit are not ours to keep alone. They are
              ours to understand, protect and pass on.
            </p>
            <p>
              We bring people, ideas and practical action together around the
              shared value of culture, the environment, education and community
              wellbeing. Our approach is collaborative, inclusive and grounded
              in respect for local knowledge.
            </p>
          </div>
        </div>
      </section>
      <section className='values-section section-pad'>
        <div className='container'>
          <div className='section-heading' data-reveal>
            <div>
              <span className='eyebrow'>OUR FOUNDATION</span>
              <h2>
                What we <em>stand for.</em>
              </h2>
            </div>
          </div>
          <div className='values-grid'>
            {[
              {
                icon: HeartHandshake,
                title: "Our mission",
                text: "To preserve cultural heritage, promote environmental conservation, advance education and support thriving communities through awareness, collaboration and meaningful action.",
              },
              {
                icon: Eye,
                title: "Our vision",
                text: "A world where cultural identity is valued, nature is protected and every community has the knowledge and opportunity to shape a sustainable future.",
              },
              {
                icon: Compass,
                title: "Our approach",
                text: "We listen first, work collaboratively and champion practical, locally relevant solutions that respect people, place and generations to come.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article className='value-card' data-reveal key={title}>
                <Icon size={27} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
