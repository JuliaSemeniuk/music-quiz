import { mediaUrl } from "../constants/constants";
import {
  BackendQuizQuestion,
  QuizQuestion,
  BackendSong,
} from "../features/quiz/quizStoreSlice";
export const chooseRandomSong = (songs: BackendSong[]) => {
  const randomValue = Math.random();

  if (randomValue < 0.25) {
    return songs[0];
  }
  if (randomValue > 0.25 && randomValue < 0.5) {
    return songs[1];
  }
  if (randomValue > 0.5 && randomValue < 0.75) {
    return songs[2];
  } else {
    return songs[3];
  }
};

export const dataForStore = (
  beckendData: BackendQuizQuestion[]
): QuizQuestion[] => {
  return beckendData.map((beckendQuiz) => {
    return {
      genre: beckendQuiz.genre,
      id: beckendQuiz.id,
      questionAudioUrl: "",
      isFinished: false,
      isCorrectAnswerSelected: false,
      correctAnswerId: "",
      score: 4,
      songs: beckendQuiz.data.map((song) => {
        return {
          ...song,
          isSelected: false,
          isActive: false,
        };
      }),
    };
  });
};

export const makeRandom = (questions: QuizQuestion[]) => {
  return questions.map((question) => {
    const randomSong = chooseRandomSong(question.songs);
    return {
      ...question,
      questionAudioUrl: mediaUrl + randomSong.audio,
      correctAnswerId: randomSong.id,
    };
  });
};
