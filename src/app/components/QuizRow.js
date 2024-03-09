import styles from "./quizrow.module.css";
import QuizButton from "./QuizButton";

export default function QuizRow(props) {
  return (<div>
     <h3>{props.title}</h3>
    {props.quizzes ? 
    <div className={styles.container}>
      {props.quizzes.map((quiz) => <QuizButton quiz={quiz}></QuizButton>)}    
    </div>: <p>loading</p>}
    </div>
  );
}
