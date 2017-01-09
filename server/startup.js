Meteor.startup(function(){

	Meteor.publish('tasks', function(){
		return Tasks.find({ usuario: this.userId });
	});

})