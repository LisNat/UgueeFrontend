import React from 'react';
export default function RegistroUsuario() {
  return (
    <div className="min-h-screen bg-white flex">

        {/* Izquierda: Logo y descripción */}
        <div className="w-1/2 flex flex-col items-start justify-center">
          <h1 
            className="text-[57px] font-bold font-roboto" 
            style={{ position: 'absolute', top: '10px', left: '58px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            <span className="text-[#000000]">U</span>
            <span className="text-[#C20E1A]">güee</span>
          </h1>
          <div className="absolute top-[122px] left-[170px] text-center mb-6">
          <p 
            className="text-[30px] font-roboto text-[#000000] leading-snug"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
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
            style={{width: '230px', top: '310px', left: '180px'}}
          />
      </div>

      {/* Derecha: Formulario */}
      <div className="w-1/2 bg-[#FFFFFF] flex flex-col items-start justify-center ">
        <h2
          className="text-[35px] top-[0px] left-[790px] text-[#C20E1A] absolute my-[10px]"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          Crear una cuenta
        </h2>

        <form className=" w-[520px] text-[19px] text-[#000000] text-left font-roboto space-y-4">

          {/* Nombre */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-[2px]">Nombre</label>
            <input type="text" placeholder="Pepito" className="border border-[#C20E1A] rounded-[8px] w-[500px] h-[25px] mb-[7px]" />
          </div>

          {/* Apellido */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-[2px]">Apellido</label>
            <input type="text" placeholder="Pérez" className="border border-[#C20E1A] rounded-[8px] w-[500px] h-[25px] mb-[7px]" />
          </div>

          {/* ID */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-[2px]">ID</label>
            <input type="text" placeholder="2223510-3743" className="border border-[#C20E1A] rounded-[8px] w-[500px] h-[25px] mb-[7px]" />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-[2px]">Teléfono</label>
            <input type="text" placeholder="3157277727" className="border border-[#C20E1A] rounded-[8px] w-[500px] h-[25px] mb-[7px]" />
          </div>

          {/* Dirección */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-[2px]">Dirección</label>
            <input type="text" placeholder="Cll 2C Oeste #82 A12" className="border border-[#C20E1A] rounded-[8px] w-[500px] h-[25px] mb-[7px]" />
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-[2px]">Contraseña</label>
            <input type="password" placeholder="***********" className="border border-[#C20E1A] rounded-[8px] w-[500px] h-[25px] mb-[7px]" />
          </div>

          {/* Rol */}
          <div className="flex flex-col">
            <label className="text-[15px] mb-[2px]">Rol</label>
            <select className="border border-[#C20E1A] rounded-[8px] mb-[7px] w-[505px] h-[30px] text-gray-500">
              <option>Seleccionar</option>
              <option>Pasajero</option>
              <option>Conductor</option>
            </select>
          </div>

          {/* Términos */}
          <label className="flex items-center text-[13px] mb-[9px] relative">
            <input type="checkbox" className="appearance-none w-[15px] h-[15px] border border-[#C20E1A] rounded-[3px] accent-[#FFFFFF] checked:bg-[#C20E1A] checked:border-[#C20E1A] relative"/>
            <span>
              Acepto los <span className="underline">términos y condiciones</span> del servicio
            </span>
          </label>

          {/* Botones */}
          <div className="flex justify-center gap-[25px] my-[15px]">
            <button 
              type="submit" 
              className="w-[170px] h-[40px] text-[16px] border border-[#C20E1A] border-[2px] bg-[#FFFFFF] text-[#C20E1A] rounded-[8px] hover:bg-[#C20E1A] hover:text-[#FFFFFF] transition">
              <b>Registrarme</b>
            </button>
            <button 
              type="button" 
              className="w-[170px] h-[40px] text-[16px] border border-[#C20E1A] border-[2px] bg-[#FFFFFF] text-[#C20E1A] rounded-[8px] hover:bg-[#C20E1A] hover:text-[#FFFFFF] transition">
              <b>Ya tengo cuenta</b>
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
