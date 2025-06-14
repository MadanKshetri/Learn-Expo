import { Text, View, StyleSheet, ScrollView } from "react-native";
import ElevatedCards from "@/components/Elevatedcar";
import Flatcard from "@/components/Flatcard";
import ImageViewer from "@/components/ImageViewer";
import FancyCard from "@/components/FancyCard";
import ActionCard from "@/components/ActionCard";
import ContactList from "@/components/ContactList";

export default function AboutScreen() {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.cards}>
					<Flatcard />
					<ElevatedCards />
					<FancyCard />
					<ActionCard />
					<ContactList />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	cards: {},
});
