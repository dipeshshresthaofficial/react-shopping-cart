import React from "react";
class CartItem extends React.Component {

    decreaseQuantity = () => {
        console.log("decrease clicked");
        if (this.state.qty >= 1) {

            const updatedQty = this.state.qty - 1;
            const updatedPrice = this.state.price - 999;
            this.setState({
                qty: updatedQty,
                price: updatedPrice

            });
            // this.setState(prevState => {return {qty: prevState.qty + 2}}, () => {console.log(this.state.qty)});
            // this.setState(prevState => {return {qty: prevState.qty + 3}}, () => {console.log(this.state.qty)});
            // this.setState({qty: 3}, () => {console.log(this.state.qty)});

        } else {
            console.log("quantity is already 0.")
            alert("You don't have sufficient quantity.")
        }

    }
    increaseQuantity = () => {
        // console.log("increase clicked");
        const updatedQty = this.state.qty + 1;
        const updatedPrice = this.state.price + 999;
        this.setState({
            qty: updatedQty,
            price: updatedPrice
        });
    }
    deleteItem = () => {
        console.log("delete clicked");
    }

    render() {
        console.log("render");
        console.log(this.props);
        const {title, price, qty} = this.props.product;

        return (

            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img className="action-icons" src="https://img.icons8.com/color/48/000000/minus.png" onClick={() => this.props.onQuantityDecreased(this.props.product)} />
                        <img className="action-icons" src="https://img.icons8.com/color/48/000000/plus.png" onClick={() => this.props.onQuantityIncreased(this.props.product)} />
                        <img className="action-icons" src="https://img.icons8.com/cute-clipart/48/000000/delete-forever.png" onClick={this.deleteItem} />
                        {/* <img alt="decrease qty" className="action-icons" src="./images/x-button.svg" />
                        <img alt="increase qty" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/929/929409.svg?token=exp=1610375446~hmac=884e390878cae00ea660586703247323" />
                        <img alt="delete item" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3496/3496416.svg?token=exp=1610375466~hmac=213c44bc116b3d057485607593b4a02d" /> */}
                    </div>
                </div>
            </div>
        );
    }
}

// Defining style for image
// in React we can't use style directly so ONE way is to define a object and use that object inside curly braces in style attribute
const styles = {
    image: {
        height: 120,
        width: 120,
        borderRadius: 5,
        backgroundColor: "#ccc"
    }


}

export default CartItem;
