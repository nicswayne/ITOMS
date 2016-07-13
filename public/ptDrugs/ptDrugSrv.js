angular.module( 'ITOMS' )
.service( 'ptDrugSrv', function( server, $http, $q ) {

	this.getAllPatDrugs = ( idArr ) => {
		let allResults = $q.defer;
		let resultArr = [];
		idArr.forEach( ( id ) => {
			return $http.get( `${ server }ptDrugs/${ id }` )
				.then( ( res ) => {
					resultArr.push( res.data );
					if ( resultArr.length === idArr.length ) {
						allResults.resolve( 'resultArr' );
					}
				} );
		} );
		return allResults.promise;
	};

	this.getPatDrugInfo = ( ptId, impId ) => {
		return $http.get( `${ server }ptDrugs/${ ptId }/${ impId }` )
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
} );
