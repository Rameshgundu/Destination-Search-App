import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  displayTheUserSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const updatedList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <div className="search-bar-container">
          <input
            type="search"
            onChange={this.displayTheUserSearch}
            value={searchInput}
          />
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-img"
            />
          </button>
        </div>
        <ul className="places-container">
          {updatedList.map(eachItem => (
            <DestinationItem places={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
