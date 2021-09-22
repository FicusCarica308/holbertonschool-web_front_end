function changeMode (size, weight, transform, background, color) {
    return function () {
        const elements = document.getElementsByTagName("body");
        for (one of elements) {
            one.style.fontSize = size + "px";
            one.style.fontWeight = weight;
            one.style.textTransform = transform;
            one.style.backgroundColor = background;
            one.style.color = color;
        }
    }
}

function main () {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    /* paragraph tag */
    let p_tag = document.createElement("p");
    p_tag.textContent = "Welcome Holberton!";
    document.body.append(p_tag);

    /* Spooky mode button */
    let spookyM_btn = document.createElement("button");
    spookyM_btn.textContent = "Spooky";
    spookyM_btn.id = "spookyM_btn";
    document.body.append(spookyM_btn);

    /* Dark mode button */
    let darkM_btn = document.createElement("button");
    darkM_btn.textContent = "Dark mode";
    darkM_btn.id = "darkM_btn";
    document.body.append(darkM_btn);

    /* scream mode button */
    let screamM_btn = document.createElement("button");
    screamM_btn.textContent = "Scream mode";
    screamM_btn.id = "screamM_btn";
    document.body.append(screamM_btn);

    /* Event handlers */
    document.getElementById('spookyM_btn').onclick = function () {
        spooky();
    }
    document.getElementById('darkM_btn').onclick = function () {
        darkMode();
    }
    document.getElementById('screamM_btn').onclick = function () {
        screamMode();
    }
}

main();