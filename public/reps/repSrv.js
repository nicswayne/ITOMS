angular.module( 'ITOMS' )
.service( 'repSrv', function( server, $http ) {

	this.getOneRep = function( id ) {
		return $http.get( `${ server }reps/${ id.id }` )
			.then( ( res ) => {
				// console.log( "res data = ", res.data)
				return res.data;
			} );
	};

	this.getReps = function() {
		return $http.get( `${ server }reps` )
			.then( ( res ) => {
				// console.log( "res data = ", res.data );
				return res.data;
			} );
	};

} );
