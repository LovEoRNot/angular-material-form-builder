(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('inputItem', InputItem);

  function InputItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/input-item/input-item.html',
      scope: {
        item: '='
      },
      controller: InputItemCtrl,
      controllerAs: 'Input',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function InputItemCtrl(Utils, $element) {
    this.Element = $element;

    Utils.extend(this.item, {
      props: {
        title: '输入框'
      },
      config: {
        type: 'text'
      }
    });
  }

})(angular);
