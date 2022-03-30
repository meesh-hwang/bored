import React from "react";
import { View, StyleSheet,Text, TouchableOpacity } from "react-native";

// background image component
import BgImg from "../components/BgImg";


export default function Home({navigation}) {
    return(

        <View style={styles.container}>
        <BgImg />
            <View style={styles.whiteBox}>
                <View style={styles.boredBox}>
                    <Text style={styles.bored}>Bored?</Text>
                </View>

                <View style={styles.questionBox}>
                    <Text style={styles.question}>Don't know what to do?</Text>
                    <Text style={styles.desc}>Try this simple app that can help with that!</Text>
                </View>
            </View>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Activity')} 
                    style={[styles.btn]}>
                        <Text style={styles.btnTxt}>Start</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffd0d0',
      paddingHorizontal:20,
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
    bored: {
        fontSize:26,
        margin:10,
        fontWeight:'700',
        color:'#ff5c5c'

    },
    question:{
        textAlign:'center',
        fontSize:18,
        color:'#d63131'
    },
    whiteBox: {
        backgroundColor:'#ffd0d0',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:150,
        justifyContent:'center',
        paddingHorizontal:30,
        borderWidth:1,
        borderColor:'#d63131',
        borderRadius:30
    },
    questionBox:{
        marginBottom:20,
        paddingBottom:20,
    },
    boredBox: {
        marginTop:20,
    },
    btn: {
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        width:180,
        maxHeight:60,
        alignSelf:'center',
        borderWidth:5,
        borderColor:'#ff5c5c',
        shadowColor: "black",
        backgroundColor:'#ff5c5c',
    },
    btnTxt: {
        fontSize: 33,
        padding:10,
        fontWeight:"700",
        color:'#fff'
    },
    desc: {
        textAlign:'center',
        color:'#ff5c5c'
    }


  });