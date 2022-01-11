import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-bottom: 233px;
    order: 1px solid #00000026;

    .cardItem {
        width: 250px;
        min-height: 320px;
        display: flex;
        flex-wrap:wrap;
        flex-direction: column;
        align-items: center;
        background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 6px 12px #0000001F;
        border: 1px solid #00000026;
        margin:10px;
        border-radius: 14px;
        padding: 8px 16px;

        .unset-img {
            width: 100%;
            height: 175px;
            display: flex;
            justify-content: center;
        }

        .title {
            height: 64px;
            color: #000000B3;
            font-size: 16px;
            text-align: center;
            margin-top: 16px;
        }

        .price {
            height: 20px;
            color: #000000B3;
            font-size: 18px;
            font-weight: bold;
        }

        .button {
            height: 40px;
            margin-top: 16px;
        }
    }
    
`;