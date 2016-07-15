angular.module( 'ITOMS' )
.controller( 'repInfoCtrl', function( $scope, repSrv, $stateParams, $state, loginSrv, impSrv, drugSrv, materialSrv ) {

	getRep = ( id ) => {
		if ( id.id === `create` ) {
			$scope.showUpdateForm = true;
			return;
		}
		repSrv.getOneRep( id )
			.then( ( res ) => {	
				$scope.implantShow = res.implants.length !== 0;
				$scope.drugShow = res.drugs.length !== 0;
				$scope.materialShow = res.materials.length !== 0;
				$scope.rep = res;
				console.log( 'rep', res );
			}
		);
	 };

	getRep( $stateParams );

	$scope.addExistingDrug = () => {
		if ( loginSrv.hasRight( `updateRep` ) ) {
			$scope.showDrugs = !$scope.showDrugs;
			drugSrv.getAllDrugs()
				.then( ( res ) => {
					$scope.drugOptions = res;
				} );
		}
	};

	$scope.addExistingImp = () => {
		if ( loginSrv.hasRight( `updateRep` ) ) {
			$scope.showImps = !$scope.showImps;
			impSrv.getAllImplants()
				.then( ( res ) => {
					$scope.implantOptions = res;
				} );
		}
	};

	$scope.addExistingMat = () => {
		if ( loginSrv.hasRight( `updateRep` ) ) {
			$scope.showMats = !$scope.showMats;
			materialSrv.getAllMaterials()
				.then( ( res ) => {
					$scope.matOptions = res;
				} );
		}
	};

	$scope.canCreateNote = () => {
		if ( loginSrv.hasRight( `createNote` ) ) {
			$scope.noteShow = !$scope.noteShow;
		}
	};

	$scope.canUpdate = () => {
		if ( loginSrv.hasRight( `updateRep` ) ) {
			$scope.showUpdateForm = !$scope.showUpdateForm;
		}
	};

	$scope.canUpdateNote = () => {
		if ( loginSrv.hasRight( `updateNote` ) ) {
			$scope.noteUpdateShow = !$scope.noteUpdateShow;
		}
	};

	$scope.clear = () => {
		if( $stateParams.id === `create` ) {
			$state.go( `reps` );
			return;
		}
		$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
	};

	$scope.reorderNeeded = function( item ) {
		return item.onHand < item.minOnHand;
	};

	$scope.amountToReorder = function( item ) {
		return item.minOnHand - item.onHand;
	};

	$scope.updateRepInfo = ( obj ) => {
		if ( loginSrv.hasRight( `updateRep` ) ) {
			if ( $stateParams.id === `create` ) {
				repSrv.createRep( obj )
				.then( res => {
					$state.go( $state.current, { 'id': res._id }, { reload: true } );
				} );
				return;
			}
			if ( obj.companies ) {
				obj.companies = obj.companies.split( ', ' );
				$scope.rep.companies.map( ( name ) => {
					obj.companies.unshift( name );
				} );
			}
			if ( obj.implants ) {
				obj.implants = [ obj.implants ];
				$scope.rep.implants.forEach( val => {
					obj.implants.push( val );
				} );
			}
			if ( obj.drugs ) {
				obj.drugs = [ obj.drugs ];
				$scope.rep.drugs.forEach( val => {
					obj.drugs.push( val );
				} );
			}
			if ( obj.materials ) {
				obj.materials = [ obj.materials ];
				$scope.rep.materials.forEach( val => {
					obj.materials.push( val );
				} );
			}
			repSrv.updateRep( $stateParams.id, obj )
				.then( res => {
					$state.go( $state.current, { 'id': res._id }, { reload: true } );
				} );
		}
		return;
	};


} );
