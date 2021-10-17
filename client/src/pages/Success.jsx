import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {userRequest} from "../requestMethods";

const Container = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

const Success = () => {
    const location = useLocation();

    const data = location.state.stripeData
    const cart = location.state.cart
    const currentUser = useSelector(state => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);


    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    userId: currentUser._id,
                    products: cart.products.map(item => ({
                        productId: item._id,
                        quantity: item.quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address
                });
                setOrderId(res.data._id);
            }catch (e) {
                console.log(e);
            }
        }

        data && createOrder();
    }, [cart, data, currentUser]);

    return (
        <Container>
            {
                orderId
                    ? `Order has been created successfully. Your order number is ${orderId}`
                    : `Successfull. Your order is being prepared...`
            }
            <button style={{padding: 10, marginTop: 20}}>Go to Homepage</button>
        </Container>
    );
};

export default Success;