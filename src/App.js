import React from 'react';
import './App.scss';
import Friday from './projects/friday.png';
import NuffieldOLJ from './projects/nuffield-olj.png';
import PBX from './projects/pbx.png';
import Editor from './projects/pbx-editor.png';

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <header className="header">
          Joyce
          <br />
          Van
          <br />
          Herck
        </header>
      </aside>
      <main className="content">
        <div className="fullWidth">
          <h2>
            👩🏼‍💻 🏋🏼‍♀️ 🦮 🍟 💂🏼‍♂️
            <br />
            I write code. I&apos;m a CrossFitter and dog mama. I&apos;m a Belgian in the UK.
          </h2>
          <p>
            I&apos;m a Frontend Developer with over 6 years of experience. I started building website in secondary school using tables but I have since learnt better and CSS Grid is now my layouting method of choice.
          </p>
          <p>I have a passion for creating pixel perfect websites, accessibility and anything JavaScript.</p>
          <h2>
            👩🏼‍💻
            <br />
            Projects
          </h2>
        </div>
        <div className="spacer" />

        <div className="projectImage">
          <img src={PBX} alt="Screenshot of photobox.com" />
        </div>
        <div className="projectDetails">
          <h3>Photobox</h3>
          <p>
            The Friday/PA team helped the Photobox in-house dev team to move their old website onto a new stack using <span>React</span> and <span>GraphQL</span>.
          </p>
          <p>
            As part of my role I helped set up a grid system using <span>CSS Grid</span>. We used mixins so that it could easily be used be other teams across the business. I also helped set up font rules and branding in a way that it could easily be replaced with branding of the sister companies of the Photobox Group.
          </p>
          <p>
            As we were working on a live site as part of the client's development team we continuously deployed features as soon as they were built and tested.
          </p>
        </div>

        <div className="projectImage">
          <img src={Editor} alt="Screenshot of the Photobox editor" />
        </div>
        <div className="projectDetails">
          <h3>Photobox Editor</h3>
          <p>
            Photobox's old photo editor was still running on Flash and with many browsers no longer supporting Flash it was time to update it to a more modern stack with <span>React</span>.
          </p>
          <p>
            I joined the team during the last two months before handover so I had to quickly get up to speed with a complex code base.
          </p>
          <p>
            I used my expertise from the main Photobox website to set up branding for the editor so that it could also be used for their sister companies. I also implemented a couple of new features like swapping images.
          </p>
        </div>

        <div className="projectImage">
          <img src={NuffieldOLJ} alt="Screenshot of join.nuffieldhealth.com" />
        </div>
        <div className="projectDetails">
          <h3>Nuffield Health gym joining</h3>
          <p>In 2016 we first built Nuffield Health&apos;s online gym joining platform. Prior to this you couldn't join a Nuffield gym online. Gym joining has since had a few interations, all of which I was a part of.</p>
          <p>
            The site is built on a Ruby on Rails backend. The frontend is using a more traditional setup using HTML, scss and <span>JavaScript</span>.
          </p>
        </div>

        <div className="projectImage">
          <img src={Friday} alt="Screenshot of wearefriday.com" />
        </div>
        <div className="projectDetails">
          <h3>We Are Friday</h3>
          <p>
            The Friday website was built using Craft CMS, <span>CSS Grid</span>, <span>clip-path</span> and ES6.
          </p>
          <p>
            I worked closely with the designers in order to create a pixel perfect result.
          </p>
        </div>

        {/* <div className="fullWidth">
          <h2>
            🦹🏼‍♀️
            <br />
            Cosplayer
          </h2>
          <p>"The practice of dressing up as a character from a film, book, or video game."</p>
        </div>
        <div className="spacer" /> */}
      </main>
    </div>
  );
}

export default App;
