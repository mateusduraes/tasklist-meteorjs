Template.tasks.helpers({
	tasklist : function(){		
		let lista = Tasks.find();
		return (lista.count() > 0) ? lista : false;			
	}
});


Template.tasks.events({
	"click #js-remove-task" : function(e){
		Tasks.remove({_id : this._id});		
	}
});