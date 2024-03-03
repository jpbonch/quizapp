'use client'

import styles from "../page.module.css";
import { useSearchParams } from "next/navigation"
export default function Quiz() {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    
    return (
        <main className={styles.main}>
        <div className={styles.header}>
            <h1>{id}</h1>
        </div>
        </main>
    );
}
