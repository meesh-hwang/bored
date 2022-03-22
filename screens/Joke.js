import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { Button } from 'react-native'

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
      
        <View>
          <View>
            <Text h1>What kind of jokes do you like?</Text> 
            <SelectBox
              options={type}
              selectedValues={genres}
              onMultiSelect={onGenreChange()}
              onTapClose={onGenreChange()}
              isMulti
            />
          </View>

          <View>
            <Text h1>What kind of jokes do you not want to see?</Text> 
            <SelectBox
              options={banned}
              selectedValues={blacklisted}
              onMultiSelect={onBlacklistChange()}
              onTapClose={onBlacklistChange()}
              isMulti
            />
          </View>
          <Button title='Submit' onPress={()=>navigation.navigate('JokeResult',{type:{genres}, banned:{blacklisted}})}/>
        </View>   
      );
}
