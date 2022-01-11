import styled from 'styled-components';

export const Container = styled.div`

    .container {
        margin: 0 4%;

        .containerHeader {
            margin-bottom: 16px;

            .itemSuggestion {
                margin-top:16px;
                color: #000000B3;
                font-size: 22px;
                font-weight: bold;
            }

            .itemOrderBy {
                margin-top:16px;
            }
        }   
        
        .listProduct {
            overflow-y: auto;
            max-height: 500px;

        }
    }

    @media (max-width:700px) {

        .container .listProduct {
            padding-bottom: 60px;

            .listProductItem {
                margin: 0 22px;
            }
        }

    }

    @media (min-width:701px) {

        .container .listProduct {
            padding-bottom: 60px;

            .listProductItem {
                margin: 0 40px;
            }
        }

    }
`;