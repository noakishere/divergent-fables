import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native-web";
import Navbar from "../src/components/navbar";
import FableCamera from "./fableCamera";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#e7e7e7" }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "#e7e7e7" },
					headerShadowVisible: false,
					navigationBarHidden: false,
					headerTitle: "",
					navigationOptions: {
						header: ({ goBack }) => ({
							left: <Left onPress={goBack} />,
						}),
					},
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false} style={styles.MainBG}>
				<Navbar />
			</ScrollView>

			{/* <FableCamera /> */}
		</SafeAreaView>
		// <Test />
	);
};

const styles = StyleSheet.create({
	MainBG: {
		backgroundColor: "#E7E7E7",
	},
});

export default Home;
