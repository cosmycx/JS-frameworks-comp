var ngTodo = angular.module('ngTodo', [])
	.config(function(){

	})

	.directive('completeColor', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				scope.$watch(attrs.completeColor, function(value){
					element.css('color', (value ? 'yellow': 'limegreen'));
				});
			}
		}
	})

	.filter('altCaps', function(){
		return function (input) {
			var charArray = input.split('');
			charArray = charArray.map(function(el, index){
				return index %2 == 0 ? el.toLowerCase(el) : el.toUpperCase(el);
			});
			return charArray.join('');
		}
	});
