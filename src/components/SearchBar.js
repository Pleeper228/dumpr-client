import React from 'react'
import './searchbar.css'

export class SearchBar extends React.Component {
  render() {
    return (
      <form className='search-form'>
        <input className='search-bar-text' type='text' placeholder='Search by address'></input>
      </form>
    )
  }
}
