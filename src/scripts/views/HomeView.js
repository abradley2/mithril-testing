var Navbar = require('../components/Navbar');

module.exports = function(ctrl, args){

    return m('div', [
        m(Navbar),
        m('h3', 'this is the home view'),
        m('a', {href: '/about', config: m.fn.pushState, replace: true}, 'about'),
        m('h5', ctrl.model.message() ),
        m('input', {
            type: 'text',
            value: ctrl.model.message(),
            onchange: m.withAttr('value', ctrl.model.message)
        })
    ])

}
