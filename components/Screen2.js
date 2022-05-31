import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

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

    const [name, setName] = useState("");
    const [description, setDescription]  = useState("");

    const [option1open, option1setOpen] = useState(false);
    const [option1value, option1setValue] = useState(null);
    const [option1items, option1setItems] = useState([
     {label: 'Direct Service', value: 'Direct-Service'},
     {label: 'Advocacy', value: 'Advocacy'},
     {label: 'Capacity Building', value: 'Capacity-Building'},
     {label: 'Research & Analysis', value: 'Research-Analysis'},
    ]);

    const [option2open, option2setOpen] = useState(false);
    const [option2value, option2setValue] = useState(null);
    const [option2items, option2setItems] = useState([
     {label: 'Level 1', value: '1'},
     {label: 'Level 2', value: '2'},
     {label: 'Level 3', value: '3'},
    ]);

    const handleSubmit = () => {

      const sendObj = {
        "id": 9,
        "organizationName": name,
        "pointOfContact": description,
        "phone": option1value,
        "email": option2value,
       };
       
      if(name && description && option1value && option2value){
        fetch('https://reactassessmentapi20220523183259.azurewebsites.net/api/Cbo', {
          method: 'POST',
          body: JSON.stringify(sendObj),
        })
        .then((resp) => resp.json())
        .then((json) => {
          console.log("Response2:",json);
          navigation.navigate('Screen3', { screen: 'Screen3' });
        })
        .catch((err) => {
          Alert.alert("Please Try Again");
        });
      }else Alert.alert("Please Complete Fields");

    }

    return (
        < >
        <View style={styles.top}>
          <View style={styles.header}>
           <Text>Create New Program</Text>
          </View>
          <TextInput style={styles.niceText} placeholder="Name" onChangeText={setName} value={name} />
          <TextInput style={styles.niceText} placeholder="Description" onChangeText={setDescription} value={description} />
          
          <View style={styles.optionWrapper}>
            <DropDownPicker
              placeholder="Classification:"
              open={option1open}
              value={option1value}
              items={option1items}
              setOpen={option1setOpen}
              setValue={option1setValue}
              setItems={option1setItems}
              zIndex={2000}
              zIndexInverse={1000}
            />
          </View>
          <View style={styles.optionWrapper}>
            <DropDownPicker
              placeholder="Status:"
              open={option2open}
              value={option2value}
              items={option2items}
              setOpen={option2setOpen}
              setValue={option2setValue}
              setItems={option2setItems}
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