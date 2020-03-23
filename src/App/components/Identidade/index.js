import React, { useState } from "react";
import {
    MdVerifiedUser,
    MdContentCopy,
    MdPhoneAndroid,
    MdPhone,
} from "react-icons/md";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";

import Message from "../Message";

export default function Identidade(props) {
    const { data } = props;
    const [state, setState] = useState({ content_copied: false });

    const clipboardContent = () => {
        return `#BROKEHCONSULTAS - Consulta por telefone
Nome: ${data.nome}
CPF: ${data.cpf}
Nascimento: ${data.nascimento}
Sexo: ${data.sexo}
Mãe: ${data.mae}
Telefones: ${data.telefones}
Celulares: ${data.celulares}
Endereços: ${data.enderecos}`;
    };

    const handleOnCopy = () => {
        setState({ ...state, content_copied: true });

        setTimeout(() => {
            setState({ content_copied: false });
        }, 1000);
    };

    return (
        <>
            {state.content_copied ? (
                <Message text="Copiado com sucesso!" type="success" />
            ) : (
                ""
            )}
            <Container>
                <Side>
                    <div className="nome">
                        <h2>
                            <MdVerifiedUser /> {data.nome}
                        </h2>
                    </div>
                    <div className="cpf">
                        <small>CPF</small>
                        <span>{data.cpf}</span>
                    </div>
                    <div className="nascimento">
                        <small>Nascimento</small>
                        <span>{data.nascimento}</span>
                    </div>
                    <div className="sexo">
                        <small>Sexo</small>
                        <span>{data.sexo}</span>
                    </div>
                    <div className="mae">
                        <small>Mãe</small>
                        <span>{data.mae}</span>
                    </div>
                </Side>
                <Side>
                    {data.enderecos
                        ? data.enderecos.map(endereco => (
                              <div className="endereco" key={endereco}>
                                  <small>Endereço</small>
                                  <span>{endereco}</span>
                              </div>
                          ))
                        : null}
                    <Split />
                    {data.celulares
                        ? data.celulares.map(celular => (
                              <div className="celular" key={celular}>
                                  <small>Celular</small>
                                  <span>
                                      <MdPhoneAndroid /> {celular}
                                  </span>
                              </div>
                          ))
                        : null}
                    <Split />
                    {data.telefones
                        ? data.telefones.map(telefone => (
                              <div className="telefone" key={telefone}>
                                  <small>Telefone</small>
                                  <span>
                                      <MdPhone /> {telefone}
                                  </span>
                              </div>
                          ))
                        : null}
                </Side>
                <Actions>
                    <CopyToClipboard
                        children={<MdContentCopy onClick={handleOnCopy} />}
                        text={clipboardContent()}
                    />
                </Actions>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-top: 20px;
    font-size: 16px;
    border-radius: 4px;
    & h2 {
        font-size: 18px;
        font-weight: bold;
    }
`;
const Split = styled.hr`
    border: 0px solid #ccc;
    margin: 10px 0px;
`;

const Actions = styled.div`
    float: right;
    top: 0;
    margin-right: 10px;
`;

const Side = styled.div`
    width: 50%;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    & div {
        margin-top: 5px;
        margin-bottom: 5px;
        & small {
            display: block;
            color: #828282;
            font-weight: lighter;
        }
        & span {
            color: #555;
        }
    }
`;
