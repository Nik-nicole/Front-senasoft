// src/components/ProductModal.jsx

import React from 'react';

const ProductModal = ({ isOpen, handleClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-5 w-11/12 md:w-1/2">
                        <h2 className="text-lg font-bold mb-4">Agregar Producto</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nombre del Producto</label>
                                <input type="text" className="border rounded-lg w-full px-3 py-2" placeholder="Nombre" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Lote</label>
                                <input type="text" className="border rounded-lg w-full px-3 py-2" placeholder="Lote" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Cantidad</label>
                                <input type="number" className="border rounded-lg w-full px-3 py-2" placeholder="Cantidad" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Precio</label>
                                <input type="text" className="border rounded-lg w-full px-3 py-2" placeholder="Precio" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Día de Vencimiento</label>
                                <input type="date" className="border rounded-lg w-full px-3 py-2" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Subir Imagen</label>
                                <input type="file" className="border rounded-lg w-full px-3 py-2" required />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleClose} className="mr-2 text-gray-500 hover:text-gray-700">Cancelar</button>
                                <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductModal;
