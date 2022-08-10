import React from 'react'
import {MdSearch} from 'react-icons/md'

function Search({ handleSearchNote}) {
  return (
    <div className='search'>

        <MdSearch className='searcch-icons' size='1.3em'/>
    <input type='text'
    className='input'
    placeholder='type to search...'
    onChange={(event)=>{handleSearchNote(event.target.value)}} />

    </div>
  )
}

export default Search