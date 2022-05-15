import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from "./quizStoreSlice";
// import styles from "./Counter.module.css";
import Question from "../../components/question";

export function Quiz() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Question />
    </div>
  );
}
