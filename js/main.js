$mision= document.getElementById("mision");
$vision= document.getElementById("vision");
$valores= document.getElementById("valores");
$contenido= document.getElementById("contenido");
$fortaleza= document.getElementById("fortalezas");
$oportunidad= document.getElementById("oportunidad");
$debilidades= document.getElementById("devilidades");
$amenzas= document.getElementById("amenazas");
$contenido2= document.getElementById("contenido2");
$obj1= document.getElementById("obj1");
$obj2= document.getElementById("obj2");
$obj3= document.getElementById("obj3");
$contenido3= document.getElementById("contenido3");





$mision.addEventListener("click",e=>{
    $mision.classList.add('active');
    $vision.classList.remove('active');
    $valores.classList.remove('active');

    $contenido.innerHTML=`Somos una empresa que proporciona soluciones globales
                           en materia de seguridad, con personal altamente calificado 
                           para responder con inmediatez a cualquier emergencia,
                            brindando confianza y tranquilidad a nuestros clientes`;
})

$vision.addEventListener("click",e=>{
    $vision.classList.add('active');
    $mision.classList.remove('active');
    $valores.classList.remove('active');
    $contenido.innerHTML=`Posicionarnos como empresa líder en el área,
                           con presencia en todo el territorio nacional y a nivel regional,
                            utilizando tecnología de punta y personal capacitado para
                             garantizar tu seguridad en todo momento y en cualquier 
                             circunstancia.`;
})

$valores.addEventListener("click",e=>{
    $valores.classList.add('active');
    $mision.classList.remove('active');
    $vision.classList.remove('active');

    $contenido.innerHTML=`<div class="list-group">
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Confianza</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Excelencia</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Integridad</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Disciplina</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Puntualidad</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Trabajo en Equipo</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Innovación</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Profesionalismo</a>
  </div>`;
})
// botonees para el foda
$fortaleza.addEventListener("click",e=>{
    $fortaleza.classList.add('active');
    

    $contenido2.innerHTML=`<div class="list-group">
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Estructura organizacional competitiva;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Procesos administrativos confiables y efectivos;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Logística avanzada;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Constante capacitación al personal (preventivos y reactivas);</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Procesos de selección y reclutamiento efectivos.</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-success">Cobertura a nivel nacional.</a>
    </div>`;
})

$oportunidad.addEventListener("click",e=>{
    $oportunidad.classList.add('active');
    $fortaleza.classList.remove('active');
    

    $contenido2.innerHTML=`<div class="list-group">
    <a href="#!" class="list-group-item list-group-item-action list-group-item-primary">Clima de inseguridad en el país;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-primary">Sectores de alto riesgo aún no captados por otras empresas;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-primary">Tecnología de punta que permite una gestión más eficiente</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-primary">Desconfianza que tiene la población en los cuerpos de seguridad del Estado (policía nacional, fuerzas armadas, etc).</a>
  </div>`;
})

$debilidades.addEventListener("click",e=>{
    $debilidades.classList.add('active');
    $fortaleza.classList.remove('active');
    $oportunidad.classList.remove('active');
    

    $contenido2.innerHTML=`<div class="list-group">
    <a href="#!" class="list-group-item list-group-item-action list-group-item-warning">Rotación permanente del personal;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-warning">No existe promoción/mercadeo adecuado de la empresa;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-warning">Falta de financiamiento/flujo de efectivo insuficiente para las necesidades de la empresa;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-warning">Falta de apoyo de aliados comerciales para resguardo de logística.</a>
  </div>`;
})

$amenzas.addEventListener("click",e=>{
    $amenzas.classList.add('active');
    $fortaleza.classList.remove('active');
    $oportunidad.classList.remove('active');
    $debilidades.classList.remove('active');
    

    $contenido2.innerHTML=` <div class="list-group">
    <a href="#!" class="list-group-item list-group-item-action list-group-item-danger">Situación económico del país no incentiva inversión/gastos adicionales;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-danger">Empresas con mal servicio a bajos costos;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-danger">Reclutamiento externo permanente/migración </a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-danger">Atrasos administrativos por parte de los entes reguladores de seguridad;</a>
    <a href="#!" class="list-group-item list-group-item-action list-group-item-danger">Marca no reconocida en el mercado (recién lanzamiento)</a>
 
    </div>`;
    
});
// Botones para los Objetivos

$obj1.addEventListener("click",e=>{
  $obj1.classList.add('active');
  $obj2.classList.remove('active');
  $obj3.classList.remove('active');
  $contenido3.innerHTML=`Obtener utilidad neta de L. 800,000.00 en plazo de 5 años, que permita recuperar la inversión a los accionistas e incrementar el capital de PROTAL.`;
})

$obj2.addEventListener("click",e=>{
  $obj2.classList.add('active');
  $obj1.classList.remove('active');
  $obj3.classList.remove('active');
  $contenido3.innerHTML=`Diversificar los servicios de vigilancia y seguridad física, que permitan incrementar en un 10% el número de nuevos clientes en un plazo de 12 meses.`;
})

$obj3.addEventListener("click",e=>{
  $obj3.classList.add('active');
  $obj1.classList.remove('active');
  $obj2.classList.remove('active');
  $contenido3.innerHTML=`Lograr un crecimiento de tres clientes nuevos semanalmente, en un plazo de 6 meses. `;
})
