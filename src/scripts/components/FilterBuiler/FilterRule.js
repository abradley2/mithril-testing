var FilterRule = {

    controller: function(vm){
        this.vm = vm
    },

    view: function(ctrl){

        return m('div.filter-rule', [
            m('input', {
                type: 'text',
                value: ctrl.vm.field(),
                onchange: m.withAttr('value', ctrl.vm.field)
            }),
            m('select', {
                value: ctrl.vm.operator(),
                onchange: m.withAttr('operator', ctrl.vm.operator)
            }, [
                m('option', {value: 'EQ'}, 'EQ'),
                m('option', {value: 'EQ'}, 'NEQ')
            ]),
            m('input', {
                type: 'text',
                value: ctrl.vm.value(),
                onchange: m.withAttr('value', ctrl.vm.value)
            }),
            m('button', {
                onclick: ctrl.vm.remove.bind(ctrl.vm)
            }, 'REMOVE')
        ])
    }

}

module.exports = FilterRule
