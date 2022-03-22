import {createTheme} from '@react-native-elements/themed';

const themePalette ={
    primary:'#fffff',
    primaryDarker:'black',
    primaryLighter:'grey',
    alternate:'#ffff',
    grey:'#aaaaaa',
    greyDarker:'#888888',
    greyLighter:'#cccccc'
}

export const mainTheme = createTheme({
    
    Button: {
        buttonStyle: {
            raised: true,
            borderRadius: 15,
            backgroundColor: "#ffff",
        },
        titleStyle: {
            color: themePalette.alternate
        },
        disabledStyle:{
            backgroundColor:themePalette.greyDarker,
        },
        icon:{
            color: themePalette.alternate,            
        },
        type: 'clear'
    },

    FAB:{
        buttonStyle: {
            raised: true,
            borderRadius: 15,
            backgroundColor: themePalette.primary,
        },
        titleStyle: {
            color: themePalette.alternate
        },
        icon:{
            color: themePalette.alternate,            
        },
    },

    Text: {
        h1Style: {
            color: themePalette.primaryDarker,
            fontWeight: 'bold',
            fontFamily: 'serif'
        },
        h2Style: {
            color: themePalette.primaryLighter,
            fontSize: 26,
            margin:10
        },
        h3Style: {
            color: themePalette.primaryLighter,
            fontSize: 20,
            margin:5
        },
        style:{
            margin:5
        }
    },

    Avatar: {
        avatarStyle: {
            borderColor: themePalette.primary,
            borderWidth: 1,
        },
        size:50
    },

    Divider:{
        color: themePalette.primaryLighter,        
        width: 2
    }
});