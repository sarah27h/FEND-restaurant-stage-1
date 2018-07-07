// check if brower support SW
if (navigator.serviceWorker) {
    //register SW
    navigator.serviceWorker.register('./sw.js').then( () => 
        console.log('registration succeed :)'))
        .catch( () =>
        console.log('registration failed :('));
}
