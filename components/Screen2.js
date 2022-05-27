import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';


const Screen2 = ({navigation}) => {

    let [name, setName] = useState("");
    let [description, setDescription]  = useState("");

    const handleSubmit = () => {


    }

    return (
        < >
        <View style={styles.top}>
          <View style={styles.header}>
           <Text>Create New Program</Text>
          </View>
          <TextInput style={styles.niceText} placeholder="Name" onChangeText={setName} value={name} />
          <TextInput style={styles.niceText} placeholder="Description" onChangeText={setDescription} value={description} />
         
         </View>
        <View style={styles.bottom}>
          <Button onPress={handleSubmit} title="Register Program" />
        </View>
      </>
    );

};


const styles = StyleSheet.create({
    safeArea : {
      backgroundColor: "#cfcfef",
    },
    header: {
  
    },
    top: {
      flex: 2,
    },
    bottom: {
      flex: 1,
    },
    niceText: {
      width: "100%",
      backgroundColor: "white",
    }
  });
  
export default Screen2;