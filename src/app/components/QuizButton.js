import styles from "./quizbutton.module.css"
import Link from "next/link";
export default function QuizButton(props) {
    return (
      <div className={styles.container}>
        <Link href={{
          pathname: '/quiz',
          query: { quizId: '123' },
        }}>
          <h4 className={styles.quizName}>Quiz Name</h4>
        </Link>
      </div>
    );
  }
  