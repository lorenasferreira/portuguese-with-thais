import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiRotateCcw } from "react-icons/fi";
import { Link } from "react-router-dom";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import { levelResults, quizQuestions } from "./quizData";

import styles from "./PlacementTest.module.css";

function LevelQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedOptionIndex = answers[currentQuestion?.id];

  const progress = isComplete
    ? 100
    : ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  function selectOption(index) {
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: index,
    }));
  }

  function showPreviousQuestion() {
    if (currentQuestionIndex === 0) {
      return;
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex - 1);
  }

  function showNextQuestion() {
    if (selectedOptionIndex === undefined) {
      return;
    }

    if (currentQuestionIndex === quizQuestions.length - 1) {
      setIsComplete(true);
      return;
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
  }

  function restartQuiz() {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsComplete(false);
  }

  function calculateScore() {
    return quizQuestions.reduce((score, question) => {
      const selectedAnswer = answers[question.id];

      return selectedAnswer === question.correctAnswer ? score + 1 : score;
    }, 0);
  }

  function getResult(score) {
    return levelResults.find(
      (level) => score >= level.min && score <= level.max,
    );
  }

  const score = isComplete ? calculateScore() : 0;
  const result = isComplete ? getResult(score) : null;

  return (
    <section className={styles.section} id="level-test">
      <SectionContainer>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            Brazilian Portuguese level test
          </span>

          <h2>
            How much Portuguese
            <span>do you already know?</span>
          </h2>

          <p>
            Take this 30-question placement test to get an estimate of your
            Brazilian Portuguese level, from A1 to C2.
          </p>
        </div>

        <div className={styles.quiz}>
          <div className={styles.progressHeader}>
            <span>
              {isComplete
                ? "Your result"
                : `Question ${String(currentQuestionIndex + 1).padStart(
                    2,
                    "0",
                  )} / ${String(quizQuestions.length).padStart(2, "0")}`}
            </span>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressBar}
              style={{ width: `${progress}%` }}
            />
          </div>

          {!isComplete ? (
            <div className={styles.questionArea} key={currentQuestion.id}>
              <h3>{currentQuestion.question}</h3>

              <div className={styles.options}>
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOptionIndex === index;

                  return (
                    <button
                      key={`${currentQuestion.id}-${index}`}
                      type="button"
                      className={`${styles.option} ${
                        isSelected ? styles.optionSelected : ""
                      }`}
                      onClick={() => selectOption(index)}
                      aria-pressed={isSelected}
                    >
                      <span className={styles.optionLetter}>
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              <div className={styles.navigation}>
                <button
                  type="button"
                  className={styles.backButton}
                  onClick={showPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <FiArrowLeft aria-hidden="true" />
                  Back
                </button>

                <button
                  type="button"
                  className={styles.nextButton}
                  onClick={showNextQuestion}
                  disabled={selectedOptionIndex === undefined}
                >
                  {currentQuestionIndex === quizQuestions.length - 1
                    ? "See my result"
                    : "Next"}

                  <FiArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.result}>
              <div className={styles.resultIntro}>
                <span>Your estimated level</span>

                <div className={styles.score}>
                  <strong>{score}</strong>
                  <span>/ {quizQuestions.length} correct</span>
                </div>

                <h3>
                  {result.level}
                  <span>{result.title}</span>
                </h3>

                <p>{result.description}</p>
              </div>

              <div className={styles.resultScale}>
                {levelResults.map((level) => {
                  const isCurrentLevel = level.level === result.level;

                  return (
                    <div
                      key={level.level}
                      className={`${styles.levelItem} ${
                        isCurrentLevel ? styles.currentLevel : ""
                      }`}
                    >
                      <span>{level.level}</span>

                      <div>
                        <strong>{level.title}</strong>
                        <small>
                          {level.min}–{level.max} correct
                        </small>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.nextStep}>
                <span>Ready for the next step?</span>

                <h4>Your result is a starting point.</h4>

                <p>
                  In a lesson with Thais, you can explore your current level in
                  more depth and build a learning path around your goals,
                  interests and Portuguese.
                </p>
              </div>

              <div className={styles.resultActions}>
                <button type="button" onClick={restartQuiz}>
                  <FiRotateCcw aria-hidden="true" />
                  Take the test again
                </button>

                <Link to="/book-a-lesson">
                  Book a Trial — $25
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>

              <p className={styles.disclaimer}>
                This online test provides an estimated CEFR level and is not a
                formal proficiency certification. Your speaking, listening and
                communication skills can be explored more closely during a
                lesson.
              </p>
            </div>
          )}
        </div>
      </SectionContainer>
    </section>
  );
}

export default LevelQuiz;
