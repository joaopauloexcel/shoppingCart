import Head from 'next/head';
import { Container } from './styles';

interface Props {
  style?:object;
  label?:string;
  onClick?:Function;
}

export default function Button({ style = {}, label='', onClick = () => {}}: Props) {
  return (
    <Container>
      <div 
        className='buttonProduct' 
        style={style} 
        onClick={() => onClick()}>

        {label}

      </div>
    </Container>
  )
}
