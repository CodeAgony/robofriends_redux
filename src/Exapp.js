import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
  const filteredRobots = this.state.robots.filter(robots=>{
  // this.setState({searchfield: event.target.value})
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    console.log(filteredRobots);
  }

  render() {
    return (
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots = {filteredRobots}/>
        </div>
    );
  }
}
export default App;