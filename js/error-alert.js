const header = document.getElementById('header')

export function errorAlert() {
    header.classList.add('active')
            
    setTimeout( () => {
        header.classList.remove('active');
    }, "4000")
}