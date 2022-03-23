import { useState } from "react";
import { Text, Overlay, FAB, Icon } from "react-native-elements";
import { TouchableOpacity,StyleSheet } from "react-native";
import { View } from "react-native";
import * as RootNavigation from '../RootNavigation';

export default function() {
    const [noVisibleAlert, setNoVisibleAlert] = useState(false);
    const [yesVisibleAlert, setYesVisibleAlert] = useState(false);
    return(
        <View style={{marginTop:'6vh'}}>
          <Text style={styles.question}>Are you happy with this result?</Text>

            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',}}>
                <TouchableOpacity 
                    title="Yes"
                    onPress={()=> setYesVisibleAlert(true)}
                    style={[styles.btn,{width:'7vw', marginRight:7}]}
                >
                    <Text style={styles.btnTxt}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    title="No"
                    onPress={()=> setNoVisibleAlert(true)}
                    style={[styles.btn,{width:'7vw', marginRight:7}]}
                >
                    <Text style={styles.btnTxt}>No</Text>
                </TouchableOpacity>
            </View>

            <Overlay isVisible={noVisibleAlert} >
                <Text h3>Sorry!</Text>

                <Text>
                    Do you want to hear a joke instead?
                </Text>

                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        title="Back to Start"
                        onPress={() => {RootNavigation.navigate('Home'); setNoVisibleAlert(false);}}
                        style={styles.overBtn}
                    >
                        <Text style={styles.overBtnTxt}>Back to Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Yes"
                        onPress={() => {RootNavigation.navigate('Joke'); setNoVisibleAlert(false);}}
                        style={styles.overBtn}
                    >
                        <Text style={[styles.overBtnTxt, {paddingHorizontal:20}]}>Yes</Text>
                    </TouchableOpacity>

                </View>
            </Overlay>

            <Overlay isVisible={yesVisibleAlert} >
                <Text h3>Yay!</Text>

                <Text>
                    Hope you have a nice day! 😊
                </Text>

                <View style={{display:'flex',flexDirection:'row'}}>
                    <TouchableOpacity
                        title="Close"
                        onPress={() => {RootNavigation.navigate('Home'); window.location.reload();}}
                        style={styles.overBtn}
                    >
                        <Text style={styles.overBtnTxt}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>
        </View>
    );
}
const styles = StyleSheet.create({
    btn: {
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'2vh',
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
        color:'#ffff',
    },
    question: {
        color:'#fff',
        fontSize:20,
        marginTop:'7vh',
        fontWeight:600
    },
    overBtn: {   
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff5c5c',
        width:'fit-content',
        paddingHorizontal:10,
        paddingVertical:15,
        marginTop:'2vh',

    },
    overBtnTxt: {
        color:'#ffff',
        fontWeight:"600",
        fontSize:'5vw',

    },

});