const validateString = (cad) =>{
    let response = (cad.length >=3) ?true : false;
    return response;
};

const validateTelefono =(cad) => {
    let response = (cad.length >=10) ?true : false;
    return response;
}

class Validate{
    validNames(value){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,30})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})([\s]?)$/g;
        const resp = value.match(nombresRX) ? true : false;
        console.log(resp);
        return resp;
    }

    validTele(value){
        const teleRX =  /^(((300|301|302|303|304|324|305|310|311|312|313|314|320|321|322|323|315|316|317|318|319|350|351)[0-9]{7}))$/g;
        const resp = value.match(teleRX) ? true:false;
        return resp;
    }
    validMail(value){
        const mailRX =  /^([\w.]+[^#$%&\/()='"!?}¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const resp = value.match(mailRX) ? true:false;
        return resp;
    }
    validFrom = (objeto) => {
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e === false); 
        return resp;
    }
}

export{validateString,validateTelefono, Validate }