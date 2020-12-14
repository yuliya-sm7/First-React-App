import List from "components/List";
import Board from "components/Board";
import StyledContainer from "components/StyledContainer";
import React from "react";

const posts = [
    "Живая клетка, у которой меньше двух живых соседей, погибает.",
    "Живая клетка, у которой два или три живых соседа, выживает.",
    "Живая клетка, у которой больше трёх живых соседей, погибает.",
    "Мёртвая клетка, у которой три живых соседа, возрождается."
];

const tasks = [
    "случайным образом генерить стартовое состояние;",
    "уметь получать его из файла (способ выбирается через параметры запуска в консоли);",
    "каждую секунду выводить в консоль новое состояние доски."
];

const HelloWorld: React.FC = () => (
    <>
        <StyledContainer>
            <h1>Стажировка</h1>
            <p>
                Дана доска размером M × N клеток. Клетка может находиться в одном из двух состояний:
                1 — живая, 0 — мёртвая. Каждая клетка взаимодействует с восемью соседями. Правила
                таковы:
            </p>
            <List posts={posts}></List>
            <p>Напишите программу, которая будет:</p>
            <List posts={tasks}></List>
        </StyledContainer>
        <Board></Board>
    </>
);

export default HelloWorld;
