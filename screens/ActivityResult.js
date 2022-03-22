import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";

import ResultFeedback from "../components/ResultFeedback";

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
          <ActivityIndicator size="large" color="#00ff00" />
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
            <Text h1>{dataResult.activity}</Text>

            <Text>Are you happy with this result?</Text>
            <ResultFeedback />
            
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });