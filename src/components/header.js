import React from "react";
import {View, Text} from "react-native";

const Header = ({children}) => {

    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
            {children}
        </Text>
    </View>
};

export default Header;

const styles = {
    textStyle: {
        fontSize: 22
    },
    viewStyle: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d0d0d0"
    }
};