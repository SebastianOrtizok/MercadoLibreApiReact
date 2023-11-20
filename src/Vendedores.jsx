import React from 'react';

function Vendedores({ onVendedorChange  }) {

    const handleVendedorChange = (event) => {
        const selectedVendedor = event.target.value;
        onVendedorChange(selectedVendedor);
      };

    return( 
        <div className="Vendedores_contendor">

		<span>Seleccione vendedor </span>
        <select name="vendedor" id="vendedor" onChange={handleVendedorChange}>
		<option value="ITECOM DIGITAL">ITECOM DIGITAL</option>
		<option value="Mercado Libre Electrónica">MERCADO LIBRE ELECTRÓNICA</option>
		<option value="ALTATIENDA">ALTATIENDA</option>
	<option value="IPOINT">IPOINT</option>
        <option value="MADISON_TECNO">MADISON_TECNO</option>
    <option value="TECNO.OFERTAS.">TECNO OFERTAS</option>
    <option value="PCREGISTRADAOK">PC REGISTRADA</option>
    <option value="NUEVA_ELECTRONICA">NUEVA_ELECTRONICA</option>
    <option value="MERCADOSITIO COM">MERCADOSITIO COM</option>
    <option value="PULPORTECH">PULPORTECH</option>
    <option value="PWIEVENTSSRL">PWIEVENTSSRL</option>
		<option value="ELECTRO-OUTLET">ELECTRO-OUTLET</option>
		<option value="DINATECHONLINE">DINATECHONLINE</option>
		<option value="OVERHARD">OVERHARD</option>
		<option value="URBAN.TECH">URBAN.TECH</option>
		<option value="BAIRESIT">BAIRESIT</option>
		<option value="GETBOX">GETBOX</option>
		<option value="JFCELECTRONICA">JFC ELECTRONICA</option>
		<option value="TECNOCELLBALVANERA.BA">
		TECNOCELLBALVANERA.BA</option>
		</select>
	</div>
    )
}

export default Vendedores