import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    title: "Mobile",
                    price: 100000,
                    qty: 1,
                    id: 1,
                    originalPrice: 100000
                },
                {
                    title: "Watch",
                    price: 999,
                    qty: 1,
                    id: 2,
                    originalPrice: 999
                },
                {
                    title: "Laptop",
                    price: 20000000,
                    qty: 1,
                    id: 3,
                    originalPrice: 20000000
                }
            ]
        }
    }

    handleIncreasedQty = (product) => {
        console.log("product ", product);
        const {products} = this.state;
        const index = products.indexOf(product);
        console.log(index);

        products[index].qty += 1;
        products[index].price += products[index].originalPrice;

        this.setState({
            products: products
        });
    }


    handleDecreasedQty = (product) => {

        console.log("decreased clicked ", product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if (products[index].qty > 0) {
            products[index].qty -= 1;
            products[index].price -= products[index].originalPrice;
        } else {
            alert("You don't have sufficient quantity of this product.");
        }

        this.setState({
            products: products
        })
    }
    render() {
        const {products} = this.state;

        return (
            // JSX
            <div className="cart">
                {
                    products.map((product) => {

                        return (
                            <CartItem product={product} key={product.id} onQuantityIncreased={this.handleIncreasedQty} onQuantityDecreased={this.handleDecreasedQty} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Cart;