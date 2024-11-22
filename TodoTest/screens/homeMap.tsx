
import * as React from 'react';
import {
  Button,
  View,

  SafeAreaView, StyleSheet, StatusBar, TextInput, FlatList, Alert
} from 'react-native';


import { useSelector, useDispatch, } from 'react-redux';
import { RootState } from '../store';

import { addData, deleteAllData } from './data/dataSlice';

import { useState } from 'react';

import uuid from 'react-native-uuid';

import SectionResultItem from './SectionResultItem';

import MapView from "react-native-maps";

import { Marker } from "react-native-maps";




const HomeMap = ({ navigation }: { navigation: any }) => {



  const data = useSelector((state: RootState) => state.data);

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };


  interface UserData {
    id: string
    name: string
  }

  const [marker, setMarker] = useState(null);

  

  let handleClick = () => {



    if (message == "") {
      Alert.alert("Please enter value")
    }
    else {
      let userData: UserData = {
        id: "" + uuid.v4(),
        name: message
      }

      dispatch(addData(userData))

    }


  };


// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1, //the container will fill the whole screen.
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });


  return (

    <View style={styles.listItems} >
      <StatusBar backgroundColor='#E64A19' barStyle='light-content' />




      <SafeAreaView >
        <TextInput

          style={{
            borderWidth: 2,
            borderColor: 'lightgrey',
            paddingLeft: 10,
            height: 50,
            marginBottom: 5,
          }}


          placeholder="enter your message here"
          value={message}
          onChangeText={(text) => setMessage(text)}

        />
      </SafeAreaView>



      <View style={styles.btnGroup}  >

        <Button onPress={handleClick} title="Add data" />


        <Button onPress={() => dispatch(deleteAllData())} title="Delete All data" />

      </View>


      <MapView
       
       style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      //  onPress={(e) => setMarker(e.nativeEvent.coordinate)}
      >

{marker != null ? (

// {marker.map((book)=>
//   <li key={book.id}>{book.year_published}</li>
//  )}

<>{}</>
    // <Marker draggable coordinate={marker} onPress={() => Alert.alert("test")} />
  ) 
  : null}


<Marker coordinate={tokyoRegion} />

      </MapView>

   

      {/* <FlatList data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SectionResultItem navigation={navigation} item={item} />} /> */}

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

  
 
  
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});

export default HomeMap;