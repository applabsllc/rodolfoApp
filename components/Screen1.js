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


const Screen1 = ({navigation}) => {
  
  let [name, setName] = useState("");
  let [contact, setContact] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  const handleSubmit = () => {

    const sendObj = {
     "id": 0,
     "organizationName": name,
     "pointOfContact": contact,
     "phone": phone,
     "email": email,
    };

    fetch('https://reactassessmentapi20220523183259.azurewebsites.net/api/Cbo', {
      method: 'POST',
      body: JSON.stringify(sendObj),
    })
    .then((resp) => resp.json())
    .then((json) => {
      navigation.navigate('Screen2', { screen: 'Screen2' });
    })
    .catch((err) => {
      Alert.alert("Please Try Again");
    });
  }

  return (
    < >
      <View style={styles.top}>
        <View style={styles.header}>
         <Text>Community Based Organization</Text>
        </View>
        <TextInput style={styles.niceText} placeholder="Name" onChangeText={setName} value={name} />
        <TextInput style={styles.niceText} placeholder="Contact" onChangeText={setContact} value={contact} />
        <TextInput style={styles.niceText} placeholder="Email" onChangeText={setEmail} value={email} />
        <TextInput style={styles.niceText} placeholder="Phone Number" onChangeText={setPhone} value={phone} />
      </View>
      <View style={styles.bottom}>
        <Button onPress={handleSubmit} title="Register" />
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

export default Screen1;
