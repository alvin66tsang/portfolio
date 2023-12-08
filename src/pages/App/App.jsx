import React, { useState } from 'react';
import Grid from '../../components/Grid/grid'
import Taskbar from '../../components/Taskbar/taskBar';
import Home from '../Home/home';
import Window from '../../components/Window/window';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import "yet-another-react-lightbox/styles.css"; 

function App() {

  const [state, setState] = useState({
    close: false,
    fullScreen: true,
    component: <Home />
  });

  const dialogOptions = (option) => {
    setState((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const setSection = (section) => {
    setState((prev) => ({...prev, close: !prev.close, component: <Home cp={section} />}));
  }

  return (
    <>
      <Grid dialogOptions={dialogOptions} setSection={setSection}></Grid>
      <Window title={'About Me'} width={1000} height={700} x={'center'} y={100} background={'#202020'} component={state.component} dialogOptions={dialogOptions} hidden={state.close} />
      <Taskbar setSection={setSection} />
    </>
  );
}

export default App;
