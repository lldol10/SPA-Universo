function route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()

}

const routes = {
"/": "/pages/home.html",
"/exploracao": "/pages/exploracao.html",
"/universo": "/pages/universo.html",
}

function handle(){
const {pathname} = window.location
const route = routes[pathname]

fetch(route).then(data => data.text()).then(html => document.querySelector("#app").innerHTML = html)

}

handle()