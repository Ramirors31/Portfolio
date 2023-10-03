import AuthService from "./authService";
export default class AuxFnsService  {
    private authS: AuthService;
    constructor() {
        this.authS = new AuthService();
    }

    public logeo(): void {
        console.log("Hola desde el servicio orientado a objetos");
        this.authS.logeoAuth();
    }
};
