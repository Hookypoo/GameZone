import React, { useState } from 'react';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Text } from "react-native";
import Navigator  from "./routes/Drawer";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Text>Not Working Yet</Text>
   );
  } else {
    return (
     <Navigator />
    //   <AppLoading
    //     startAsync={getFonts}
    //     onFinish={()=> setFontsLoaded(true)}
    // />
    )
  }
  
}


