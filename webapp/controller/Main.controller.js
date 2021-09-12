sap.ui.define([
    "./BaseController"
], function (
    BaseController
) {
    "use strict";

    return BaseController.extend("z.ext.lrn.controller.Main", {

        onInit : function () {
            
            console.log("onInit controller");

            this.getRouter().getRoute("main").attachMatched(this._onRouteMatch, this);
        },

        /**
         * handle route match event
         * @param {sap.ui.base.Event} oEvent 
         */
        _onRouteMatch: function(oEvent){

        },

        onBeforeRendering: function() { 
            console.log("onBeforeRendering controller");
        },

        onAfterRendering: function() { 
            console.log("onAfterRendering controller");
        },

        onExit: function() { 
            console.log("onExit controller");
        },

        onMyEventHandler: function(oEvent) { 
            console.log("onMyEventHandler controller");
        }


    });

});