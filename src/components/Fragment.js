import React from 'react'

const Fragment = ({ propFragment }) => {
    return (
        <>
            <h2>Primeiro Titulo </h2>
            <h3>Segundo Titulo</h3>
            <h4>Terceiro Titulo</h4>
            <h5>{propFragment}</h5>
        </>
    );
};

export default Fragment;