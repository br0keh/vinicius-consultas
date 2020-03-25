import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import Identidade from "../../../Identidade";
import api from "../../../../services/api";

export default function Resultado(props) {
    const { url } = props;
    const [state, setState] = useState({ data: {}, show: false });

    /*useEffect(() => {
        async function fetchData() {
            let res = await api.get(url);

            let data = res.data;
            console.log(data);

            setState({ ...state, data: data });
        }

        fetchData();
        // eslint-disable-next-line
    }, [url]);*/

    function handleShowAndHide() {
        setState({
            ...state,
            show: !state.show,
        });
    }

    return (
        <>
            <Container onClick={handleShowAndHide}>
                <span>{props.nome}</span>
                <span>{props.cidade}</span>
                <span>
                    <MdKeyboardArrowRight />
                </span>
            </Container>
            {state.data && state.show
                ? /*<Identidade data={state.data} />*/ "Múltiplos resultados apenas na versão paga."
                : null}
        </>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    background: #dedede;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
    border-left: 5px solid #7f6ac7;
    padding-left: 10px;
    border-radius: 4px;
    padding: 10px 30px;
`;
