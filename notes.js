console.log('Starting notes.js')

const addNote =  (title, body) => {
    console.log('Adding note: ', title, body)
}

const getAll = () => {
    console.log('Getting all notes')
}

const read = (title) => {
    console.log(`Reading note with title ${title}`)
}

const remove = (title) => {
    console.log(`Remove note with title ${title}`)
}

module.exports = {
    addNote,
    getAll,
    read,
    remove
}