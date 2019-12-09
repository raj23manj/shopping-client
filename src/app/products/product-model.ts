export class Product {
    public id: number;
    public name: string;
    public price: number;
    public created_at: string;
    public updated_at: string;


    constructor(id: number, name: string, price: number, created_at: string, updated_at: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}