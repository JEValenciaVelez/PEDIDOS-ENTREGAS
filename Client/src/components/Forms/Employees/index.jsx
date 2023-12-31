import React, { useState } from 'react';
import axios from 'axios';


const Employees = () => {

  const [Data, setData] = useState({
    nombre: '',
    apellidos: '',
    cedula: '',
    direccion: '',
    departamento: '',
    municipio: '',
    barrio: '',
    tipoEmpleado: '',
    salario: 0,
    fechaDeNacimiento: '',
    telefono: ''
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...Data, [name]: value });
  };

  const sendClientData = async () => {

    console.log('data q se despacha al servidor', Data)

    try {
      const response = await axios.post('http://localhost:3001/employee', Data);

      if (response.status === 201) {
        console.log('Cliente creado exitosamente:', response.data);
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }

  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-semibold mb-4">Crear Empleado</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={Data.nombre}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={Data.apellidos}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cedula: </label>
          <input
            type="text"
            name="cedula"
            value={Data.cedula}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Direccion: </label>
          <input
            type="text"
            name="direccion"
            value={Data.direccion}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Departamento: </label>
          <input
            type="text"
            name="departamento"
            value={Data.departamento}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Municipio: </label>
          <input
            type="text"
            name="municipio"
            value={Data.municipio}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Barrio: </label>
          <input
            type="text"
            name="barrio"
            value={Data.barrio}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700">
                Seleccione tipo de empleado:
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input
                        type="checkbox"
                        name="tipoEmpleado"
                        value="empleado"
                        onChange={handleInputChange}
                        className="form-checkbox text-blue-500 h-5 w-5"
                        />
                        <span className="ml-2 text-gray-800">Empleado</span>
                    </label>
                    <label className="inline-flex items-center ml-4">
                        <input
                        type="checkbox"
                        name="tipoEmpleado"
                        value="administrador"
                        onChange={handleInputChange}
                        className="form-checkbox text-blue-500 h-5 w-5"
                        />
                        <span className="ml-2 text-gray-800">Administrador</span>
                    </label>
                </div>
            </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">salario: </label>
          <input
            type="text"
            name="salario"
            value={Data.salario}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha de nacimiento: </label>
          <input
            type="text"
            name="fechaDeNacimiento"
            value={Data.fechaDeNacimiento}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefono: </label>
          <input
            type="text"
            name="telefono"
            value={Data.telefono}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Agrega más campos del formulario aquí */}
        <button
          type="button"
          onClick={sendClientData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Crear Empleado
        </button>
      </form>
    </div>
  );
};

export default Employees;
