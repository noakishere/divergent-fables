import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import LoginField from "./loginField";
import RegisterField from "./registerField";

export default function Navbar() {
	const [text, onChangeText] = React.useState("");
	const [isTryingToLogin, onChangeIsTryingToLogin] = React.useState(false);
	const [isTryingToRegister, onChangeIsTryingToRegister] = React.useState(false);

	function LoginForm() {
		if (isTryingToLogin) {
			return <LoginField />;
		} else if (!isTryingToLogin) {
			return null;
		}
	}

	function RegisterForm() {
		if (isTryingToRegister) {
			return <RegisterField />;
		} else if (!isTryingToRegister) {
			return null;
		}
	}

	function AppearLogin() {
		// hide register just in case
		onChangeIsTryingToRegister(false);

		onChangeIsTryingToLogin(!isTryingToLogin);
	}

	function AppearRegister() {
		// Hide login just in case
		onChangeIsTryingToLogin(false);

		onChangeIsTryingToRegister(!isTryingToRegister);
	}

	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<Pressable style={styles.button}>
					<Image style={styles.navButton} source={require("../../assets/home.png")} />
					{/* <Text style={styles.text}>H</Text> */}
				</Pressable>
				<Pressable style={styles.button}>
					<Image style={styles.navButton} source={require("../../assets/play.png")} />
					{/* <Text style={styles.text}>P</Text> */}
				</Pressable>
				<Pressable style={styles.button}>
					<Image style={styles.navButton} source={require("../../assets/profile.png")} />
					{/* <Text style={styles.text}>U</Text> */}
				</Pressable>
				<Pressable style={styles.button}>
					<Image style={styles.navButton} source={require("../../assets/gallery.png")} />
					{/* <Text style={styles.text}>G</Text> */}
				</Pressable>
			</View>
			<Text style={styles.labelText}>login/register</Text>
			<SafeAreaView>
				<TextInput
					style={styles.input}
					onChangeText={onChangeText}
					value={text}
					placeholder="username"
				/>
			</SafeAreaView>
			<View style={styles.loginButtonsContainer}>
				{/* <Link href={"/src/screens/login"}> */}
				<Pressable onPress={AppearLogin} style={styles.loginButton}>
					<Text style={styles.text}>Login</Text>
				</Pressable>
				{/* </Link> */}
				<Pressable onPress={AppearRegister} style={styles.registerButton}>
					<Text style={styles.text}>register</Text>
				</Pressable>
			</View>

			<LoginForm />
			<RegisterForm />
		</View>
	);
}

const styles = StyleSheet.create({
	buttonsContainer: {
		flexDirection: "row",
		marginBottom: 10,
	},
	loginButtonsContainer: {
		margin: 2,
		flexDirection: "row",
	},
	loginButton: {
		padding: 10,
		marginRight: 10,
		borderWidth: 1,
	},
	registerButton: {
		padding: 10,
		marginLeft: 10,
		borderWidth: 1,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#E7E7E7",
		// bor
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "#0000FF",
	},
	labelText: {
		color: "#666666",
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		backgroundColor: "#E7E7E7",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		width: 300,
		height: 40,
		margin: 12,
		marginTop: 20,
		borderWidth: 1,
		padding: 10,
	},
	navButton: {
		width: 20,
		height: 20,
	},
});
