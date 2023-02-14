const Webamp = window.Webamp;
const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "Bracia Figo Fagot",
                title: "Harnaś z Puchy"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./music/BRACIA FIGO FAGOT - Harnaś z puchy.mp3",
        },
        {
            metaData: {
                artist: "Łukasz Szybka",
                title: "Wysłouchów 55/14 Kraków, Poland"
            },
            url: "./music/ulani theme song.mp3",
        },
        {
            metaData: {
                artist: "Big Cyc",
                title: "Mały Fiat"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            //s file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./music/Big Cyc- Mały Fiat.mp3",
        },
        {
            metaData: {
                artist: "Dj Antex",
                title: "Życie na filmie"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./music/Calibra 2.5 lost song - Living on Video Dj Antex mix.mp3",
        },
        {
            metaData: {
                artist: "Dj Pedofil",
                title: "Hajs trzeba rozjebać"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./music/dawid_jasper_hajs_trzeba_rozjeba_vox_edit_1285176391899062788.mp3",
        }, 
        {
            metaData: {
                artist: "Myszka",
                title: "Gdzie jest Dzieciak?"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./music/Myszka - Gdzie jest Dzieciak.mp3",
        },
        {
            metaData: {
                artist: "Semetary",
                title: "Królikowe Przebranie"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./music/SEMATARY & GHOST MOUNTAIN - BUNNY SUIT ＊＊OFFICIAL VIDEO＊＊.mp3",
        },
        {
            metaData: {
                artist: "Adam Pasewicz feat Julka Głowacka",
                title: "skeet"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./music/yung suree skeet feat julka głowacka (1).mp3",
        },
        
    ],
});

// Returns a promise indicating when it's done loading.
webamp.renderWhenReady(document.getElementById('app'));