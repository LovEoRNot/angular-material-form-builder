(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('dateInputView', DateInputView);

  /*@ngInject*/
  function DateInputView($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/date-input-item/date-input-view.html',
      scope: {
        formItem: '=',
        form: '='
      },
      controller: DateInputViewCtrl,
      controllerAs: 'DateInputView',
      bindToController: true,
      link: linker
    };

    function linker(scope, elem, attrs, ctrl) {

      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      $timeout(function() {
        ctrl.init();
      }, 50);
    }

    return directive;
  }

  /*@ngInject*/
  function DateInputViewCtrl(Utils) {
    this.Utils = Utils;
  }

  DateInputViewCtrl.prototype.init = function () {

    this.Utils.extend(this.formItem, {
      config: {}
    });
  };


})(angular);
