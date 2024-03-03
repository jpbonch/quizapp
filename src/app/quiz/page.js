'use client'

import styles from "../page.module.css";
import { useSearchParams } from "next/navigation"
import { Button, Grid } from '@radix-ui/themes';
import Link from "next/link"

export default function Quiz() {
    const searchParams = useSearchParams()
    const id = searchParams.get('quizId')
    console.log(id)
    const quizName = "Harry Potter"


    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1>{quizName}</h1>
            </div>
            <Grid columns="1" gap="3">
                <Link href={{
                    pathname: '/quiz/play',
                    query: { quizId: '123' },
                }}>
                    <Button>
                        Play
                    </Button>
                </Link>
                <Button>
                    Play with a friend
                </Button>
            </Grid>
        </main>
    );
}
