import React from "react";
import styled from "styled-components";
import {accent1, gray5} from "components/StyledContainer";

const UnorderedList = styled.ul`
    list-style: none;
    padding: 0px 20px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 3px solid ${accent1};
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    border-top: 1px solid ${gray5};
    :first-of-type {
        border-top: none;
    }
`;
const List: React.FC<{posts: Array<string>}> = ({posts}) => (
    <UnorderedList>
        {posts.map((str, index) => (
            <ListItem key={index}>
                <span>{str}</span>
            </ListItem>
        ))}
    </UnorderedList>
);

export default List;
