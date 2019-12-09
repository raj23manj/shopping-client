export class CartDetailModel {
    public cart_id: number;
    public cart_qty: number;
    public product_name: string;
    public actual_product_price: number;
    public actual_total: number;
    public discounted_total: number;
    public actual_discount_price: number;
    public actual_discount_qty: number;


    constructor(cart_id: number,
        cart_qty: number,
        product_name: string,
        actual_product_price: number,
        actual_total: number,
        discounted_total: number,
        actual_discount_price: number,
        actual_discount_qty: number
    ) {
        this.cart_id = cart_id;
        this.cart_qty = cart_qty;
        this.product_name = product_name;
        this.actual_product_price = actual_product_price;
        this.actual_total = actual_total;
        this.discounted_total = discounted_total;
        this.actual_discount_price = actual_discount_price;
        this.actual_discount_qty = actual_discount_qty;
    }
}