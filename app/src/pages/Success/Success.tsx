import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useNavigate } from 'react-router-dom';
import { emptyCartAsync } from "../../redux/slices/cartSlice";

interface CurrentLocationState {
    state: {
        stripeData: {
            billing_details: {
                address: Object;
            }
        },
        cart: {
            total: Number;
        },
    }
}

const Success = () => {
    const { state } = useLocation();
    const currentUser = useAppSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await axios.post("api/order", {
                    state: state,
                    userId: currentUser?._id,
                });
                dispatch(emptyCartAsync({ currentUser }));
            } catch { }
        };
        state && createOrder();
    }, [state, currentUser]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {
                `Successfull. Your order is being prepared...`}
            <button onClick={() => navigate('/')} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </div>
    );
};

export default Success;