var login = prompt("Кто пришел?", "");

if (typeof (login) == "string") {
    if (login == "Админ") {
        var password = prompt("Пароль?", "");

        if (typeof (password) == "string") {
            if (password == "Чёрный Властелин") {
                alert("Добро пожаловать!");
            } else {
                alert("Пароль неверен");
            }
        } else {
            alert("Вход отменён");
        }
    } else {
        alert("Я вас не знаю");
    }
} else {
    alert("Вход отменён");
}