import './App.css';
import { Label, Note } from "./types";
import  AddToFav  from './hooksExercise';
import { useState } from 'react';
import { ThemeContext, themes } from './themeContext'; 

function App() {
 const [currentTheme, setCurrentTheme] = useState(themes.light);
 const [favList, setFavList] = useState<string[]>([]);

 const [notes, setNotes] = useState<Note[]>([]); 

 const initialNote = {
   id: -1,
   title: "",
   content: "",
   label: Label.other,
 };
 const [createNote, setCreateNote] = useState(initialNote);
 
 return (
  <ThemeContext.Provider value={currentTheme}>
   <div className='app-container'>
    <form className="note-form">
      <button onClick={(e) => {
        e.preventDefault();
        setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark);
      }}
      className='toggleTheme'>
        Toggle theme
      </button>
       <div>
        <input
        	placeholder="Note Title"
        	onChange={(event) =>
          	setCreateNote({ ...createNote, title: event.target.value })}
        	required>
        </input>
       </div>

       <div>
        <textarea placeholder='Note Content'
          onChange={(event) =>
            setCreateNote({ ...createNote, content: event.target.value })}
          required>
        </textarea>
       </div>

       <div>
        <select className='selectionField' 
          onChange={(event) =>
          	setCreateNote({ ...createNote, label: event.target.value as Label, id: notes.length+1})}
        	required
        >
            <option value="" disabled selected>Choose One</option>
            <option value={Label.personal}>Personal</option>
            <option value={Label.work}>Work</option>
            <option value={Label.study}>Study</option>
            <option value={Label.other}>Other</option>
        </select>
       </div>

       <div>
        <button className='submitButton' type="submit"
          onClick={(e) => {
            setNotes((prevNotes) => [...prevNotes, createNote]); 
            e.preventDefault();
          }}
        >
          Create Note
        </button>
       </div>
       <h2>List of favorites:</h2>
       {favList.map((item) => (
         <>{item} <br/></>
       ))}
    </form>
    
    <div className="notes-grid" >
       {notes.map((note) => (
         <div
           key={note.id}
           className="note-item"
           style={{
            background: currentTheme.background,
            color: currentTheme.foreground,
            padding: "20px",
          }}>
           <div className="notes-header">
            <AddToFav title = {note.title} favList={favList} setFavList={setFavList}/>
             <button
              onClick={(e) => {
                e.preventDefault();
                setNotes(notes.filter(item => item !== note))
              }}>
              x
             </button>
           </div>
           <h2 contentEditable='true'> {note.title} </h2>
           <p contentEditable='true'> {note.content} </p>
           <p contentEditable='true'> {note.label} </p>
         </div>
       ))}
     </div>
   </div>
  </ThemeContext.Provider>
 );
}

export default App;