import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

import Header from '../header/index';

export default function Layouts(){
    return(
        <View style={styles.container}>
            <Header />
            <ImageBackground source={require('../../../../../assets/backgroundCompleto.png')} style={styles.backgroundImage}>

                <SafeAreaView style={styles.container}>
                    <ScrollView>

                        <View style={styles.bloco}>
                            {/* IMAGEM */}
                            <View style={styles.imgStyle}>
                                <Image 
                                source={require('../../../../../assets/layout_teste.jpg')}
                                style={styles.image}
                            
                                />

                            </View>

                            <View style={styles.inicioTexto}>
                                <Text style={styles.h1}>Desenvolvimento Front end</Text>
                                <Text style={styles.p}>Realizamos o desenvolvimento de seu site, com base em suas ideias. Entre em contato e faca uma contacao conosto.</Text>

                            </View>

                            {/* IMAGEM */}
                            <View style={styles.imgStyle}>
                                <Image 
                                source={require('../../../../../assets/layout_teste.jpg')}
                                style={styles.image}
                            
                                />

                            </View>

                            <View style={styles.inicioTexto}>
                                <Text style={styles.h1}>Desenvolvimento Front end</Text>
                                <Text style={styles.p}>Realizamos o desenvolvimento de seu site, com base em suas ideias. Entre em contato e faca uma contacao conosto.</Text>

                            </View>

                            {/* IMAGEM */}
                            <View style={styles.imgStyle}>
                                <Image 
                                source={require('../../../../../assets/layout_teste.jpg')}
                                style={styles.image}
                            
                                />

                            </View>

                            <View style={styles.inicioTexto}>
                                <Text style={styles.h1}>Desenvolvimento Front end</Text>
                                <Text style={styles.p}>Realizamos o desenvolvimento de seu site, com base em suas ideias. Entre em contato e faca uma contacao conosto.</Text>

                            </View>

                            {/* IMAGEM */}
                            <View style={styles.imgStyle}>
                                <Image 
                                source={require('../../../../../assets/layout_teste.jpg')}
                                style={styles.image}
                            
                                />

                            </View>

                            <View style={styles.inicioTexto}>
                                <Text style={styles.h1}>Desenvolvimento Front end</Text>
                                <Text style={styles.p}>Realizamos o desenvolvimento de seu site, com base em suas ideias. Entre em contato e faca uma contacao conosto.</Text>

                            </View>

                        </View>

                    </ScrollView>
                </SafeAreaView>

            </ImageBackground>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    bloco: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        
    },
    imgStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 5,
    },
    image: {
        width: 320,
        height: 180,
        borderRadius: 5,
    },
    inicioTexto: {
        padding: 10,
        margin: 10,
        width: 320,
        height: 100,
    },
    h1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#212353",
    },
    p: {
        fontSize: 14,
        fontWeight: "300",
        color: "#4b5d68",
    },
  });