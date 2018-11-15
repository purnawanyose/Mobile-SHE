import { StyleSheet } from "react-native";
import iPhoneSize from "../../../helpers/utils";
import colors from "../../../styles/colors";
import { Row } from "native-base";

let termsTextSize = 12;
let headingTextSize = 28;
if (iPhoneSize() === "small") {
  termsTextSize = 10;
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
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    padding: 25,
    paddingTop: 50
  },
  welcomeText: {
    fontFamily: "Montserrat-Medium",
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  termsAndConditions: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 30
  },
  termsText: {
    fontFamily: "Montserrat-Light",
    color: colors.white,
    fontSize: termsTextSize,
    fontWeight: "normal"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  },
  facebookButtonIcon: {
    color: colors.white,
    position: "relative",
    left: 20,
    zIndex: 8
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
  }
});

export default styles;
