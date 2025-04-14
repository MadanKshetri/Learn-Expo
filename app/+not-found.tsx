import{View, StyleSheet} from "react-native";
import{Link,Stack} from 'expo-router';

export default function NotFoundScreen(){
    return(
        <>
        <Stack.Screen options={{ title:"Oops! Page not found"}}/>
        <View style={styles.container}>
         <Link href={"/"} style={styles.button}>
         Go back to Homescreen
         </Link>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    }
})