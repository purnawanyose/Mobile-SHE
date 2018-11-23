import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  View,
  TextInput
} from "react-native";
import {
  Container,
  Header,
  Form,
  Item,
  Label,
  Input,
  Footer,
  Left,
  Right,
  Button,
  Body,
  Title
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles/Login";
import colors from "../../styles/colors";
import RoundedButton from "../components/RoundedButton";

const shelogo = require("../../assets/images/shelogo.png");
const silogo = require("../../assets/images/Logo-Semen-Indonesia.png");
const grlogo = require("../../assets/images/Logo-Semen-Gresik.png");
const pdlogo = require("../../assets/images/Logo-Semen-Padang.png");
const tnlogo = require("../../assets/images/Logo-Semen-Tonasa.png");

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.wrapper}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon
                name="chevron-left"
                size={20}
                style={styles.facebookButtonIcon}
              />
            </Button>
          </Left>
          <Body />
          <Right />
        </Header>
        <LinearGradient
          colors={[colors.green03, colors.blue02, colors.whiteBlue]}
          style={styles.wrapper}
        >
          <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
            <StatusBar
              backgroundColor={colors.green03}
              barStyle="light-content"
            />
            <View style={styles.scrollViewWrapper}>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.LoginText}>{"Log in"}</Text>
                <Form>
                  <Item stackedLabel style={{ marginLeft: 0 }}>
                    <Label style={styles.label}>Username</Label>
                    <Input />
                  </Item>
                  <Item stackedLabel last style={styles.inputItem}>
                    <Label style={styles.label}>Password</Label>
                    <Input />
                  </Item>
                  <RoundedButton
                    text="Login"
                    textColor={colors.white}
                    background={colors.green01}
                    handleOnPress={this.onFacebookPress}
                    style={styles.loginButton}
                  />
                </Form>
                <Text>{"\n"}</Text>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
        <Footer style={styles.footer}>
          <Image source={silogo} style={styles.footerLogoSI} />
          <Image source={grlogo} style={styles.footerLogo} />
          <Image source={pdlogo} style={styles.footerLogo} />
          <Image source={tnlogo} style={styles.footerLogo} />
        </Footer>
      </Container>
    );
  }
}
