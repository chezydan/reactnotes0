import React from 'react'
import "./App.css";
import NoteList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header';
//import Note from './components/Note'
import {nanoid} from  'nanoid'
import {useState ,useEffect} from 'react'



function App() {
  const [notes,setNotes]=useState(
    [ /*
{id:nanoid(), text:"note1", date:'15/07/2022'},
{id:nanoid(), text:"note  2", date:'15/07/2022'},
{id:nanoid(), text:"note three", date:'15/07/2022'},
{id:nanoid(), text:"another note", date:'15/07/2022'},
{id:nanoid(), text:"note1  note 22222", date:'15/08/2022'},
{id:nanoid(), text:"note1  note new ", date:'25/08/2022'},
{id:nanoid(), text:"note1  note not last", date:'15/10/2022'},
{id:nanoid(), text:"note55 ", date:'15/07/2022'}
*/
  ])
const [searchText, setSearchText] =useState('')

const [darkMode, setDarkMode]=useState(false)

  const addNote = (text) =>{
    const date  = new Date()
    const newNote = {
      id:nanoid(),
      text:text,
      date: date.toLocaleDateString()  }
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
    }
  
  const deleteNote =  (id)=>{
    const prevNotes= notes
    setNotes(prevNotes.filter( (item) => {return item.id !== id}
      ) )
  }

  useEffect(
    ()=>{
      const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'))
      if (savedNotes){
        setNotes(savedNotes)      }
    }
    ,[]
  )
  useEffect( ()=>{
      localStorage.setItem('react-notes-app-data',
      JSON.stringify(notes))
 
  } ,[notes])



  return (
    <div className={`${darkMode && 'dark-mode'} `} >
    <div className="container">
      <Header  handleTogleDarkMode={setDarkMode}/>
      <Search handleSearchNote= {setSearchText}/>
      <NoteList notes={notes.filter( (note) => 
      note.text.toLocaleLowerCase().includes(searchText))
      } 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}/>
    </div>     </div>
  );
}

export default App;
