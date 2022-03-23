
import { StyleSheet, Image} from "react-native";

const bgImg = {uri: "https://i.ibb.co/jRhR5gH/bg.jpg"}

export default function BgImg() {
    return(
        <Image source={bgImg} style={styles.bgImg} />
    );
}


const styles = StyleSheet.create({
    bgImg: {
        position:'absolute',
        minWidth:'100vw',
        minHeight:'100vh',
        resizeMode:'cover',
        zIndex:0
    },
})