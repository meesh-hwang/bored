import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { TouchableOpacity, StyleSheet } from 'react-native'


 // Genres
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

 // Blacklists
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
  const [genres, setGenres] = useState([]);
  const [blacklisted, setBlacklisted] = useState([]);

  function onGenreChange() {
    return (item) => setGenres(xorBy(genres, [item], 'id'))
  }

  function onBlacklistChange() {
    return (item) => setBlacklisted(xorBy(blacklisted, [item], 'id'))
  }


    return(
      
        <View style={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
          <View style={{marginTop:'10vh', marginBottom:'10vh'}}>
            <SelectBox
              width="100vw"
              options={type}
              selectedValues={genres}
              inputPlaceholder="Select"
              label="What kind of jokes do you like?"
              onMultiSelect={onGenreChange()}
              onTapClose={onGenreChange()}
              isMulti
              hideInputFilter
              labelStyle={{fontSize:18, fontWeight:600, paddingLeft:10, color:'#000'}}
              multiListEmptyLabelStyle={{fontSize:14, paddingLeft:10}}
              multiOptionContainerStyle={{backgroundColor:'#ff5c5c'}}
              arrowIconColor="#ff5c5c"
              searchIconColor="#ff5c5c"
              toggleIconColor="#ff5c5c"
              optionsLabelStyle={{fontSize:16, paddingLeft:10}}
            />
          </View>

          <View>
            <SelectBox
              width="100vw"
              options={banned}
              selectedValues={blacklisted}
              inputPlaceholder="Select"
              label="What jokes do you not want to see?"
              onMultiSelect={onBlacklistChange()}
              onTapClose={onBlacklistChange()}
              labelStyle={{fontSize:18, fontWeight:600, paddingLeft:10, color:'#000'}}
              hideInputFilter
              isMulti
              multiOptionContainerStyle={{backgroundColor:'#ff5c5c'}}
              multiListEmptyLabelStyle={{fontSize:14, paddingLeft:10}}
              arrowIconColor="#ff5c5c"
              searchIconColor="#ff5c5c"
              toggleIconColor="#ff5c5c"
              optionsLabelStyle={{fontSize:16, paddingLeft:10}}
            />
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('JokeResult',{type:{genres}, banned:{blacklisted}})}
          style={styles.btn}>
            <Text style={styles.btnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>   
      );
}
const styles= StyleSheet.create({

  btn: {
    flex:1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'5vh',
    width:'50vw',
    height:'10vh',
    alignSelf:'center',
    borderWidth:5,
    borderColor:'#ff5c5c',
    shadowColor: "black",
    backgroundColor:'#ff5c5c',
  },
  btnTxt: {
    fontSize: '7vw',
    padding:10,
    fontWeight:"700",
    color:'#fff'
},

});