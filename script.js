function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

console.log(gettime())


function addText()
{
    onclick="document.getElementById('history').innerHTML = document.getElementById('myName').value";
}

class message{

}

class messsenger {
    constructor(send,author) {
       this.author = name;
       this.send = message;
    }
    show_history()
    sayName = function() {
    return ` ${this.firstName} ${this.message}`
    }
 }



addText();
let messenger = new Messenger()
messenger.send('Артем', 'Первое сообщение')
messenger.send('Мария', 'Второе сообщение')
messenger.show_history()