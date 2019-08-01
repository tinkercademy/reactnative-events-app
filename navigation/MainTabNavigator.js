import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import EventsScreen from "../screens/EventsScreen";
import ContactScreen from "../screens/ContactScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  ),
};

HomeStack.path = "";

const EventsStack = createStackNavigator(
  {
    Links: EventsScreen,
  },
  config
);

EventsStack.navigationOptions = {
  tabBarLabel: "Events",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list-box" : "md-list-box"}
    />
  ),
};

EventsStack.path = "";

const ContactStack = createStackNavigator(
  {
    Settings: ContactScreen,
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: "Contact",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-map" : "md-map"}
    />
  ),
};

ContactStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  EventsStack,
  ContactStack,
});

tabNavigator.path = "";

export default tabNavigator;
