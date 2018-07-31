import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe',
            dona: false
        }, {
            _id: 3,
            description: 'Consultas médica na Terça',
            done: false
        }]
    })
})

export default rootReducer