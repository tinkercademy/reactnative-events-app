import React from "react";
import { ExpoConfigView } from "@expo/samples";

export default class ContactScreen extends React.Component {
  render() {
    return <ExpoConfigView />;
  }
}

ContactScreen.navigationOptions = {
  title: "app.json",
};
