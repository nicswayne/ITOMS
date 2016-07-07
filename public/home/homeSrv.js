angular.module( 'ITOMS' )
.service( 'homeSrv', function( server, $http ) {
	this.getInventory = function() {
		return $http.get( `${ server }inventory` )
		.then( ( resp ) => {
			return resp.data;
		} );
	};
	this.getRep = function( repId ) {
		console.log( `path ${ server }reps/${ repId }` );
		return $http.get( `${ server }reps/${ repId }` )
		.then( ( res ) => {
			console.log( `res data ${ res }` );
			return res;
		} );
	};
} );
