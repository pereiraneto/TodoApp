const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch(action){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        default: 
            return state
    }
}