import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  return (
    <ImageBackground
      source={require('../../../assets/ReUse-bg.jpg')}
      style={styles.background}
    >
      <View style={styles.overlay} />
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});