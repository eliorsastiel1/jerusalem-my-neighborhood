import React, { Component } from 'react';
import './App.css';
import MyMap from './components/map'
import SearchNav from './components/search-nav'
import $ from 'jquery'

class App extends Component {
  constructor(){
    super();
    this.state={
      locations:[],
      locationsToShow:[]
    }
  }

  componentWillMount(){

    this.setState({
      locations : [
      {
        id:1,
        title: 'Western Wal',
        location: {
            lat: 31.776717,
            lng: 35.234183
        },
        description: this.getDescription('Western Wal'),
        locationToShow: false
    },
    {
        id:2,
        title: 'Israel Museum',
        location: {
            lat: 31.772301,
            lng: 35.203253
        },
        description: this.getDescription('Israel Museum'),
        locationToShow: false
      },
    { 
        id: 3,
        title: 'Sacher Park',
        location: {
            lat: 31.781408,
            lng: 35.207739
        },
        description: this.getDescription('Sacher Park'),
        locationToShow: false
    },
    {
        id: 4,
        title: 'Mahane Yehuda Market',
        location: {
            lat: 31.784889,
            lng: 35.212410
        },
        description: this.getDescription('Mahane Yehuda Market'),
        locationToShow: false
    },
    {   
        id: 5,
        title: 'Teddy Stadium',
        location: {
            lat: 31.751176,
            lng: 35.190777
        },
        description: this.getDescription('Teddy Stadium'),
        locationToShow: false
    },
    {
      id: 6,
      title: 'Jerusalem Biblical Zoo',
      location: {
          lat: 31.744205,
          lng: 35.171769
      },
      description:this.getDescription('Jerusalem Biblical Zoo'),
      locationToShow: false
    }
      ]
    })
  }

  success = (data)=> {
    const description = data[2] + data[3];
    this.setState(lastState=>{
      return {
        locations: lastState.locations.map(location=>{
          if(location.title === data[0]){
            return {
              ...location,
              description: description
            };
         }
          return location;
        })
      }
    });
  }

  showDiscription = (location )=>{
    debugger;
    this.setState({
      locationsToShow:[{props:location}]
    });
  }

  getDescription = (location) => {
    console.log(location);
    $.ajax({
      url:'http://en.wikipedia.org/w/api.php?action=opensearch&search='+location+'&limit=1&format=json',
      dataType: 'jsonp',
      cache: false,
      success: data => this.success(data),
      error:function(xhr,status,err){
        console.error(status, err.toString());
     }
    })
    
  }

  cancelDescription = (location )=>{
    location.locationToShow=false;
    this.setState({
      location:[{location}]
    });
  }


  onMarkerClick = (location)=>{
    if(location.locationToShow){
      location.locationToShow=false;
    }
    else{
      location.locationToShow=true;
    }
      this.setState(({
        location:[{location}]
      }))
  }
 
  render() {
    return (
      <div className="my-app">
        <h1 className="title"> Jerusalem, Israel </h1>
        <div className="my-map">
          <MyMap onMarkerClick={this.onMarkerClick}
           locationsToShow={this.state.locationsToShow}
           locations={this.state.locations}
           cancelDescription={this.cancelDescription}></MyMap>  
        </div>
        <div className="search-bar">
            <SearchNav locations={this.state.locations} onMarkerClick={this.onMarkerClick}></SearchNav>
        </div> 
      </div>
    );
  }
}


export default App;
