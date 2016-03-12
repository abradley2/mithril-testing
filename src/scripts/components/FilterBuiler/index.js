var FilterGroup = require('./FilterGroup'),
    FilterGroupVM = require('./FilterGroupVM')

function ViewModel(params){
    this.filter = new FilterGroupVM(params.filter)
}

_.extend(ViewModel.prototype, {

    toJSON: function(){
        var json = JSON.stringify(this.filter.toJS())
        console.log('json =',json)
        return json
    }

})

var FilterBuilder = {

    controller: function(args){
        this.vm = new ViewModel(args)
    },

    view: function(ctrl){

        return m('div.filter-builder', [

            m.component(FilterGroup, ctrl.vm.filter),
            m('button', {onclick: ctrl.vm.toJSON.bind(ctrl.vm)}, 'SAVE')

        ])
    }

}

module.exports = FilterBuilder
