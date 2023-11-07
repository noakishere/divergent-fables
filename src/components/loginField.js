import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import React from "react";

const LoginField = () => {
	// const [text, onChangeText] = React.useState("");

	//test function
	function goToCamera() {
		router.replace("/fableCamera");
	}

	return (
		<View>
			<SafeAreaView>
				<TextInput
					style={styles.input}
					// onChangeText={onChangeText}
					value=""
					placeholder="password"
				/>
			</SafeAreaView>

			<View style={styles.buttonContainer}>
				<Pressable onPress={goToCamera} style={styles.submitButton}>
					<Text style={styles.text}>Submit</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		width: 300,
		height: 40,
		margin: 12,
		marginTop: 20,
		borderWidth: 1,
		padding: 10,
	},
	submitButton: {
		textAlign: "center",
		padding: 10,
		// marginRight: 10,
		borderWidth: 1,
	},
	text: {
		textAlign: "center",
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#0000FF",
	},
	buttonContainer: {
		alignItems: "center",
	},
});

export default LoginField;
