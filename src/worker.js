export default () => {
    self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
        if (!e) return

        let data = e.data,
            newArray = []

        data.countries.forEach(country => {
            if (!country.name.toLowerCase().includes(data.keywords.toLowerCase())) return null

            newArray.push(country)
        })

        postMessage(newArray)
    })
}