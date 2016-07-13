angular.module( 'ITOMS' )
.service( 'referralSrv', function( $http, server ) {

	this.createNote = ( obj ) => {
		console.log( 'obj', obj );
		return $http.post( `${ server }refNotes`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.createReferral = ( obj ) => {
		return $http.post( `${ server }referrals`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.getReferrals = () => {
		return $http.get( `${ server }referrals` )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.getReferral = ( id ) => {
		return $http.get( `${ server }referrals/${ id.id }` )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.updateNote = ( id, obj ) => {
		return $http.put( `${ server }notes/${ id }`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.updateReferral = ( id, obj ) => {
		return $http.put( `${ server }referrals/${ id }`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};


} );
