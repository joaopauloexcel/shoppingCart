import axios from 'axios';
import {BASE_URL} from '../../constants/env';

export const getAddressByCep = async () => {
  const address = await axios.get(
                `${BASE_URL}/user`/* ,{headers:{'app-id': APP_ID}} */
              )
  .then(({data}) => {
    return data
  })
  return address;
}
