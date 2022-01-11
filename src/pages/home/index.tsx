import { Grid } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CardItem from '../../utils/cardItem';
import Select from '../../utils/select';
import { Container } from './styled';

/* interface HomeProps {
  posts: Post[];
} */

export default function HomeSite() {
  return (
    <Container>
      <div className='container'>

        <Grid container justifyContent='center' className='containerHeader'>
          <Grid item xs={12} sm={8} md={7} xl={8} lg={8} className='itemSuggestion'>
            Sugestão para você
          </Grid>
          <Grid item xs={12} sm={4} md={5} xl={3} lg={3} className='itemOrderBy'>
            <Select 
              placeholder='ordenar por'
              dataOptions={[
                {
                  label:'menor preço'
                },
                {
                  label:'a-z'
                },
                {
                  label:'mais recentes'
                }
              ]}
            />
          </Grid>
        </Grid>

        <Grid container className='listProduct'>
          <div className='listProductItem'>
            <CardItem/>
          </div>         
        </Grid>

      </div>
    </Container>
  )
}
/* 
export const getServerSideProps: GetServerSideProps<any> = async () => {
    const response = await fetch('http://localhost:3333/posts');
    const posts = await response.json();
  
    return {
      props: {
        posts,
      },
    };
  }; */
