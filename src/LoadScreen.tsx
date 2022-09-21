import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {primaryColor} from './config';
export default function LoadScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    ...styles.root,
  };

  return (
    <View style={backgroundStyle}>
      <Image source={require('./meemup.png')} style={styles.image} />

      <View>
        <ActivityIndicator color={primaryColor} size={40} />
        <Text style={styles.text}>Please waiting ....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    zIndex: 10000,
  },
  image: {
    maxWidth: 300,
    maxHeight: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
  },
});
