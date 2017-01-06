Template.modalInsereTarefa.events({
	"submit #js-form-tarefa" : function(e){
		e.preventDefault();
		let $inputTarefaNome = $('#js-tarefa-nome');
		let nomeTarefa = $inputTarefaNome.val();
		let prioridadeTarefa = $('#js-tarefa-prioridade').val();


		Tasks.insert({
			nome: nomeTarefa,
			prioridade: prioridadeTarefa,
			data: new Date()
		});

		$('#js-form-tarefa')[0].reset();
		$inputTarefaNome.focus();
	}
});


