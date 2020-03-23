import React from "react";
import styled from "styled-components";
import Resultado from "./components/Resultado";

export default function ListaIdentidade(props) {
    let { data } = props;

    return (
        <Container>
            <span className="title">
                Resultados ({Object.keys(data.list).length})
            </span>
            <Lista>
                {data.list.map(result => (
                    <Resultado
                        key={result.url}
                        nome={result.nome}
                        url={result.url}
                        cidade={result.cidade}
                    />
                ))}
            </Lista>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 30px;
    & .title {
        font-size: 20px;
    }
`;

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
