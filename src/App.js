import React from 'react'
import './App.css'
import Video from './Video'

function App() {
  return (
    <div className="app">
      <h1>Sup</h1>
      <div className="app__videos">
        <Video 
          url="http://techslides.com/demos/sample-videos/small.ogv"
          channel="karlnassar1" 
          description="WOW TRACTOR" 
          song="Wake me Up - Avicii" 
          likes={129} 
          messages={50} 
          shares={28}
        />
        
        <Video 
          url="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4"
          channel="RalphNassar" 
          description="Popeye For President!! lol" 
          song="WAP - CardiB ft.Megan" 
          likes={5100} 
          messages={3451} 
          shares={2456}
        />
      </div>
    </div>
  );
}

export default App;
