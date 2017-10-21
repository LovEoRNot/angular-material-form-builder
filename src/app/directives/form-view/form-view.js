(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('formView', FormView);

  function FormView() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/form-view/form-view.html',
      scope: {
        form: '='
      },
      controller: FormViewCtrl,
      controllerAs: 'FormView',
      bindToController: true,
      link: linker
    };

    function linker(scope, elem, attrs, ctrl) {
      ctrl.init();
    }

    return directive;
  }

  /*@ngInject*/
  function FormViewCtrl($scope) {
    this.Scope = $scope;
  }

  FormViewCtrl.prototype.init = function () {
  };

  FormViewCtrl.prototype.showActive = function(index) {
    for(var i = 0; i < this.form.items.length; i++) {
      this.form.items[i].isActive = false;
    }
    this.form.items[index].isActive = true;
  }

})(angular);
