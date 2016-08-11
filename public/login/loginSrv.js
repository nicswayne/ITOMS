angular.module( 'ITOMS' )
.service( 'loginSrv', function( $http, $cookies, server ) {

	this.login = ( obj ) => {
		return $http.post( `${ server }login`, obj )
		.then( ( res ) => {
				res.data.isLoggedIn = true;
				res.data.password = "";
				res.data.username = "";
				res.data._id = "";
				res.data.name = "";
				$cookies.putObject( 'user', res.data );
				return;
			} );
	};

	this.isLoggedIn = () => {
		const user = $cookies.getObject( 'user' );
		if ( !user || !user.isLoggedIn ) {
			return false;
		}
		return true;
	};

	this.hasRight = ( right ) => {
		const user = $cookies.getObject( 'user' );
		if ( user[ right ] === true ) {
			return true;
		}
		alert( `you are not authorized to do that` );
		return false;
	};
	this.logout = () => {
		return $http.get( `${ server }logout` )
			.then( res => {
				return res.data;
			} )
	};

} );
