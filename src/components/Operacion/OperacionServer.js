const urlApi = "http://127.0.0.1:8000/api/operaciones/";

export const listOperaciones = async () =>{
    return await fetch(urlApi);
}

export const registerOperacion = async (newOperacion) => {
    const resultado = newOperacion.numero_1*newOperacion.numero_2;
    return await fetch(urlApi, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "numero_1": parseInt(newOperacion.numero_1),
            "numero_2": parseInt(newOperacion.numero_2),
            "resultado": String(resultado.toString()),
        })
    });
}