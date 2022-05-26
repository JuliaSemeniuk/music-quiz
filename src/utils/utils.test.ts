import { chooseRandomSong, dataForStore, makeRandom } from "./utils";

describe("chooseRandomSong", () => {
  it("should return songs[0]", () => {
    const songs = ["1", "2", "3", "4"];
    Math.random = () => {
      return 0.24;
    };
    expect(chooseRandomSong(songs as any)).toEqual("1");
  });
  it("should return songs[1]", () => {
    const songs = ["1", "2", "3", "4"];
    Math.random = () => {
      return 0.26;
    };
    expect(chooseRandomSong(songs as any)).toEqual("2");
  });
  it("should return songs[2]", () => {
    const songs = ["1", "2", "3", "4"];
    Math.random = () => {
      return 0.51;
    };
    expect(chooseRandomSong(songs as any)).toEqual("3");
  });
  it("should return songs[3]", () => {
    const songs = ["1", "2", "3", "4"];
    Math.random = () => {
      return 0.76;
    };
    expect(chooseRandomSong(songs as any)).toEqual("4");
  });
});

describe("dataForStore", () => {
  it("should return QuizQestion", () => {
    const backendQuizQuestion = [
      {
        genre: "",
        id: "",
        data: [],
      },
    ];

    const QuizQuestion = [
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
    expect(dataForStore(backendQuizQuestion)).toEqual(QuizQuestion);
  });
});

describe("makeRandom", () => {
  it("should return randomSong", () => {
    const questions = [
      {
        genre: "",
        id: "",
        questionAudioUrl: "",
        isFinished: false,
        isCorrectAnswerSelected: false,
        correctAnswerId: "",
        score: 4,
        songs: [
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
        ],
      },
    ];

    const randomSong = [
      {
        genre: "",
        id: "",
        questionAudioUrl:
          "https://levi9-song-quiz.herokuapp.com/api/random audio",
        isFinished: false,
        isCorrectAnswerSelected: false,
        correctAnswerId: "random id",
        score: 4,
        songs: [
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
          {
            audio: "random audio",
            description: "",
            id: "random id",
            image: "",
            name: "",
            songTitle: "",
            isSelected: false,
            isActive: false,
          },
        ],
      },
    ];

    expect(makeRandom(questions)).toEqual(randomSong);
  });
});
