function ViewModel(params){
    this.parent = params.parent
    this.key = params.key
    this.field = m.prop(
        params.field ? params.field : 'default'
    )
    this.operator = m.prop(
        params.operator ? params.operator : 'EQ'
    )
    this.value = m.prop(
        params.value ? params.value : 'null'
    )
}

_.extend(ViewModel.prototype, {

    toJS: function(){
        return {
            field: this.field(),
            operator: this.operator(),
            value: this.value()
        }
    },

    remove: function(){
        this.parent.removeFilter(this.key)
    }

})

module.exports = ViewModel
