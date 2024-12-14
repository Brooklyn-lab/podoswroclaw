function toggleMenu() {
    const menu = document.getElementById('dropdownMenu'); 
    if (!menu) {
        console.error('Елемент з ID "dropdownMenu" не знайдено.');
        return;
    }
    menu.classList.toggle('show'); 
}


