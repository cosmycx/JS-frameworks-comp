ngTodo.controller('ngTodoCtrl', function($scope){

	$scope.todos = [
		{val:'A cool new thing', completed: false},
		{val:'A cooler new thing', completed: true},
		{val:'A better new thing', completed: true},
		{val:'A cool new thing again', completed: false},
		{val:'A cool new thing, yes again', completed: false}
	]

	$scope.addNewTask = function(){
		
		$scope.todos.unshift({ completed: false, val: $scope.newTask });
		$scope.newTask = '';
	}

	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(el, index){
			return !el.completed;
		});
	}
	$scope.removeTask = function(index){
		$scope.todos.splice(index, 1)
	}
});//./controller