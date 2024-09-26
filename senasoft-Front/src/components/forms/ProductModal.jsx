import { useState } from 'react';
import ProductsService from '../../service/ProductsService'; // Asegúrate de que la ruta sea correcta

const ProductModal = ({ isOpen, handleClose }) => {
    
    const [name_producto, setName_product] = useState("");
    const [lote, setLote] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [precio, setPrecio] = useState("");
    const [fecha_vencimiento, setFecha_vencimiento] = useState("");

    const saveProduct = (e) => {
        e.preventDefault();
        const product = {name_producto, lote, cantidad, precio, fecha_vencimiento};
        ProductsService.createProduct(product).then((Response) => {
            console.log(Response.data);

        }).catch(error=> {
            console.log(error)
        })
    } 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



        

        //try {
           // await ProductsService.createProduct(formData);
           // alert('Producto creado exitosamente!');
          //  handleClose(); // Cierra el modal después de crear el producto
        //} catch (error) {
           // console.error('Error creando producto:', error);
         //   setError('Error al crear el producto. Intenta de nuevo.');
       // } finally {
          //  setLoading(false);
        //}
    //};

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 md:w-1/2">
                        <h2 className="text-lg font-bold mb-4">Agregar Producto</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form onSubmit={saveProduct}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nombre del Producto</label>
                                <input
                                    type="text"
                                    name="name_producto"
                                    value={name_producto}
                                    onChange={(e) => setName_product(e.target.value)}
                                    className="border rounded-lg w-full px-3 py-2"
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Lote</label>
                                <input
                                    type="text"
                                    name="lote"
                                    value={lote}
                                    onChange={(e) => setLote(e.target.value)}
                                    className="border rounded-lg w-full px-3 py-2"
                                    placeholder="Lote"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Cantidad</label>
                                <input
                                    type="number"
                                    name="cantidad"
                                    value={cantidad}
                                    onChange={(e) => setCantidad(e.target.value)}
                                    className="border rounded-lg w-full px-3 py-2"
                                    placeholder="Cantidad"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Precio</label>
                                <input
                                    type="text"
                                    name="precio"
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                    className="border rounded-lg w-full px-3 py-2"
                                    placeholder="Precio"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Día de Vencimiento</label>
                                <input
                                    type="date"
                                    name="fecha_vencimiento"
                                    value={fecha_vencimiento}
                                    onChange={(e) => setFecha_vencimiento(e.target.value)}
                                    className="border rounded-lg w-full px-3 py-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Subir Imagen</label>
                                <input
                                    type="file"
                                    name="imagen"
                                   
                                    className="border rounded-lg w-full px-3 py-2"
                                    
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleClose} className="mr-2 text-gray-500 hover:text-gray-700">Cancelar</button>
                                <button 
                                    onClick={(e) => saveProduct(e)}
                                    type="submit" 
                                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                                    disabled={loading}
                                >
                                    {loading ? 'Guardando...' : 'Guardar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductModal;