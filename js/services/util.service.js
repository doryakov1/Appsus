export const utilService = {
    getRandomInt,
    makeId,
    getDate
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getDate() {
    return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getYear() % 100} | ${new Date().getHours()}:${new Date().getMinutes()}`
}