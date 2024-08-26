import React from 'react';
import './App.scss';
// import NuffieldOLJ from './projects/nuffield-olj.png';
import PBX from './projects/pbx.png';
import Editor from './projects/pbx-editor.png';
import SMARTY from './projects/smarty.png';
import CfH from './projects/cards-for-humanity.png';
import A11yChecker from './projects/a11y-checker.png';
import RTL from './projects/rtl.png';

function App() {
  const setEmail = () => {
    const encEmail = 'am95Y2UudmhlcmNrQGdtYWlsLmNvbQ==';
    return `mailto:${window.atob(encEmail)}`;
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="gradient-text">JVH</h1>
      </header>
      <aside className="sidebar">
        <h2>
          <span role="img" aria-label="Sparkle emoji">
            ✨{' '}
          </span>
          <br />
          I&apos;m Joyce Van Herck and I&apos;m a Senior Frontend Engineer
        </h2>
        <p>
          I have over 10 years of experience. I have extensive experience
          working both with agencies and product companies using <span>React</span>, <span>TypeScript</span> and <span>vanilla JavaScript</span>. I have a passion for <span>accessibility</span> and anything that involves <span>CSS</span>.
        </p>
      </aside>
      <main className="content">
        <div className="fullWidth">
          <h2>
            <span role="img" aria-label="Emoji of woman using laptop">
              👩🏼‍💻
            </span>
            <br />
            Projects
          </h2>
        </div>

        <div className="project">
          <div className="projectImage">
            <img src={RTL} alt="Screenshot of Typeform right-to-left language support" />
          </div>
          <div className="projectDetails">
            <h3>Add support for right-to-left languages (2023)</h3>
            <p>
              At Typeform, I noticed that there were regular requests from customers for us to support Arabic and Hebrew and so during one of our hackathon weeks, I put together a POC to show how we could achieve this.
            </p>
            <p>
              After presenting the POC, our team decided that we&apos;d like to implement this work intro production. I scoped the work that would be needed to finalise the feature and created an RTL design rules document to use alongside the implementation.
            </p>
            <p>
              I implemented the support by using <span>logical CSS</span>. I also created a cheat sheet for the developers to refer back to and made sure there was <span>stylelint</span> and <span>visual regression tests</span> in place to prevent regression.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="projectImage">
            <img src={A11yChecker} alt="Screenshot of Typeform Accessibility Checker" />
          </div>
          <div className="projectDetails">
            <h3>Accessibility checker (2020)</h3>
            <p>
              The accessbility checker started off as a hackathon project. As the owners of the Typeform form renderer, we quickly jumped on the opportunity to offer this feature in production. One of our goals was to help form creators to create better forms which includes accessbility.
            </p>
            <p>
              After many discussions about what should be in the final product, I suggested the features that would bring the most immediate value for the customer all of which ended up in the final build.
            </p>
            <p>
              The a11y checker checks the theme colors for color contrast, any images for alt text and shows the user which parts need updating.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="projectImage">
            <img src={CfH} alt="Screenshot of Cards for Humanity" />
          </div>
          <div className="projectDetails">
            <h3>Cards for Humanity (2020)</h3>
            <p>
              Cards for Humanity is an inclusive design tool. It started as a set
              of physical cards that the Idean team created for workshops with
              clients and in 2020 I helped bring the cards online.
            </p>
            <p>
              The site is built using <span>create-react-app</span>. My initial
              contribution was to help build the UI and fine tune the animations.
            </p>
            <p>
              In the second phase I made the website into a{' '}
              <span>Progressive Web App</span>.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="projectImage">
            <img src={SMARTY} alt="Screenshot of smarty.co.uk" />
          </div>
          <div className="projectDetails">
            <h3>SMARTY (2019-2021)</h3>
            <p>
              We continuously built new features for SMARTY customers based on
              user feedback. The site is built using a combination of{' '}
              <span>Gatbsy</span> for the marketing site and <span>React</span>{' '}
              with Ruby on Rails for the order and user account journeys.
            </p>
            <p>
              When I joined the team I helped set up a better release process
              using <span>git flow</span>. I also took ownership of{' '}
              <span>accessibility</span> by introducting standards into the dev
              and QA process while also implementing numerous fixes based on an
              accessibility report.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="projectImage">
            <img src={PBX} alt="Screenshot of photobox.com" />
          </div>
          <div className="projectDetails">
            <h3>Photobox (2018-2019)</h3>
            <p>
              The Friday team helped the Photobox in-house dev team to move
              their old website onto a new stack using <span>React</span> and{' '}
              <span>GraphQL</span>.
            </p>
            <p>
              As part of my role I helped set up a grid system using{' '}
              <span>CSS Grid</span>. We used mixins so that it could easily be
              used by other teams across the business. I also helped set up font
              rules and branding in a way that it could easily be replaced with
              branding of the sister companies of the Photobox Group.
            </p>
            <p>
              As we were working on a live site as part of the client&apos;s
              development team we continuously deployed features as soon as they
              were built and tested.
            </p>
          </div>
        </div>

        <div className="project">
          <div className="projectImage">
            <img src={Editor} alt="Screenshot of the Photobox editor" />
          </div>
          <div className="projectDetails">
            <h3>Photobox Editor (2018-2019)</h3>
            <p>
              Photobox&apos;s old photo editor was still running on Flash and with
              many browsers no longer supporting Flash it was time to update it to
              a more modern stack with <span>React</span>.
            </p>
            <p>
              I joined the team during the last two months before handover so I
              had to quickly get up to speed with a complex code base.
            </p>
            <p>
              I used my expertise from the main Photobox website to set up
              branding for the editor so that it could also be used for their
              sister companies. I also implemented a couple of new features like
              swapping images.
            </p>
          </div>
        </div>

        {/* <div className="project">
          <div className="projectImage">
            <img src={NuffieldOLJ} alt="Screenshot of join.nuffieldhealth.com" />
          </div>
          <div className="projectDetails">
            <h3>Nuffield Health gym joining (2016-2018)</h3>
            <p>
              In 2016 we first built Nuffield Health&apos;s online gym joining
              platform. Prior to this you couldn&apos;t join a Nuffield gym
              online. Gym joining has since had a few interations, all of which I
              was a part of.
            </p>
            <p>
              The site is built on a Ruby on Rails backend. The frontend is using
              a more traditional setup using HTML, scss and{' '}
              <span>JavaScript</span>.
            </p>
          </div>
        </div> */}
      </main>

      <footer>
        <span>JVH</span>
        <div>
          <ul>
            <li><a href="https://www.linkedin.com/in/joycevanherck/">LinkedIn</a></li>
            <li><a id="contact" href={setEmail()}>Contact</a></li>
          </ul>
          <div className="copyright">
            &copy; Joyce Van Herck
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
