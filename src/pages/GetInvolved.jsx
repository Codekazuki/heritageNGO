import { useState } from "react";
import { PageIntro } from "../components/Shared";
import { ArrowUpRight, Mail, HandHeart, Users, Sprout } from "lucide-react";
import React from "react";

export default function GetInvolved() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Volunteering",
    message: "",
  });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry: ${form.interest}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`,
    );
    window.location.href = `mailto:hello@heritagefoundation.org?subject=${subject}&body=${body}`;
  };
  return (
    <>
      <PageIntro
        eyebrow='GET INVOLVED'
        title={
          <>
            The future is something
            <br />
            we build <em>together.</em>
          </>
        }
        text='Your time, ideas, skills or partnership can help protect the things that matter. Find your place in the work.'
        image='https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=85'
      />
      <section className='section-pad'>
        <div className='container'>
          <div className='section-heading' data-reveal>
            <div>
              <span className='eyebrow'>MAKE A DIFFERENCE</span>
              <h2>
                There are many ways
                <br />
                to <em>take part.</em>
              </h2>
            </div>
            <p>
              Change grows when people bring their strengths together. We'd love
              to hear what inspires you.
            </p>
          </div>
          <div className='involve-grid'>
            {[
              {
                icon: HandHeart,
                title: "Volunteer your time",
                text: "Share your energy, experience and skills to support meaningful community work.",
              },
              {
                icon: Users,
                title: "Partner with us",
                text: "Collaborate with the foundation as an organisation, institution or community group.",
              },
              {
                icon: Sprout,
                title: "Support our mission",
                text: "Help us grow awareness and support for cultural preservation and nature conservation.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article className='involve-card' data-reveal key={title}>
                <Icon size={27} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className='contact-layout'>
            <div className='contact-copy' data-reveal>
              <span className='eyebrow'>START A CONVERSATION</span>
              <h2>
                Let's make
                <br />
                <em>good things happen.</em>
              </h2>
              <p>
                Tell us a little about yourself and how you'd like to get
                involved. We'll be glad to hear from you.
              </p>
              <a
                className='contact-email'
                href='mailto:hello@heritagefoundation.org'
              >
                <Mail size={18} /> hello@heritagefoundation.org
              </a>
              <small className='form-hint'>
                Replace this sample email address with the foundation's official
                contact email before launch.
              </small>
            </div>
            <form className='contact-form' onSubmit={submit} data-reveal>
              <label>
                Your name
                <input
                  required
                  name='name'
                  value={form.name}
                  onChange={update}
                  placeholder='Full name'
                />
              </label>
              <label>
                Email address
                <input
                  required
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={update}
                  placeholder='you@example.com'
                />
              </label>
              <label>
                I'm interested in
                <select name='interest' value={form.interest} onChange={update}>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Supporting the mission</option>
                  <option>General enquiry</option>
                </select>
              </label>
              <label>
                Your message
                <textarea
                  required
                  rows='4'
                  name='message'
                  value={form.message}
                  onChange={update}
                  placeholder="Tell us how you'd like to get involved..."
                />
              </label>
              <button className='button button-green' type='submit'>
                Send an enquiry <ArrowUpRight size={17} />
              </button>
              <p className='form-hint'>
                This form opens your email application; it does not store or
                submit data to a server.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
