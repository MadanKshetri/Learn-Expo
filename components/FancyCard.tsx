import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
export default function FancyCard() {
	return (
		<View>
			<Text style={styles.headingText}>Trending Places in pokhara</Text>
			<View style={[styles.cards, styles.cardElevated]}>
				<Image
					source={{
						uri: "https://t3.ftcdn.net/jpg/02/65/85/90/360_F_265859050_7ie8eiV2fWft8THOJ8gTT9OwMUaQTIkQ.jpg",
					}}
					style={styles.cardImage}
				/>
				<View style={styles.cardBody}>
					<Text style={styles.cardTitle}> Pokhara</Text>
					<Text style={styles.cardLabel}> City of Lakes</Text>
					<Text style={styles.cardDescription}>
						Pokhara is a scenic city in central Nepal, renowned for its stunning
						natural beauty and tranquil lakes. Nestled against the backdrop of
						the Annapurna mountain range, it offers breathtaking vistas,
						adventure sports, and a laid-back atmosphere that's popular with
						both trekkers and leisure travelers. Its serene Phewa Lake,
						cascading waterfalls, and lush landscapes make it one of Nepal’s
						most enchanting destinations.
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		paddingHorizontal: 8,
	},
	cards: {
		paddingHorizontal: 8,
		width: 380,
		height: 360,
		borderRadius: 6,
		marginVertical: 12,
		marginHorizontal: 1,
	},
	cardElevated: {
		backgroundColor: "#E07C24",
		elevation: 3,
		shadowOffset: {
			width: 1,
			height: 1,
		},
	},
	cardImage: {
		height: 180,

		marginBottom: 8,
	},
	cardBody: {
		flex: 1,
		paddingHorizontal: 8,
	},
	cardTitle: {
		color: "#000000",
		fontSize: 22,
		fontWeight: "bold",
	},
	cardLabel: {
		color: "#000000",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 5,
	},
	cardDescription: {
		color: "#4834DF",
		fontSize: 12,
		fontWeight: "bold",
		marginTop: 5,
		fontFamily: "Arial",
	},
});
