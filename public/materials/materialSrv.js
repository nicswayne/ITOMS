angular.module( 'ITOMS' )
.service( 'materialSrv', function( $stateParams, $http, server ) {

	this.getAllMaterials = () => {
		return $http.get( `${ server }materials` )
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

	this.getOneMaterial = ( id ) => {
		return $http.get( `${ server }materials/${ id.id }` )
			.then( res => {
				if ( res.data.onHand < res.data.minOnHand ) {
					res.data.needsReorder = true;
					res.data.reorderAmount = ( res.data.minOnHand - res.data.onHand );
				}
			return res.data;
			} );
	};

	this.updateMaterial = ( obj, id ) => {
		obj.updated = {};
		obj.updated.date = new Date();
		return $http.put( `${ server }materials/${ id.id }`, obj )
			.then( res => {
				return res.data;
			} );
	};

	this.createMaterial = ( obj ) => {
		obj.updated = {};
		obj.updated.date = new Date();
		return $http.post( `${ server }materials`, obj )
			.then( res => {
				console.log( 'res.data', res.data );
				return res.data;
			} );
	};

} );
