
import './App.css';
import { useState, useEffect, useRef} from 'react';
import About from './About';
import Help from './Help';
import Technologies from './Technologies';
import User from './User';
import Experiences from './Experiences'
import Socials from './Socials';

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(<div className="command-div">$Matthew_Plastrik sudo ~/guest</div>);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div 
      className='app'
      onClick={e=>{inputRef.current.focus()}}
    >
      <div className="welcome">
        Welcome to my terminal inspired portfolio! Type 'help' for a list of commands
        <br/>
        <br/>
      </div>
      
      <div className='terminal'>
        {output}
      </div>
  
      <div className="container">
        <p className="command-div">{'> '} </p> 
        <input 
          ref={inputRef}
          type='text' 
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={e => {
            if(e.key === "Enter"){
              let newOutput = {};
              newOutput = output;
              switch (input) {

                case "about": 
                  newOutput = <div>{output} <About /> <User /> </div>;
                  break;

                case "help":
                  newOutput = <div>{output} <Help /> <User /> </div>;
                  break;

                case "technologies":
                  newOutput = <div>{output} <Technologies /> <User /> </div>;
                  break;

                case "experience":
                  newOutput = <div>{output} <Experiences /> <User /> </div>;
                  break;
                
                case "social -a":
                  newOutput = <div>{output} <Socials /> <User /> </div>;
                  break;

                default:
                  newOutput = <div>{output}<p className="command-div">$ Unknown Command. Type 'help' to see a list of commands.</p> <User /> </div>
              }

              setOutput(newOutput)
              setInput("")
            }
          }}
        />
      </div>
      
      
   </div>
  );
}

export default App;
