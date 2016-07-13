angular.module( 'ITOMS' )
.service( 'patSrv', function( server, $http ) {

	this.getAllPatients = () => {
		return $http.get( `${ server }patients` )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.getPatient = ( id ) => {
		return $http.get( `${ server }patients/${ id.id }` )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.updatePatient = ( id, obj ) => {
		return $http.put( `${ server }patients/${ id }`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.createPatient = ( obj ) => {
		return $http.post( `${ server }patients`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	};

	this.getUser = ( info ) => {
		console.log( info );
		return $http.get( `${ server }users/${ info.implants.updated.user} ` )
			.then( ( res ) => {
				return res.data;
			} );
	};

} );
