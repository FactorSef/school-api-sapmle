// Импорт api
import api from './APIClient';

api.user.getById(1)
api.user.getById(4)
api.user.getById(3)
api.user.getById(2)
api.user.getById(6)


api.user.getList({
    pagesize: 100,
})

api.user.getList({
    pagesize: 10,
    filter: {},
})
