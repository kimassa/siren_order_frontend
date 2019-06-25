import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default class ListMap extends Component {
  
  state = {
    storeList: [],
    coords: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  };
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async position => {
        
        const res = await fetch(`http://54.180.153.12:8000/supplier/location?lon=${position.coords.longitude}&lat=${position.coords.latitude}`);
        const result = await res.json();
        
        this.setState({
          coords: position.coords,
          storeList: result
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  
  render() {
    const {
      coords: {
        latitude,
        longitude
      },
      storeList
    } = this.state;
    
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          storeList.map(store => (
            <Marker
              coordinate={{
                latitude: store.latitude,
                longitude: store.longitude
              }}
              title={store.branch}
              storeId={store.supplier_id}
            />
          ))
        }
      </MapView>
    );
  }
}

ListMap.navigationOptions = {
  // header: null,
  title: '지도'
};
