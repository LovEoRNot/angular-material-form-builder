(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('matrixItem', matrixItem);

  function matrixItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/matrix-item/matrix-item.html',
      scope: {
        item: '='
      },
      controller: MatrixItemCtrl,
      controllerAs: 'Matrix',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function MatrixItemCtrl(Utils, $document) {
    this.RowContainer = angular.element($document[0].querySelector('.rowContainer'));
    this.ColumnContainer = angular.element($document[0].querySelector('.columnContainer'));

    Utils.extend(this.item, {
      props: {
        title: '矩阵'
      },
      config: {
        rows: [{
          value: '第1行'
        }],
        columns: [{
          value: '第1列'
        }]
      }
    });
  }

  MatrixItemCtrl.prototype.deleteRow = function(index) {
    this.item.config.rows.splice(index, 1);
  };

  MatrixItemCtrl.prototype.addRow = function() {
    this.item.config.rows.push({
      value: '第'+(+this.item.config.rows.length+1)+'行'
    });

    setTimeout(function() {
      var options = this.RowContainer.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

  MatrixItemCtrl.prototype.deleteColumn = function(index) {
    this.item.config.columns.splice(index, 1);
  };

  MatrixItemCtrl.prototype.addColumn = function() {
    this.item.config.columns.push({
      value: '第'+(+this.item.config.columns.length+1)+'列'
    });

    setTimeout(function() {
      var options = this.ColumnContainer.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

})(angular);
