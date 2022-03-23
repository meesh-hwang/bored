import React from "react";
import { View, StyleSheet,Text, TouchableOpacity } from "react-native";
import BgImg from "../components/BgImg";

export default function Home({navigation}) {

    return(
            <View style={styles.container}>
                <BgImg />
                <View>
                    <View style={[styles.whiteBox, styles.boredBox]}>
                        <Text style={styles.bored}>Bored?</Text>
                    </View>

                    <View style={[styles.whiteBox, styles.questionBox]}>
                        <Text style={styles.question}>Don't know what to do?</Text>
                    </View>

                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Activity')} 
                            style={styles.btn}>
                            <Text style={styles.btnTxt}>Start</Text>
                        </TouchableOpacity>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffd0d0',
    },
    bored: {
        fontSize:"5vw",
        margin:10,
        color:'#d63131'

    },
    question:{
        fontSize:'4vw',
        marginVertical:40,
        color:'#d63131'
    },
    whiteBox: {
        backgroundColor:'#ffd0d0',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:30,
        maxWidth:'fit-content',
        borderRadius:'50%'
    },
    questionBox:{
        marginTop:'6vh',
        borderColor:'#d63131',
        marginLeft:"10vw",
        marginBottom:'3vh',
        borderWidth:1
    },
    boredBox: {
        marginLeft:'50vw',
        borderColor:'#d63131',
        marginTop:'10vh',
        borderWidth:1
    },
    btn: {
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'12vh',
        width:'50vw',
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
    }


  });