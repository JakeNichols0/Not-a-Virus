let d = document.children;

console.log("I love kids");

spin(d);

function spin(e) {
    for (let i=0; i<e.length; i++) {
        let direct = "";
        switch(Math.floor(Math.random() * 4)) {
            case 0:
                direct = "normal";
                break;
            case 1:
                direct = "reverse";
                break;
            case 2:
                direct = "alternate";
                break;
            case 3:
                direct = "alternate-reverse";
        }
        e[i].style.animation = `spin ${Math.floor(Math.random()*51)+10}s linear 0s infinite ${direct}`;
        spin(e[i].children);
    }
}