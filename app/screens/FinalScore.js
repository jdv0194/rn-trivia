import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";

import { clear } from "../redux/actions/questionAction";

class FinalScore extends Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#9b59b6",
        alignItems: "center",
        justifyContent: "space-between"
      },
      title: {
        fontSize: 20,
        color: "#FFFFFF",
        paddingLeft: 30,
        paddingRight: 30,
        textShadowColor: "#585858",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10
      },
      score: {
        fontSize: 30
      },
      border: {
        borderWidth: 1,
        borderColor: "white",
        padding: 20,
        marginTop: 100
      },
      button: {
        fontSize: 30,
        color: "white"
      },
      button_view: {
        marginVertical: 120
      },
      score_bad: {
        fontSize: 120,
        color: "red"
      },
      score_ok: {
        fontSize: 120,
        color: "yellow"
      },
      score_good: {
        fontSize: 120,
        color: "green"
      }
    });
    return (
      <View style={styles.container}>
        <View style={styles.border}>
          <Text style={styles.title}>
            Your answered {this.props.data.question.correctAnswers}/5 questions
            correctly
          </Text>
        </View>
        <View style={styles.score_border}>
          <Text
            style={
              this.props.data.question.correctAnswers > 3
                ? styles.score_good
                : this.props.data.question.correctAnswers === 3
                ? styles.score_ok
                : styles.score_bad
            }
          >
            {this.props.data.question.correctAnswers}
          </Text>
        </View>
        <View style={styles.button_view}>
          <TouchableOpacity
            onPress={
              (this.props.clear(), () => this.props.navigation.navigate("Home"))
            }
          >
            <Text style={styles.button}>Back Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps, { clear })(FinalScore);
