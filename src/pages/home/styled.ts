import styled from 'styled-components';

export const Container = styled.div`
margin-bottom: 128px;
    .container {
        margin: 0 4%;

        .containerHeader {
            margin-bottom: 16px;

            .itemSuggestion {
                margin-top:16px;
                color: #000000B3;
                font-size: 20px;
                font-weight: bold;
            }

            .itemOrderBy {
                margin-top:16px;
            }
        }   
        
        .listProduct {
            overflow-y: auto;
            max-height: 500px;
            margin-bottom: 128px;

            .listProductItem {
                margin: 0 40px;
            }
        }
    }
`;