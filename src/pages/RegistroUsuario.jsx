import React from 'react';
export default function RegistroUsuario() {
  return (
    <div className="min-h-screen bg-white flex">

        {/* Izquierda: Logo y descripción */}
        <div className="w-1/2 flex flex-col items-start justify-center">
          <h1 
            className="text-[57px] font-bold font-roboto" 
            style={{ position: 'absolute', top: '20px', left: '58px' }}
          >
            <span className="text-[#000000]">U</span>
            <span className="text-[#C20E1A]">güee</span>
          </h1>
          <div className="absolute top-[122px] left-[130px] text-center mb-6">
          <p className="text-[30px] font-roboto text-[#000000] leading-snug">
            <b>Una plataforma<br />
            para el Transporte<br />
            Universitario</b>
          </p>
        </div>
          {/* Logo */}
          <img 
            src="https://images.seeklogo.com/logo-png/17/3/universidad-del-valle-logo-png_seeklogo-177396.png"
            alt="Logo Univalle"
            className="absolute w-[150px] h-auto mb-2"   
            style={{width: '230px', top: '320px', left: '140px'}}
          />
      </div>

      {/* Derecha: Formulario */}
      <div className="w-1/2 bg-white flex flex-col items-start justify-center px-10 font-roboto">
        <h2
          className="text-[40px] font-bold text-[#C20E1A] absolute"
          style={{ top: '15px', left: '737px' }}
        >
          Crear una cuenta
        </h2>

        <form className="absolute left-[650px] text-[18px] mt-[auto] text-[#000000] text-left font-roboto space-y-4">

          {/* Nombre */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-3">Nombre</label>
            <input type="text" placeholder="Pepito" className="border border-[#C20E1A] rounded-[8px] p-7 w-[500px] h-[25px]" />
          </div>

          {/* Apellido */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-3">Apellido</label>
            <input type="text" placeholder="Pérez" className="border border-[#C20E1A] rounded-[8px] p-7 w-[500px] h-[25px]" />
          </div>

          {/* ID */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-3">ID</label>
            <input type="text" placeholder="2223510-3743" className="border border-[#C20E1A] rounded-[8px] p-7 w-[500px] h-[25px]" />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-3">Teléfono</label>
            <input type="text" placeholder="3157277727" className="border border-[#C20E1A] rounded-[8px] p-7 w-[500px] h-[25px]" />
          </div>

          {/* Dirección */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-3">Dirección</label>
            <input type="text" placeholder="Cll 2C Oeste #82 A12" className="border border-[#C20E1A] rounded-[8px] p-7 w-[500px] h-[25px]" />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-3">Contraseña</label>
            <input type="password" placeholder="***********" className="border border-[#C20E1A] rounded-[8px] p-7 w-[500px] h-[25px]" />
          </div>

          {/* Rol */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-3">Rol</label>
            <select className="border border-[#C20E1A] rounded-[8px] p-3 w-[500px] h-[25px] text-gray-500">
              <option>Seleccionar</option>
              <option>Pasajero</option>
              <option>Conductor</option>
            </select>
          </div>

          {/* Términos */}
          <label className="flex items-center space-x-2 text-[18px] mt-2 ">
            <input type="checkbox" className="accent-[#C20E1A]" />
            <span>Acepto los <span className="underline">términos y condiciones</span> del servicio</span>
          </label>

          {/* Botones */}
          <div className="flex gap-4 pt-4">
            <button type="submit" className="flex-1 border border-[#C20E1A] text-[#000000] rounded-[10px] hover:bg-[#C20E1A]">
              <b>Registrarme</b>
            </button>
            <button type="button" className="flex-1 border border-[#C20E1A] text-[#000000] rounded-[10px] hover:bg-[#C20E1A]">
              <b>Ya tengo cuenta</b>
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
