const timerBlock = document.querySelector('.timer__time')
const deadline = '31 march 2022'

let interval 

const updateClock = () => {
    const date = new Date().getTime()
    const dateDeadline = new Date(deadline).getTime()
    const timeRemaining = (dateDeadline - date) / 1000

    const hours = Math.floor((timeRemaining / 60 / 60) % 24)
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const seconds = Math.floor(timeRemaining % 60)
    const days = Math.floor(timeRemaining / 60 / 60 / 24)

    let fDays

    if (days === 0) {
        fDays = ''
    } else if (days === 1) {
        fDays = days + ' день '
    } else if (days <= 4) {
        fDays = days + ' дня '
    } else {
        fDays = days + ' дней '
    }

    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds
    //const fDays = days < 4 ? days + ' дня ' : days + ' дней '

    timerBlock.textContent = `${fDays}${fHours}:${fMinutes}:${fSeconds}`

    if (timeRemaining <= 0 ) {
        clearInterval(interval)
        timerBlock.textContent = `00:00:00`
    }
}

updateClock()

interval = setInterval(updateClock, 500)
