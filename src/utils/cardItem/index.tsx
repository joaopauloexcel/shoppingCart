/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';import { Product } from '../../interfaces';
import Button from '../buttonProduct';
import { Container } from './styled';

const Camisa = require('../../images/Camisa.jpg');

interface Props {
  products?: Array<Product>;
}

export default function CardItem({ products }: Props) {
  return (
    <Container>
      {products && products.map((item:Product, index:number) => 
        <div className='cardItem' key={index}>

          <div className='unset-img'>
            <Image src={item.image} alt='Produto' width='100%'  height='100%' objectFit='contain'/>
          </div>

          <div className='title'>
            {item.title}
          </div>

          <div className='price'>
            R${parseFloat(item.price).toFixed(2)}
          </div>

          <div className='button'>
            <Button 
              label='ver produto'
              onClick={() => console.log({id:item.id})}
            />
          </div>
        </div>)
      }
    </Container>
  )
}
