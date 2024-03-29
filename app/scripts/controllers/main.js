'use strict';

/**
 * @ngdoc function
 * @name reusableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reusableApp
 */

angular.module('reusableApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');
    localStorage.clear();
    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });