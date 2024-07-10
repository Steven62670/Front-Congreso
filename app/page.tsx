import React from 'react';
import "./globals.css";

function Home() {
  return (
    
    <div className='outer-container'>

      <div className="container" style={{ border: '1px solid black', padding: '10px' }}>
        
        <div className="containerCon" style={{ border: '1px solid black', padding: '10px' }}>
          Congreso
        </div>

        <div className="subContainer">
          Congreso Internacional de Ciencia, Tecnología e Innovación para la Sociedad CITIS 2024
        </div>

        <div className="textContainer" style={{ border: '1px solid black', padding: '10px' }}>
          GUAYAQUIL - MARIA AUXILIADORA <br/>
          Desde		mié, 17 jul 2024		Al		vie, 19 jul 2024<br/>
          Horario:	09:00 a 18:00<br/>
          Total Horas:	24<br/>
          Fecha de Finalización de Inscripción:	lun, 22 jul 2024<br/>
        </div>

        <form className="formContainer" style={{ border: '1px solid black', padding: '10px' }}>
          <div className="formGroup">
            <label htmlFor="TipoIdent">Tipo de Identificación: * </label>
            <select name="TipoIdent" id="TipoIdent">
              <option value="Cedula">Seleccionar uno</option>
              <option value="Cedula">Cedula</option>
              <option value="Ruc">Ruc</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="Identificación">Identificación: *</label>
            <input type="text" id="Identificación" name="Identificación" />
          </div>

          <div className="formGroup">
            <label htmlFor="name">Nombres: *</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="formGroup">
            <label htmlFor="Apellido">Apellidos: *</label>
            <input type="text" id="Apellido" name="Apellido" />
          </div>

          <div className="formGroup">
            <label htmlFor="FechaNacimiento">Fecha de nacimiento: *</label>
            <input type="date" id="FechaNacimiento" name="FechaNacimiento" />
          </div>

          <div className="formGroup">
            <label htmlFor="CorreoPer">Correo personal: *</label>
            <input type="email" id="CorreoPer" name="CorreoPer" />
          </div>

          <div className="formGroup">
            <label htmlFor="CorreoInst">Correo Institucional: </label>
            <input type="email" id="CorreoInst" name="CorreoInst" />
          </div>

          <div className="formGroup">
            <label htmlFor="TipoInst">Tipo de institución: </label>
            <select name="TipoInst" id="TipoInst">
              <option value="Cedula">Seleccionar uno</option>
              <option value="Cedula">Pública</option>
              <option value="Ruc">Privada</option>
              <option value="Pasaporte">Organización social</option>
              <option value="Pasaporte">TRH</option>
            </select>
          </div>

          <div className="formGroup">
            <label htmlFor="Institucion">Institución: </label>
            <input type="text" id="Institucion" name="Institucion" />
          </div>

          <div className="formGroup">
            <label htmlFor="Dirección">Dirección: *</label>
            <input type="text" id="Dirección" name="Dirección" />
          </div>

          <div className="formGroup">
            <label htmlFor="Celular">Celular: *</label>
            <input type="text" id="Celular" name="Celular" />
          </div>

          <div className="formGroup">
            <label htmlFor="Pais">País: *</label>
            <input type="text" id="Pais" name="Pais" />
          </div>

          <div className="formGroup">
            <label htmlFor="Provincia">Provincia: </label>
            <input type="text" id="Provincia" name="Provincia" />
          </div>

          <div className="formGroup">
            <label htmlFor="Ciudad">Ciudad: *</label>
            <input type="text" id="Ciudad" name="Ciudad" />
          </div>

          <div className="formGroup">
            <label htmlFor="CódigoPostal">Código Postal: </label>
            <input type="text" id="CódigoPostal" name="CódigoPostal" />
          </div>

          <div className="formGroup">
            <label htmlFor="NivelEstudio">Nivel de estudio: </label>
            <input type="textarea" id="NivelEstudio" name="NivelEstudio" />
          </div>

          <div className="Check">
            <label htmlFor="NivelEstudio">¿Facturar a nombre de otra persona o institución?: </label>
            <input type="checkbox" id="check" name="check" />
          </div>

        </form>
      
      </div>


    </div>
  )
}

export default Home 