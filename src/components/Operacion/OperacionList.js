import React, { useEffect, useState } from 'react';
import OperacionItem from './OperacionItem';
import * as OperacionServer from './OperacionServer'

const OperacionList = () => {
    const [operaciones,SetOperaciones] = useState([]);

    const listOperaciones = async ()=>{
        try {
            const res = await OperacionServer.listOperaciones();
            const data = await res.json();
            SetOperaciones(data);
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>{
        listOperaciones();
    }, [])

    return (
        <div className='container my-4'>
            <table className='bordes table table-bordered' >
                <thead>
                    <tr>
                        <th scope='col'>Numero 1</th>
                        <th scope='col'>Numero 2</th>
                        <th scope='col'>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                        {operaciones.map((operacion)=>(
                            <OperacionItem key={operacion.id} operacion={operacion} listOperaciones={listOperaciones} />
                        ))}
                    </tbody>
            </table> 
        </div>
    );

};

export default OperacionList;