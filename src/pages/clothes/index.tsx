import { Grid } from '@material-ui/core';
import { FilterOptionsOrderBy } from '../../constants/filters';
import { getProductsByCategory } from '../../controller/products';
import { Product } from '../../interfaces';
import CardItem from '../../utils/cardItem';
import Select from '../../utils/select';
import { Container } from '../home/styled';

interface HomeProps {
  productsMan?: Product[];
  productsWoman?: Product[];
}

export default function Clothes({productsMan, productsWoman}:HomeProps) {
  return (
    <Container>
      <div className='container'>

        <Grid container justifyContent='center' className='containerHeader'>
          <Grid item xs={12} sm={8} md={7} xl={8} lg={8} className='itemSuggestion'>
            Roupas
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
            <CardItem products={[...productsWoman, ...productsMan]}/>
          </div>         
        </Grid>

      </div>
    </Container>
  )
}

export const getServerSideProps = async () => {

    const productsWoman = await getProductsByCategory(`women's clothing`);
    const productsMan = await getProductsByCategory(`men's clothing`);
  
    return {
      props: {
        productsWoman,
        productsMan
      },
    };
  };