
import { StyleSheet, Image, Dimensions} from "react-native";

// Make sure background image covers entire view-width and height
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const bgImg = {uri: "https://i.ibb.co/jRhR5gH/bg.jpg"};


export default function BgImg() {
    return(
        <Image source={bgImg} style={styles.bgImg} />
    );
}


const styles = StyleSheet.create({
    bgImg: {
        position:'absolute',
        minWidth:windowWidth,
        minHeight: windowHeight,
        resizeMode:'cover',
        zIndex:-1
    },
})