mxn.register('openmq', {
    Router: {
        init: function() {
        },

        addRoute: function (map, points, options){
            var me = this;
            MQA.withModule('directions', function() {
                var start = points['start'];
                var finish = points['finish'];
                /*Uses the MQA.TileMap.addOptimizedRoute function (added to the MQA.TileMap by the direction module)
                 passing in an array of location objects as the first parameter and object containing route options as the second.*/
                map.getMap().addOptimizedRoute([
                    {latLng: {lat: start.lat, lng: start.lon}},
                    {latLng: {lat: finish.lat, lng: finish.lon}}
                ]);

            });

        },

        routeCallback: function(){
        }

    }
});
