import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ height: 110, width: 70, marginLeft: 12 }}>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            elevation: 2
          }}
        >
          <Image
            source={this.props.imageUri}
            style={{ width: 32, height: 32, resizeMode: "contain" }}
          />
        </View>
        <View style={{ flex: 1, paddingTop: 10, alignItems: "center" }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default MenuItems;
