
interface IDataContact {
    name: string;
    email: string;
    message: string;
}

export const sendEmail = async (dataContact: IDataContact) => {
    let responseApi;

    await fetch('http://localhost:3001/api-brownies/sendcontact', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataContact)
    })
        .then(response => response.json())
        .then(data => responseApi = data)
        .catch(err => responseApi = null);
    return responseApi;
}

