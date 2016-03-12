var Home = {
        view: require('./views/HomeView.js'),
        controller: require('./controllers/HomeController.js')
    },
    About = {
        view: require('./views/AboutView.js')
    }

m.route.mode = 'pathname'

m.route(document.querySelector('body'), '/', {

    '/': Home,

    '/about': About

})
