(function() {
    "use strict";

    function showMenu() {
        var toggle1 = document.getElementById('toggle-menu')
        var menu = document.getElementById('menu')

        toggle1.addEventListener('click', () => {
            menu.classList.toggle('hide')
        })

    }
    showMenu()

    function showDetails() {
        var toggle2 = document.getElementById('card-expand')
        var dropdown = document.getElementById('dropdown')

        toggle2.addEventListener('click', () => {
            dropdown.classList.toggle('hide')
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

            text = toggle_text.innerHTML
            toggle_text.innerHTML = text == "blocking" ? "forwarding" : "blocking"
        })
    }
    toggleSliders()

})();