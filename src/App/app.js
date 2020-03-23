import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import Routes from "./routes";

import "./styles/index.css";

export default function App() {
    return (
        <Router>
            <Root>
                <Header>
                    <Logo></Logo>
                    <Menu>
                        <Link to="/">Início</Link>
                        <Link to="/sobre">Sobre</Link>
                    </Menu>
                </Header>
                <section>
                    <Box>
                        <Title>
                            <span>
                                {/* <strong>VINICIUS</strong> CONSULTAS */}
                                <h1>
                                    <img
                                        src={require("./assets/logo.svg")}
                                        alt="ViniciusConsultas"
                                    />
                                </h1>
                            </span>

                            <small>
                                <MdKeyboardArrowRight className="icon" />
                                Consulta por telefone
                            </small>
                        </Title>
                        <Main>
                            <Routes />
                        </Main>
                    </Box>
                </section>
            </Root>
        </Router>
    );
}

const Root = styled.div`
    background: #f5f5f5;
    color: #555;
    & section {
        display: flex;
        justify-content: center;

        margin-top: 70px;
    }
    padding-bottom: 50px;
`;

const Header = styled.div`
    background: #7f6ac7;
    display: flex;
    height: 70px;
    align-items: center;
    padding: 0 30px;
`;

const Logo = styled.div``;

const Menu = styled.div`
    & a {
        color: #f5f5f5;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 1.25px;
        font-weight: bold;
        text-decoration: none;
        margin-left: 30px;

        &:hover {
            cursor: pointer;
        }
    }
`;

const Main = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
`;

const Box = styled.div`
    background: #f5f5f5;
    width: 60%;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 30px 25px;
    border-radius: 5px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    & span,
    small {
        margin-right: 20px;
    }

    & span {
        font-size: 20px;
        color: #555;
        font-weight: 400;
        & strong {
            font-weight: 700;
        }
    }
    & small {
        font-size: 15px;
        color: #555;
        opacity: 0.7;
        display: flex;
        justify-content: center;
        align-items: center;

        & .icon {
            margin-right: 10px;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
`;
