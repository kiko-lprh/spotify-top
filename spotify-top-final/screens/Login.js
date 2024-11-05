import React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, Pressable} from 'react-native';

const Login = () => {
    return (
        <SafeAreaView>
            <Text style={{
                color:"black",
                fontSize: 40,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 100
            }}>
                Spotistats
            
            </Text>

            <Text style={{
                color:"black",
                fontSize: 20,
                fontWeight: 'italics',
                textAlign: 'center',
                marginTop: 20
            }}>
            
                All your stats in one place!

            </Text>

            <View style={{height:80}}>
                <Pressable style={{
                    height:40,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width:"50%",
                    backgroundColor: "#1DB954",
                    alignItems:"center",
                    justifyContent:"center",
                    padding: 10,
                    marginTop: "50%"
                }}>
                    <Text>
                        Log in with Spotify
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );


    
};

export default Login;