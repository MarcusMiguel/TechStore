import styled from 'styled-components';
import { BsFillCartXFill, BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { GrAdd, GrSubtract } from 'react-icons/gr';


export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: .8rem;
    font-weight: 900;
    padding: 1em 0;

    @media(max-width: 300px) {
        padding: 1em 8vw;
    }
`;

export const CartIsEmptyIcon = styled(BsFillCartXFill)`
    font-size: 4vh !important;
`;

export const CartWithItems = styled.div`
    min-height: 89vh;
    padding: 3em 8vw;

    @media(max-width: 300px) {
        padding: 3em 0;
    }
`;

export const CartActions = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    width: 100%;
    min-width: 250px;
`;

export const CheckoutButton = styled.button`
    font-size: .7rem;
    text-decoration: none;
    background: rgb(84,121,9);
    background: linear-gradient(90deg, rgba(84,121,9,0.27) 0%, rgba(84,121,9,0.49) 100%);    border-radius: 100px;
    padding: .5em;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 600px) and (min-width: 300px) {
        font-size: 16px !important;
    }
    @media(max-width: 300px) {
        font-size: 14px !important;
    }
`;

export const EmptyCartButton = styled.button`
    font-size: .7rem;
    text-decoration: none;
    background: rgb(121,9,9);
    background: linear-gradient(90deg, rgba(121,9,9,0.27448065407803746) 0%, rgba(127,39,9,0.4957691694841999) 100%);    border-radius: 100px;
    padding: .5em;
    margin-left: 1em;
    display: flex;
    align-items: center;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 600px) and (min-width: 300px) {
        font-size: 16px !important;
    }

    @media(max-width: 300px) {
        font-size: 14px !important;
    }
`;

export const CheckoutIcon = styled(BsFillBagCheckFill)`
    font-size: 0.8rem;
`;

export const EmptyCart = styled.div`
    height: 89vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`;

export const GoBackButton = styled.button`
    padding: .1em;
    width: 6em; 
    text-decoration: none;
    background: white;
    border-radius: 100px;
    &:hover{
        cursor: pointer;
    }

    margin: 0 auto;
`;

export const EmptyCartMessage = styled.div`
    margin: 0 auto;
    min-width: 250px;
    height: 2em;
    display: flex;
    align-items: center;
`;

export const EmptyCartIcon = styled(AiFillDelete)`
    font-size: 0.8rem;
`;

export const Table = styled.ul`
    padding: 0;
    margin: 0;
`;

export const TableHeader = styled.li`
    background-color: white;
    font-size: .7rem;
    letter-spacing: 0.03em;
    border-radius: 3px;
    padding: 0 30px 1em 30px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;

    @media(max-width: 700px) {
        display: none;
    }
`;

export const TableRow = styled.li`
    background-color: #fff;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    font-size: .7rem;
    min-width: 250px;
    @media(max-width: 700px) {
        font-size: .6rem;
    }


    @media(max-width: 400px) {
        flex-wrap: wrap;
    }
`;

export const ImageColumnCell = styled.div`
    flex-basis: 10%;
    display: flex;
    justify-items: start;

    @media(max-width: 400px) {
        flex-basis: 20%;
    }
`;

export const TitleColumnCell = styled.div`
    flex-basis: 40%;
    padding: 0 1em ;
    @media(max-width: 400px) {
        flex-basis: 60%;
    }
`;

export const PriceColumnCell = styled.div`
    flex-basis: 10%;
    text-align: end;

      @media (max-width: 700px) {
        display: none;
      }


`;

export const QuantityColumnCell = styled.div`
    flex-basis: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    @media(max-width: 700px) {
        flex-direction: column;
        padding-right: 1em;

    }

    @media(max-width: 400px) {
        flex-basis: 50%;
        flex-direction: row;
        padding-top: 1em;
        text-align: start;
        justify-content: center;
        font-size: .7rem;
    }
`;

export const SubtotalColumnCell = styled.div`
    text-align: end;
    flex-basis: 15%;

    @media(max-width: 400px) {
        flex-basis: 40%;
        padding-top: 1em;
        font-size: .7rem;
    }
`;

export const AddIcon = styled(GrAdd)`
    margin-left: .2em;
    &:hover{
        cursor: pointer;
    }

    @media(max-width: 700px) {
      margin-left: 0;
    }
`
export const RemoveIcon = styled(GrSubtract)`
    margin-right: .2em;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 700px) {
        margin-right: 0;
      }
`

export const TotalAmount = styled.div`
    width: 100%;
    min-width: 250px;
    text-align: end;
    font-weight: 700;
    font-size: .7rem;
    padding: 0 30px;
`;

