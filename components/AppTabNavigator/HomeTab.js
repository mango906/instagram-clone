import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default class HomeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />
  };

  render() {
    return (
      <View style={style.container}>
        <Text>HomeTab</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
