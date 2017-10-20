(function (angular) {
    'use strict';

    angular.module('angularMaterialFormBuilder')
      .directive('tableView', tableView);

    /*@ngInject*/
    function tableView($timeout) {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/directives/table-item/table-view.html',
        scope: {
          formItem: '=',
          isPreview: '&',
          form: '='
        },
        controller: tableViewCtrl,
        controllerAs: 'TableView',
        bindToController: true,
        link: linker
      };

      function linker(scope, elem, attrs, ctrl) {

        //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
        $timeout(function () {
          ctrl.init();
        }, 50);
      }

      return directive;
    }

    /*@ngInject*/
    function tableViewCtrl($scope, Utils) {
      this.Scope = $scope;
      this.Utils = Utils;
      this.isValid = true;
    }

    tableViewCtrl.prototype.init = function () {
      this.Utils.extend(this.formItem, {
        config: {
          rows: [],
          columns: [],
          values: []             //new field
        }
      });

      this._updateValidity();
      if (this.isPreview()) {
        this._enableWatchers();
      }
    };

    tableViewCtrl.prototype._changeValue = function(row, col, val) {
      this.formItem.config.values[row.index][col.index] = val;

      this._updateValidity();
    };

    tableViewCtrl.prototype._updateValidity = function () {
      var valid = true;         
      if (this.formItem.config.required) {
        valid = false;
        for (var i = 0; i < this.formItem.config.values.length; i++) {
          for(var j = 0; j < this.formItem.config.values[i].length; j++) {
            if (this.formItem.config.values[i][j]) {
              valid = true;
              break;
            }
          }      
        }
      }

      this.isValid = valid;
      this.form.$setValidity('required', this.isValid);
    };

    tableViewCtrl.prototype._enableWatchers = function () {
      this.Scope.$watchGroup(['TableView.formItem.config.required',
                         'TableView.formItem.config.rows.length'], function (newVal) {
        if (newVal !== undefined) {
          this._updateValidity();
        }
      }.bind(this));
    };

    
  })
(angular);
