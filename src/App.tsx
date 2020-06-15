import React from 'react'
import flowers from './flowers.png'
import flourish from './flourish.png'
import german from './germany.png'
import './App.css'

function App() {
  return (
    <div className="flyer">
      <div className="section screen-dependent-section-properties">
        <div className="line" />
        <h2 className="item">LEARN GERMAN ONLINE</h2>
        <ul className="item">
          <li>All levels (A1 - C2)</li>
          <li>Individual and group tuition</li>
          <li>Tailor-made classes</li>
          <li>International House certiﬁed</li>
          <li>Exam preparation (e.g. for Goethe, GCSE, A-level, Cambridge)</li>
          <li>All material available online (included in the rate)</li>
          <li>Skype, FaceTime or Zoom</li>
          <li>Free trial class</li>
          <li>Competitive hourly rates</li>
        </ul>
        <img alt="flowers" className="item" src={flowers}/>
        <img alt="section end" className="item flourish" src={flourish}/>
      </div>
      <div className="section screen-dependent-section-properties">
        <div className="line" />
        <img alt="germany" className="item germany central-text" src={german}/>
        <div className="central-text vertical-padding">
          After having successfully passed my
          International House certificate in
          September 2002, I have been
          teaching at various companies (e.g.
          JP Morgan, Barclays, HSBC,
          Moodys, Lloyds, Lidl) both in
          England (London) and in
          Switzerland.
        </div>
        <h4 className="central-text">GERMAN ONLINE TUITION</h4>
        <div className="central-text">
          <p>Email : <a href="mailto:schorrn@gmail.com">schorrn@gmail.com</a></p>
          <p>Mobile : <a href="tel:0044 7570 404 403">0044 7570 404 403</a></p>
          <p><a href="https://www.linkedin.com/in/nadine-schorr-7b7560b9/">LinkedIn</a></p>
        </div>
      </div>
      <div className="section screen-dependent-section-properties">
        <div className="line" />
        <div className="item central-text vertical-padding">
          After having successfully passed my
          International House certificate in
          September 2002, I have been
          teaching at various companies (e.g.
          JP Morgan, Barclays, HSBC,
          Moodys, Lloyds, Lidl) both in
          England (London) and in
          Switzerland.
        </div>
        <div className="line" />
        <div className="item central-text vertical-padding">
          Online tuition ensures that you
          learn to speak in a setting that
          reflects your real-world
          experiences. The cornerstone of
          this method is to give you the
          confidence you need to speak a
          new language outside of the
          lessons. Your course plan is flexible
          and adapts to you, making it easier
          to attend your language lessons
          whenever you are available. No
          matter what level of proficiency
          you have when you start the
          course, after just a few weeks you
          will see immediate improvements.
        </div>
        <img alt="section end" className="item flourish" src={flourish}/>
      </div>
    </div>
  );
}

export default App;
