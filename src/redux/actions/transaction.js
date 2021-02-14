export const transactionData = (id, date, note, amount, user) => {
    return async dispacth => {
        dispacth({
            type: 'ADD_DATA',
            id: id,
            transactionDate: date,
            note: note,
            amount: amount,
            user: user
        })
    }
}

export const results = (data) => {
    return async dispacth => {
        dispacth({
            type: 'RESULTS',
            results: data
        })
    }
}