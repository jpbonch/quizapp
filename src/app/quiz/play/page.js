'use client'
import React from 'react';
import { useSearchParams } from "next/navigation"
import * as Progress from '@radix-ui/react-progress';
import './styles.css';

export default function PlayQuiz() {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    const searchParams = useSearchParams()
    const id = searchParams.get('quizId')

    return (
        <main>
            Looking for players...
            <Progress.Root className="ProgressRoot" value={progress}>
                <Progress.Indicator
                    className="ProgressIndicator"
                    style={{ transform: `translateX(-${100 - progress}%)` }}
                />
            </Progress.Root>
            
        </main>
    );

}