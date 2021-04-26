import './App.css';
import Nav from "./component/nav"
import Carousel from "./component/car"
import Use from "./component/use";
import Opt from "./component/opt"
import React, { useState } from 'react';
import Cont from "./component/contactme"
function App() {
  let def = [
    {
    title:"RJ Techsol",
    },
    {
      link:["Contact Us","Why Choose me?","About Me"]
    }
  ]
 const [state,setstate] = useState("0");
  return (
    <div className="App ">
   { state == "0" ?  <div><Nav data={def} s={setstate}/><Carousel/><Use/><br></br><h1 className="display-4">Know About Me</h1><p style={{"font-size":"20px","color":"gray"}}>I am an 4 years experienced IT professional with a history in different areas of information technology like JAVA, Angular, React, Html, CSS, Bootstrap, MySQL. Developed communication, cooperation, and leadership skills from IT support career. Knowledge of setting up a network or other system and experienced in performing maintenance on a regular basis.</p><br></br><br></br><Opt /><Cont/></div>:
   state == "Contact Us" ? <div><Nav data={def} s={setstate}/><Carousel/><Cont/></div>:
   state == "Why Choose me?"?<div><Nav data={def} s={setstate}/><Carousel/><Use/><Opt/><Cont/></div>:
   state == "About Me" ? <div><Nav data={def} s={setstate}/><Carousel/><br></br><h1 className="display-4">Know About Me</h1><p style={{"font-size":"20px","color":"gray"}}>I am an 4 years experienced IT professional with a history in different areas of information technology like JAVA, Angular, React, Html, CSS, Bootstrap, MySQL. Developed communication, cooperation, and leadership skills from IT support career. Knowledge of setting up a network or other system and experienced in performing maintenance on a regular basis.</p><br></br><br></br><Cont/></div>:
   <p className="display-4">Page not found</p>

  }
</div>
  );
}

export default App;
