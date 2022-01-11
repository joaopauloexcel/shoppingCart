import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';
import { Container } from './styled';

const Inicio = require('../../images/inicio.svg');
const Roupas = require('../../images/roupas.svg');
const Eletronicos = require('../../images/eletronicos.svg');
const Acessorios = require('../../images/acessorios.svg');
const Carrinho = require('../../images/carrinho.svg');

export default function MenuNav() {

  const [indexActive, setIndexActive] = useState(0);

  return (
    <Container>
      <div className='menuNav'>
        <div className={`item ${indexActive === 0 && 'active'}`} onClick={() => setIndexActive(0)}>        
          <Link href={{pathname: "/home"}}>
            <a><Image src={Inicio} alt='' /> início </a>
          </Link>        
        </div>  
        <div className={`item ${indexActive === 1 && 'active'}`} onClick={() => setIndexActive(1)}>           
          <Link href={{pathname: "/clothes"}}>
            <a><Image src={Roupas} alt='' /> roupas</a>
          </Link>
        </div>
        <div className={`item ${indexActive === 2 && 'active'}`} onClick={() => setIndexActive(2)}> 
          <Link href={{pathname: "/electronics"}}>
            <a><Image src={Eletronicos} alt='' /> eletrônicos</a>  
          </Link>         
        </div>
        <div className={`item ${indexActive === 3 && 'active'}`} onClick={() => setIndexActive(3)}>  
          <Link href={{pathname: "/home"}}>
            <a><Image src={Acessorios} alt='' /> acessórios</a> 
          </Link>        
        </div>
        <div className={`item ${indexActive === 4 && 'active'}`} onClick={() => setIndexActive(4)}>  
          <Link href={{pathname: "/shoppingCart"}}>
            <a><Image src={Carrinho} alt='' /> meu carrinho</a>  
          </Link>        
        </div>
      </div>      
    </Container>
  )
}
