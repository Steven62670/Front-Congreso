function Home() {
    return (
      <div className='Container' style={{ border: '1px solid black', padding: '10px' }}>
        
        <div className="containerCon" style={{ border: '1px solid black', padding: '5px' }}>
          Congreso
        </div>
  
        <div style={{ border: '1px solid black', padding: '5px' }}>
          Congreso Internacional de Ciencia, Tecnología e Innovación para la Sociedad CITIS 2024
        </div>
  
        <div style={{ border: '1px solid black', padding: '5px' }}>
          GUAYAQUIL - MARIA AUXILIADORA <br/>
          Desde		mié, 17 jul 2024		Al		vie, 19 jul 2024<br/>
          Horario:	09:00 a 18:00<br/>
          Total Horas:	24<br/>
          Fecha de Finalización de Inscripción:	lun, 22 jul 2024<br/>
        </div>
  
        <form className="formContainer" style={{ border: '1px solid black', padding: '5px' }}>
  
          <label htmlFor="name"> Tipo de Identificación: *</label>
          <select name="TipoIdent" id="ipoIdent">
            <option value='Cedula'>Seleccionar uno</option>
            <option value='Cedula'>Cedula</option>
            <option value='Ruc'>Ruc</option>
            <option value='Pasaporte'>Pasaporte</option>
          </select>
  
          <label htmlFor="name">Identificación: *</label>
          <input type="text" id="Identificación" name="Identificación"/>
  
          <label htmlFor="name">Nombres: *</label>
          <input type="text" id="name" name="name"/>
  
          <label htmlFor="name">Apellidos: *</label>
          <input type="text" id="Apellido" name="Apellido"/>
  
          <label htmlFor="name">Fecha de nacimiento: *</label>
  
  
          <label htmlFor="name">Correo personal: *</label>
          <input type="text" id="CorreoPer" name="ACorreoPer"/>
  
          <label htmlFor="name">correo Institucional: </label>
          <input type="text" id="CorreoInst" name="CorreoInst"/>
  
          <label htmlFor="name">Tipo de institución: </label>
  
  
          <label htmlFor="name">Institución: </label>
          <input type="text" id="TipoInst" name="TipoInst"/>
  
          <label htmlFor="name">Dirección: *</label>
          <input type="text" id="Dirección" name="Dirección"/>
  
          <label htmlFor="name">Celular: *</label>
          <input type="text" id="Ccelular" name="Celular"/>
  
          <label htmlFor="name">País: *</label>
  
  
          <label htmlFor="name">Provincia: </label>
          <input type="text" id="Provincia" name="Provincia"/>
          
          <label htmlFor="name">Ciudad: *</label>
          <input type="text" id="Ciudad" name="Ciudad"/>
  
          <label htmlFor="name">Código Postal: </label>
          <input type="text" id="CódigoPostal" name="CódigoPostal"/>
  
          <label htmlFor="name">Nivel de estudio: </label>
        </form>
  
      </div>
    )
  }
  
  export default Home 