import { StyleSheet } from "react-native";
import iPhoneSize from "../../../helpers/utils";
import colors from "../../../styles/colors";

let labelTextSize = 12;
let headingTextSize = 28;
if (iPhoneSize() === "small") {
  labelTextSize = 10;
  headingTextSize = 24;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex"
  },
  logo: {
    width: 60,
    height: 70,
    marginTop: 10,
    marginBottom: 40
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  scrollViewWrapper: {
    marginTop: 30,
    flex: 1,
    padding: 0,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  LoginText: {
    fontFamily: "Montserrat-Medium",
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  facebookButtonIcon: {
    color: colors.white,
    position: "relative"
  },
  label: {
    fontFamily: "Montserrat-Medium",
    fontSize: labelTextSize,
    color: colors.white,
    fontWeight: "300"
  },
  inputItem: {
    marginBottom: 50,
    marginLeft: -15
  },
  header: {
    backgroundColor: colors.green03
  },
  footer: {
    flexDirection: "row",
    backgroundColor: colors.whiteBlue
  },
  footerLogoSI: {
    width: 60,
    height: 40,
    marginTop: 5
  },
  footerLogo: {
    width: 40,
    height: 40,
    marginTop: 5
  },
  loginButton: {
    marginBottom: 30
  }
});

export default styles;
