import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import QuestionScreen from "./QuestionScreen";
import FinalScore from "./FinalScore";

const NavigationStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Question: {
      screen: QuestionScreen
    },
    Final: {
      screen: FinalScore
    }
  },
  {
    headerMode: "none"
  }
);

const Container = createAppContainer(NavigationStack);

export default Container;
