(function() {
    "use strict";

    function showMenu() {
        var toggle1 = document.getElementById('toggle-menu')
        var menu = document.getElementById('menu')

        var caret = document.getElementById('caret')

        toggle1.addEventListener('click', () => {
            menu.classList.toggle('hide')
            caret.classList.toggle('rotate')
        })

    }
    showMenu()

    function showDetails() {
        var toggle2 = document.getElementById('card-expand')
        var dropdown = document.getElementById('dropdown')

        var expand_text = document.getElementById('expand-text')
        var caret = document.getElementById('caret2')

        toggle2.addEventListener('click', () => {
            dropdown.classList.toggle('hide')

            var text = expand_text.innerHTML
            expand_text.innerHTML = text == "Show Details" ? "Hide Details" : "Show Details"
            caret.classList.toggle('rotate')
        })


    }
    showDetails()


    function toggleSliders() {
        var toggle3 = document.getElementById('forwarding-toggle')
        var relay_forwarded = document.getElementById('relay-forwarded')
        var relay_blocked = document.getElementById('relay-blocked')

        var relay_forwarded_mobile = document.getElementById('relay-forwarded-mobile')
        var relay_blocked_mobile = document.getElementById('relay-blocked-mobile')

        var toggle_text = document.getElementById('toggle-text')

        // sets default to checked
        toggle3.checked = true

        toggle3.addEventListener('change', () => {
            relay_forwarded.classList.toggle('filter')
            relay_blocked.classList.toggle('filter')

            relay_forwarded_mobile.classList.toggle('filter')
            relay_blocked_mobile.classList.toggle('filter')

            var text = toggle_text.innerHTML
            toggle_text.innerHTML = text == "blocking" ? "forwarding" : "blocking"
        })
    }
    toggleSliders()

})();