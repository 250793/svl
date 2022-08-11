import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

export const Table = () => {
    const [users, setusers] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            let url = `https://jsonplaceholder.typicode.com/users`
            const response = await fetch(url)
            const data = await response.json();

            setusers(data)
        }

        getUsers();

    }, []);



    const columns = [{
        dataField: 'id',
        text: 'User Id'
    },
    {
        dataField: 'name',
        text: 'Nome'
    },
    {
        dataField: 'username',
        text: 'Nome de Usuario'

    }]

    const StyleH3 = {
        borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em'
    }
    const styleDiv ={
        paddingTop: '16px'
    }

    return (

        <div style={styleDiv}>
            <h3 style={StyleH3}>Tabela de Usuários</h3>
            <BootstrapTable
                keyField='id'
                data={users}
                columns={columns}
                striped
                hover
                condensed
            />

        </div>
    )
}

