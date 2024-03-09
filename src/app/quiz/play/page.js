'use client'
import React, { Suspense } from 'react';
import { useSearchParams } from "next/navigation"
import * as Progress from '@radix-ui/react-progress';
import { socket } from '../../socket';
import { useEffect, useState } from 'react';
import './styles.css';

export default function PlayQuiz() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [progress, setProgress] = React.useState(13);
    const [matchFound, setMatchFound] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        socket.on('found', () => {setMatchFound(true)});
     }, []);

    const searchParams = useSearchParams()
    const id = searchParams.get('quizId')

    return (
        <main>
            {matchFound &&
                <div>
                    Match found
                </div>
            }

            {!matchFound && 
        <Suspense>    
        <div>
                Looking for players...
                <Progress.Root className="ProgressRoot" value={progress}>
                    <Progress.Indicator
                        className="ProgressIndicator"
                        style={{ transform: `translateX(-${100 - progress}%)` }}
                    />
                </Progress.Root>
            </div>
            </Suspense>
            }
            
        </main>
    );

}
