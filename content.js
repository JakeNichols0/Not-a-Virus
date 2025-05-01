let d = document.children;

console.log("I love kids");

spin(d);

function spin(e) {
    for (let i=0; i<e.length; i++) {
        e[i].style.animation = `spin ${Math.floor(Math.random()*51)+10}s linear 0s infinite`;
        spin(e[i].children);
    }
}