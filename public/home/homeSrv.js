angular.module( 'ITOMS' )
.service( 'homeSrv', function( server, $http ) {
	this.getInventory = function() {
		return $http.get( `${ server }inventory` )
		.then( ( resp ) => {
			return resp.data;
		} );
	};
	this.getRep = function( repId ) {
		return $http.get( `${ server }reps/${ repId }` )
		.then( ( res ) => {
			return res;
		} );
	};
} );
