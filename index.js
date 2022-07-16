console.log(`
Atividade 1: Maps`);

let get_admins = (users) => {
    let admins = [];
    for([user_name, level] of users){
        (level === "Admin") ? admins.push(user_name): null;
    }

    (admins.length) ? print_admins(admins) : console.log("Nenhum administrador cadastrado!");;
}

let print_admins = (admins) => {
    console.log(`Administradores cadastrados: ${admins.length}`);

    for(admin of admins){
        console.log(admin);
    }
}

const users = new Map();
users.set("Raul", "Admin");
users.set("Maria", "Admin");
users.set("Pedro", "user");

get_admins(users);

// 
console.log(`
Atividade 2: Sets`);

let arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

let verifica_unicos = (arr) => {
    let numbers = new Set(arr);

    for(value of arr){
        numbers.add(value);
    }

    imprime_set(numbers);
}

let imprime_set = (numbers) => {
    console.log("Valores únicos:");
    console.log(...numbers);
}

verifica_unicos(arr);