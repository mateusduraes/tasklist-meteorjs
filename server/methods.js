Meteor.methods({

	removeTask: function(id){
		Tasks.remove({
			_id: id,
			usuario: this.userId
		});	 
	},

	addTask: function(task){
		return Tasks.insert({
			nome: task.nome,
			prioridade: task.prioridade,
			data: new Date(),
			usuario: this.userId
		});
	},

	updateTask: function(id, task){
		return Tasks.update({_id: id}, {$set: task});
	}

});

