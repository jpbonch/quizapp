import styles from "./quizbutton.module.css"
import Link from "next/link";
import Image from 'next/image';
export default function QuizButton(props) {
    return (
      <div className={styles.container}>
        <Image
          src={props.quiz.image}
        width={200}
        height={200}
        alt="img"
        className={styles.quizImage}
      ></Image>
      <div className={styles.shadow}></div>
        <Link href={{
          pathname: '/quiz',
          query: { quizId: props.quiz._id },
        }}>
          <h4 className={styles.quizName}>{props.quiz.category}</h4>
        </Link>
      </div>
    );
  }
  
