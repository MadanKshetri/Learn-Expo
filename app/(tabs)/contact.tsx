import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function contact() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello buddy</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "grey",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
	},
	button: {
		fontSize: 20,
		textDecorationLine: "underline",
		color: "#fff",
	},
});
