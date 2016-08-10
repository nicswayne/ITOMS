angular.module( 'ITOMS' )
.service( 'loginSrv', function( $http, $cookies, server ) {

	this.login = ( obj ) => {
		return $http.post( `${ server }login`, obj )
		.then( ( res ) => {
				if ( res.data.username === obj.username ) {
					res.data.isLoggedIn = true;
					$cookies.putObject( 'user', res.data );
					return res.data;
				}
				return `incorrect Username or Password`;
			} );
	};

	this.isLoggedIn = () => {
		const user = $cookies.getObject( 'user' );
		if ( user.isLoggedIn ) {
			return true;
		}
		return false;
	};
	this.hasRight = ( right ) => {
		const user = $cookies.getObject( 'user' );
		if ( user[ right ] === true ) {
			return true;
		}
		alert( `you are not authorized to do that` );
		return false;
	};

} );
