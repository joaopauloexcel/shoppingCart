import Head from 'next/head';
import Image from 'next/image';;
import { Container } from './styles';

const Insta = require('../../images/insta.svg');
const Face = require('../../images/face.svg');
const Twitter = require('../../images/twitter.svg');
const Youtube = require('../../images/youtube.svg');

export default function Footer() {
  return (
    <Container>
      <div className='footer'>
        <div className='item'>
          <Image src={Face} alt=''/>
        </div>
        <div className='item'>
          <Image src={Insta} alt=''/>
        </div>
        <div className='item'>
          <Image src={Twitter} alt=''/>
        </div>
        <div className='item'>
          <Image src={Youtube} alt=''/>
        </div>
      </div>
    </Container>
  )
}
