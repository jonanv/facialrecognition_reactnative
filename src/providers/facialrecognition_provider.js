export const getImageAnalysis = (base64img) => {
    fetch('https://138.128.178.170/recognitionimage', {
        'method': 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
            imagen: base64img
        // })
    })
        .then((response) => response.json())
        .then((responseData) =>
            this.setState({
                contenido: responseData.contenido,
                tipo: responseData.tipo_contenido,
                valor: responseData.valor
            })
        )
}