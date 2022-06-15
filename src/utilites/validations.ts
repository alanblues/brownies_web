interface IInputs {
    text: string;
    valid: boolean | null;
}

export const isValidTexts = (...params: Array<IInputs>): boolean => {
    const isValid = params.every(x => x.valid === true)
    return isValid;
}

export const scrollUp = (): void => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });
    window.scrollTo(0,0);
}

export const expressions = {
    usuario: /^[a-zA-Z0-9\_\-]{3,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,25}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-ZÀ-ÿ\s]{3,250}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

export const openMap = (addr: string): void => {
    switch (addr) {
        case 'chapu':
            window.open('https://www.google.com/maps/search/?api=1&query=Torre+Chapultepec,+Av.+Chapultepec+Nte.+15,+44600+Guadalajara,+Jal.', "_blank");
            break;
        case 'oblatos':
            window.open('https://www.google.com/maps/search/?api=1&query=Gran+Terraza+Oblatos,+Avenida+Circunvalación+Oblatos,+Oblatos,+Guadalajara,+Jalisco', "_blank");
            break;
        case 'granplaza':
            window.open('https://www.google.com/maps/search/?api=1&query=Torre+Chapultepec,+Av.+Chapultepec+Nte.+15,+44600+Guadalajara,+Jal.', "_blank");
            break;
        case 'forum':
            window.open('https://www.google.com/maps/search/?api=1&query=Forum+Tlaquepaque,+Boulevard+General+Marcelino+García+Barragán,+Prados+del+Nilo,+Guadalajara,+Jalisco', "_blank");
            break;
        default:
            break;
    }
}