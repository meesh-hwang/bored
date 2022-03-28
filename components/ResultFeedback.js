import { useState } from "react";
import { Text, Overlay, FAB, Icon } from "react-native-elements";
import { TouchableOpacity,StyleSheet } from "react-native";
import { View } from "react-native";
import * as RootNavigation from '../RootNavigation';

export default function ResultFeedback() {
    const [noVisibleAlert, setNoVisibleAlert] = useState(false);
    const [yesVisibleAlert, setYesVisibleAlert] = useState(false);
    return(
        <View style={{marginTop:10}}>
          <Text style={styles.question}>Are you happy with this result?</Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',}}>
                <TouchableOpacity 
                    title="No"
                    onPress={()=> setNoVisibleAlert(true)}
                    style={[styles.btn,{width:10, marginRight:7}]}
                >
                    <Text style={styles.btnTxt}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    title="Yes"
                    onPress={()=> setYesVisibleAlert(true)}
                    style={[styles.btn,{width:10, marginRight:7}]}
                >
                    <Text style={styles.btnTxt}>Yes</Text>
                </TouchableOpacity>  
            </View>
            <Overlay isVisible={noVisibleAlert} style={{paddingHorizontal:10, paddingVertical:20}}>
                <Text style={{lineHeight:1.8, fontSize:26, fontWeight:"500",paddingTop:30, paddingBottom:10}}>Sorry!</Text>
                <Text style={{paddingTop:10,paddingBottom:20}}>
                    Do you want to hear a joke instead?
                </Text>
                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        onPress={() => {RootNavigation.navigate('Home'); setNoVisibleAlert(false);}}
                        style={[styles.overBtn, {marginRight:5}]}
                    >
                        <Text style={styles.overBtnTxt}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {RootNavigation.navigate('Joke'); setNoVisibleAlert(false);}}
                        style={[styles.overBtn, {marginLeft:5}]}
                    >
                        <Text style={[styles.overBtnTxt, {paddingHorizontal:20}]}>Yes</Text>
                    </TouchableOpacity>
                </View>
            </Overlay>
            <Overlay isVisible={yesVisibleAlert}>
                <Text style={{lineHeight:1.8, fontSize:26, fontWeight:"500",paddingVertical:20, paddingTop:30, paddingBottom:15, textAlign:'center'}}>Yay!</Text>
                <Text style={{paddingTop:5,paddingBottom:10, textAlign:'center', fontSize:18, fontWeight:"400"}}>
                    Hope you have a nice day! 😊
                </Text>
                <Text style={{ fontSize: 14, paddingBottom:20}}>
                    Do you want to hear a joke?
                </Text>

                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        onPress={() => {RootNavigation.navigate('Home'); setNoVisibleAlert(false);}}
                        style={[styles.overBtn, {marginRight:5}]}
                    >
                        <Text style={styles.overBtnTxt}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {RootNavigation.navigate('Joke'); setNoVisibleAlert(false);}}
                        style={[styles.overBtn, {marginLeft:5}]}
                    >
                        <Text style={[styles.overBtnTxt]}>Yes</Text>
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
        marginTop:20,
        width:150,
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
    question: {
        color:'#fff',
        fontSize:20,
        marginTop:10,
        fontWeight:"600"
    },
    overBtn: {   
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff5c5c',
        flex:1,
        paddingVertical:15,
        marginTop:6,

    },
    overBtnTxt: {
        color:'#ffff',
        fontWeight:"600",
        fontSize:22,

    }
});