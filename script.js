const theForm = document.getElementById("theForm");
const coinCount = document.getElementById("count");
const coinType = document.getElementById("type");
const putCoins = document.getElementById("submit");
const coinParty = document.getElementById("theParty")



theForm.addEventListener("submit", (event) => {

    let count = coinCount.value;
    let type = coinType.value;

    // I would suggest creating divs for the coins and then appending those to the page.
     // You can style the divs as circles and you can edit the innerText
    const addCoins = document.createElement("div");
    
    for (let index = 1; index = count.value ; index++){
        addCoins.innerText = type;
        coinParty.append(addCoins);
    }
    
    event.preventDefault();
})

/*
 for  loop for given number
 create div for number given and type
 innerText will be the type chosen in the dropdown
 */