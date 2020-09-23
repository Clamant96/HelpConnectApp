import React from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Header from '../header/index';

export default function Sobre(){
    return(
        <View style={styles.container}>
            <Header />
            <ImageBackground source={require('../../../../../assets/backgroundCompleto.png')} style={styles.backgroundImage}>

                <SafeAreaView style={styles.container}>
                    <ScrollView>

                        <View style={styles.bloco}>

                            <View style={styles.inicioTexto}>
                                <Text style={styles.h1}>Sobre a Help Connect</Text>

                                <Text style={styles.h2}>Objetivo</Text>
                                <Text style={styles.p}>
                                    Oferecer uma oportunidade para pequenos empresários a se estabilizarem como empresa, além de potencializar a divulgação de suas marcas e a qualidade de seus produtos/serviços com maior credibilidade, prezando a qualidade e custos acessíveis.
                                    Proporcionado uma experiencia diferenciada ao nosso público alvo, os auxiliando e de desenvolvendo e crescendo junto com suas marcas.

                                </Text>

                                <Text style={styles.h2}>Missão</Text>
                                <Text style={styles.p}>
                                    A Help Connect foi criada com o objetivo de proporcionar o desenvolvimento de pequenos empreendedores, impulsionando e expandido pequenas marcas que estão tentando se fixar no mercado. Fornecendo produtos com qualidade e preços acessíveis para esse público.
                                
                                </Text>

                                <Text style={styles.h2}>Visão</Text>
                                <Text style={styles.p}>    
                                    Ser reconhecida como referência em qualidade, inovação e credibilidade no ramo tecnológico e no atendimento ao cliente. Dando novas oportunidades e um refúgio da crise para pequenos empreendedores que estão tentando fugir da crise, a se estabelecerem como empresa e conseguirem a estabilidade financeira.
                                
                                </Text>

                                <Text style={styles.h2}>Valores</Text>
                                <Text style={styles.pList}>•	Pessoas em primeiro lugar;</Text>
                                <Text style={styles.pList}>•	Proximidade com o cliente;</Text>
                                <Text style={styles.pList}>•	Inovação;</Text>
                                <Text style={styles.pList}>•	Respeito;</Text>
                                <Text style={styles.pList}>•	Comprometimento;</Text>
                                <Text style={styles.pList}>•	Ética e Moral;</Text>
                                <Text style={styles.pList}>•	Transparência;</Text>
                                <Text style={styles.pList}>•	Responsabilidade;</Text>
                                <Text style={styles.pList}>•	Qualidade no atendimento;</Text>
                                <Text style={styles.pList}>•	Qualidade nos serviços desenvolvidos;</Text>
                                <Text style={styles.pList}>•	Honestidade e seriedade;</Text>
                                <Text style={styles.pList}>•	Colaboradores bem qualificados.</Text>

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
    inicioTexto: {
        padding: 10,
        margin: 10,
    },
    h1: {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#212353",
    },
    h2: {
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#212353",
    },
    p: {
        padding: 10,
        fontSize: 14,
        fontWeight: "300",
        color: "#4b5d68",
    },
    pList: {
        padding: 2,
        fontSize: 14,
        fontWeight: "300",
        color: "#4b5d68",
    },
  });