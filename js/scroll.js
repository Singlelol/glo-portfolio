const links = document.querySelectorAll('.menu-list__link')
const linkNext = document.querySelector('.main__scroll')

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)

        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });            
        }
    })
})

linkNext.addEventListener('click', (event) => {
    event.preventDefault()

    const id = linkNext.getAttribute('href').substring(1)
    const section = document.getElementById(id)

    if (section) {
        seamless.scrollIntoView(section, {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });            
    }
})