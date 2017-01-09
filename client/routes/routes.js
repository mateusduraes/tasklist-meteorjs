FlowRouter.route('/', {
	action: () => {
		BlazeLayout.render('defaultTemplate', { 
			content: 'taskList' 
		});		
	}	
});

FlowRouter.route('/task/add', {
	action: () => {
		BlazeLayout.render('defaultTemplate', { 
			content: 'formTask' 
		});		
	}	
});

FlowRouter.route('/task/remove/:id', {
	action: () => {
		let id = FlowRouter.getParam('id');
		console.log(id);
		Tasks.remove({
			_id: id
		});
		FlowRouter.go('/');
	}	
});

FlowRouter.route('/task/edit/:id', {
	action: () => {
		BlazeLayout.render('defaultTemplate', {
			content: 'formTask'
		});
	}
});

FlowRouter.route('/about', {
	action: () => {
		BlazeLayout.render('defaultTemplate', {
			content: 'about'
		});
	}
});

