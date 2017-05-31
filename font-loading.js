(function(window, document) {
	var w = window,
		d = document;

	// Create new FontFace
	var createFont = function( el, name, url, format ) {
		var f = new FontFace( name, 'url('+ url +')', {} );
		f.load().then( function( loadedFont ){
			// Add to FontFaceSet to be seen by font-family
			d.fonts.add( loadedFont );
		});
	};

	// Non supported browsers get @font-face embed
	var embedFont = function( el, name, url, format ) {
		el.appendChild( d.createTextNode("\
			@font-face {\
			    font-family: '" + name + "';\
			    src: url('" + url + "') format('" + format + "');\
			}\
		") );
	};

	// Work out if browser can handle woff2
	var fontFormat = function() {
		if ( isFontFace() ) {
			var f = new w.FontFace( 't', 'url( "data:application/font-woff2;base64,d09GMgABAAAAAAIkAAoAAAAABVwAAAHcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgloKLEoBNgIkAxgLDgAEIAWDcgc1G7IEyB6SJAFID5YA3nAHC6h4+H7s27nP1kTyOoQkGuJWtNGIJKYznRI3VEL7IaHq985ZUuKryZKcAtJsi5eULwUybm9KzajBBhywZ5ZwoJNuwDX5C/xBjvz5DbsoNsvG1NGQiqp0NMLZ7JlnW+5MaM3HwcHheUQeiVokekHkn/FRdefvJaTp2PczN+I1Sc3k9VuX51Tb0Tqqf1deVXGdJsDOhz0/EffMOPOzHNH06pYkDDjs+P8fb/z/8n9Iq8ITzWywkP6PBMMN9L/O7vY2FNoTAkp5PpD6g1nV9WmyQnM5uPpAMHR2fe06jbfvzPriekVTQxC6lpKr43oDtRZfCATl5OVAUKykqwm9o8R/kg37cxa6eZikS7cjK4aIwoyh6jOFplhFrz2b833G3Jii9AjDUiAZ9AxZtxdEYV6imvRF0+0Nej3wu6nPZrTLh81AVcV3kmMVdQj6Qbe9qetzbuDZ7vXOlRrqooFSxCv6SfrDICA6rnHZXQPVcUHJYGcoqa3jVH7ATrjWBNYYkEqF3RFpVIl0q2JvMOJd7/TyjXHw2NyAuJpNaEbz8RTEVtCbSH7JrwQQOqwGl7sTUOtdBZIY2DKqKlvOmPvUxJaURAZZcviTT0SKHCXqzwc=" ) format( "woff2" )', {} );
			f.load()['catch']( function() {} );
			if ( f.status === 'loading' || f.status === 'loaded' ) {
				return 'woff2';
			}
		}
		return 'woff';
	};

	// Work out if browser supports FontFace interface
	var isFontFace = function(){
		return ( 'FontFace' in w );
	};

	var fonts = d.querySelectorAll( '.tmgfont' ),
		fontFormat = fontFormat(),
		fontAttr = 'data-font-file-' + fontFormat;
	for ( var i = 0, j = fonts.length; i < j; ++i ) {
		var font = fonts[i],
			fontName = font.getAttribute( 'data-font-name' ),
			fontURL = font.getAttribute( fontAttr );
		if ( isFontFace() ) {
			createFont( font, fontName, fontURL, fontFormat );
		} else {
			embedFont( font, fontName, fontURL, fontFormat );
		}
		
	}

})(window, document);