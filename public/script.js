const [eventDescription] = document.getElementsByName('event-name')

timeBtn.onclick = () => {

  const body = {event: eventDescription.value}

  axios.post('/timestamp', body)
}