import React, { useState } from "react";

import api from "../services/api";

import Button from "../components/Button";
import Input from "../components/Input";
import Message from "../components/Message";
import Identidade from "../components/Identidade";
import ListaIdentidade from "../components/ListaIdentidade";

const Consulta = () => {
    const [state, setState] = useState({
        telefone: "",
        datatype: null,
    });
    const [loading, setLoading] = useState(false);

    const handleKeyPress = event => {
        let { value } = event.target;
        setState({
            ...state,
            telefone: value,
        });
    };

    const setError = error => {
        setState({ error });

        setTimeout(() => {
            setState({ ...state, error: null, datatype: null });
        }, 6000);
    };

    const handleSubmit = async event => {
        setLoading(true);
        event.preventDefault();
        let telefone = state.telefone;
        let pesquisarTelefone = await api.get(
            `/v2/consulta/celular?q=${telefone}`,
        );
        const { data } = pesquisarTelefone;

        setLoading(false);

        if (!data) return;

        if (data.error) return setError(data.error);

        let { nome } = data;

        if (nome) {
            return setState({ ...state, data: data, datatype: 0 });
        }

        setState({ ...state, data: data, datatype: 1 });
    };
    //return <div>MANUTENÇÃO NA API GRATÚITA</div>;
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Input
                        onChange={handleKeyPress}
                        placeholder="11998080470"
                        type="text"
                        name="telefone"
                        label="Número de celular"
                    />
                    {loading ? (
                        <Button color="#ccc" text="Buscando..." disabled />
                    ) : (
                        <Button type="submit" text="Buscar" />
                    )}
                </form>
            </div>
            {state.error ? <Message text={state.error} type="error" /> : null}
            {state.datatype === 0 ? <Identidade data={state.data} /> : null}
            {state.datatype === 1 ? (
                <ListaIdentidade data={state.data} />
            ) : null}
        </div>
    );
};

export default Consulta;
