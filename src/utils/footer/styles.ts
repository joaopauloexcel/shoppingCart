import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 80px;
    background: transparent linear-gradient(180deg, var(---ff0000) 0%, var(---f91e96) 100%) 0% 0% no-repeat padding-box;
    background: transparent linear-gradient(180deg, #FF0000 0%, #F91E96 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
    position: fixed;
    bottom: 0;
    z-index: 99;
    padding-top: 10px;

    .footer {
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        
        .item {
            margin:8px 0;
            cursor: pointer;
            &:hover {
                opacity: 0.5;
            }
        }

    }

    @media (max-width:700px) {

        .footer {
            margin: 0 15%;
        }


    }

    @media (min-width:701px) {
        .footer {
            margin: 10px 35%;
        }

    }
    
`;