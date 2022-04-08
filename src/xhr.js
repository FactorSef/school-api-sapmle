/**
 * Простой метод выполнения get-запроса с помощью `XMLHTTPRequest`
 * @param {string} query текст поиска
 * @param {(res: object) => void} cb коллбэк
 */
export function test(query, cb) {
    // Создаем экземляр запроса
    const xhr = new XMLHttpRequest();

    // Указываем тип запроса, урл (кодируя запрос в utf) и другие параметры (асинхронность)
    xhr.open('GET', `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`, true);

    // Реализуем метод проверки состояния
    xhr.onreadystatechange = function (evt) {
        // Проверяем что запрос завершился
        // Также проверяем что запрос завершился успешно в статусах от 200 до 400
        if (this.readyState === XMLHttpRequest.DONE && this.status >= 100 && this.status < 400) {
            // Приводим результат к джейсону
            const json = JSON.parse(this.response);

            // Выполняем какие-то другие действия
            if (cb) {
                cb(json);
            }
        }
    }

    // Запускаем выполнение запроса
    xhr.send();
}

export function json(cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', `https://app.fakejson.com/q`, true);

    xhr.onreadystatechange = function (evt) {    
        if (this.readyState === 4 && this.status >= 100 && this.status < 400) {
            console.log(this.response);

            const json = JSON.parse(this.response);

            if (cb) {
                cb(json);
            }
        }
    }

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.send(JSON.stringify({
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
    }));
}
