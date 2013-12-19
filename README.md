Mapstraction router
====
Mapstraction routing/direction provider

Example of usage
====
var router = new mxn.Router('googlev3');
var start = new mxn.LatLonPoint(39.74,-104.98);
var finish = new mxn.LatLonPoint(40.74,-105.98);
var route = router.addRoute(map, {'start': start, 'finish': finish})
