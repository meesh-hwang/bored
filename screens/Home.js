import React from "react";
import { View, StyleSheet } from "react-native";
import { ThemeProvider, Text, Button } from 'react-native-elements';
import { mainTheme } from '../themes/mainTheme';

export default function Home({navigation}) {

    return(
        <ThemeProvider theme={mainTheme}> 
            <View style={styles.container}>
                <Button
                    onPress={()=>navigation.navigate('Activity')}    
                    title="Start"
                />
                <Text h1>Hi its </Text>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });