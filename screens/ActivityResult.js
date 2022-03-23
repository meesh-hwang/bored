import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import ResultFeedback from "../components/ResultFeedback";
import BgImg from "../components/BgImg";

export default function ActivityResult({route, navigation}) {
    const {accessibility} = route.params;
    const {people} = route.params;
    const {money} = route.params;
    const participants = JSON.stringify(people).replace( /^\D+/g, '').slice(0,-2);
    const value = JSON.stringify(accessibility).replace( /^\D+/g, '').slice(0,-1);
    const pay = JSON.stringify(money).replace( /^\D+/g, '').slice(0,-2);
    const [error, setError] = useState(null); 
    const [isLoaded, setIsLoaded] = useState(false); 
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => { 
        fetch('http://www.boredapi.com/api/activity?participants=' + participants + '&?minprice=0&maxprice=' + pay + '&?minaccessibility=0&maxaccessibility=' + value) 
          .then(res => res.json()) 
          .then( 
            (result) => { 
              // successful load 
              setIsLoaded(true); 
              setDataResult(result); 
            }, 
            (error) => { 
              // handle errors here 
              setIsLoaded(true); 
              setError(error); 
            } 
          ) 
      }, []);

    return(
      <View>
        <BgImg />
        <View style={styles.container}>
            {displayActivity(error, isLoaded, dataResult, navigation)}         
        </View>
      </View>
    );
}
function displayActivity(error, isLoaded, dataResult, navigation) {


    if (error) {
      return (
        <View>
          <Text>Error: {error.message}</Text>
        </View>
      );
    }
    else if (!isLoaded) {
      return (
        <View>
          <Text>Loading...</Text>
          <ActivityIndicator size="large" color="#d63131" />
        </View>
      );
    }
    else if (dataResult === undefined) {
      return (
        <View>
          <Text>No records found for search</Text>
        </View>
      );
    }
    else {
      return (
        <View>
          <View style={styles.activityContainer}>
            <Text style={styles.activity}>{dataResult.activity}</Text>
          </View>
            <ResultFeedback />
            
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:20,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    },
    activity: {
      fontSize:25,
      fontWeight:600,
      alignSelf:'center'
    },
    activityContainer: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ffd0d0',
      padding:30,
      marginTop:'8vh',
      marginBottom:'5vh'
    }
  });