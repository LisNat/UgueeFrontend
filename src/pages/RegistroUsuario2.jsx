import React from "react";
import { SelectField } from "./SelectField";
import crearUnaCuenta from "./crear-una-cuenta.png";
import "./style.css";
import universidadDelValleLogo1 from "./universidad-del-valle-logo-1.png";

export const RegistroUguee = () => {
  return (
    <div className="registro-uguee">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Registrarme</div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-2">Ya tengo cuenta</div>
        </div>

        <div className="overlap-group">
          <div className="frame-2">
            <div className="rectangle" />

            <p className="acepto-los-t-rminos">
              <span className="span">Acepto los </span>

              <span className="text-wrapper-3">términos y condiciones</span>

              <span className="span"> del servicio</span>
            </p>
          </div>

          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-4">Nombre</div>

              <div className="input">
                <div className="text-wrapper-5">Pepito</div>
              </div>
            </div>

            <div className="frame-5">
              <div className="text-wrapper-4">Apellido</div>

              <div className="input">
                <div className="text-wrapper-5">Pérez</div>
              </div>
            </div>

            <div className="frame-6">
              <div className="text-wrapper-4">ID</div>

              <div className="input">
                <div className="text-wrapper-5">2223510-3743</div>
              </div>
            </div>

            <div className="frame-7">
              <div className="text-wrapper-4">Teléfono</div>

              <div className="input">
                <div className="text-wrapper-5">3157277727</div>
              </div>
            </div>

            <div className="frame-8">
              <div className="text-wrapper-4">Dirección</div>

              <div className="input">
                <p className="text-wrapper-5">Cll 2C Oeste #82 A12</p>
              </div>
            </div>

            <div className="frame-9">
              <div className="text-wrapper-4">Contraseña</div>

              <div className="input">
                <div className="text-wrapper-5">*****************</div>
              </div>
            </div>

            <SelectField
              className="select-field-instance"
              divClassName="design-component-instance-node"
              divClassNameOverride="select-field-3"
              label="Rol"
              selectClassName="select-field-2"
              size16Color="#C20E1A"
              state="default"
              value="Seleccionar"
              valueType="placeholder"
            />
          </div>
        </div>

        <img
          className="crear-una-cuenta"
          alt="Crear una cuenta"
          src={crearUnaCuenta}
        />

        <p className="ug-ee">
          <span className="text-wrapper-6">U</span>

          <span className="text-wrapper-7">güee</span>
        </p>

        <div className="overlap">
          <p className="p">Una plataforma para el Transporte Universitario</p>

          <img
            className="universidad-del"
            alt="Universidad del"
            src={universidadDelValleLogo1}
          />
        </div>
      </div>
    </div>
  );
};
