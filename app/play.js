import React from "react";
import { useState } from "react";

import {
	StyleSheet,
	Text,
	View,
	Pressable,
	TextInput,
	Image,
	FlatList,
	SectionList,
	ScrollView,
} from "react-native";
import Story from "../src/components/playComponents/story";
import Prompt from "../src/components/playComponents/prompt";
import Navbar from "../src/components/navbar";
import NavbarButton from "../src/components/navbarBtn";

import localData from "D:/_CART/cart-351/final-project/assets/data/examplePrompts.json";

const Play = () => {
	// const [fables, setFables] = useState(localData);

	const fables = Object.keys(localData).map((key) => ({
		title: localData[key].title,
		data: localData[key].prompts,
	}));

	// const stories = fables.map((storyInfo) => (
	// 	<Story title={storyInfo.title} prompts={storyInfo.data} />
	// ));

	const stories = fables.map((fable) => <Story title={fable.title} prompts={fable.data} />);

	console.log(fables);
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.MainBG}>
			<View style={styles.buttonsContainer}>
				<NavbarButton iconUrl={require("../assets/home.png")} pageRouteUrl={""} />
				<NavbarButton iconUrl={require("../assets/play.png")} pageRouteUrl={"/play"} />
				<NavbarButton iconUrl={require("../assets/profile.png")} />
				<NavbarButton iconUrl={require("../assets/gallery.png")} pageRouteUrl={"/gallery"} />
			</View>

			<Text>Play page!</Text>
			<View>
				{/* Display data in a FlatList */}
				{/* <FlatList
					data={fables}
					keyExtractor={({ id }, index) => id}
					renderItem={({ fable }) => {
						<Text>{fable.title}</Text>;
					}}
				/> */}
				{stories}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	MainBG: {
		backgroundColor: "#E7E7E7",
	},
	buttonsContainer: {
		flexDirection: "row",
		marginBottom: 10,
	},
});

export default Play;
