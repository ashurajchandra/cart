import React from 'react';
const CartItem = (props) => {
    const { title, price, qty } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (

        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img} />
            </div>
            <div className="right-block">
                <div className="title" style={{ fontSize: 25 }}>{title}</div>
                <div className="price" style={{ color: '#777' }}>Rs. {price}</div>
                <div className="quantity" style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">

                    {/* Button */}
                    <img alt="increse"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/808/808559.svg"
                        onClick={() => onIncreaseQuantity(product)}
                    />

                    <img alt="decrease"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick={() => onDecreaseQuantity(product)}
                    />


                    <img alt="delete"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/1214/1214594.svg"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>


    );
}


const styles = {
    image: {
        width: 110,
        height: 100,
        borderRadius: 5,
        background: '#D3D3D3'
    }
}




export default CartItem;