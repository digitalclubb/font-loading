# font-loading
Using FontFace API to lazy load in custom web fonts.

### Usage

* Include inline style tags with locations of font files - both woff2 and woff.

```
<style class="tmgfont" data-font-name="Austin News Deck Semibold" data-font-file-woff2="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Deck-Web-Semibold.woff2" data-font-file-woff="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Deck-Web-Semibold.woff"></style>
<style class="tmgfont" data-font-name="Austin News Deck Medium" data-font-file-woff2="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Deck-Web-Medium.woff2" data-font-file-woff="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Deck-Web-Medium.woff"></style>
<style class="tmgfont" data-font-name="Austin News Text Roman" data-font-file-woff2="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Text-Web-Roman.woff2" data-font-file-woff="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Text-Web-Roman.woff"></style>
<style class="tmgfont" data-font-name="Austin News Text Semibold" data-font-file-woff2="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Text-Web-Semibold.woff2" data-font-file-woff="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Austin-News-Text-Web-Semibold.woff"></style>
<style class="tmgfont" data-font-name="Telesans Text Regular" data-font-file-woff2="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Telesans-Text-Web-Regular.woff2" data-font-file-woff="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Telesans-Text-Web-Regular.woff"></style>
<style class="tmgfont" data-font-name="Marian Poster Roman" data-font-file-woff2="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Marian-Poster-Web-Roman.woff2" data-font-file-woff="/etc/designs/telegraph/core/clientlibs/tmgchannels/_base/fonts/Marian-Poster-Web-Roman.woff"></style>
```

* Styles must have a class of tmgfont
* Include JavaScript library on the page

### Concept

* Work out if browser supports woff2
* Work out if browser supports FontFace API
* If FontFace is supported then download right format and add to font-family.
* If FontFace is not supported then apply standard @font-face definition inside style block.
* Fonts are downloaded and applied when ready -flash of unstyled text but always visible.
