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

        <div className="containerRadio" style={{ border: '1px solid black', padding: '10px' }}>
          <form className="formContainer">

            <div className="Check">
              <input type="radio" id="option1" name="option" value="option1"/>
              <label htmlFor="NivelEstudio">$400.0 Ponente profesional </label>
            </div>

            <div className="Check">
              <input type="radio" id="option1" name="option" value="option1"/>
              <label htmlFor="NivelEstudio">$ 320.0 PONENTE DOCENTE UNIVERSITARIO </label>
            </div>

            <div className="Check">
              <input type="radio" id="option1" name="option" value="option1"/>
              <label htmlFor="NivelEstudio">$ 200.0 PONENTE ESTUDIANTE EXTERNO </label>
            </div>

            <div className="Check">
              <input type="radio" id="option1" name="option" value="option1"/>
              <label htmlFor="NivelEstudio">$ 0.0 PONENTE DOCENTE O ESTUDIANTE UPS </label>
            </div>

            <div className="Check">
              <input type="radio" id="option1" name="option" value="option1"/>
              <label htmlFor="NivelEstudio">$ 15.0 ASISTENTE CON CERTIFICADO (NO PONENTE) </label>
            </div>

            <div className="Check">
              <input type="radio" id="option1" name="option" value="option1"/>
              <label htmlFor="NivelEstudio">$ 0.0 ASISTENTE SIN CERTIFICADO (NO PONENTE) </label>
            </div>

            <div className="Check">
              <input type="radio" id="option1" name="option" value="option1"/>
              <label htmlFor="NivelEstudio">$ 150.0 PONENTE PROFESIONAL </label>
            </div>

          </form>

        </div>

        <div className="textContainer" style={{ border: '1px solid black', padding: '10px' }}>
          <h3>* Protección de datos personales :</h3>
            <label htmlFor="texto">De conformidad con lo dispuesto en la Ley Orgánica de Protección de Datos 
              y su Reglamento General de Protección de datos, le informamos que sus datos personales serán tratados 
              por la Universidad Politécnica Salesiana, domiciliada en la calle Turuhuayco 3-69 y Calle Vieja, 
              en calidad de Responsable de Tratamiento con la finalidad de registrar su inscripción al Congreso 
              Internacional de Ciencia, Tecnología e Innovación para la Sociedad CITIS 2024 que se desarrollará en 
              el Campus María Auxiliadora, Km 19 vía a la costa - Guayaquil ,del 17-07-2024 Hasta 19-07-2024.<br/>
              <br/>La base jurídica que habilita a la Universidad para 
              el tratamiento de este tipo de datos de carácter es el consentimiento expreso 
              del asistente para el tratamiento de sus datos siendo este consentimiento obligatorio 
              para poder ser inscrito al programa:<br/>
              <br/>Sus datos personales no serán cedidos por la Universidad a terceros salvo por obligación legal. 
              Adicionalmente, le indicamos que sus datos personales se conservarán únicamente hasta que finalice el programa:
              Congreso Internacional de Ciencia, Tecnología e Innovación para la Sociedad CITIS 2024 y posteriormente se conservarán 
              bloqueados durante los plazos establecidos legalmente para atender a las posibles responsabilidades originadas del 
              tratamiento de los mismos.<br/>
              <br/>Podrá ejercitar sus derechos de acceso, rectificación, supresión, portabilidad de los datos y limitación u oposición a su 
              tratamiento a través de la dirección electrónica: usodedatos@ups.edu.ec.<br/>
            </label>

          <div className="Check">
            <input type="checkbox" id="check" name="check" />
          </div>

        </div>

        <div className="Check">
          <button className="Button">Visualizar datos</button>
          <button className="Button2">Limpiar</button>
        </div>
      
      </div>


    </div>
  )
}

export default Home 

