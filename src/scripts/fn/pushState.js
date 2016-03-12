module.exports = function(element, isInitialized, context){
    if (isInitialized){

        return false

    } else {

        var href = element.getAttribute('href'),
            params = element.getAttribute('params'),
            replace = element.getAttribute('replace')

        if (replace === 'true') replace = true
        if (replace === 'false') replace = false

        element.onclick = function(event){
            event.preventDefault()
            m.route( href, params, replace )
        }

    }
}
