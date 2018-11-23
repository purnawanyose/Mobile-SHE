import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

import NewsContents from "../components/NewsContent";
import MenuItems from "../components/MenuItems";
import styles from "./styles/HomeMenu";
import colors from "../../styles/colors";

const helmet = require("../../assets/images/helmet.png");

export default class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.wrapper}>
        <StatusBar backgroundColor={colors.green03} barStyle="light-content" />
        <View style={styles.homeWrapper}>
          <View style={styles.weatherContent}>
            <View style={{ flex: 2 }}>
              <Text style={styles.weatherText}>Welcome, Indra Nofiandi</Text>
              <Text style={styles.weatherTextSm}>Have a nice day!</Text>
            </View>
            <View style={{ flex: 1 }} />
          </View>
          <View>
            <View style={{ flex: 1 }}>
              <Text style={styles.newsText}>Trending News</Text>
            </View>
            <View style={{ flex: 1 }} />
            <ScrollView scrollEventThrottle={16}>
              <View style={styles.news}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <NewsContents
                    imageUri={require("../../assets/images/safety.jpg")}
                    name="Safety Achievement"
                  />
                  <NewsContents
                    imageUri={require("../../assets/images/policy.png")}
                    name="New Policy"
                  />
                  <NewsContents
                    imageUri={require("../../assets/images/ohsas.png")}
                    name="New Achievement"
                  />
                </ScrollView>
              </View>
            </ScrollView>
          </View>
          <View style={styles.itemMenu}>
            <MenuItems
              imageUri={require("../../assets/images/helmet.png")}
              name="Safety"
            />
            <MenuItems
              imageUri={require("../../assets/images/worker.png")}
              name="A.P.D"
            />
            <MenuItems
              imageUri={require("../../assets/images/fire.png")}
              name="Fire System"
            />
            <MenuItems
              imageUri={require("../../assets/images/defibrillator.png")}
              name="Hygiene"
            />
          </View>
          <View style={styles.itemMenu}>
            <MenuItems
              imageUri={require("../../assets/images/env.png")}
              name="Environment"
            />
            <MenuItems
              imageUri={require("../../assets/images/mic.png")}
              name="T.G.D"
            />
            <MenuItems
              imageUri={require("../../assets/images/news.png")}
              name="Hot News"
            />
            <MenuItems
              imageUri={require("../../assets/images/network.png")}
              name="User"
            />
          </View>
        </View>
      </Container>
    );
  }
}
