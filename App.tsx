import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import Routes from './src/utils/Routes';
import {colors} from './src/utils/theme';
import {setupStore} from './src/store/store';

const App = () => {
  setTimeout(() => {
    SplashScreen.hide();
  });
  const store = setupStore({});

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.orangeColor}
        />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <Toast />
      </View>
    </Provider>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.orangeColor,
  },
});

export default App;
