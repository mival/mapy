(function(){

    /**
     * Initialise our provider. This function should only be called
     * from within mapstraction code, not exposed as part of the API.
     * @private
     */
    var init = function() {
        this.invoker.go('init');
    };

    /**
     * Router instantiates a router on Mapstraction map with some API choice
     * @name mxn.Router
     * @constructor
     * @param {String} api The API to use, currently only 'mapquest' and 'googlev3' is supported
     * @exports Router as mxn.Router
     */
    var Router = mxn.Router = function (element, api) {
        this.api = api;
        this.element = element;
        this.direction_service = {};
        this.direction_renderer = {};
//        this.callback = callback;
//        this.error_callback = error_callback || function(){};

        // set up our invoker for calling API methods
        this.invoker = new mxn.Invoker(this, 'Router', function(){ return this.api; });
        init.apply(this);
    };

    mxn.addProxyMethods(Router, [
        'addRoute',
        'routeCallback'
    ]);

//    /**
//     * Change the geocoding API in use
//     * @name mxn.Geocoder#swap
//     * @param {String} api The API to swap to
//     */
//    Router.prototype.swap = function(api) {
//        if (this.api == api) { return; }
//
//        this.api = api;
//        if (!this.geocoders.hasOwnProperty(this.api)) {
//            init.apply(this);
//        }
//    };

})();
