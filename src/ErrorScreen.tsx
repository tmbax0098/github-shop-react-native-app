import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Text,
  Button,
} from 'react-native';
import {primaryColor} from './config';

type Props = {
  onPress: () => any;
};

export default function ErrorScreen({onPress}: Props) {
  return (
    <View style={styles.root}>
      <Image source={require('./meemup.png')} style={styles.image} />

      <View>
        <ActivityIndicator color={primaryColor} size={40} />
        <Text style={styles.text}>Please waiting ....</Text>
      </View>

      <Button color={primaryColor} title="Try again" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    padding: 20,
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
