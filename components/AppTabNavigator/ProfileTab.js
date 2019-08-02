import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default class ProfileTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="person" style={{ color: tintColor }} />
  };

  render() {
    return (
      <View style={style.container}>
        <Text>ProfileTab</Text>
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
