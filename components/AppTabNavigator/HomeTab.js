import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Icon } from "native-base";
import CardComponent from "../CardComponent";

export default class HomeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />
  };

  render() {
    return (
      <Container style={style.container}>
        <Content>
          <CardComponent />
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
