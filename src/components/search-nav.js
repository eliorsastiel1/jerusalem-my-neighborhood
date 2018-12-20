import React, { Component } from 'react';
import '../css/search-nav.css';

 
class SearchNav extends Component {
    constructor(){
        super();
        this.state={
            search:''
        };
    }

    updateSearch = (e)=>{
        this.setState({
            search: e.target.value.substr(0,20)
        })
    } 

    handleRegionClick = (title) =>{
        this.props.onMarkerClick(title);
    }

 

  render() {
      var itemLocation;
      if(this.props.locations){
        itemLocation=this.props.locations.filter(location =>{       
            return location.title.toString().toLowerCase().indexOf(this.state.search.toString().toLowerCase()) !== -1
        })
        .map(place =>{
            return <button className="button red" key={place.title} onClick={() => this.handleRegionClick(place)}>  {place.title}</button>
        },this)
      }
    return (
      <div className="search-list-section">
          <div className="search-place">
              <h3>Search for a place:</h3>
               <input type="text"  value={this.state.search} onChange={this.updateSearch.bind(this)}/>
           </div>
           {itemLocation}
      </div>
    );
  }
}


export default SearchNav;
