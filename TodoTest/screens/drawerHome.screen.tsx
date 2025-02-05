import React from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './home';
import CustomSidebarMenu from './CustomSidebarMenu';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import HomeMap from './homeMap';
import HomeMap2 from './homeMap2';

import Login from './Login';





const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



function NotificationsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />

      <Button onPress={() => navigation.navigate("SecondScreen")} title="Second Screen" />
    </View>
  );
}




function Root() {
  return (
    <Drawer.Navigator

      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerStyle: {
          backgroundColor: '#ff6700'
        },
      }}


      drawerContent={(props) => <CustomSidebarMenu {...props} />}





    >


      <Drawer.Screen
        name="HomeScreen"
        options={{
          drawerLabel: 'First page Option',
          title: 'Home',


        }}
        component={HomeScreen} />

      <Drawer.Screen name="Notifications" component={NotificationsScreen} />



    </Drawer.Navigator>


  );
}



export default function DrawerHome(props: any) {

  const { navigation } = props;





  return (




    <NavigationContainer>






      <Stack.Navigator>
      <Stack.Screen name="HomeMap2" component={HomeMap2} options={{ headerShown: false }} />

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen name="HomeMap" component={HomeMap} options={{ headerShown: false }} />

        <Stack.Screen name="SecondScreen" component={SecondScreen} options={{
          title: 'Second Screen', headerTitleAlign: 'center', headerTintColor: '#ffffff', headerStyle: {
            backgroundColor: '#ff6700'
          }
        }} />

        <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{
          title: 'ThirdScreen', headerTitleAlign: 'center', headerTintColor: '#ffffff', headerStyle: {
            backgroundColor: '#ff6700'
          }
        }} />




      </Stack.Navigator>

    </NavigationContainer>

  );
}