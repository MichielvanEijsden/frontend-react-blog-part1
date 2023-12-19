

function timeDate(dateString) {
    const DateTime = new Date(dateString)
    return DateTime.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}


export default timeDate