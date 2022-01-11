import Head from 'next/head';
import Image from 'next/image';
import { Container } from './styled';

const Logo = require('../../images/logo.svg');

export default function Header() {
  return (
    <Container>
      <div className='image'>
        <Image src={Logo} alt='' />
      </div>      
    </Container>
  )
}
