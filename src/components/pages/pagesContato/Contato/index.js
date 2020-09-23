import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Header from '../header/index';

export default function Contato(){
    return(
        <View style={styles.container}>
            <Header />
            <ImageBackground source={require('../../../../../assets/backgroundCompleto.png')} style={styles.backgroundImage}>

                <SafeAreaView style={styles.container}>
                    <ScrollView>

                        <View style={styles.bloco}>
                            

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
  });