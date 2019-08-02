import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { Container, Header, Body, Title } from "native-base";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerText}>
              Basket Throwing Competition 2019
            </Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
  },
  headerText: {
    color: "white",
  },
});
