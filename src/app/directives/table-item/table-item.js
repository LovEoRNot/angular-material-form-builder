(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('tableItem', tableItem);

  function tableItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/table-item/table-item.html',
      scope: {
        item: '='
      },
      controller: tableItemCtrl,
      controllerAs: 'Table',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function tableItemCtrl(Utils, $document) {
    this.RowContainer = angular.element($document[0].querySelector('.rowContainer'));
    this.ColumnContainer = angular.element($document[0].querySelector('.columnContainer'));

    Utils.extend(this.item, {
      props: {
        title: '表格'
      },
      config: {
        rows: [{
          index: 0,
          value: '第1行'
        }],
        columns: [{
          index: 0,
          value: '第1列'
        }],
        values: [[]]   //格式：{row: 0, col: 0, value: ''}
      }
    });
  }

  tableItemCtrl.prototype.deleteRow = function(index) {
    this.item.config.rows.splice(index, 1);
    
    this.item.config.rows.map(function(row) {
      if(row.index > index) {
        row.index--;
      }
    });

    this.item.config.values.splice(index, 1);
  };

  tableItemCtrl.prototype.addRow = function() {
    this.item.config.rows.push({
      index: this.item.config.rows.length,
      value: '第'+(+this.item.config.rows.length+1)+'行'
    });

    this.item.config.values.push(['']);

    setTimeout(function() {
      var options = this.RowContainer.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

  tableItemCtrl.prototype.deleteColumn = function(index) {
    this.item.config.columns.splice(index, 1);

    this.item.config.columns.map(function(column) {
      if(column.index > index) {
        column.index--;
      }
    });

    for(var i = 0; i < this.item.config.values.length; i++) {
      this.item.config.values[i].splice(index, 1);
    }
    
  };

  tableItemCtrl.prototype.addColumn = function() {
    this.item.config.columns.push({
      index: this.item.config.columns.length,
      value: '第'+(+this.item.config.columns.length+1)+'列'
    });

    setTimeout(function() {
      var options = this.ColumnContainer.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

})(angular);
