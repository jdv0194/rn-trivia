import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import {
  fetchQuestion,
  nextQuestion,
  correctAnswer,
  addUserAnswer,
  clear
} from "../redux/actions/questionAction";
import { connect } from "react-redux";

import ActivityIndicator from "../components/ActivityIndicator";
const Entities = require("html-entities").AllHtmlEntities;

class QuestionScreen extends Component {
  componentDidMount() {
    this.props.fetchQuestion();
  }

  handleAnswer = answer => {
    const {
      question: { questionNumber, questions }
    } = this.props.data;

    if (answer === questions[questionNumber].correct_answer) {
      this.props.correctAnswer();
    }
    if (questionNumber < 4) {
      this.props.nextQuestion();
    } else this.props.navigation.navigate("Final");
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#f1c40f",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      },
      button_layout: {
        flexDirection: "row",
        margin: 15
      },
      answer_text: {
        color: "white",
        fontSize: 30
      },
      question_title: {
        fontWeight: "bold",
        fontSize: 30,
        alignContent: "center"
      },
      question_text: {
        fontSize: 18
      }
    });

    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    if (this.props.data.question.questions.length > 0) {
      options = this.props.data.question.questions[
        this.props.data.question.questionNumber
      ].incorrect_answers;
      options.push(
        this.props.data.question.questions[
          this.props.data.question.questionNumber
        ].correct_answer
      );
      shuffle(options);
    }

    const {
      question: { isFetching, questionNumber, questions }
    } = this.props.data;

    const entities = new Entities();
    console.log(this.props.data);

    return isFetching || questions.length === 0 ? (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    ) : (
      <View style={styles.container}>
        <View>
          <Text style={styles.question_title}>
            Question Number {questionNumber + 1}
          </Text>
          <Text style={styles.question_text}>
            {entities.decode(questions[questionNumber].question)}
          </Text>
        </View>

        {options.map((item, index) => {
          // console.log(
          //   this.props.data.question.questions[questionNumber].correct_answer
          // );
          return (
            <TouchableOpacity
              key={index}
              style={styles.button_layout}
              onPress={() => {
                this.handleAnswer(item);
              }}
            >
              <Text style={styles.answer_text}>{entities.decode(item)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps, {
  fetchQuestion,
  nextQuestion,
  correctAnswer,
  addUserAnswer,
  clear
})(QuestionScreen);
