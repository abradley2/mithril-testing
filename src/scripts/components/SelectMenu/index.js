function ViewModel(selected){
    this.selected = m.prop(selected)
}

var SelectMenu = {

    controller: function(args){
        this.vm = new ViewModel(args.selected)
        this.onchange = args.onchange
    },

    view: function(){
        return m('select.select-menu', )
    }

}

module.exports = SelectMenu
