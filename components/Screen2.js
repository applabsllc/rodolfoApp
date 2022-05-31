import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

const Screen2 = ({navigation}) => {

    const [name, setName] = useState("");
    const [description, setDescription]  = useState("");

    const [option1Open, setOption1Open] = useState(false);
    const [option1Value, setOption1Value] = useState(null);
    const [option1Items, setOption1Items] = useState([
     {label: 'Direct Service', value: 'Direct-Service'},
     {label: 'Advocacy', value: 'Advocacy'},
     {label: 'Capacity Building', value: 'Capacity-Building'},
     {label: 'Research & Analysis', value: 'Research-Analysis'},
    ]);

    const [option2Open, setOption2Open] = useState(false);
    const [option2Value, setOption2Value] = useState(null);
    const [option2Items, setOption2Items] = useState([
     {label: 'Level 1', value: '1'},
     {label: 'Level 2', value: '2'},
     {label: 'Level 3', value: '3'},
    ]);

    const handleSubmit = () => {

      const sendObj = {
        "name": name,
        "classification": option1Value,
        "status": option2Value,
        "cbo": {
          "organizationName": "test",
          "pointOfContact": "test",
          "phone": "test",
          "email": "test"
        }
      }

      if(name && option1Value && option2Value){
        fetch('https://reactassessmentapi20220523183259.azurewebsites.net/api/Programs', {
          method: 'POST',
          body: JSON.stringify(sendObj),
          headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          mode: 'cors',
        })
        .then((resp) => resp.json())
        .then((json) => {
          if(json.status == 415)
          Alert.alert("Error 415: "+json.title);
          else
          navigation.navigate('Screen3', { screen: 'Screen3' });
        })
        .catch((err) => {
          Alert.alert("Please Try Again");
        });
      }else Alert.alert("Please Complete Fields");

    }

    return (
      <>
        <View style={styles.top}>
          <View style={styles.header}>
           <Text>Create New Program</Text>
          </View>
          <TextInput style={styles.niceText} placeholder="Name" onChangeText={setName} value={name} />
          <TextInput style={styles.niceText} placeholder="Description" onChangeText={setDescription} value={description} />
          
          <View style={styles.optionWrapper}>
            <DropDownPicker
              placeholder="Classification:"
              open={option1Open}
              value={option1Value}
              items={option1Items}
              setOpen={setOption1Open}
              setValue={setOption1Value}
              setItems={setOption1Items}
              zIndex={2000}
              zIndexInverse={1000}
            />
          </View>
          <View style={styles.optionWrapper}>
            <DropDownPicker
              placeholder="Status:"
              open={option2Open}
              value={option2Value}
              items={option2Items}
              setOpen={setOption2Open}
              setValue={setOption2Value}
              setItems={setOption2Items}
              zIndex={1000}
              zIndexInverse={2000}
            />
          </View>
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
    },
    optionWrapper: {
      margin: 5,
    }
  });
  
export default Screen2;