(function () {

    document.getElementById("addSqare").addEventListener("click", addSqares);

    function addSqares() {
        let input = document.createElement ("input");
        input.id = "in-put"
        const removeEl = document.createElement ("button");
        const elDiv = document.createElement ("div");
        elDiv.appendChild(input);
        elDiv.appendChild(removeEl);
        document.getElementById("sqares-container").appendChild(elDiv);
        document.getElementById("in-put").style.backgroundColor = "red"
    }



})();