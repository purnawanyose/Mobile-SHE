import { StyleSheet } from "react-native";
import iPhoneSize from "../../../helpers/utils";
import colors from "../../../styles/colors";
import { Row } from "native-base";

let labelTextSize = 12;
let weatherTextSize = 18;
let weatherTextSmSize = 14;
let headingTextSize = 28;
if (iPhoneSize() === "small") {
  labelTextSize = 10;
  headingTextSize = 24;
  weatherTextSize = 16;
  weatherTextSmSize = 12;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex"
  },
  homeWrapper: {
    flex: 1,
    display: "flex"
  },
  weatherContent: {
    flexDirection: "row",
    marginBottom: 15,
    borderBottomColor: colors.lightBlack,
    borderBottomWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  newsContent: {
    flexDirection: "row"
  },
  weatherText: {
    fontFamily: "Montserrat-Medium",
    fontSize: weatherTextSize,
    color: colors.lightBlack,
    fontWeight: "300",
    marginBottom: 5
  },
  weatherTextSm: {
    fontFamily: "Montserrat-Light",
    fontSize: weatherTextSmSize,
    color: colors.lightBlack,
    fontWeight: "300",
    marginBottom: 10
  },
  newsText: {
    fontFamily: "Montserrat-Regular",
    fontSize: weatherTextSmSize,
    color: colors.lightBlack,
    fontWeight: "300",
    marginBottom: 5,
    marginLeft: 20
  },
  news: {
    height: 160,
    marginTop: 20
  },
  itemMenu: {
    flexDirection: "row",
    padding: 10
  }
});

export default styles;
