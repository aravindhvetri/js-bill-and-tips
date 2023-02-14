let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let amount = document.querySelector("#inp1").value;
    let tips = document.querySelector("#inp2").value;
    //let rupee = document.querySelector("#inp3").value;
    //let total = document.querySelector("#inp4").value;
    let display = document.querySelector("#display");

    let calc = tips / 100 * amount;
    document.querySelector("#inp3").value = calc;

    let calc1 = Number(amount) + calc;
    document.querySelector("#inp4").value = calc1

})
