angular.module( 'ITOMS' )
.controller( 'refCtrl', function( referralSrv, $scope, $stateParams, $state, loginSrv ) {

	getReferral = ( id ) => {
		if ( id.id === `create` ) {
			$scope.showUpdateForm = true;
			return;
		}
		referralSrv.getReferral( id )
			.then( ( response ) => {
				$scope.oneRef = response;
			} );
	};

	$scope.addLocation = ( obj ) => {
		if ( loginSrv.hasRight( `updateReferral` ) ) {
			$scope.oneRef.locations.push( obj );
			referralSrv.updateReferral( $stateParams.id, $scope.oneRef )
				.then( ( res ) => {
					$state.go( $state.current, { 'id': res._id }, { reload: true } );
				} );
			}
	};

	$scope.canCreateNote = () => {
		if ( loginSrv.hasRight( `createNote` ) ) {
			$scope.noteShow = !$scope.noteShow;
		}
	};

	$scope.canUpdate = () => {
		if ( loginSrv.hasRight( `updateReferral` ) ) {
			$scope.showUpdateForm = !$scope.showUpdateForm;
		}
	};

	$scope.canUpdateAddress = () => {
		if ( loginSrv.hasRight( `updateReferral` ) ) {
			$scope.showAddress = !$scope.showAddress;
		}
	};

	$scope.canUpdateLoc = () => {
		if ( loginSrv.hasRight( `updateReferral` ) ) {
			$scope.addLoc = !$scope.addLoc;
		}
	};

	$scope.canUpdateNote = () => {
		if ( loginSrv.hasRight( `updateNote` ) ) {
			$scope.noteUpdateShow = !$scope.noteUpdateShow;
		}
	};

	$scope.clear = () => {
		if( $stateParams.id === `create` ) {
			$state.go( `referrals` );
			return;
		}
		$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
	};

	$scope.changeShowAddress = () => {
		$scope.showAddress = !$scope.showAddress;
	};

	$scope.changeUpdateNote = () => {
		$scope.updateNote = !$scope.updateNote;
		$scope.noteDetails = !$scope.noteDetails
	}

	$scope.createNote = ( obj ) => {
		if ( loginSrv.hasRight( `createNote` ) ) {
			if ( !obj.date ) {
				obj.date = new Date();
			}
			obj.refId = $stateParams.id;
			referralSrv.createNote( obj )
				.then( res => {
					$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
				} );
		}
	};

	$scope.date = new Date();

	$scope.getPatient = ( id ) => {
		$state.go( `pat`, { 'id': id } );
	};

	$scope.updateReferralInfo = ( obj ) => {
		if ( loginSrv.hasRight( `updateReferral` ) ) {
			if ( $stateParams.id === `create` ) {
				referralSrv.createReferral( obj )
				.then( res => {
					$state.go( $state.current, { 'id': res._id }, { reload: true } );
				} );
				return;
			}
			referralSrv.updateReferral( $stateParams.id, obj )
				.then( res => {
					$state.go( $state.current, { 'id': res._id }, { reload: true } );
				} );
		}
		return;
	};

	$scope.updateThisNote = ( id, obj ) => {
		if ( loginSrv.hasRight( `updateNote` ) ) {
			referralSrv.updateNote( id, obj )
				.then( ( res ) => {
					$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
				} );
		}
		return;
	};

	getReferral( $stateParams );
	$scope.showAddress = false;
	$scope.updateNote = false;

} );
