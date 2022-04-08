
import Axios from 'axios';
import { User } from './User';

/**
 * Основной класс в котором хронятся все методы
 */
class API {
    /**
     * Создаем инстанс аксиоса
     * @type {import('axios').AxiosInstance}
     */
    instance = Axios.create({
        // Задем его конфиг
        baseURL: 'https://app.fakejson.com/' // урл относительно которого будут строится запросы
    });

    constructor() {
        // Добавлем контроллер в апи, передаем ему инстанс
        this.user = new User(this.instance);

        this.setInterceptors();
    }

    // Задаем интерсепторы
    setInterceptors() {
        // Для текущего инстанса задаем интерсептор респонса
        this.instance.interceptors.response.use((res) => {
            // Форматируем результат запроса как на удобно
            return { ...res.data, axios: res };
        })
    }
}

// Создаем экземпляр апи
const api = new API();

// Регистрируем его глобально
window.api = api

// Экспортируем, если хотим импортировать его в каждом файле
export default api;