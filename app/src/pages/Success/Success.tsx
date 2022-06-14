import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { emptyCartAsync } from "../../redux/slices/cartSlice";
import { GoHomeButton, SuccessMessage } from "./style";

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
        <SuccessMessage>
            {`Success! Your order is being prepared.`}
            <GoHomeButton onClick={() => navigate('/')} >Go Home</GoHomeButton>
        </SuccessMessage>
    );
};

export default Success;