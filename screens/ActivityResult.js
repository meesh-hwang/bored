import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import ResultFeedback from "../components/ResultFeedback";
import BgImg from "../components/BgImg";

export default function ActivityResult({route, navigation}) {

  //// Results from last page
  /// 
  const {accessibility} = route.params;
  const {people} = route.params;
  const {money} = route.params;
  // Convert to readable value/the exact string required for the endpoint later
  const participants = JSON.stringify(people).replace( /^\D+/g, '').slice(0,-2);
  const value = JSON.stringify(accessibility).replace( /^\D+/g, '').slice(0,-1);
  const pay = JSON.stringify(money).replace( /^\D+/g, '').slice(0,-2);

  //// API
  const [error, setError] = useState(null); 
  const [isLoaded, setIsLoaded] = useState(false); 
  const [dataResult, setDataResult] = useState([]);

  /// First fetch
  useEffect(() => { 
    // Fetch results according to number of participants, range of pay, and range of accessibility
    fetch('http://www.boredapi.com/api/activity?participants=' + 
          participants + 
          '&?minprice=0&maxprice=' + pay + 
          '&?minaccessibility=0&maxaccessibility=' + value) 
      .then(res => res.json()) 
      .then( 
        (result) => { 
          setIsLoaded(true); 
          setDataResult(result); 
        }, 
        (error) => { 
          setIsLoaded(true); 
          setError(error); 
        } 
      ) 
  }, []);
  return(
      <View style={styles.container}>
        <BgImg />
          {displayActivity(error, isLoaded, dataResult, navigation)}         
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
      <View style={{width:'90%'}}>
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
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },
    activity: {
      fontSize:25,
      fontWeight:"600",
      alignSelf:'center'
    },
    activityContainer: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ffd0d0',
      padding:30,
      marginTop:50,
      marginBottom:10
    }
  });