const userName = prompt("Indichi il suo nome");
console.log(userName);

const gatsbyPartyInvite = ["Simone", "Joy", "Luca", "Raz", "Tommi"]
console.log(gatsbyPartyInvite);

let accessControl = false;

for (let i = 0; i < gatsbyPartyInvite.length; i++) {
    const element = gatsbyPartyInvite[i];

    if (element === userName){
        accessControl = true;
    }

    break;
    
}

if (accessControl) {
    console.log("prego, entri pure");
} else {
    console.log("spiacente, non può entrare");
}