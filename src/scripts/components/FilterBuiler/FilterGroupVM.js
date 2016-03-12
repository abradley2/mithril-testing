var FilterRuleVM = require('./FilterRuleVM')

function FilterGroupVM(params){
    var self = this
    this.parent = params.parent
    this.key = params.key
    this.operator = m.prop(
        params.operator ? params.operator : 'OR'
    )
    this.filters = m.prop(

        params.filters.map(function(filter){

            var args = _.extend(filter, {parent: self, key: _.uniqueId()})
            if (filter.filters) {
                return new FilterGroupVM(args)
            } else {
                return new FilterRuleVM(args)
            }

        })
    )
}

_.extend(FilterGroupVM.prototype, {

    removeFilter: function(id){
        this.filters(
            this.filters().filter(function(item){
                return item.id !== id
            })
        )
    },

    remove: function(id){
        this.parent.removeFilter(this.key)
    },

    toJS: function(){
        var js = {
            operator: this.operator(),
            filters: this.filters().map(function(filter){
                return filter.toJS()
            })
        }
        return js
    }

})

module.exports = FilterGroupVM
