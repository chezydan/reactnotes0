import React, {useState} from 'react'

const AddNote = ({handleAddNote})=>{
    const [noteText, setNoteText]=useState('')
    const characterLimit =200

    const handleChange=(e)=>{
            if( e.target.value.length< characterLimit+1){
        setNoteText(e.target.value)
            }

    }

    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
        handleAddNote(noteText)
        setNoteText('')
        }
    }

    return(<>        <div className="note new" >
            <textarea  
            rows='8'
            cols='10'
            placeholder="type to add"
            onChange={handleChange}
            value={noteText}></textarea>
            <div className='note-footer'>
                <small>{characterLimit-noteText.length} remaining</small>
                <button className="save"
                onClick={handleSaveClick}>Save </button>
            
            

        </div>
        </div>
        </>
      )



    }
export  default AddNote;