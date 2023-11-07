import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Navbar from "../src/components/navbar";
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect } from "react";
import * as FileSystem from "expo-file-system";

const FableCamera = () => {
	const [hasPermission, setHasPermission] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			{hasPermission ? (
				<View style={{ flex: 1, height: 50 }}>
					<Camera style={{ flex: 1 }} type={Camera.Constants.Type.front}></Camera>
				</View>
			) : (
				<Text>No access to camera</Text>
			)}
		</View>
	);
};

export default FableCamera;
