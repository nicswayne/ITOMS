angular.module( 'ITOMS' )
.service( 'ptDrugSrv', function( server, $http ) {

	this.createPtDrug = ( obj ) => {
		return $http.post( `${ server }ptDrugs`, obj )
			.then( ( res ) => {
				return res.data;
			} );
	},

	this.updatePtDrug = ( obj ) => {
		return $http.put( `${ server }ptDrugs/${ obj._id }` )
			.then( ( res ) => {
				return res.data;
			} );
	}
} );
