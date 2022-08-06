import React, { useState} from "react";

import * as OperacionServer from './OperacionServer';

const OperacionForm = () => {
    
    const initialState = {
        id: 0,
        numero_1: 0,
        numero_2: 0,
        resultado: ""
    };

    const [operacion, SetOperacion] = useState(initialState);

    const handleInputChange = (e) =>{
        SetOperacion({...operacion, [e.target.name]: e.target.value});
    };
    
    const handleSubmit =async (e) =>{
        e.preventDefault();
        try {
            let res;
            res = await OperacionServer.registerOperacion(operacion);
            console.log(res);
            alertMensaje();
        } catch (error) {
            console.log(error);
        }
    }

    const alertMensaje = () =>{
        alert("Operacion registrada exitosamente, revise la lista de operaciones");
        SetOperacion(initialState);
    }

    return(
        <div className="col-md-3 mx-auto">
            <h2 className="mb-3 text-center">Operacion</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Numero 1</label>
                    <input type="number" name="numero_1" value={operacion.numero_1} onChange={handleInputChange} className="form-control" min="1" autoFocus required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Numero 2</label>
                    <input type="number" name="numero_2" value={operacion.telefono} onChange={handleInputChange} className="form-control" min="1" autoFocus required/>
                </div>
                <div className="d-grid gap-2">
                   <button className="btn btn-block btn-dark">Realizar Operacion</button> 
                </div>
            </form>
        </div>
    )
}

export default OperacionForm;