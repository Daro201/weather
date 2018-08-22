import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



const WeatherMap = ({ latt, long }) => (
	<div>
    	<Map google={window.google} zoom={8} 
    		style={{width: '90%', height: '500px', position: 'relative', padding: '5%', margin: '2%'}}
    		initialCenter={{
            	lat: latt,
            	lng: long
          	}}
    		center={{
            	lat: latt,
            	lng: long
          	}}
        >
 
        	<Marker 
        		position={{lat: latt, lng: long}}
                name={'Current location'} 
            />
 
      	</Map>
    </div>
);

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAykKagri4G07zkLSV8bopBMbiIXRcdCSk'),
  LoadingContainer: WeatherMap
})(WeatherMap);
