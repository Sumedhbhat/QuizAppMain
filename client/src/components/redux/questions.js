import { createSlice } from "@reduxjs/toolkit";

const storeQuestions = createSlice({
  name: "questions",
  initialState: {
    questionsAll: [
      {
        questionText: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
      },
      {
        questionText: "Arrays in JavaScript can be used to store ______.",
        options: [
          "numbers and strings",
          "other arrays",
          "booleans",
          "all of the above",
        ],
        answer: "all of the above",
      },
      {
        questionText:
          "String values must be enclosed within _____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
      },
      {
        questionText:
          "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
      },
      {
        questionText:
          "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        options: ["break", "stop", "halt", "exit"],
        answer: "break",
      },
    ],
    currentIndex: 0,
    score: 0,
    isGameOver: false,
    timer: 600,
  },
  reducers: {
    nextQuestion: (state) => {
      state.currentIndex++;
    },
    addScore: (state) => {
      state.score += 10;
    },
    resetGame: (state) => {
      state.currentIndex = 0;
      state.isGameOver = false;
    },
    falseAnswer: (state) => {
      state.timer -= 10;
    },
    gameOver: (state) => {
      state.isGameOver = true;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const {
  addScore,
  nextQuestion,
  resetGame,
  falseAnswer,
  gameOver,
  resetScore,
} = storeQuestions.actions;
export default storeQuestions.reducer;
