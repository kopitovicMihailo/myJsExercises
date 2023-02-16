(function () {

    document.getElementById("addSqare").addEventListener("click", addSqares);
    document.getElementById("addNumber").addEventListener("click", addNumSqares);

    function addSqares() {
        let input = document.createElement ("input");
        input.id = "in-put";
        const removeEl = document.createElement ("button");
        const elDiv = document.createElement ("div");
        elDiv.appendChild(removeEl);
        elDiv.appendChild(input);
        document.getElementById("sqares-container").appendChild(elDiv);
        input.style.width = "30px";
        removeEl.style.width = "30px";
        removeEl.style.height = "20px";
        removeEl.style.marginLeft = "45%";
        removeEl.innerHTML = "-";
        elDiv.style.width = "30px";
       
        removeEl.addEventListener("click", removeSqare);

        function removeSqare() {
            elDiv.remove();
        }

    }

    function addNumSqares(){
        let numberOfSqares = document.getElementById("numOfSqares").value;
        let i = 0;
        while (i<numberOfSqares){
            addSqares();
            i+=1;
        }
    }
})();