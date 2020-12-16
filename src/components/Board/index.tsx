import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 320px;
    height: 320px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`;

const Cell = styled.div`
    padding: auto;
    border: 2px solid black;
    background-color: ${(props) => (props.theme === "0" ? "green" : "white")};
`;

const Board: React.FC<{cells: Array<Array<string>>}> = (props) => (
    <Container>
        {props.cells.flat().map((cell, index) => (
            <Cell key={index} theme={cell}>
                {cell}
            </Cell>
        ))}
    </Container>
);
export default Board;
