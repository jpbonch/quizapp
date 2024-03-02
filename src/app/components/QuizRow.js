import styles from "./quizrow.module.css";
import QuizButton from "./QuizButton";

export default function QuizRow(props) {
  return (<div>
     <h3>{props.title}</h3>
    <div className={styles.container}>
     
      <QuizButton></QuizButton>
      <QuizButton></QuizButton>
      <QuizButton></QuizButton>
      <QuizButton></QuizButton>
      <QuizButton></QuizButton>
      <QuizButton></QuizButton>
    </div>
    </div>
  );
}
