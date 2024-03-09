'use client'

import styles from "../page.module.css";
import { useSearchParams } from "next/navigation"
import { Button, Grid } from '@radix-ui/themes';
import Link from "next/link"
import { useEffect, useState } from "react";
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

export default function Quiz() {
    const searchParams = useSearchParams()
    const id = searchParams.get('quizId')
    console.log(id)
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
      getQuizDetails();
  });


  async function getQuizDetails() {
    let data = await fetch(URL + "/quiz/" + id);
    data = await data.json();
    setQuiz(data);
  }

    return (
        <main className={styles.main}>
      {quiz ?  <>     
      <div className={styles.header}>
                <h1>{quiz.category}</h1>:
                 
            </div>
            <Grid columns="1" gap="3">
                <Link href={{
                    pathname: '/quiz/play',
                    query: { quizId: quiz._id },
                }}>
                    <Button>
                        Play
                    </Button>
                </Link>
                <Button>
                    Play with a friend
                </Button>
            </Grid></>
            : <p>Loading...</p>}
        </main>
    );
}
