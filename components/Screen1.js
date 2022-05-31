import React, { useState } from 'react';

import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';


const Screen1 = ({navigation}) => {
  
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const validateNumber = (num) =>  !isNaN(num) && num.length == 10;

  const validateEmail = (str) => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(str) === true)
      return true;
      return false;
  }

  const handleSubmit = () => {

    const sendObj = {
     "organizationName": name,
     "pointOfContact": contact,
     "phone": phone,
     "email": email,
    };
    console.log("sendObj1:",sendObj);
    
    if(name && contact && validateNumber(phone) && validateEmail(email)){
      fetch('https://reactassessmentapi20220523183259.azurewebsites.net/api/Cbo', {
        method: 'POST',
        body: JSON.stringify(sendObj),
      })
      .then((resp) => resp.json())
      .then((json) => {
        if(json.status == 415)
        Alert.alert("Error 415: "+json.title);
        else
        navigation.navigate('Screen2', { screen: 'Screen2' });
      })
      .catch((err) => {
        Alert.alert("Please Try Again");
      });
    }else Alert.alert("Please Check Fields");

  }

  return (
    <>
      <View style={styles.top}>
        <View style={styles.header}>
         <Text>Community Based Organization</Text>
        </View>
        <TextInput style={styles.niceText} placeholder="Name" onChangeText={setName} value={name} />
        <TextInput style={styles.niceText} placeholder="Contact" onChangeText={setContact} value={contact} />
        <TextInput style={styles.niceText} placeholder="Email" onChangeText={setEmail} value={email} />
        <TextInput style={styles.niceText} placeholder="Phone Number" onChangeText={setPhone} value={phone} keyboardType='numeric' maxLength={10} />
      </View>
      <View style={styles.bottom}>
        <Button onPress={handleSubmit} title="Register" />
        <Button onPress={() => navigation.navigate('Screen3', { screen: 'Screen3' })} title="View List" />
      </View>
    </>
  );

};

const styles = StyleSheet.create({
  safeArea : {
    backgroundColor: "#cfcfef",
  },
  header: {
    margin: 5,
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
