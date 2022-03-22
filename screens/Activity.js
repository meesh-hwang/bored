import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import { RadioButton } from 'react-native-paper';

export default function Activity({route, navigation}) {
    const [value, setValue] = useState(0);
    const [participants, setParticipants] = useState(1);
    const [pay, setPay] = useState(0);

    return(
        <View style={styles.container}>
            <View>
                <Text h1>How many people will be participating?</Text>
                <View style={{display:'flex', flex:1, flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={() =>{
                            if(participants <= 1){
                                setParticipants(participants + 0);
                            }else{
                                setParticipants(participants -1);
                            };}}
                        style={{height:30,width:30,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#fff'}}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={{padding:15}}>{participants}</Text>
                    <TouchableOpacity
                        onPress={() =>setParticipants(participants+1)}
                        style={{height:30,width:30,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center', backgroundColor:'#fff'}}
                    >
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                    <Button
                    onPress={()=>navigation.navigate('Accessibility',{ people: {participants}})}    
                    title="Next"
                    />
            </View>
            <View>
                <Text>How accessible do you need the activity to be?</Text>
                <Text>(Physical limitations, equipment, travel-time, etc.)</Text>
                <View>
                    <Text>{(value*10).toFixed(1)}/10</Text>
                    <Slider
                    onValueChange={value => setValue(value)}
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="grey"
                    />
                </View>
            </View>

            <View>
                <Text>Are you okay with spending money?</Text>
                <RadioButton.Group onValueChange={newValue => setPay(newValue)} value={pay}>
                    <RadioButton.Item value="1" label="Yes"/>
              
                    <RadioButton.Item value="0" label="No" />
            
                </RadioButton.Group>
            </View>

            <Button
                onPress={()=>navigation.navigate('ActivityResult', {accessibility:{value}, people:{participants}, money:{pay}})}    
                title="Let's go"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });