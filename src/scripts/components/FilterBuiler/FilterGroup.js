var FilterRule = require('./FilterRule'),
    FilterRuleVM = require('./FilterRuleVM'),
    FilterGroupVM = require('./FilterGroupVM')

var FilterGroup = {

    controller: function(vm){
        this.vm = vm
    },

    view: function(ctrl){

        return m('div.filter-group', [

            m('select', {
                value: ctrl.vm.operator(),
                onchange: m.withAttr('value', ctrl.vm.operator)
            },[
                m('option', {value: 'OR'}, 'OR'),
                m('option', {value: 'AND'}, 'AND')
            ]),

            ctrl.vm.filters().map( (function(filter){

                if (filter.filters){
                    return m.component( FilterGroup, filter )
                } else {
                    return m.component( FilterRule, filter )
                }

            }).bind(this) ),

            (function(){
                if (this.parent)
                    return m('button', {onclick: this.vm.remove}, 'REMOVE')
            }).call(this)

        ])
    }

}

module.exports = FilterGroup
