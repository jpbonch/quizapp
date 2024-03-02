import styles from "./quizbutton.module.css"

export default function QuizButton(props) {
    return (
      <div className={styles.container}>
        <h4 className={styles.quizName}>Quiz Name</h4>
      </div>
    );
  }
  