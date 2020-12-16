import React from "react";
import Task from "components/Task";
import Button from "components/Button";
import Board from "components/Board";
import Field from "./Algorithm";
import StyledContainer from "components/StyledContainer";

const field = new Field();
// console.log(field.cells);

const App: React.FC = () => {
    return (
        <StyledContainer>
            <Task></Task>
            <Button onClick={() => field.run()} theme="mediumseagreen">
                Запустить
            </Button>
            <Button onClick={() => field.init()} theme="palevioletred">
                Сбросить
            </Button>
            <Board cells={field.cells}></Board>
        </StyledContainer>
    );
};

export default App;
