var app = angular.module('dinaraRecipies', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html'
    })
    .state('quicktasty', {
      url: '/quicktasty',
      templateUrl: 'partials/quicktasty.html'
    })
    .state('bakeries', {
      url: '/bakeries',
      templateUrl: 'partials/bakeries.html'
    })
    .state('desserts', {
      url: '/desserts',
      templateUrl: 'partials/desserts.html'
    })
    .state('salads', {
      url: '/salads',
      templateUrl: 'partials/salads.html'
    })
});


app.controller('TabController', function() {
  this.tab = 1;
  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
    
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});