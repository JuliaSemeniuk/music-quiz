import React from "react";
import quizReducer, {
  QuizState,
  init,
  makeOptionSelected,
  makeOptionActive,
  makeQuestionFinished,
  fillUserName,
  makeQuizReadyToStart,
  setQuestionScore,
  addScore,
  makeQuizReadyToRepeat,
} from "./quiz-store-slice";

describe("counter reducer", () => {
  const initialState: QuizState = {
    userName: "",
    isNameReady: false,
    finalScore: 0,
    isRepeat: false,
    questions: [],
  };

  it("should handle initial state", () => {
    expect(quizReducer(undefined, { type: "unknown" })).toEqual({
      userName: "",
      isNameReady: false,
      finalScore: 0,
      isRepeat: false,
      questions: [],
    });
  });

  it("should handle init", () => {
    const question = [
      {
        genre: "",
        id: "",
        questionAudioUrl: "",
        isFinished: false,
        isCorrectAnswerSelected: false,
        correctAnswerId: "",
        score: 4,
        songs: [],
      },
    ];
    const actual = quizReducer(initialState, init(question));

    expect(actual.questions).toEqual(question);
  });

  it("should handle makeOptionSelected", () => {
    let questions = [
      {
        correctAnswerId: "0-2",
        isCorrectAnswerSelected: false,
        songs: [
          {
            id: "0-1",
            isSelected: false,
          },
          {
            id: "0-2",
            isSelected: false,
          },
        ],
      },
    ];

    const actual = quizReducer(
      {
        ...initialState,
        questions: questions as any,
      },
      makeOptionSelected("0-2")
    );
    expect(actual.questions).toEqual([
      {
        correctAnswerId: "0-2",
        isCorrectAnswerSelected: true,
        songs: [
          {
            id: "0-1",
            isSelected: false,
          },
          {
            id: "0-2",
            isSelected: true,
          },
        ],
      },
    ]);
  });

  it("should handle makeOptionActive", () => {
    const questions = [
      {
        songs: [
          {
            id: "0-1",
            isActive: false,
          },
          {
            id: "0-2",
            isActive: false,
          },
        ],
      },
    ];

    const actual = quizReducer(
      {
        ...initialState,
        questions: questions as any,
      },
      makeOptionActive("0-2")
    );
    expect(actual.questions).toEqual([
      {
        songs: [
          {
            id: "0-1",
            isActive: false,
          },
          {
            id: "0-2",
            isActive: true,
          },
        ],
      },
    ]);
  });

  it("should handle makeQuestionFinished", () => {
    const questions = [
      {
        genre: "",
        id: "0-2",
        questionAudioUrl: "",
        isFinished: false,
        isCorrectAnswerSelected: false,
        correctAnswerId: "",
        score: 4,
        songs: [],
      },
    ];

    const actual = quizReducer(
      { ...initialState, questions },
      makeQuestionFinished("0-2")
    );
    expect(actual.questions[0]).toEqual({
      genre: "",
      id: "0-2",
      questionAudioUrl: "",
      isFinished: true,
      isCorrectAnswerSelected: false,
      correctAnswerId: "",
      score: 4,
      songs: [],
    });
  });

  it("should handle fillUserName", () => {
    const actual = quizReducer(initialState, fillUserName("jane"));
    expect(actual.userName).toEqual("jane");
  });

  it("should handle makeQuizReadyToStart", () => {
    const actual = quizReducer(initialState, makeQuizReadyToStart(""));
    expect(actual.isNameReady).toEqual(true);
  });

  it("should handle setQuestionScore", () => {
    const questions = [
      {
        genre: "",
        id: "0-2",
        questionAudioUrl: "",
        isFinished: false,
        isCorrectAnswerSelected: false,
        correctAnswerId: "",
        score: 4,
        songs: [],
      },
    ];
    const actual = quizReducer(
      { ...initialState, questions },
      setQuestionScore("0-2")
    );
    expect(actual.questions[0]).toEqual({
      genre: "",
      id: "0-2",
      questionAudioUrl: "",
      isFinished: false,
      isCorrectAnswerSelected: false,
      correctAnswerId: "",
      score: 3,
      songs: [],
    });
  });

  it("should handle addScore", () => {
    const actual = quizReducer(initialState, addScore(1));
    expect(actual.finalScore).toEqual(1);
  });

  it("should handle makeQuizReadyToRepeat", () => {
    const state = {
      isRepeat: false,
      finalScore: 9,
      questions: [
        {
          isCorrectAnswerSelected: true,
          isFinished: true,
          score: 1,
          songs: [
            {
              audio: "audio url",
              isSelected: true,
              id: "0-1",
            },
            {
              audio: "audio url",
              isSelected: true,
              id: "0-1",
            },
            {
              audio: "audio url",
              isSelected: true,
              id: "0-1",
            },
            {
              audio: "audio url",
              isSelected: true,
              id: "0-1",
            },
          ],
        },
      ],
    };

    const actual = quizReducer(state as any, makeQuizReadyToRepeat(""));
    expect(actual).toEqual({
      isRepeat: true,
      finalScore: 0,
      questions: [
        {
          correctAnswerId: "0-1",
          questionAudioUrl:
            "https://levi9-song-quiz.herokuapp.com/api/audio url",
          isCorrectAnswerSelected: false,
          isFinished: false,
          score: 4,
          songs: [
            {
              audio: "audio url",
              isSelected: false,
              id: "0-1",
            },
            {
              audio: "audio url",
              isSelected: false,
              id: "0-1",
            },
            {
              audio: "audio url",
              isSelected: false,
              id: "0-1",
            },
            {
              audio: "audio url",
              isSelected: false,
              id: "0-1",
            },
          ],
        },
      ],
    });
  });
});
