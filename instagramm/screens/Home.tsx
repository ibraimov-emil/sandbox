import React, {FC, ReactElement} from "react";
import {View, StyleSheet, Text, SafeAreaView} from "react-native";
import WebView from "react-native-webview";

interface HomeProps {
}

export const Home: FC<HomeProps> = (): ReactElement => {
    return <WebView
        source={{uri: 'https://www.instagram.com/'}}
        style={{flex: 1}}
        proxy={{
            host: 'https://antizapret.prostovpn.org/proxy.pac',
            // port: 8080, // proxy port
            // username: 'your-username', // if authentication is required
            // password: 'your-password', // if authentication is required
        }}
    />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
