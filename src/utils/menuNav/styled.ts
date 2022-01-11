import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 40px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    padding: 4px 8px 0;

    .menuNav {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;

        .item {
            margin: 8px;
            font-family:Roboto;
            font-size: 14px;
            cursor: pointer;

            a {
                text-decoration: none;
                color: #000000B3;
            }

            &:hover {
                opacity: 0.8;
            }

            
            &.active {
                a {
                    text-decoration: none;
                    color: #888888;
                    font-weight: bold;
                    text-decoration:underline;                
                }
            }
            
        }
    }


`;