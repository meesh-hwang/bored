import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import BgImg from '../components/BgImg'

 // Genres data
 const type = [
  {
    item: 'Programming',
    id: 'PRGRM',
  },
  {
    item: 'Dark',
    id: 'DRK',
  },
  {
    item: 'Pun',
    id: 'PUN',
  },
  {
    item: 'Spooky',
    id: 'SPKY',
  },
  {
    item: 'Miscellaneous',
    id: 'MISC',
  },
  {
    item: 'Any',
    id: 'ANY',
  }]

 // Blacklists data
 const banned = [
  {
    item: 'Racist',
    id: 'RCST',
  },
  {
    item: 'Sexist',
    id: 'SXST',
  },
  {
    item: 'Political',
    id: 'PLTL',
  },
  {
    item: 'Religious',
    id: 'RLG',
  },
  {
    item: 'NSFW',
    id: 'NSFW',
  }]


export default function Joke({navigation}) {

  // Store array of selected genres and blacklisted categories
  const [genres, setGenres] = useState([]);
  const [blacklisted, setBlacklisted] = useState([]);

  //// xorBy(arrays, iteratee) <- iteratee (filtering criteria) is invoked on each individual array. 
  /// In this case, if the item selected matches the id from the array, add that item to the array.
  // Selected options are stored in their arrays
  function onGenreChange() {
    return (item) => setGenres(xorBy(genres, [item], 'id'))
  }
  function onBlacklistChange() {
    return (item) => setBlacklisted(xorBy(blacklisted, [item], 'id'))
}
  return(
    <View style={styles.container}>
      <BgImg />

        <View style={styles.select}>
          <SelectBox
            options={type}
            selectedValues={genres}
            inputPlaceholder="Select"
            label="What kind of jokes do you like?*"
            onMultiSelect={onGenreChange()}
            onTapClose={onGenreChange()}
            isMulti
            hideInputFilter
            containerStyle={{backgroundColor:'#fff', paddingBottom:20, paddingLeft:10}}
            labelStyle={{fontSize:18, fontWeight:"600", paddingLeft:10, color:'#000', backgroundColor:'#fff', paddingTop:20}}
            multiListEmptyLabelStyle={{fontSize:14, paddingLeft:10}}
            multiOptionContainerStyle={{backgroundColor:'#ff5c5c'}}
            arrowIconColor="#ff5c5c"
            searchIconColor="#ff5c5c"
            toggleIconColor="#ff5c5c"
            optionsLabelStyle={{fontSize:16, paddingLeft:10}}
          />
        </View>

        <View style={styles.select}>
          <SelectBox
            options={banned}
            selectedValues={blacklisted}
            inputPlaceholder="Select"
            label="What jokes do you not want to see?"
            onMultiSelect={onBlacklistChange()}
            onTapClose={onBlacklistChange()}
            labelStyle={{fontSize:18, fontWeight:"600",  color:'#000', paddingTop:20,backgroundColor:'#fff', paddingLeft:10}}
            hideInputFilter
            containerStyle={{backgroundColor:'#fff', paddingBottom:20}}
            isMulti
            multiOptionContainerStyle={{backgroundColor:'#ff5c5c'}}
            multiListEmptyLabelStyle={{fontSize:14, paddingLeft:10}}
            arrowIconColor="#ff5c5c"
            searchIconColor="#ff5c5c"
            toggleIconColor="#ff5c5c"
            optionsLabelStyle={{fontSize:16}}
          />
        </View>

        <TouchableOpacity 
          onPress={()=>navigation.navigate(
            'JokeResult', {
              type:{genres}, 
              banned:{blacklisted}})}
            style={styles.btn}>
          <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity>
      </View>   
    );
}
const styles= StyleSheet.create({
  container: {
    flex:1
  },
  btn: {
    flex:1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    width:180,
    maxHeight:80,
    alignSelf:'center',
    borderWidth:5,
    borderColor:'#ff5c5c',
    shadowColor: "black",
    backgroundColor:'#ff5c5c',
  },
  btnTxt: {
    fontSize: 28,
    paddingVertical:10,
    paddingHorizontal:20,
    fontWeight:"700",
    color:'#fff'
  }, 
  select: {
    marginTop:20, 
    marginBottom:20, 
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20}
});