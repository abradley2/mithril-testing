var Navbar = require('../components/Navbar')

var FilterBuilder = require('../components/FilterBuiler')


var defaultFilter = {
    operator: 'AND',
    filters: [
        {
            field: 'field one',
            operator: 'EQ',
            value: 7
        },
        {
            field: 'field two',
            operator: 'NEQ',
            value: 'test value'
        },
        {
            operator: 'OR',
            filters: [
                {
                    field: 'field three',
                    operator: 'EQ',
                    value: 27
                }
            ]
        }
    ]
}

module.exports = function(ctrl, args){

    return m('div', [
        m(Navbar),
        m('h3', 'this is the about view'),
        m('a', {href: '/', config: m.fn.pushState, replace: true}, 'home'),
        m.component(FilterBuilder, {filter: defaultFilter})
    ])

}
