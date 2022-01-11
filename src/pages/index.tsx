import Head from 'next/head'
import Image from 'next/image'
import HomeSite from './home'

export default function Home() {
  return (
    <div>
      <HomeSite/>
    </div>
  )
}

export async function getServerSideProps() {

    return {
      redirect: {
        destination: '/home',
        permanent: true,
    },
  }

}