document.getElementById("addButton").onclick = function(){
    const btn = document.createElement("Button");
    btn.textContent = "動態按鈕";
    document.getElementById("container").appendChild(btn);
}