import React from "react";
import {View, Text} from "react-native";

const Header = ({children}) => {

    return <View><Text>{children}</Text></View>
};

export default Header;