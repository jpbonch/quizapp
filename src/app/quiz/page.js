'use client'

import styles from "../page.module.css";
import { useSearchParams } from "next/navigation"
import { Button } from '@radix-ui/themes';

export default function Quiz() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    console.log("id")
    const quizName = "Harry Potter"


    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1>{quizName}</h1>
            </div>
            <Button>
                Start Game
            </Button>
        </main>
    );
}
