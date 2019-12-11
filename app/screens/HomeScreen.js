import { StyleSheet, View, Text, Button } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

class HomeScreen extends Component {
  state = {};
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#2ecc71",
        alignItems: "center",
        justifyContent: "center"
      },
      title: {
        fontSize: 50,
        color: "white"
      }
    });
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Question")}
        >
          <Text style={styles.title}>Play Trivia!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
