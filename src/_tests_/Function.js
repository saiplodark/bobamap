import axios from 'axios'

module.exports = {
    getStores: async () => {
        let data;
        await axios
          .get('http://localhost:2021/api/stores')
          .then(res => (data = res.data))
          .catch(err => console.log(err));
        return data;
      }


}