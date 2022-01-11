import styled from 'styled-components';

export const Container = styled.div`
.select {
    width: 100%;
    position: relative;
    color: #000000B3;

    .titleUp {
        display: flex;
        font-size: 16px;
        color: #2D3A37;
        margin-bottom: 16px;
    }

    .display {
        border: 1px solid #c4c4c4;
        height: 44px;
        border-radius: 4px;
        align-items: center;
        padding-left: 16px;
        color: #a4a4a4;
        display: flex;
        justify-content: space-between;
        padding-right: 8px;
        cursor: pointer;
        font-size: 16px;
        background: #FFFFFF;

        .iconDownDisplay {
            color: #000000B3;
        }
    }

    .selectDropDown {
        border: 1px solid #c4c4c4;
        min-height: 80px;
        position: absolute;
        background: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 8px 0px;
        z-index: 1;

        .dropDownItem {
            display: flex;
            margin: 4px 16px;
            cursor: pointer;
            height: 16px;
            &:hover {
                opacity: 0.8;
            }

            .dropDownItemText {
                display: flex;
                position: absolute;
                left: 14px;
            }

            .icon {
                font-size: 18px;
            }
        }
    }

}

`;
