window.addEventListener("load", function() {
  const button = document.getElementById("enter")

  button.addEventListener("click", function(event){
    event.preventDefault();

    let fav1 = document.getElementById("input1").value;
    let fav2 = document.getElementById("input2").value;
    let fav3 = document.getElementById("input3").value;

    const favArray = [fav1,fav2,fav3];
    
    const list = document.createElement("ul");
    body = document.querySelector("body");
    body.append(list);

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    li1.append(favArray[0])
    li2.append(favArray[2]);
    li3.append(favArray[1]);

    list.append(li1,li2,li3);
    

  });
});