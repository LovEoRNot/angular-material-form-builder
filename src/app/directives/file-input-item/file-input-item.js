(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('fileInputItem', FileInputItem);

  function FileInputItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/file-input-item/file-input-item.html',
      scope: {
        item: '='
      },
      controller: FileInputItemCtrl,
      controllerAs: 'FileInput',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function FileInputItemCtrl(Utils, $element) {
    this.Element = $element;

    Utils.extend(this.item, {
      config: {
        type: 'file'
      }
    });
  }

})(angular);
