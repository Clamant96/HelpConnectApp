import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { ImageBackground, StyleSheet, View } from 'react-native';

import SideBar from '../sideBar/index';
import Inicio from '../inicio/index';

export default function Layout() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
            <ImageBackground source={require('../../../assets/backgroundCompleto.png')} style={styles.image}>
            <SideBar />
            <Inicio />

        </ImageBackground>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
  });