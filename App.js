import React, { useState } from 'react';
import { Provider } from "react-redux";
import ShopNavigator from './navigation/ShopNavigator';
import store from "./store/store";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setFontLoaded(true)
      }}
      onError={(err) => console.log(err)}
    />
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

