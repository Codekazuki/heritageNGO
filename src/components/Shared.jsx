import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export function PageIntro({ eyebrow, title, text, image }) {
  return (
    <section
      className='page-intro'
      style={image ? { "--intro-image": `url(${image})` } : {}}
    >
      <div className='container'>
        <span className='eyebrow'>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className='cta-band'>
      <div className='container cta-inner' data-reveal>
        <div>
          <span className='eyebrow eyebrow-light'>BE PART OF THE CHANGE</span>
          <h2>
            Our shared heritage.
            <br />
            <em>Our shared responsibility.</em>
          </h2>
          <p>
            There is a place for you in this work. Let's make a difference,
            together.
          </p>
        </div>
        <Link className='button button-ivory' to='/get-involved'>
          Get involved <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
