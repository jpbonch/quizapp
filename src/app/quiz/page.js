'use client'

import React from 'react';
import styles from "../page.module.css";
import { useSearchParams } from "next/navigation"
import { Button, Grid, Table, Text } from '@radix-ui/themes';
import Link from "next/link"

export default function Quiz() {
    const searchParams = useSearchParams();
    const id = searchParams.get('quizId');
    const [rankingData, setRankingData] = React.useState([{rank: "1", user:"Vini", xp: "123"}])
    console.log(id);
    const quizName = "";
    const rows = rankingData.map(data => 
            <Table.Row>
                <Table.RowHeaderCell>{data.rank}</Table.RowHeaderCell>
                <Table.Cell>{data.user}</Table.Cell>
                <Table.Cell>{data.xp}</Table.Cell>
            </Table.Row>
        )

    // const renderTableRows = () => {
    //     let rows = [];
    //     for (let i = 0; i < rankingData.length; i++) {
    //         rows.push(
    //             <Table.Row>
    //                 <Table.RowHeaderCell>{Object.keys(rankingData[i])[0]}</Table.RowHeaderCell>
    //                 <Table.Cell>{Object.values(rankingData[i])[0]}</Table.Cell>
    //             </Table.Row>
    //         )
    //     }
    //     return rows;
    // }

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

                <Text> Rankings </Text>
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                        <Table.ColumnHeaderCell>Rank</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>XP</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {rows}
                    </Table.Body>
                </Table.Root>

            </Grid>
        </main>
    );
}
