import './App.css';
import { Label, Note } from "./types";
import { dummyNotesList } from "./constants";
import ToggleTheme, { AddToFav } from './hooksExercise';
import { useState } from 'react';
import { ThemeContext, themes } from './themeContext'; 

function App() {
 const [currentTheme, setCurrentTheme] = useState(themes.light);
 const [favList, setFavList] = useState<string[]>([]);
 
 return (
  <ThemeContext.Provider value={currentTheme}>
   <div className='app-container'
   style={{
    background: currentTheme.background,
    color: currentTheme.foreground,
    padding: "20px",
  }}>
    <form className="note-form">
      <button onClick={() => {
        setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark);
      }}>
        Toggle theme
      </button>
       <div><input placeholder="Note Title"></input></div>

       <div><textarea placeholder='Note Content'></textarea></div>

       <div>
        <select className='selectionField'>
            <option value="">Choose One</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="other">Other</option>
        </select>
       </div>

       <div><button className='submitButton' type="submit">Create Note</button></div>
       <h2>List of favorites:</h2>
       {favList.map((item) => (
         <>{item} <br/></>
       ))}
    </form>
    
    <div className="notes-grid" >
       {dummyNotesList.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
            <AddToFav title = {note.title} favList={favList} setFavList={setFavList}/>
             <button>x</button>
           </div>
           <h2> {note.title} </h2>
           <p> {note.content} </p>
           <p> {note.label} </p>
         </div>
       ))}
     </div>
   </div>
  </ThemeContext.Provider>
 );
}

export default App;