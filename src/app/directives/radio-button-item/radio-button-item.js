(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('radioButtonItem', RadioButton);

  function RadioButton() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/radio-button-item/radio-button-item.html',
      scope: {
        item: '='
      },
      controller: RadioButtonCtrl,
      controllerAs: 'RadioButton',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function RadioButtonCtrl(Utils, $element) {
    this.Element = $element;
    Utils.extend(this.item, {
      config: {},
      options: [
        {
          value: '选项1'
        },
        {
          value: '选项1'
        }
      ]
    });
  }

  RadioButtonCtrl.prototype.deleteOption = function (index) {
    this.item.options.splice(index, 1);
  };

  RadioButtonCtrl.prototype.addOption = function () {
    this.item.options.push({
      value: '选项'+(+this.item.options.length+1)
    });

    setTimeout(function() {
      var options = this.Element.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

})(angular);
