import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";
import QuizRow from "./components/QuizRow";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Epic Quiz APP</h1>
        <SearchBar ></SearchBar>
      </div>
      <QuizRow title="Trending Quizzes"></QuizRow>
      <QuizRow title="Suggested for you"></QuizRow>
    </main>
  );
}
