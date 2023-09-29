import { useEffect, useState } from 'react';
import NavBar from './components/Navbar/navbar'
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Resume from './components/Resume/resumeList'
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import ScrollSpy from "react-ui-scrollspy";

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "yet-another-react-lightbox/styles.css";


function App() {

  const [element, setElement] = useState('home')

  useEffect(() => {
    document.querySelector(`#${element}`).scrollIntoView({ block: 'start',  behavior: 'smooth' })
  }, [element])

  return (
    <ScrollSpy scrollThrottle={100}>
      <NavBar setElement={setElement}></NavBar>
      <Intro id="home"></Intro>
      <About id="about"></About>
      <Resume id="resume"></Resume>
      <Works id="works"></Works>
      <Contact id="contact"></Contact>
      <Footer></Footer>
    </ScrollSpy>
  );
}

export default App;
