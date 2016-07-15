angular.module( 'ITOMS' )
.service( 'ptImpSrv', function( server, $http ) {

	this.createPtImp = ( obj ) => {
		return $http.post( `${ server }ptImplants`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	},

	this.updatePtImp = ( obj ) => {
		return $http.put( `${ server }ptImplants/${ obj._id }` )
			.then( ( res ) => {
				return res.data;
			} );
	}

} );
