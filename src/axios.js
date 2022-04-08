import { get, request, post } from 'axios';

/**
 * Простой пример гет запроса
 * @param {string} query текст поиска
 * @returns 
 */
function test(query) {
    // Просто передаем строку методу axios.get
    return get(`https://api.duckduckgo.com/?q=${query}&format=json`)
    // Создаем конфигурацию запроса
    return request({
        method: 'GET',
        url: `https://api.duckduckgo.com/?q=${query}&format=json`,
    })
}
/**
 * Простой пример post-запроса
 */
function json() {
    // Первым параметром передаем урл
    // Вторым параметром передаем тело запроса
    // Третим параметром мы можем изменить конфигурацию
    return post('https://app.fakejson.com/q', {
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
    }, {
        headers: {
            // Задаем дополнительные заголовки
            'Content-type': 'application/text'
        }
    })
}

export default {
    test,
    json
}