
var mapNomes;

PopulaMapNomes();

PopulaSelectNomes();

//-----------------------------------------------------------------------------------------------------------------
function validacampos (){
	
	let campoNome = document.querySelector("#nome");
	let campoSobreNome = document.querySelector("#sobreNome");
	let campoIdade = document.querySelector("#idade");
	let campoDataDeNascimento = document.querySelector("#dataDeNascimento");
	let campoEmail = document.querySelector("#email");
	let camposVazios = `
                        Prenchas os campos \n
                      	${campoSobreNome.value.length < 1 ? 'sobreNome ':''}
                      	${campoIdade.value.length < 1 ? 'idade ':''}
                      	${campoDataDeNascimento.value.length < 1 ? 'dataDeNascimento ' : ''}
                      	${campoEmail.value.length < 1 ? 'email':''}
                     `;

  if (campoSobreNome.value.length < 1 || campoIdade.value.length < 1 || campoDataDeNascimento.value.length < 1 || campoEmail.value.length < 1) {
  	alert (camposVazios);
  	return false;
  }

  SetTemplate();

//-----------------------------------------------------------------------------------------------------------------
console.log("Tudo Certo");
}


//-----------------------------------------------------------------------------------------------------------------
function PopulaMapNomes() {

	let div = document.querySelector('#retorno');

	let _url = 'https://api-pacientes.herokuapp.com/pacientes';

	let param = {
	};

	$.ajax({

		url       : _url,
    async     : false,
		type      : 'get',
		data      : param,
		dataType	: 'json',

		beforeSend: function(){

		},

		success   : function(retorno){
			mapNomes = retorno;
		}

	})

}
//-----------------------------------------------------------------------------------------------------------------
function SetTemplate() {

let listaDeNomes = `          
<table class="table table-striped table-bordered table-hover">
        
            <thead>
              <tr>
                <th>
                  nome
                </th>
                <th>
                  peso
                </th>
                <th>
                  altura
                </th>
                <th>
                  gordura
                </th>
                <th>
                  imc
                </th>
              </tr>
            </thead>

            <tbody>
            ${mapNomes.map((elem) => 
            ` <tr>
                <td>
                  ${elem.nome}
                </td>
                <td>
                  ${elem.peso}
                </td>
                <td>
                  ${elem.altura}
                </td>
                <td>
                  ${elem.gordura}
                </td>
                <td>
                  ${elem.imc}
                </td>
              </tr>
`).join('')}
            </tbody>


          </table>
`;

	let div = document.querySelector('#retorno');
	div.innerHTML = listaDeNomes;

}
//-----------------------------------------------------------------------------------------------------------------
function PopulaSelectNomes() {

  let dropdown = $('#nome');

  dropdown.empty();

  dropdown.append('<option selected="true" disabled>Escolha um nome</option>');
  dropdown.prop('selectedIndex', 0);


    $.each(mapNomes, function (key, entry) {
      dropdown.append($('<option></option>').attr('value', entry.nome).text(entry.nome));
    });
 
}
//-----------------------------------------------------------------------------------------------------------------
$("#form_contato").validate({
       rules : {
             nome:{
                    required:true,
                    minlength:3
             },
             email:{
                    required:true
             },
             mensagem:{
                    required:true
             }                                 
       },
       messages:{
             nome:{
                    required:"Por favor, informe seu nome",
                    minlength:"O nome deve ter pelo menos 3 caracteres"
             },
             email:{
                    required:"É necessário informar um email"
             },
             mensagem:{
                    required:"A mensagem não pode ficar em branco"
             }      
       }
});
//Obtive no endereço: http://www.linhadecodigo.com.br/artigo/3706/jquery-validate-validacao-de-formularios-html.aspx
//Read more: http://www.linhadecodigo.com.br/artigo/3706/jquery-validate-validacao-de-formularios-html.aspx#ixzz5uvbA1TOw

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------





