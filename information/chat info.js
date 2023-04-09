//vanilla js

const searchURL = new URL(window.location);
searchURL.searchParams.set('location', 'Milwaukee');
searchURL.searchParams.set('user', 3);
searchURL.searchParams.set('type', 'support');

window.history.pushState({}, '', searchURL);

"----------------"

let locationFilter = '';
let userFilter = '';
let typeFilter = '';

function setQueryStringDefaults(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    
    if( urlParams.has('location') ){
        locationFilter = urlParams.get('location');
    }

    if( urlParams.has('user') ){
        userFilter = urlParams.get('user');
    }

    if( urlParams.has('type') ){
        typeFilter = urlParams.get('type');
    }
}



//https://upmostly.com/vue-js/get-data-from-an-api-in-a-vue-component-with-the-fetch-api

