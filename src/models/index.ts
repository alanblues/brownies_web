export interface InputsTypes {
    name: string;
    max?: number;
    tipe: string;
    placeHolder: string;
    errorMsg?: string;
    regExp?: RegExp;
    state: any;
    changeState: any;
}

export interface BannerProperties {
    title: string;
    description: string;
}