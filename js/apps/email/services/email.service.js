export default {
    query,
    getById,
    sendEmail,
    deleteEmail,
    isFavorEmail,
    isReadEmail
}

function query() {
    return Promise.resolve(emails);
}

function getById(emailId) {
    const email = emails.find(email => email.id === emailId);
    email.isRead = true;
    return Promise.resolve(email)
}

function deleteEmail(emailId) {
    const emailIdx = emails.findIndex(email => email.id === emailId);
    emails.splice(emailIdx, 1);
}

function sendEmail(email) {
    emails.unshift(email);
    return Promise.resolve(emails);
}

function isFavorEmail(email) {
    email.isFavor = !email.isFavor;
    console.log(email)
}

function isReadEmail(email) {
    if (email.isRead) email.isRead = false;
    else email.isRead = true;
    console.log(email)
}


let emails = [{
    "id": "OXeMG8wNskc",
    "subject": "metus hendrerit",
    "from": "metus@gmail.com",
    "message": `of type and scrambled 
    it to make a typ`,
    "date": '22/4/19 | 20:40',
    "isRead": false,
    "isDeleted": false,
    "isFavor": false,
}, {
    "id": "OXeTD15wNskc",
    "subject": "hey about",
    "from": "hendrerit433@gmail.com",
    "message": `o the leap into scrambled`,
    "date": '10/5/19 | 15:10',
    "isRead": true,
    "isDeleted": true,
    "isFavor": false,
}, {
    "id": "OXeTD433N5skc",
    "subject": "hello!",
    "from": "heaawwfhf43@gmail.com",
    "message": `o the leap into electronic`,
    "date": '22/5/19 | 22:00',
    "isRead": false,
    "isDeleted": false,
    "isFavor": true,
}, {
    "id": "hjg44353g1fdf",
    "subject": "leap into",
    "from": "electronic@gmail.com",
    "message": `o the leap into type`,
    "date": '5/5/19 | 08:30',
    "isRead": true,
    "isDeleted": false,
    "isFavor": true,
}, {
    "id": "ghhgh44fdgd",
    "subject": "hendrerit dfgse",
    "from": "hendrerit433@gmail.com",
    "message": `o the leap into leap `,
    "date": '13/3/19 | 13:35',
    "isRead": false,
    "isDeleted": false,
    "isFavor": false,
}, {
    "id": "OXeTD1wNskc11",
    "subject": "hendrerit dfgse",
    "from": "hendg65@gmail.com",
    "message": `o the leap into into`,
    "date": '23/5/19 | 17:55',
    "isRead": false,
    "isDeleted": false,
    "isFavor": false,
}, {
    "id": "OXeTD1wNskca31",
    "subject": "losda dgdse",
    "from": "hensdf5@gmail.com",
    "message": `leap the leap o o`,
    "date": '20/1/19 | 11:11',
    "isRead": false,
    "isDeleted": false,
    "isFavor": false,
}]