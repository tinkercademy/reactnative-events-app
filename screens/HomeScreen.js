import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import {
  Container,
  Header,
  Body,
  Title,
  Card,
  CardItem,
  Content,
  Accordion,
  Separator,
} from "native-base";

const dataArray = [
  {
    title: "What is this?",
    content: "Exactly what the title says. A basket throwing competition!",
  },
  {
    title: "Who is this by?",
    content:
      "The International Society of Basket Throwers (ISBT). We love throwing baskets.",
  },
  {
    title: "Why is this?",
    content: "Because baskets! Wheee!",
  },
];

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
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.title}>Welcome</Text>
                <Text>
                  Thanks for downloading our app! Here, you'll find all kinds of
                  information about our upcoming event. It'll be great!
                </Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../assets/images/robot-dev.png")}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
          <Separator>
            <Text>FAQ</Text>
          </Separator>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content>
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
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
