import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className='search-bar'>
        <form className='form-search-bar'>
          <label className='label-search-bar'>Video Search</label>
          <input
            type='text'
            value={this.state.term}
            onChange={this.onInputChange}
            className='input-search-bar'
          />
          <button className='button-search-bar' onClick={this.onFormSubmit}>
            Search
          </button>
        </form>
      </div>
    )
  }
}
export default SearchBar
