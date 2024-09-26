import axios from "axios";

const API_URL = 'http://localhost:8080/api/productos';

class ProductService{
    createProduct(product){
        return axios.post(API_URL + "/add", product);

    };

    getAllProducts(){
        return axios.get(API_URL + "/all")
    }

}

export default new ProductService;

//const getProducts = async () => {
  //  try {
    //    const response = await axios.get(API_URL);
     //   console.log('getProducts response:', response.data);
      //  return response.data;
   // } catch (error) {
     //   console.error('Error fetching products:', error);
       // throw error;
    //}
//};



//const createProduct = async (productData) => {
 //   try {
   //     const response = await axios.post(API_URL + "/add", productData, {
     //       headers: {
       //         'Content-Type': 'multipart/form-data'
        //    }
        //});
        //console.log('createProduct response:', response.data);
        //return response.data;
 //   } catch (error) {
   //     console.error('Error creating product:', error.message);
     //   if (error.response) {
       //     console.error('Error response:', error.response.data);
       // } else if (error.request) {
        //    console.error('Error request:', error.request);
       // } else {
         //   console.error('Error message:', error.message);
      //  }
       // throw error;
   // }
//};



//const deleteProduct = async (id) => {
  //  try {
    //    const response = await axios.delete(`${API_URL}/${id}`);
      //  console.log('deleteProduct response:', response.data);
       // return response.data;
    //} catch (error) {
      //  console.error('Error deleting product:', error);
       // throw error;
   // }
//};

//export default {
  //  getProducts,
   //createProduct,
    //deleteProduct
//};
