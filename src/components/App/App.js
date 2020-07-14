// Things I could do next:
// Make addresses clickable and have them open the address in Google Maps in a new tab
// Make images clickable and have them open the business’ website in a new tab
// Clicking on a different sorting option automatically requeries the Yelp API, rather than having to manually click “Let’s Go” again
// Implement your own type of sort (for example, by entering a distance or radius from a central location)
// Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking
// Add autocompletion of addresses to the “Location” input



import React from 'react';
import logo from '../../../src/logo.svg';
import './App.css';
import '../BusinessList/BusinessList';
import '../../util/Yelp';
import Yelp from '../../util/Yelp';
import '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.searchYelp = this.searchYelp.bind(this);
    this.state = {
      businesses: [],
    }
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
      .then(businesses => {
        this.setState({ businesses: businesses });
      });
  }

  render() {
    return (
      <div className="App" >
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    )
  }
}

export default App;