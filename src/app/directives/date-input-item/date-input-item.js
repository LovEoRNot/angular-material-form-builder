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
      props: {
        title: '日期选择'
      },
      config: {
        type: 'date'
      }
    });
  }

})(angular);
