import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import Navbar from "../src/components/navbar";
import { Camera, CameraType } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import * as FileSystem from "expo-file-system";

const FableCamera = () => {
	// Camera type
	const [cameraType, setCameraType] = useState(CameraType.front);

	const [hasPermission, setHasPermission] = useState(false);
	const [capturedImage, setCapturedImage] = useState(null);
	const cameraRef = useRef(null);

	// async method to get permission
	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const toggleCameraType = () => {
		if (cameraType === CameraType.back) {
			setCameraType(CameraType.front);
		} else if (cameraType === CameraType.front) {
			setCameraType(CameraType.back);
		}
	};

	const takePicture = async () => {
		if (cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			setCapturedImage(photo);
		}
	};

	const saveImageToCache = async () => {
		if (capturedImage) {
			const cacheDirectory = FileSystem.cacheDirectory;
			const fileName = "captured_image.jpg";
			const imagePath = `${cacheDirectory}${fileName}`;

			try {
				await FileSystem.copyAsync({
					from: capturedImage.uri,
					to: imagePath,
				});
				console.log("Image saved to cache:", imagePath);
				// You can now navigate to another page and pass `imagePath` as a parameter.
				// For example, using React Navigation:
				// navigation.navigate('NextPage', { imagePath });
			} catch (error) {
				console.error("Error saving image:", error);
			}
		}
	};

	return (
		<View style={{ flex: 1 }}>
			{hasPermission ? (
				<View style={{ flex: 1, height: 50 }}>
					<Camera style={{ flex: 1 }} type={cameraType}>
						<View>
							<Pressable onPress={toggleCameraType}>
								<Text>Toggle</Text>
							</Pressable>
						</View>
					</Camera>
				</View>
			) : (
				<Text>No access to camera</Text>
			)}
		</View>
	);
};

export default FableCamera;
