angular.module( 'ITOMS' )
.controller( 'refCtrl', function( referralSrv, $scope, $stateParams, $state ) {

	getReferral = ( id ) => {
		if ( id.id === `create` ) {
			$scope.showUpdateForm = true;
			return;
		}
		referralSrv.getReferral( id )
			.then( ( response ) => {
				console.log( "oneRef", response );
				$scope.oneRef = response;
			} );
	};

	$scope.addLocation = ( obj ) => {
		$scope.oneRef.locations.push( obj );
		referralSrv.updateReferral( $stateParams.id, $scope.oneRef )
			.then( ( res ) => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
	};

	$scope.clear = () => {
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
		if ( !obj.date ) {
			obj.date = new Date();
		}
		obj.refId = $stateParams.id;
		referralSrv.createNote( obj )
			.then( res => {
				$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
			} );
	};

	$scope.date = new Date();

	$scope.getPatient = ( id ) => {
		$state.go( `pat`, { 'id': id } );
	};

	$scope.updateReferralInfo = ( obj ) => {
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
	};

	$scope.updateThisNote = ( id, obj ) => {
		referralSrv.updateNote( id, obj )
			.then( ( res ) => {
				$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
			} );
	};

	getReferral( $stateParams );
	$scope.showAddress = false;
	$scope.updateNote = false;

} );
