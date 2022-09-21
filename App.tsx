/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';
import LoadScreen from './src/LoadScreen';
import ErrorScreen from './src/ErrorScreen';
import {url} from './src/config';

const App = () => {
  const refWebView = React.useRef<any>();

  const [load, setLoad] = React.useState<boolean>(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    ...styles.safeAreaView,
  };

  const reload = () => {
    if (
      refWebView !== null &&
      refWebView !== undefined &&
      refWebView.current !== null
    ) {
      refWebView.current.reload();
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {!load && <LoadScreen />}

      <WebView
        ref={refWebView}
        source={{uri: url}}
        style={styles.web}
        enableApplePay={true}
        cacheEnabled={true}
        javaScriptEnabled={true}
        onLoadEnd={() => setLoad(true)}
        renderError={() => <ErrorScreen onPress={reload} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    width: '100%',
    height: '100%',
  },
  web: {
    flex: 1,
  },
});

export default App;
