import React from "react";;

const OperacionItem = ({operacion, listOperaciones}) => {

    return(
        <tr>
            <td>{operacion.numero_1}</td>
            <td>{operacion.numero_2}</td>
            <td>{operacion.resultado}</td>

        </tr>
    )
    
}

export default OperacionItem;