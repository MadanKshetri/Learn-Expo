import {
	StyleSheet,
	Text,
	View,
	Linking,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
	function OpenWebsite(WebsiteLink: string) {
		Linking.openURL(WebsiteLink);
	}
	return (
		<View>
			<Text style={styles.headingText}> Blog Card</Text>
			<View style={[styles.card, styles.Elevated]}>
				<View style={styles.headerConatiner}>
					<Text style={styles.headerText}>Explore the Beauty of Pokhara</Text>
				</View>
				<Image
					source={{
						uri: "https://cdn.shortpixel.ai/spai/q_lossless+w_1901+to_webp+ret_img/www.charlotteplansatrip.com/wp-content/uploads/2019/11/Peace-Pagoda.jpg",
					}}
					style={styles.cardImage}
				/>

				<View style={styles.bodyContainer}>
					<Text style={styles.containerText} numberOfLines={3}>
						Pokhara is centrally located in Nepal, at the foot of the Himalayas
						and on the banks of the beautiful Phewa Lake. It is a nice city, and
						even though it is the second-largest city in Nepal, it feels like a
						cozy place. The area of the city directly on Phewa Lake is the best
						base in Pokhara for tourists. From here (weather permitting) you
						have a beautiful view of the snowy peaks of the Himalayas. A popular
						activity from Pokhara is a multi-day hike in the Himalayas. In
						addition, Pokhara is packed with nice restaurants, bars, and coffee
						shops. It is a city with a nice atmosphere and the perfect place to
						relax and eat well before or after a challenging hike.
					</Text>
				</View>
				<View style={styles.footerContainer}>
					<TouchableOpacity
						onPress={() =>
							OpenWebsite(
								"https://www.charlotteplansatrip.com/en/nepal-en/pokhara-2/"
							)
						}
					>
						<Text style={styles.SocialLinks}> Read More </Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							OpenWebsite("https://portfolio.madankshetri.com.np/?i=1")
						}
					>
						<Text style={styles.SocialLinks}> Follow me </Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headingText: {
		paddingHorizontal: 8,
		fontSize: 24,
		fontWeight: "bold",
	},
	card: {
		borderRadius: 6,
		marginHorizontal: 16,
		marginVertical: 12,
		width: 350,
		height: 360,
	},
	Elevated: {
		backgroundColor: "#E07C24",
		elevation: 3,
		shadowColor: "#333",
		shadowOpacity: 0.4,
	},
	headerText: {
		paddingHorizontal: 8,
		color: "#000",
		fontWeight: "600",
	},
	cardImage: {
		height: 190,
	},
	bodyContainer: {
		paddingHorizontal: 10,
	},
	footerContainer: {
		paddingHorizontal: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	headerConatiner: {
		height: 40,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	containerText: {},
	SocialLinks: {
		fontSize: 16,
		color: "#000000",
		backgroundColor: "#FFF",
		borderRadius: 5,
		marginTop: 8,
		paddingHorizontal: 20,
		paddingVertical: 6,
	},
});
