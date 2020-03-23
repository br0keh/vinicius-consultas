import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

const colors = {
    error: "#F0544F",
    success: "#81F495",
    default: "#ccc",
};

function renderMessage(message, messageType) {
    switch (messageType) {
        case "error":
            return <ErrorMessage>{message}</ErrorMessage>;
        case "success":
            return <SuccessMessage>{message}</SuccessMessage>;
        default:
            return <DefaultMessage>{message}</DefaultMessage>;
    }
}

export default function Message(props) {
    let { text, type } = props;

    return (
        <FadeIn transitionDuration={500}>{renderMessage(text, type)}</FadeIn>
    );
}

const DefaultMessage = styled.div`
    background: ${colors.default};
    color: #555;
    border-radius: 5px;
    display: flex;
    height: 40px;
    padding: 10px;
    margin-top: 10px;

    transition: all 0.5s ease-in;
`;
const ErrorMessage = styled.div`
    background: ${colors.error};
    color: #fff;
    border-radius: 5px;
    display: flex;
    height: 40px;
    padding: 10px;
    margin-top: 10px;
`;
const SuccessMessage = styled.div`
    background: ${colors.success};
    color: #fff;
    border-radius: 5px;
    display: flex;
    height: 40px;
    padding: 10px;
    margin-top: 10px;
`;
