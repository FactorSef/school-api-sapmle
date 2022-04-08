/**
 * Простой метод выполнения get-запроса с помощью `FetchAPI`
 * @param {string} query текст поиска
 * @returns {Promise<object>}
 */
function test(query) {
    // Вызываем метод `fetch` и передаем в него url запроса
    return fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`)
        // Обрабатываем промис
        .then(function (res) {
            // Возвращаем результат форматированный в json
            return res.json()
        })
}
/**
 * Простой метод выполнения post-запроса с помощью `FetchAPI`
 * @returns {Promise<object>}
 */
function json() {
    // Вызываем метод `fetch` и передаем в него url запроса
    // Вторым параметром передаем ему конфигурацию и тело запроса (body)
    return fetch('https://app.fakejson.com/q', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "token": "YGuqHzVOSsdDj83Q5mCa8g",
            "data": {
                "id": "personNickname",
                "email": "internetEmail",
                "gender": "personGender",
                "last_login": {
                    "date_time": "dateTime|UNIX",
                    "ip4": "internetIP4"
                }
            }
        })
    }).then(res => res.json())  // Возвращаем результат форматированный в json
    
}

export default {
    test,
    json
}