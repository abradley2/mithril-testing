window._ = require('lodash')
window.m = require('mithril')

m.fn = require('./fn')

document.addEventListener('DOMContentLoaded',function(){

    require('./routes.js')

})
