import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';



export const Table = () => {
    const [users, setusers] = useState([]);
    
    const getUsers = async () => {
        let url = `https://jsonplaceholder.typicode.com/comments`
        const response = await fetch(url)
        const data = await response.json();

        setusers(data)
    }
    useEffect(() => {
        getUsers();

    }, []);



    const columns = [{

        dataField: 'id',
        text: 'Id'
    },
    {
        dataField: 'name',
        text: 'Nome'

    },
    {
        dataField: 'email',
        text: 'Email'
    },
    {
        dataField: 'body',
        text: 'Texto'
    }
    ]

    // const produtos = [
    //     {
    //         id: 1,
    //         name: "livro 1",
    //         username: "Fabricio"
    //     },{

    //             id: 2,
    //             name: "livro 2",
    //             username: "Caliny"

    //     },{
    //         id: 3,
    //             name: "livro 3",
    //             username: "Arthur"

    //     }
    // ]

    // const StyleH3 = {
    //     borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em'
    // }
    // const styleDiv ={
    //     paddingTop: '16px'
    // }

    return (

        <div >
            <h3>Tabela de Usuários</h3>
            <BootstrapTable
                keyField='id'
                data={users}
                columns={columns}
                striped
                hover
                condensed
                pagination={ paginationFactory()}
                
            />

        </div>
    )
}

