import { useState } from "react";
import { Text, Button, Overlay, FAB, Icon } from "react-native-elements";
import { View } from "react-native";
import * as RootNavigation from '../RootNavigation';

export default function() {
    const [noVisibleAlert, setNoVisibleAlert] = useState(false);
    const [yesVisibleAlert, setYesVisibleAlert] = useState(false);
    return(
        <View>
            <Button 
                title="Yes"
                onPress={()=> setYesVisibleAlert(true)}
            />
            <Button 
                title="No"
                onPress={()=> setNoVisibleAlert(true)}
            />

            <Overlay isVisible={noVisibleAlert} >
                <Text h3>Sorry!</Text>

                <Text>
                    Do you want to hear a joke instead?
                </Text>

                <View style={{display:'flex',flexDirection:'row'}}>
                    <Button
                        title="Back to Start"
                        onPress={() => {RootNavigation.navigate('Home'); setNoVisibleAlert(false);}}
                    />
                    <Button
                        title="Yes"
                        onPress={() => {RootNavigation.navigate('Joke'); setNoVisibleAlert(false);}}
                    />
                </View>
            </Overlay>

            <Overlay isVisible={yesVisibleAlert} >
                <Text h3>Yay!</Text>

                <Text>
                    Hope you have a nice day! 😊
                </Text>

                <View style={{display:'flex',flexDirection:'row'}}>
                    <Button
                        title="Close"
                        onPress={() => {RootNavigation.navigate('Home'); window.location.reload();}}
                    />
                </View>
            </Overlay>
        </View>
    );
}