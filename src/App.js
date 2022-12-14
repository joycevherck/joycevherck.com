import React from 'react';
import './App.scss';
import Friday from './projects/friday.png';
import NuffieldOLJ from './projects/nuffield-olj.png';
import PBX from './projects/pbx.png';
import Editor from './projects/pbx-editor.png';
import SMARTY from './projects/smarty.png';
import CfH from './projects/cards-for-humanity.png';

function App() {
  const now = new Date().getFullYear();
  const start = new Date('2014').getFullYear();

  return (
    <div className="container">
      <aside className="sidebar">
        <header className="header">
          <h1>
            Joyce
            <br />
            Van
            <br />
            Herck
          </h1>
        </header>
      </aside>
      <main className="content">
        <div className="fullWidth">
          <h2>
            <span role="img" aria-label="Sparkle emoji">✨ </span>
            <br />
            CSS, accessibility and a side of JavaScript
          </h2>
          <p>
            {/* since 2014 */}
            Hi, I&apos;m Joyce Van Herck. I&apos;m a Frontend Developer with {now - start} years of experience. I have extensive experience working both in agencies and product companies working with a variety of JS libraries and frameworks.
          </p>
          <p>I have a passion inclusive, accessibility internet. I also love CSS and am always on the look out for new specs being released.</p>
          <h2>
            <span role="img" aria-label="Emoji of woman using laptop">👩🏼‍💻</span>
            <br />
            Projects
          </h2>
        </div>
        <div className="spacer" />

        <div className="projectImage">
          <img src={CfH} alt="Screenshot of Cards for Humanity" />
        </div>
        <div className="projectDetails">
          <h3>Cards for Humanity</h3>
          <p>
            Cards for Humanity is an inclusive design tool. It started as a set of physical cards that the Idean team created for workshops with clients and in 2020 I helped bring the cards online.
          </p>
          <p>
            The site is built using <span>create-react-app</span>. My initial contribution was to help build the UI and fine tune the animations.
          </p>
          <p>
            In the second phase I made the website into a <span>Progressive Web App</span>.
          </p>
        </div>

        <div className="projectImage">
          <img src={SMARTY} alt="Screenshot of smarty.co.uk" />
        </div>
        <div className="projectDetails">
          <h3>SMARTY</h3>
          <p>
            We continuously built new features for SMARTY customers based on user feedback. The site is built using a combination of <span>Gatbsy</span> for the marketing site and <span>React</span> with Ruby on Rails for the order and user account journeys.
          </p>
          <p>
            When I joined the team I helped set up a better release process using <span>git flow</span>. I also took ownership of <span>accessibility</span> by introducting standards into the dev and QA process while also implementing numerous fixes based on an accessibility report.
          </p>
        </div>

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
            As we were working on a live site as part of the client&apos;s development team we continuously deployed features as soon as they were built and tested.
          </p>
        </div>

        <div className="projectImage">
          <img src={Editor} alt="Screenshot of the Photobox editor" />
        </div>
        <div className="projectDetails">
          <h3>Photobox Editor</h3>
          <p>
            Photobox&apos;s old photo editor was still running on Flash and with many browsers no longer supporting Flash it was time to update it to a more modern stack with <span>React</span>.
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
          <p>In 2016 we first built Nuffield Health&apos;s online gym joining platform. Prior to this you couldn&apos;t join a Nuffield gym online. Gym joining has since had a few interations, all of which I was a part of.</p>
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

      </main>
    </div>
  );
}

export default App;
