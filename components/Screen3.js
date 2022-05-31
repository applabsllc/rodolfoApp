import React, { useState } from 'react';

import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';


const Screen3 = ({navigation}) => {

    const [name, setName] = useState("");

    const handleSubmit = () => {

        navigation.navigate('Screen1', { screen: 'Screen1' });

    }

    return (
        < >
        <View style={styles.top}>
          <View style={styles.header}>
           <Text>Organizations:</Text>
          </View>
          <View>

          </View>
         </View>
        <View style={styles.bottom}>
          <Button onPress={handleSubmit} title="Continue" />
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
  
export default Screen3;