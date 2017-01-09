Template.formTask.events({

	"submit #js-form" : (e, template) => {
		e.preventDefault();
		const $form = $('#js-form');
		const $feedback_success = $('#js-feedback-success');
		const $feedback_error = $('#js-feedback-error');
		let task = $form.serializeJSON();
		const id = $('#js-input-id').val();
		if (id) {
			Meteor.call('updateTask', id, task, (error, result) => {
				if(error){
					console.log(error);
					$feedback_error.text(`Algum erro ao atualizar a tarefa "${task.nome}"`).fadeIn(400, function(){
						$(this).fadeOut(5000);
					});
				}
				if (result){
					$feedback_success.text(`A tarefa "${task.nome}" foi atualizada com sucesso`).fadeIn(400, function(){
						$(this).fadeOut(5000);
					});					
				}
			});	
		} else {
			Meteor.call('addTask', task, (error, result) => {
				if(error){
					console.log(error);
					$feedback_error.text(`Algum erro ao inserir a tarefa "${task.nome}"`).fadeIn(400, function(){
						$(this),fadeOut(5000);
					});
				}
				if (result){
					$feedback_success.text(`A tarefa "${task.nome}" foi adicionada com sucesso`).fadeIn(400, function(){
						$(this).fadeOut(5000);
					});
					$form[0].reset();
				}
			});
		}
	}

});

Template.formTask.helpers({

	task: () => {
		let id = FlowRouter.getParam('id');
		let result = Tasks.findOne(id);
		return (result != undefined)? result : {};
	}

});
