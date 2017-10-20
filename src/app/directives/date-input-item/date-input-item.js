(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('dateInputItem', DateInputItem);

  function DateInputItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/date-input-item/date-input-item.html',
      scope: {
        item: '='
      },
      controller: DateInputItemCtrl,
      controllerAs: 'DateInput',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function DateInputItemCtrl(Utils, $element) {
    this.Element = $element;

    Utils.extend(this.item, {
      config: {
        type: 'date'
      }
    });
  }

})(angular);
