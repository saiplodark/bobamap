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

//     getStores=()=>{
//       if(this.state.user){
//           axios.get('/api/stores')
//           .then(({data})=>{
//               this.setState({
//                   stores:data
//               })
//           })
//           .catch(err=>{
//               console.log('can not find stores')
//           })
//       }
// }
}