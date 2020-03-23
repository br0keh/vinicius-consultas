import React from "react";
import styled from "styled-components";

export default function Input(props) {
    return (
        <Container>
            <div style={{ marginBottom: "5px" }}>
                <Label>{props.label}</Label>
                {props.example ? <Example>Ex.: {props.example}</Example> : null}
            </div>
            <input {...props} />
        </Container>
    );
}

const Container = styled.div`
    margin: 10px 0px;
    & input {
        width: 100%;
        font-size: 17px;
        border: none;
        border: 0.023cm solid #e0e0e0;
        height: 35px;
        background: #f5f5f5;
        padding: 10px 20px;
        transition: all 0.5s ease;
        border-radius: 5px;
        &:focus {
            background: #fff;
        }
    }
`;

const Label = styled.div`
    display: inline;
    font-size: 15px;
`;

const Example = styled.i`
    display: inline;
    color: #aaa;
    font-size: 12px;
    font-weight: lighter;
    padding-left: 10px;
`;
