'use strict';
window.COURSE_DATA = {
 stages:['Nuevo prospecto','Contactado','Calificado','Visita agendada','Oferta','Negociación','Venta cerrada','No continuó'],
 channels:['WhatsApp','Facebook','Instagram','Página web','Llamada','Recomendación'],
 owners:['Asesor A','Asesora B','Asesor C'],
 initialDemo:[
  {id:'D01',name:'Prospecto 01',need:'Solicita información general',channel:'WhatsApp',stage:'Nuevo prospecto',value:18000,owner:'Asesor A',next:'Responder solicitud',date:'2026-11-02',history:[]},
  {id:'D02',name:'Prospecto 02',need:'Quiere comparar alternativas',channel:'Facebook',stage:'Contactado',value:22000,owner:'Asesora B',next:'Enviar información',date:'2026-11-03',history:[{at:'03/11/2026',text:'Primer contacto realizado'}]},
  {id:'D03',name:'Prospecto 03',need:'Confirma interés y presupuesto',channel:'Instagram',stage:'Calificado',value:34000,owner:'Asesor C',next:'Coordinar demostración',date:'2026-11-04',history:[]},
  {id:'D04',name:'Prospecto 04',need:'Solicita conocer el servicio',channel:'Página web',stage:'Visita agendada',value:25000,owner:'Asesor A',next:'Confirmar visita',date:'2026-11-05',history:[]},
  {id:'D05',name:'Prospecto 05',need:'Pide cotización formal',channel:'Llamada',stage:'Oferta',value:45000,owner:'Asesora B',next:'Dar seguimiento a propuesta',date:'2026-11-06',history:[]},
  {id:'D06',name:'Prospecto 06',need:'Revisa condiciones de contratación',channel:'Recomendación',stage:'Negociación',value:60000,owner:'Asesor C',next:'Aclarar condiciones',date:'2026-11-06',history:[]},
  {id:'D07',name:'Prospecto 07',need:'Contratación confirmada',channel:'WhatsApp',stage:'Venta cerrada',value:32000,owner:'Asesor A',next:'Coordinar entrega',date:'2026-11-07',history:[]},
  {id:'D08',name:'Prospecto 08',need:'Desistió por razones internas',channel:'Facebook',stage:'No continuó',value:15000,owner:'Asesora B',next:'Registrar motivo de pérdida',date:'2026-11-07',history:[]},
  {id:'D09',name:'Prospecto 09',need:'Consulta por primera vez',channel:'Instagram',stage:'Nuevo prospecto',value:12000,owner:'Asesor C',next:'Contactar',date:'2026-11-08',history:[]},
  {id:'D10',name:'Prospecto 10',need:'Solicita información detallada',channel:'Página web',stage:'Contactado',value:19000,owner:'Asesor A',next:'Hacer llamada de exploración',date:'2026-11-08',history:[]},
  {id:'D11',name:'Prospecto 11',need:'Expresa necesidad concreta',channel:'Recomendación',stage:'Calificado',value:28000,owner:'Asesora B',next:'Preparar opciones',date:'2026-11-09',history:[]},
  {id:'D12',name:'Prospecto 12',need:'No tiene disponibilidad',channel:'Llamada',stage:'No continuó',value:16000,owner:'Asesor C',next:'Cerrar registro con motivo',date:'2026-11-09',history:[]},
  {id:'D13',name:'Prospecto 13',need:'Cotización en evaluación',channel:'Facebook',stage:'Oferta',value:40000,owner:'Asesor A',next:'Preguntar dudas sobre oferta',date:'2026-11-10',history:[]},
  {id:'D14',name:'Prospecto 14',need:'Contratación confirmada',channel:'WhatsApp',stage:'Venta cerrada',value:27000,owner:'Asesora B',next:'Entregar documentación',date:'2026-11-10',history:[]}
 ]
};
