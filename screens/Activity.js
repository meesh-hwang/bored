import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import Slider from '@react-native-community/slider';
import { RadioButton } from 'react-native-paper';
import BgImg from "../components/BgImg";


export default function Activity({route, navigation}) {
    const [value, setValue] = useState(0);
    const [participants, setParticipants] = useState(1);
    const [pay, setPay] = useState(0);

    return(
        <View>
        <BgImg />
        <View style={styles.container}>

            <View style={[styles.qBox, {marginTop:'5vh'}]}>
                <Text>How many people will be participating?</Text>
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
            </View>

            <View style={styles.qBox}>
                <Text>How accessible do you need the activity to be?</Text>
                <Text style={{fontSize:10}}>(Physical limitations, equipment, travel-time, etc.)</Text>
                <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Text style={{marginTop:10}}>{(value*10).toFixed(1)}/10</Text>
                    <Slider
                    onValueChange={value => setValue(value)}
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#ff5c5c"
                    maximumTrackTintColor="#fcba03"
                    thumbTintColor="#d63131"
                    />
                </View>
            </View>

            <View style={styles.qBox}>
                <Text>Are you okay with spending money?</Text>
                <RadioButton.Group onValueChange={newValue => setPay(newValue)} value={pay}>
                    <RadioButton.Item value="1" label="Yes" color="#ff5c5c" />
              
                    <RadioButton.Item value="0" label="No" color="#fcba03" />
            
                </RadioButton.Group>
            </View>

            <TouchableOpacity
                onPress={()=>navigation.navigate('ActivityResult', {accessibility:{value}, people:{participants}, money:{pay}})} 
                style={styles.btn}
            >
                <Text style={styles.btnTxt}>Continue</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal:20
    },
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
    qBox: {
        backgroundColor:'#ffd0d0',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        minWidth:'fit-content',
        borderRadius:20,
        marginVertical:5
    }
  });