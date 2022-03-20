//константы для табов
const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabDesign = document.querySelectorAll('.design-block__img')
const tabTitles = document.querySelectorAll('.design__title')

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}

//Табы переключатель
tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler

        changeContent(tabTitles, dataValue)
        changeContent(tabDesign, dataValue)
        changeContent(tabDescriptions, dataValue)
        changeContent(tabImages, dataValue)

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
    })
})
