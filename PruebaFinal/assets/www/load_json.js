	$(document).ready(function(){
$(document).bind('deviceready', function(){
//Phonegap ready
onDeviceReady();
});
	var output = $('#output');
	
		$.ajax({
url: 'http://pruebaapp.bugs3.com/mostrar_Datos.php',
		dataType: 'json',
		json: 'jsoncallback',
		timeout: 5000,

success: function(data, status){
			$.each(data, function(i,item){ 
				var contactos = '<h1>'+item.nombre+'</h1>'
				+ '<p>'+item.tel+'<br>'
				+ '<p>'+item.cel+'<br>'
				+ item.correo+'</p>';
				
				output.append(contactos);
});
},
error: function(){
	output.text('Se tuvo un error mientras se cargaban los datos.');
}
});
});
	
	
	
	