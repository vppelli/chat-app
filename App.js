import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, View } from 'react-native';
// import netinfo to check online or offline
import { useNetInfo } from '@react-native-community/netinfo';
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import the screens
import Chat from './components/Chat';
import Start from './components/Start';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";

const App = () => {
  const connectionStatus = useNetInfo();
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyDrfYwU2cSP47v0_XDKyWwxmr9kZ8aXacs",
    authDomain: "chat-app-36570.firebaseapp.com",
    projectId: "chat-app-36570",
    storageBucket: "chat-app-36570.appspot.com",
    messagingSenderId: "1047620234027",
    appId: "1:1047620234027:web:0c7cbc89d8866a061cf36e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={Start}
        />
        <Stack.Screen
          name="Chat"
        >
          {props => <Chat isConnected={connectionStatus.isConnected} db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;