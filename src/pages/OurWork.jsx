import { PageIntro, CtaBand } from "../components/Shared";
import { focusAreas } from "../data/content";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function OurWork() {
  return (
    <>
      <PageIntro
        eyebrow='OUR WORK'
        title={
          <>
            Connected by purpose.
            <br />
            Driven by <em>possibility.</em>
          </>
        }
        text='We focus on the connections between culture, nature, learning and community — because meaningful change rarely happens in isolation.'
        image='https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=85'
      />
      <section className='section-pad'>
        <div className='container'>
          <div className='work-intro' data-reveal>
            <span className='eyebrow'>OUR FOUR PILLARS</span>
            <h2>
              Many paths.
              <br />
              <em>One shared future.</em>
            </h2>
            <p>
              Our programmes are designed to respond to local priorities while
              contributing to a bigger picture of sustainable development.
            </p>
          </div>
          <div className='work-list'>
            {focusAreas.map((item, i) => (
              <article className='work-row' key={item.number} data-reveal>
                <span className='work-number'>{item.number}</span>
                <div
                  className='work-photo'
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className='work-detail'>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className='work-note'>
                    LEARN · PARTICIPATE · MAKE AN IMPACT
                  </span>
                </div>
                <ArrowUpRight className='work-arrow' size={23} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
