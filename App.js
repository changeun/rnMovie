import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import Stack from './navigation/Stack';

const cacheImages = (images) => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
});

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1601758174811-a04aad8f2245?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
    <StatusBar barStyle="light-content" />
    </>
    ) : (
      <AppLoading
        startAsync={loadAssets}
        onFinish={onFinish}
        onError={console.error}
      />
    )
}