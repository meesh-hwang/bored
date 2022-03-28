import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import BgImg from "../components/BgImg";

export default function JokeResult({route,navigation}) {

  // Arrays of selected options passed from previous screen
  const {type} = route.params;
  const {banned} = route.params;
  
  // Sorry this is a mess my brain was struggling

  // Stringify the params passed  
  // Returns key: array of selected items
  // Ex; {"genres":[{"item":"Programming","id":"PRGRM"},{"item":"Dark","id":"DRK"}]}
  var genre = JSON.stringify(type);
  var blacklist = JSON.stringify(banned);

  // Parse
  // Ex; [0: [{ item: 'Programming', id: 'PRGRM' }] 1: [{ item: 'Dark', id: 'DRK' }]]
  genre = (JSON.parse(genre)).genres;
  blacklist = (JSON.parse(blacklist)).blacklisted;

  // Grab just the values from the objects
  // Ex; { item: 'Programming', id: 'PRGRM' } { item: 'Dark', id: 'DRK' }
  var category = Object.values(genre);
  var exclude = Object.values(blacklist);

  var categories="";
  var excluded="";
  // Object.entries() returns array of the object's props
  // [["0", { item: 'Programming', id: 'PRGRM' }], ["0", { item: 'Dark', id: 'DRK' }]]
  Object.entries(category);
  Object.entries(exclude);

  // Iterate through the loop and concatenate a comma before each of the item values in order to get the correct syntax for the fetch endpoints later
  // categories = ",Programming,Dark"
  for (var i = 0, len = category.length; i < len; i++) {
      categories += ","+[category[i].item]
  }
  for (var i = 0, len = exclude.length; i < len; i++) {
      excluded += ","+[exclude[i].item]
  }

  // Remove the first comma from the string  
  // categories = "Programming,Dark"
  categories = categories.substring(1);
  excluded= excluded.substring(1);

  const [error, setError] = useState(null); 
  const [isLoaded, setIsLoaded] = useState(false); 
  const [dataResult, setDataResult] = useState([]);

  // Second fetch
  // List of joke categories to include and exclude
  useEffect(() => { 
    fetch('https://v2.jokeapi.dev/joke/' + 
          categories + 
          '?blacklistFlags=' + excluded) 
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
      {displayJoke(error, isLoaded, dataResult, navigation)}      
    </View>
  );
}

function displayJoke(error, isLoaded, dataResult, navigation) {

  if (error) {
    return (
      <View>
        <Text h3>Error: Can't generate joke.</Text>
        <Text>Please choose at least one category in the previous page.</Text>
      </View>
    );
  }
  else if (!isLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#ff5c5c" />
      </View>
    );
  }
  else if (dataResult === undefined) {
    return (
      <View>
        <Text>Sorry!</Text>
        <Text>No jokes have been found with those filters!</Text>
      </View>
    );
  }
  else if (dataResult === null) {
    return (
      <View>
        <Text>Sorry!</Text>
        <Text>No jokes have been found with those filters!</Text>
      </View>
    );
  }
else {
  return (
      <View style={styles.result}>
        <Text h1 style={styles.txtBox}>{dataResult.setup}</Text>
        <Text h1 style={styles.txtBox}>{dataResult.delivery}</Text> 
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Activity')} >
                <Text style={styles.btnTxt}>Start over</Text>
        </TouchableOpacity>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
btn: {
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  marginTop:10,
  width:200,
  alignSelf:'center',
  borderWidth:5,
  borderColor:'#ff5c5c',
  shadowColor: "black",
  backgroundColor:'#ff5c5c',
},
btnTxt: {
    fontSize: 36,
    padding:10,
    fontWeight:"700",
    color:'#fff'
},
container: {
  fontSize:20
},
txtBox: {
  fontSize:25,
  fontWeight:"600",
  alignSelf:'center',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ffd0d0',
  padding:30,
  marginTop:10,
  marginBottom:10
},
result: {
  marginHorizontal: 30,
  marginTop:40,
  
}

});