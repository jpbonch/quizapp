'use client'
import React from 'react';
import { useSearchParams } from "next/navigation";
import { Button, Grid, Text } from '@radix-ui/themes';

export default function StartQuiz() {
    const [questionNum, setQuestionNum] = React.useState(1);
    const [playerScore, setPlayerScore] = React.useState(0);
    const [opponentScore, setOpponentScore] = React.useState(0);
    const [question, setQuestion] = React.useState("");
    const [answerAlts, setAnswerAlts] = React.useState(["", "", "", ""]);
    // const [correctAnswer, setCorrectAnswer] = React.useState("");
    const [selectedAnswer, setSelectedAnswer] = React.useState("");
    const [disableButtons, setDisableButtons] = React.useState(false);

    React.useEffect(() => {
        
    }, []);

    const searchParams = useSearchParams();
    const quizId = searchParams.get('quizId');
    const gameId = searchParams.get('gameId');

    const selectAnswer = (answer) => {
        setDisableButtons(true);
        setSelectedAnswer(answer);
    }

    return (
        <main>
            <Text>Question {questionNum}</Text>

            <Grid columns="1" gap="3" width="9">
                <Text>
                    {question}
                </Text>
                <Button onClick={() => selectAnswer(answerAlts[0])} disabled={disableButtons}>
                    {answerAlts.length > 0 && answerAlts[0]}
                </Button>
                <Button onClick={() => selectAnswer(answerAlts[1])} disabled={disableButtons}>
                    {answerAlts.length > 1 && answerAlts[1]}
                </Button>
                <Button onClick={() => selectAnswer(answerAlts[2])} disabled={disableButtons}>
                    {answerAlts.length > 2 && answerAlts[2]}
                </Button>
                <Button onClick={() => selectAnswer(answerAlts[3])} disabled={disableButtons}>
                    {answerAlts.length > 3 && answerAlts[3]}
                </Button>
            </Grid>

        </main>
    );

}