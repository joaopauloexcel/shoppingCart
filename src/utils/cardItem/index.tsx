import Head from 'next/head';
import Image from 'next/image';import { Product } from '../../interfaces';
import Button from '../buttonProduct';
;
import { Container } from './styles';

const Camisa = require('../../images/Camisa.jpg');

interface Props {
  products?: Array<Product>;
}

export default function CardItem({ products = [
  {
    id:1,
    title:'Boné',
    price:'10,30',
    category:'...',
    description:'Ótimo Prduto',
    image:'...'
  },
  {
    id:1,
    title:'Boné',
    price:'10,30',
    category:'...',
    description:'Ótimo Prduto',
    image:'...'
  },
  {
    id:1,
    title:'Boné',
    price:'10,30',
    category:'...',
    description:'Ótimo Prduto',
    image:'...'
  },
  {
    id:1,
    title:'Boné',
    price:'10,30',
    category:'...',
    description:'Ótimo Prduto',
    image:'...'
  },
  {
    id:1,
    title:'Boné',
    price:'10,30',
    category:'...',
    description:'Ótimo Prduto',
    image:'...'
  },
  {
    id:1,
    title:'Boné',
    price:'10,30',
    category:'...',
    description:'Ótimo Prduto',
    image:'...'
  },
  {
    id:1,
    title:'Boné',
    price:'10,30',
    category:'...',
    description:'Ótimo Prduto',
    image:'...'
  },
] }: Props) {
  return (
    <Container>
      {products && products.map((item:Product, index:number) => 
        <div className='cardItem' key={index}>
          <div className='image'>
            <Image src={Camisa} alt='' height={180} width={220}/>
          </div>
          <div className='title'>
            {item.title}
          </div>
          <div className='price'>
            R${item.price}
          </div>
          <div className='button'>
            <Button label='ver produto'/>
          </div>
        </div>)
      }
    </Container>
  )
}
