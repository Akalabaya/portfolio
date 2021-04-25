import './App.css';
import Nav from "./component/nav"
import Carousel from "./component/car"
import Use from "./component/use";
import Opt from "./component/opt"
import Cont from "./component/contactme"
function App() {
  let def = [
    {
    title:"RJ Techsol",
    },
    {
      link:["Contact Us","Portfolio","About Me"]
    }
  ]
  return (
    <div className="App ">
  <Nav data={def}/>
  <Carousel/>
  <Use/><br></br>
  <h1 className="display-4">Know About Me</h1>
  <p style={{"font-size":"20px","color":"gray"}}>I am an 4 years experienced IT professional with a history in different areas of information technology like JAVA, Angular, React, Html, CSS, Bootstrap, MySQL. Developed communication, cooperation, and leadership skills from IT support career. Knowledge of setting up a network or other system and experienced in performing maintenance on a regular basis.</p>
  <br></br><br></br>
  <Opt />
  <Cont/>
</div>
  );
}

export default App;
