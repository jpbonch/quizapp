'use client'


import { useSearchParams } from "next/navigation"

export default function PlayQuiz() {
    const searchParams = useSearchParams()
    const id = searchParams.get('quizId')
    return (
        <main>
            Looking for players...
        </main>
    );

}