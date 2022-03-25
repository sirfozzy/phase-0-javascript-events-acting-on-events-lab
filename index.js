const dodger = document.getElementById("dodger");
function moveDodgerLet() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLet();
    }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
});