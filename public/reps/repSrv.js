angular.module( 'ITOMS' )
.service( 'repSrv', function( server, $http ) {

	this.createNote = ( obj ) => {
		return $http.post( `${ server }repNotes`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.createRep = ( obj ) => {
		return $http.post( `${ server }reps`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

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
	this.updateNote = ( id, obj ) => {
		return $http.put( `${ server }notes/${ id }`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.updateRep = ( id, obj ) => {
		return $http.put( `${ server }reps/${ id }`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

} );
