// application general for all

const containerNumber = document.getElementById('container-number')    
let sec = 0
let min = 0
let hr = 0
let clearTime
let worningUser = document.getElementById('worning-user')

// configuraton general
function time() {
    sec++
    containerNumber.innerHTML = `${styleRell(hr)}:${styleRell(min)}:${styleRell(sec)}`

    if(sec === 60){
        min++
        sec = 0
        if(min === 60){
            hr++
            min = 0
            if(hr === 12) {
                hr = 0
            }   
        }
    }
}

// style number
function styleRell(number) {
    if(number < 10) {
        return ('0' + number)
    }else {
        return (number)
    }
}

// button start of time
function startTime() {
    clearTime = setInterval(time, 1000)
        worningUser.innerHTML = `Tempo iniciado!`
}

// button stop of time
function timeStop() {
    clearTime = clearInterval(clearTime)
        worningUser.innerHTML = `Tempo pausado! Minutos: ${styleRell(hr)}:${styleRell(min)}:${styleRell(sec)}`
}

// button stop of time
function resetTime() {
    clearTime = clearInterval(clearTime)
    sec = 0
    min = 0
    hr = 0
    containerNumber.innerHTML = `00:00:00`
    worningUser.innerHTML = `Tempo reiniciado!`
}

