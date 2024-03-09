import styles from "./quizbutton.module.css"
import Link from "next/link";
export default function QuizButton(props) {
    return (
      <div className={styles.container}>
        <Link href={{
          pathname: '/quiz',
          query: { quizId: props.quiz._id },
        }}>
          <h4 className={styles.quizName}>{props.quiz.category}</h4>
        </Link>
      </div>
    );
  }
  
