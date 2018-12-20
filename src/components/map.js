import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow ,withScriptjs} from 'react-google-maps';


const MyGoogleMap = withScriptjs(withGoogleMap((props) =>

<GoogleMap defaultZoom={12} defaultCenter={{lat: 31.7774208, lng: 35.23711}}>
      {props.locations.map((location) => {
      return (
      <Marker
        key={location.title}
        position={location.location}
        onClick={() => props.onMarkerClick(location)}>

        {location.locationToShow && <InfoWindow onCloseClick={() => props.cancelDescription(location)}>
        
        <div className="result-info-window">
          <h2 className="result-name">{location.title}</h2>
          <p className="result-details">{location.description}</p>
        </div>
      </InfoWindow>}
    </Marker>
    )
  })}
</GoogleMap>
))

class MyMap extends Component {
  
  render() {  
    return (
      <MyGoogleMap
      isMarkerShown
      locations={this.props.locations}
      showDiscription= {this.props.showDiscription}
      onMarkerClick={this.props.onMarkerClick}
      cancelDescription={this.props.cancelDescription}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgY_eB2CduwOA970uBKa-sbM2voiB4kw0&&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    );
  }
}
export default MyMap;









// class MyMap extends Component {

    
//   onMarkerClick = (props) => this.props.onMarkerClick(props);

//   windowHasClosed = () =>{
//     console.log("closed");
//   } 

//   windowHasOpened = () =>{
//     console.log("closed");
//   } 

//   render() {
//     return (
//       <div id='map' >
//       <GoogleMap style={{width: '70%'}} google={this.props.google}  
//             zoom={14} initialCenter={{lat: 31.7774208,
//                                       lng: 35.23711
//                                      }}>
//         {
//            this.props.locations.map(location =>{
//              if(this.props.locationsToShow.find(({props})=>props.title===location.title)){
//                console.log("hi!!!!!!")
//                debugger;
//             return <Marker key={location.id} title={location.title}
//                            onClick={this.onMarkerClick}
//                            position={location.location} 
//                            description={location.description}>
//                            <InfoWindow visible={true}  onOpen={this.windowHasOpened}
//                                         onClose={this.windowHasClosed}>
//                             <div>
//                               <h1>{location.title}</h1>
//                               <p>{location.description}</p>
//                             </div>
//                           </InfoWindow>  
//                     </Marker>
//              }
//               return <Marker key={location.id} title={location.title}
//                            onClick={this.onMarkerClick}
//                            position={location.location} 
//                            description={location.description}>  
//                     </Marker>
//            })
//         }                             
//       </GoogleMap>
//       </div>
//     );
//   }
// }

// export default MyMap;
