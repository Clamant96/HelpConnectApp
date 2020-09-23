import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

function CustomDrawer({...props}){
    return(
        <View style={styles.container}>
            <View style={styles.userArea}>
                <Image 
                    source={require('../../../assets/user.png')}
                    style={styles.user}
                
                />
                <Text style={styles.nome}>Help Connect</Text>
                <Text style={styles.email}>kevin.helpconnect@gmail.com</Text>
            </View>

            <DrawerNavigatorItems {...props} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        backgroundColor: '#f9f9f9',
    },
    userArea: {
        padding: 20,
        backgroundColor: '#f1f1f1',
    },
    user: {
        width: 50,
        height: 50,
    },
    nome: {
        marginTop: 5,
        fontSize: 18,
        fontSize: 20,
        fontWeight: "bold",
        color: "#212353",
    },
    email: {
        fontSize: 16,
        fontWeight: "300",
        color: "#4b5d68",
    },
});

export default CustomDrawer;