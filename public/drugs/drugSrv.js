angular.module( 'ITOMS' )
.service( 'drugSrv', function( $stateParams, $http, server ) {

	this.getAllDrugs = () => {
		return $http.get( `${ server }drugs` )
			.then( res => {
				res.data.forEach( elem => {
					if ( elem.onHand < elem.minOnHand ) {
						elem.needsReorder = true;
						elem.reorderAmount = ( elem.minOnHand - elem.onHand );
					};
				})
				return res.data;
			} );
	};

	this.getOneDrug = ( id ) => {
		return $http.get( `${ server }drugs/${ id.id }` )
			.then( res => {
				if ( res.data.onHand < res.data.minOnHand ) {
					res.data.needsReorder = true;
					res.data.reorderAmount = ( res.data.minOnHand - res.data.onHand );
				}
			return res.data;
			} );
	};

	this.updateDrug = ( obj, id ) => {
		obj.updated = {};
		obj.updated.date = new Date();
		return $http.put( `${ server }drugs/${ id.id }`, obj )
			.then( res => {
				return res.data;
			} );
	};

	this.createDrug = ( obj ) => {
		obj.updated = {};
		obj.updated.date = new Date();
		return $http.post( `${ server }drugs`, obj )
			.then( res => {
				console.log( 'res.data', res.data );
				return res.data;
			} );
	};

} );
