import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Inicio() {
    return (
        <View style={styles.container}>
            <View style={styles.inicioTexto}>
                <Text style={styles.h1}>Desenvolvimento Front end</Text>
                <Text style={styles.p}>Realizamos o desenvolvimento de seu site, com base em suas ideias. Entre em contato e faca uma contacao conosto.</Text>

            </View> 

            <View style={styles.inicioImg}>
                <Image 
                    source={require('../../../assets/imgservices.png')} 
                    style={styles.image} 

                />

            </View>   

        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inicioTexto: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#212353",
    },
    p: {
        fontSize: 16,
        fontWeight: "300",
        color: "#4b5d68",
    },
    inicioImg: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 330,
        height: 200,
    },
  });