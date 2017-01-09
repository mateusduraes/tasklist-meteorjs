Template.taskList.helpers({
	list: () => {
		let lista = Tasks.find();
		return (lista.count() > 0) ? lista : false; 
	},

	formataData: function(){
		return moment(this.data).format('DD/MM/YYYY');
	}
});

Template.taskList.events({
	"click #js-remove-task" : function (e, template){
		Meteor.call("removeTask", this._id);
	}	
});