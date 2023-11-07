import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native-web";
import Navbar from "../src/components/navbar";

const Home = () => {
	return (
		// <View>
		//<Text>Hello</Text>
		//</View>
		<ScrollView style={styles.MainBG}>
			<Navbar />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	MainBG: {
		backgroundColor: "#E7E7E7",
	},
});

export default Home;