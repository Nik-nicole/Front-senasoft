import { useState, useEffect } from 'react';
import ProductModal from '../forms/ProductModal'; // Asegúrate de la ruta correcta
import ProductService from '../../service/ProductsService'; // Ajusta la ruta según donde guardes el servicio

export default function Crud() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);

    const handleOpenModal = (product) => {
        setCurrentProduct(product);
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setCurrentProduct(null);
        setIsModalOpen(false);
    };

    //const fetchProducts = async () => {
     //   try {
       //     const data = await ProductService.getProducts();
         //   setProducts(data);
        //} catch (error) {
            // Manejo de errores si es necesario
       // }
   // };

    //const updateProduct = async (updatedProduct) => {
      //  try {
        //    await ProductService.updateProduct(updatedProduct.id, updatedProduct);
          //  fetchProducts(); // Actualiza la lista después de la actualización
           // handleCloseModal();
       // } catch (error) {
            // Manejo de errores si es necesario
       // }
    //};

    useEffect(()=> {
     ProductService.getAllProducts().then(response => {
        setProducts(response.data);
        console.log(response.data);
     }).catch(error => {
        console.log(error);
     })
    },[])
    
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <input 
                                            type="text" 
                                            id="simple-search" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                                            placeholder="Search" 
                                            required 
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <button 
                                    onClick={() => handleOpenModal({})}
                                    type="button" 
                                    className="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-white uppercase bg-green-600">
                                    <tr>
                                        <th scope="col" className="px-4 py-4">Producto</th>
                                        <th scope="col" className="px-4 py-4">Nombre</th>
                                        <th scope="col" className="px-4 py-3">Lote</th>
                                        <th scope="col" className="px-4 py-3">Precio</th>
                                        <th scope="col" className="px-4 py-3">Día de vencimiento</th>
                                        <th scope="col" className="px-4 py-3">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(products) && products.map(product => (
                                        <tr key={product.id}>
                                            <td className="px-4 py-2">{product.producto}</td>
                                            <td className="px-4 py-2">{product.nombre}</td>
                                            <td className="px-4 py-2">{product.lote}</td>
                                            <td className="px-4 py-2">{product.precio}</td>
                                            <td className="px-4 py-2">{product.fechaVencimiento}</td>
                                            <td className="px-4 py-2">
                                                <button 
                                                    onClick={() => handleOpenModal(product)} 
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Editar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Mostrar
                                <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                                de
                                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                {/* Paginas de navegación */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Product Modal */}
            <ProductModal 
                isOpen={isModalOpen} 
                handleClose={handleCloseModal} 
                product={currentProduct} 
               // handleUpdate={updateProduct} 
            />
        </>
    );
}
