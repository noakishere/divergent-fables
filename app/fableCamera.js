import { View, Text, TouchableOpacity, StyleSheet, Pressable, Image } from "react-native";
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

	const [showCamera, setShowCamera] = useState(true);

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
			setShowCamera(false);
			console.log(photo);
		}
	};

	const saveImageToCache = async () => {
		// console.log({ uri: capturedImage.uri.split("/Camera/")[1] });
		if (capturedImage) {
			const cacheDirectory = FileSystem.cacheDirectory;
			const fileName = { uri: capturedImage.uri.split("/Camera/")[1] };
			const imagePath = `${cacheDirectory}${fileName.uri}`;

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
				showCamera ? (
					<View style={{ flex: 1 }}>
						<Camera style={{ flex: 1 }} type={cameraType} ref={cameraRef}>
							<View>
								<Pressable onPress={toggleCameraType}>
									<Text>Toggle</Text>
								</Pressable>
								<Pressable onPress={takePicture}>
									<Text>Submit</Text>
								</Pressable>
							</View>
						</Camera>
					</View>
				) : (
					<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
						<Image source={{ uri: capturedImage.uri }} style={{ width: 500, height: 500 }} />
						<View>
							<Pressable onPress={saveImageToCache}>
								<Text>Save</Text>
							</Pressable>
						</View>
					</View>
				)
			) : (
				<Text>No access to camera</Text>
			)}
		</View>
	);
};

export default FableCamera;
