import React, { Component } from 'react';

import { Image, StyleSheet, View, Button } from 'react-native';

export default class SideBar extends Component {

    _onPressButton() {
        alert('Voce clicou em Login');

      }

    render() {
        return (
            <View style={styles.container}>
                {/*<Image 
                    source={require('../../../assets/menuIcon.png')} 
                    style={styles.image} 

                />
                        
                <Button
                    onPress={this._onPressButton}
                    title="Login"
                />*/}

                <Image 
                    source={require('../../../../../assets/logo.png')} 
                    style={styles.image} 

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        margin: 0,
        height: 80,
            
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",

        backgroundColor: '#f1f1f1',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        
    },
    image: {
        width: 100,
        height: 40,
    },
    /*buttonContainer: {
        margin: 20,
    },
    buttonMenu: {
        margin: 20,
        padding: 20,
        borderBottomColor: '#737373',
    },
    buttonLogin: {
        margin: 20,
    },*/
});