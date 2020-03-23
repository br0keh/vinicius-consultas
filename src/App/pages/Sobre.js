import React from "react";

import Contact from "../components/Contact";

const Sobre = () => {
    return (
        <>
            <div>
                Entre em contato para adquirir acesso à API completa:
                <ul style={{ marginLeft: "40px" }}>
                    <li>Consulta de Nome</li>
                    <li>Consulta de CPF</li>
                    <li>Consulta de Email</li>
                    <li>Consulta de Telefone</li>
                </ul>
            </div>
            <hr />

            <Contact
                color="orange"
                social="https://mail.google.com/mail/?view=cm&fs=1&to=personate01@gmail.com"
            >
                personate01@gmail.com
            </Contact>
            <Contact
                color="#8937E6"
                social="https://discordapp.com/channels/@me/683737466003652760"
            >
                vinicius.#1756
            </Contact>
            <Contact color="#1DA1F2" social="https://twitter.com/brokewkf">
                @brokewkf
            </Contact>
        </>
    );
};

export default Sobre;
