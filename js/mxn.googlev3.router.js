mxn.register('googlev3', {
Router: {
	init: function() {
        this.direction_service[this.api] = new google.maps.DirectionsService();
        this.direction_renderer[this.api] = new google.maps.DirectionsRenderer();
	},

    addRoute: function (map, points, options){
        var me = this;

        var start = points['start'];
        var finish = points['finish'];

        var request = {
            origin: new google.maps.LatLng(start.lat, start.lon),
            destination:  new google.maps.LatLng(finish.lat, finish.lon),
            travelMode: google.maps.TravelMode.DRIVING
        };

        var service = this.direction_service[this.api];
        var renderer = this.direction_renderer[this.api];

        renderer.setMap(map.getMap());

        service.route(request, function(response, status){
            me.routeCallback(response, status);
        })


    },

    routeCallback: function(response, status){
        if (status != google.maps.DirectionsStatus.OK) {
            console.error('Direction API error '+status);
        }
        else {
            var renderer = this.direction_renderer[this.api];
            renderer.setDirections(response);
        }
    }

}
});