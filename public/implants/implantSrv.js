angular.module( 'ITOMS' )
.service( 'impSrv', function( $stateParams, $http, server ) {

	this.getAllImplants = () => {
		return $http.get( `${ server }implants` )
			.then( res => {
				res.data.forEach( elem => {
					if ( elem.onHand < elem.minOnHand ) {
						elem.needsReorder = true;
						elem.reorderAmount = ( elem.minOnHand - elem.onHand );
					}
				} );
				return res.data;
			} );
	};

	this.getOneImplant = ( id ) => {
		return $http.get( `${ server }implants/${ id.id }` )
			.then( res => {
				if ( res.data.onHand < res.data.minOnHand ) {
					res.data.needsReorder = true;
					res.data.reorderAmount = ( res.data.minOnHand - res.data.onHand );
				}
				return res.data;
			} );
	};

	this.updateImplant = ( obj, id ) => {
		obj.updated = {};
		obj.updated.date = new Date();
		return $http.put( `${ server }implants/${ id.id }`, obj )
			.then( res => {
				return res.data;
			} );
	};

	this.createImplant = ( obj ) => {
		obj.updated = {};
		obj.updated.date = new Date();
		return $http.post( `${ server }implants`, obj )
			.then( res => {
				return res.data;
			} );
	};

} );
