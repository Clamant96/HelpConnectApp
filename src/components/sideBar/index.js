import React, { Component } from 'react';

import { Image, StyleSheet, View, Button } from 'react-native';

export default class SideBar extends Component {

    _onPressButton() {
        alert('Voce clicou em Login');

      }

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../../../assets/menuIcon.png')} 
                    style={styles.image} 

                />
                        
                <Button
                    onPress={this._onPressButton}
                    title="Login"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
        height: 100,
            
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    image: {
        width: 40,
        height: 40,
    },
    buttonContainer: {
        margin: 20,
    },
    buttonMenu: {
        margin: 20,
        padding: 20,
        borderBottomColor: '#737373',
    },
    buttonLogin: {
        margin: 20,
    },
});