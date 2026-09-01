import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiRotateCcw } from "react-icons/fi";
import { Link } from "react-router-dom";

import SectionContainer from "../../../../components/common/SectionContainer/SectionContainer";

import {
  lessonRecommendations,
  planRecommendations,
  quizQuestions,
  quizResults,
} from "./quizData";

import styles from "./LevelQuiz.module.css";

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

  function calculateResult() {
    const levelScores = {
      beginner: 0,
      intermediate: 0,
      advanced: 0,
    };

    let lessonRecommendation = "oneOnOne";
    let planRecommendation = "flow";

    quizQuestions.forEach((question) => {
      const selectedIndex = answers[question.id];

      if (selectedIndex === undefined) {
        return;
      }

      const selectedOption = question.options[selectedIndex];

      if (selectedOption.scores) {
        Object.entries(selectedOption.scores).forEach(([level, score]) => {
          levelScores[level] += score;
        });
      }

      if (selectedOption.recommendation) {
        lessonRecommendation = selectedOption.recommendation;
      }

      if (selectedOption.plan) {
        planRecommendation = selectedOption.plan;
      }
    });

    const level = Object.entries(levelScores).reduce(
      (highest, current) => (current[1] > highest[1] ? current : highest),
      ["beginner", levelScores.beginner],
    )[0];

    return {
      level: quizResults[level],
      lesson: lessonRecommendations[lessonRecommendation],
      plan: planRecommendations[planRecommendation],
    };
  }

  const result = isComplete ? calculateResult() : null;

  return (
    <section className={styles.section} id="level-quiz">
      <SectionContainer>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Find your Portuguese path</span>

          <h2>
            Not sure where
            <span>to start?</span>
          </h2>

          <p>
            Answer a few quick questions and discover your approximate level,
            the lesson format that fits your goals and a learning rhythm to
            consider.
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
                      key={option.label}
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

                      <span>{option.label}</span>
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
                <span>Your approximate level</span>

                <h3>{result.level.level}</h3>

                <p>{result.level.description}</p>
              </div>

              <div className={styles.recommendations}>
                <article>
                  <span>Lesson recommendation</span>

                  <h4>{result.lesson.title}</h4>

                  <p>{result.lesson.description}</p>
                </article>

                <article className={styles.planRecommendation}>
                  <span>Suggested rhythm</span>

                  <h4>{result.plan.name}</h4>

                  <div className={styles.planDetails}>
                    <strong>{result.plan.price}</strong>
                    <span>{result.plan.frequency}</span>
                  </div>
                </article>
              </div>

              <div className={styles.resultActions}>
                <button type="button" onClick={restartQuiz}>
                  <FiRotateCcw aria-hidden="true" />
                  Take the quiz again
                </button>

                <Link to="/book-a-lesson">
                  Book a Trial — $25
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>

              <p className={styles.disclaimer}>
                This result is a starting point, not a formal language
                assessment. Your goals and Portuguese level can be explored more
                closely during your trial lesson.
              </p>
            </div>
          )}
        </div>
      </SectionContainer>
    </section>
  );
}

export default LevelQuiz;
