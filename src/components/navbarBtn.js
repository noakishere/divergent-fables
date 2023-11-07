import React from "react";
import { StyleSheet, Text, View, Pressable, TextInput, Image } from "react-native";
import { router } from "expo-router";

const NavbarButton = ({ iconUrl, pageRouteUrl }) => {
	function DirectToPage() {
		router.replace(pageRouteUrl);
	}

	return (
		<Pressable onPress={DirectToPage} style={styles.button}>
			<Image resizeMode="contain" style={styles.navButton} source={iconUrl} />
		</Pressable>
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
		// bor
	},
	navButton: {
		width: 20,
		height: 20,
	},
});

export default NavbarButton;
