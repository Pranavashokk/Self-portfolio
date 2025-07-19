import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Navbar() {
  return (
    <div>
      <ul className="listofitems">
        <li>
          <img src="https://i1.sndcdn.com/avatars-wVog4zYNaujhm6jD-yGmnkA-t1080x1080.jpg" className="logo" alt="Logo" />
        </li>
        <li><AnchorLink className='anchor' href='#info'>HOME</AnchorLink></li>
        <li><AnchorLink className='anchor' href='#aboutme'>ABOUT</AnchorLink></li>
        <li>INTERESTS</li>
        <li>CONTACTS</li>
      </ul>
    </div>
  );
}

/*Make color changing text later*/
function Info() {
  return (
    <div id="info" className="info">
      <img src="https://media.discordapp.net/attachments/643797803956568105/1395448405907734558/pran.png?ex=687a7c1a&is=68792a9a&hm=852090e65a5156fa96525ae40aad2ebce157e059da50139bab12e00a93824e7a&=&format=webp&quality=lossless&width=1104&height=621" className="pranmage" alt="Pranav" />
      <h1>Pranav Ashok Kumar</h1>
      <p> I am a student of NITW (ece vlsi) and im making this (dont make fun of me)</p>
      <button className="knowmore">Get to know more</button>
    </div>
  );
}


function useTypewriter({ text, speed = 150, active = true }) {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    if (!active) {
      setDisplayedText('');
      return;
    }
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, active]);
  return displayedText;
}


function Typewriter({ text, speed, active }) {
  const displayedText = useTypewriter({ text, speed, active });
  return <p>{displayedText}</p>;
}

function Aboutme() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowTypewriter(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="aboutme" className="aboutme" ref={aboutRef}>
      <img src="https://media.discordapp.net/attachments/643797803956568105/1395457573490131096/image.png?ex=687a84a3&is=68793323&hm=748e99b911d637edda0958ac20d552c14d8e7952de6df2c1f3e5ba592af17c44&=&format=webp&quality=lossless&width=609&height=728" alt="About Me" />
      <div className="aboutme-text">
        <h2>About Me</h2>
        <Typewriter
          text="Hi I am Pranav Ashok Kumar. I am currently a second year student studying in national institute of technology warangal. Pretend like this is a para . ok this is my para. hm i have no interesting hobbies at all and no goals in my life. i am just writing stuff here as a filler"
          speed={50}
          active={showTypewriter}
        />
      </div>
    </div>
  );
}




function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <Aboutme />
    </div>
  );
}

export default App;
