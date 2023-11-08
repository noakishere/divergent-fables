import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Image } from "react-native";

const Story = ({ title, prompts }) => {
	return (
		<View>
			<Pressable style={styles.button}>
				<Text style={styles.text}>{title}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#E7E7E7",
		margin: 15,
		borderWidth: 2,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#0000FF",
	},
});

export default Story;
