import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 640px;
    height: 640px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`;

const Field = Array(65).join("*").split("");

const Board: React.FC = () => (
    <Container>
        {Field.map((cell, index) => (
            <div key={index}>{cell}</div>
        ))}
    </Container>
);
export default Board;
