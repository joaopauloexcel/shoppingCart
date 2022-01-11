import { ArrowDropDown, ArrowDropUp, CheckTwoTone } from '@material-ui/icons';
import React, { useState } from 'react';
import { Container } from './styled';
import './styled.ts';

interface Props {
    titleUp?: string;
    placeholder?: string;
    dataOptions?: Array<any>;
    onClick?:Function;
}

const Select = ({ 
  titleUp, 
  placeholder,
  dataOptions,
  onClick = () => {} }: Props): JSX.Element => {

  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  return (
    <Container>
      <div className={'select'}>

        {titleUp && <div className={'titleUp'}>{titleUp}</div>}

      <div className={'display'} onClick={() => setIsOpen(!isOpen)}>
        <div>
          {itemSelected 
            ? itemSelected
            : <span>{`${placeholder || 'Selecione'}`}</span>}
        </div>
        <div className={'iconDownDisplay'}>
          {isOpen && <ArrowDropUp style={{color:"#000000B3"}}/>}
          {!isOpen && <ArrowDropDown style={{color:"#000000B3"}}/>}
        </div>
      </div>

      {isOpen && <div className={'selectDropDown'}>
        {dataOptions && dataOptions.map((item:any, index:number) => 

          <div 
            key={index} 
            className={'dropDownItem'}
            onClick={() => {
              
              onClick(item)
              setItemSelected(item.label)
              setIsOpen(!isOpen)

            }}
          > 
            <div className={'dropDownItemText'}>
              {item.label}
            </div> 
          </div>

        )}
      </div>}

    </div>
    </Container>
  )
}

export default Select;
