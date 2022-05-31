import React, { useState, useEffect } from 'react';

import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const Screen3 = ({navigation}) => {

    const [list, setList] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const handleContinue = () => navigation.navigate('Screen1', { screen: 'Screen1' });

    useEffect(() => {
        fetch('https://reactassessmentapi20220523183259.azurewebsites.net/api/Programs/')
          .then((response) => response.json())
          .then((json) => setList(json))
          .catch((error) => console.error(error))
          .finally(() => setIsLoading(false));
      }, []);

    return (
      <>
        <View style={styles.top}>
          <View style={styles.header}>
           <Text>Organizations:</Text>
          </View>
          <View>
          { isLoading ? <Text>Loading...</Text> : (<FlatList
            data={list}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text>{item.name + ' - ' + item.classification}</Text>
            )}
          />)
          }
          </View>
         </View>
        <View style={styles.bottom}>
          <Button onPress={handleContinue} title="Continue" />
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
  
export default Screen3;