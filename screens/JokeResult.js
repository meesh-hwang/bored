import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, Button } from "react-native";


export default function JokeResult({route,navigation}) {
    const {type} = route.params;
    const {banned} = route.params;
    const [error, setError] = useState(null); 
    const [isLoaded, setIsLoaded] = useState(false); 
    const [dataResult, setDataResult] = useState([]);
    

    var genre = JSON.stringify(type);
    genre = (JSON.parse(genre)).genres;
    var categories="";
    var category = Object.values(genre);
    Object.entries(category);
    for (var i = 0, len = category.length; i < len; i++) {
        categories += ","+[category[i].item]
    }
    categories = categories.substring(1);

    var blacklist = JSON.stringify(banned);
    blacklist = (JSON.parse(blacklist)).blacklisted;
    var excluded="";
    var exclude = Object.values(blacklist);
    Object.entries(exclude);
        for (var i = 0, len = exclude.length; i < len; i++) {
            excluded += ","+[exclude[i].item]
        }
    excluded= excluded.substring(1);

    useEffect(() => { 
        fetch('https://v2.jokeapi.dev/joke/' + categories + '?blacklistFlags=' + excluded) 
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
            {displayJoke(error, isLoaded, dataResult, navigation)}         
        </View>
    );
}

function displayJoke(error, isLoaded, dataResult, navigation) {


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
            <Text h1>{dataResult.setup}</Text>
            <Text h1>{dataResult.delivery}</Text>
            <Button title="Start over" onPress={()=>navigation.navigate('Home')} />
        </View>
      );
    }
  }