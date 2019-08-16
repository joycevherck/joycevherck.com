import React from 'react';
import './App.scss';
import Friday from './projects/friday.png';
import NuffieldOLJ from './projects/nuffield-olj.png';
import PBX from './projects/pbx.png';

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="sidebarWrapper">
          <header className="header">Joyce Van Herck</header>
        </div>
      </aside>
      <main className="content">
        <div className="fullWidth">
          <h2>
            👩🏼‍💻 🏋🏼‍♀️ 🦹🏼‍♀️ 🍟 💂🏼‍♂️
            <br />
            I write code. I&apos;m a CrossFitter and a cosplayer. I&apos;m a Belgian in London.
          </h2>
          <p>
            I&apos;m a Frontend Developer with over 5 years of experience. For the past couple years I&apos;ve mostly been working on React projects.
          </p>
          <p>
            <span class="socialLink">@<a href="https://twitter.com/joycevherck">joycevherck</a></span>
          </p>
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
