import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Icon } from "native-base";
import {
  createBottomTabNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

//하단 탭 내용들
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import HomeTab from "./AppTabNavigator/HomeTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import SearchTab from "./AppTabNavigator/SearchTab";

const AppTabNavigator = createMaterialTopTabNavigator(
  {
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: "white"
          }
        })
      },
      iconStyle: { height: 50 },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true
    }
  }
);

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScrren extends React.Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
  };

  render() {
    return <AppTabContainet />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
