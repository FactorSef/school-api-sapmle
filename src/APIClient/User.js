
/**
 * Контроллер пользавателя
 */
export class User {
    /**
     * Конструктор класса
     * @param {import('axios').AxiosInstance} instance 
     */
    constructor (instance) {
        // задаем инстанс
        this.instance = instance
    }

    /**
     * Простой метод гет
     * @param {number} id это параметр
     * @returns 
     */
    getByBasic(id) {
        return this.instance.get(`users/getById?id=${id}`)
    }
    /**
     * Метод гет по сложнее
     * @param {number} id это параметр
     * @returns 
     */
    getById(id) {
        return this.instance.get('users/getById', {
            // Задаем query-параметры
            params: {
                id,
            }
        })
    }

    /**
     * Пример пост запроса
     * @param {object} params 
     * @returns 
     */
    getList(params) {
        return this.instance.post('users/getList', params)
    }
    delete(id) {
        return this.instance.delete('users/delete', {
            params: {
                id
            }
        })
    }
}