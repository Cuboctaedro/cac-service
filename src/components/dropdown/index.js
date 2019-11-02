function toggleDropdown() {
    var dropdownButtons = document.querySelectorAll('.dropdown-button');
    dropdownButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let pressedButton = this;
            let expanded = pressedButton.getAttribute('aria-expanded') === 'true' || false;
            pressedButton.setAttribute('aria-expanded', !expanded);
            let currentMenu = pressedButton.nextElementSibling;
            let menus =[];
            dropdownButtons.forEach(function(item) {
                menus.push(item.nextElementSibling);
                if (item != pressedButton) {
                    item.setAttribute('aria-expanded', 'false');
                }
            })
            currentMenu.classList.toggle('hidden');
            currentMenu.classList.toggle('flex');
            menus.forEach(function(menu) {
                if (menu != currentMenu && !menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex');
                }
            })
        });
    })
}

export {toggleDropdown}
