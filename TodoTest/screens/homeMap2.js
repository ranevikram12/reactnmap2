
import * as React from 'react';
import {
  Button,
  View,

  SafeAreaView, StyleSheet, StatusBar, TextInput, FlatList, Alert, Text
} from 'react-native';

import { useSelector, useDispatch, } from 'react-redux';
import { RootState } from '../store';
import { addData, deleteAllData } from './data/dataSlice';
import { useState } from 'react';
import uuid from 'react-native-uuid';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const HomeMap2 = ({ navigation }) => {

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const [marker, setMarker] = useState([]);
  let AddArray = (result) => {
    setMarker([...marker, result])
    console.debug(marker);
  };

  return (
    <View style={styles.listItems} >
      <StatusBar backgroundColor='#E64A19' barStyle='light-content' />

      <View style={styles.container}>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}

          onPress={(e) => AddArray(e.nativeEvent.coordinate)}
        >

          {marker.map((book) =>
            <Marker draggable coordinate={book} onPress={() => Alert.alert("test")} />
          )}
          {marker != null ? (
            <></>
          ) : null}
          <Marker coordinate={tokyoRegion} />
        </MapView>
      </View>

      <View style={{
        flex: 1,
      }}
      >
        {marker.map((book) =>
          <Text >{book.latitude} {book.longitude}  </Text>
        )}
      </View>
    </View>

  );
};
const styles = StyleSheet.create({

  listItems: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  btnGroup: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  mapList: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  map: {
    height: 340,
    width: 400, 
    alignItems: "center"
  },

});

export default HomeMap2;