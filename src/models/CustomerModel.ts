export default class CustomerModel {
    id: number;
    name: string;
    cpf: string;

    private static nextId = 1;

    constructor(name: string, cpf: string) {
        this.id = CustomerModel.nextId++;
        this.name = name;
        this.cpf = cpf;
    }
}