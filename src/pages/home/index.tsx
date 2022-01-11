import { Grid } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FilterOptionsOrderBy } from '../../constants/filters';
import { getAllProducts } from '../../controller/products';
import { Product } from '../../interfaces';
import CardItem from '../../utils/cardItem';
import Select from '../../utils/select';
import { Container } from './styled';

interface HomeProps {
  products?: Product[];
}

export default function HomeSite({products}:HomeProps) {
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
              dataOptions={FilterOptionsOrderBy}
            />
          </Grid>
        </Grid>

        <Grid container className='listProduct'>
          <div className='listProductItem'>
            <CardItem products={products}/>
          </div>         
        </Grid>

      </div>
    </Container>
  )
}

export const getServerSideProps = async () => {

    const products = await getAllProducts();
  
    return {
      props: {
        products,
      },
    };
  };