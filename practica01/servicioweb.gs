// regresa de forma textual los parámetros leidos con get
const doGet = (e = {}) => {
    const { parameter  } = e;
    const { nombre = 'Omar', apellido = 'Get'  } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${tel} ${direccion}`;
    return ContentService.createTextOutput(salida);
                      
};

// regresa de forma textual los parámetros leidos con post
const doPost = (e = {}) => {
    const { parameter  } = e;
    const { nombre = 'Aldair', apellido = 'Post'  } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${tel} ${direccion}`;
    return ContentService.createTextOutput(salida);
                      
};
