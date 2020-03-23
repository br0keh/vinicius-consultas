import React from "react";
import styled from "styled-components";

export default function Contact({ children, color, social }) {
    const Container = styled.div`
        & span {
            font-family: monospace;
            font-size: 15px;
            color: #8b8b8b;
            background: #f5f5f5;
            font-weight: lighter;
            margin-top: 10px 0px;

            &::before {
                color: ${color};
                width: 2px;
                height: 2px;
                content: "•";
                font-size: 18px;
                font-weight: 700;
                padding-right: 10px;
            }
            &:hover {
                cursor: pointer;
            }
        }
    `;
    function handleClick() {
        window.open(social);
    }
    return (
        <Container>
            <span onClick={handleClick}>{children}</span>
        </Container>
    );
}
