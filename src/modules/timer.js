export const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')
  let idInteval

  const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime()
      let dateNow = new Date().getTime()
      let timeRemaining = (dateStop - dateNow) / 1000
      let hours
      let minutes
      let seconds
      if (timeRemaining > 0) {
            hours = Math.floor(timeRemaining / 60 / 60)
            minutes = Math.floor(timeRemaining / 60  % 60)
            seconds = Math.floor (timeRemaining % 60)
      } else {
            hours = '00'
            minutes = '00'
            seconds = '00'
      }

      return { timeRemaining, hours, minutes, seconds }
  }

  const updateClock = () => {
      let getTime = getTimeRemaining()
      timerHours.textContent = getTime.hours < 10 && getTime.hours > 0 ?  '0' + getTime.hours : getTime.hours
      timerMinutes.textContent = getTime.minutes < 10 && getTime.hours > 0 ?  '0' + getTime.minutes : getTime.minutes
      timerSeconds.textContent = getTime.seconds < 10 && getTime.hours > 0 ? '0' + getTime.seconds : getTime.seconds  
      
      if (getTime.timeRemaining <= 0) {
          // setTimeout(updateClock, 1000) //при раскомментировании все равно было через секунду время
          clearInterval(idInteval)
      } 
  }
  
  updateClock()
  idInteval = setInterval(updateClock, 1000)
}