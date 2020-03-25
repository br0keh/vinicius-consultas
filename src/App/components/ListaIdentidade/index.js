import React from "react";
import styled from "styled-components";
import Resultado from "./components/Resultado";

export default function ListaIdentidade(props) {
    let { data } = props;

    return (
        <Container>
            <span className="title">
                Resultados ({Object.keys(data).length})
            </span>
            <Lista>
                {data.map(result => (
                    <Resultado
                        key={result.dados}
                        nome={result.nome}
                        url={result.dados}
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
