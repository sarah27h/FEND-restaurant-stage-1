// check if brower support SW
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function() {
        console.log('registration worked');
    }).catch(function() {
        console.log('registration failed :)');
    });
}
