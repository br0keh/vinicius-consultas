import React from "react";
import styled from "styled-components";

export default function Button(props) {
    return (
        <Container style={{ background: props.color || "#7f6ac7" }} {...props}>
            {props.text}
        </Container>
    );
}

const Container = styled.button`
    height: 40px;
    width: 250px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-size: 15px;
    transition: all 0.5s ease-in-out;
    opacity: 0.8;
    margin-top: auto;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
