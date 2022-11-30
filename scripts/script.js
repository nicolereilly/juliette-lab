$(function () {

  let userData = ["nicole", "somethinglese"];
  let userJSON = {
    name: "nicole reilly",
    email: "nreilly@una.edu",
    phone: "000-000-0000",
    explain: "because im awesome!",
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
    $("#name").val(userJSON.name);
    $("#phone").val(userJSON.phone);
    $("#explain").val(userJSON.explain);
  });



  $("input[type=radio]").on("change", function () {

    let radioChoice = $("input[type=radio]:checked").val(); // A or B
    let sizeList = getSize(radioChoice);
    console.log(sizeList);

    let optionList;

    for(i = 0; i < sizeList.length; i++) {
      console.log(sizeList[i]);
      optionList += `<option value="${sizeList[i]} "> ${sizeList[i]}</option>`;
    }

    console.log(optionList);

    if (radioChoice === "A") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="${sizeList[0]} "> ${sizeList[0]}</option>`)
        .append(`<option value="${sizeList[1]} "> ${sizeList[1]}</option>`)
        .append(`<option value="${sizeList[2]} "> ${sizeList[2]}</option>`);
    } 
    else if (radioChoice === "B") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="${sizeList[0]} "> ${sizeList[0]}</option>`)
    } 
    else {
      alert("do default stuff");
    }


    
  });

  $('#submitForm').on("click", (e) => {
    e.preventDefault();

    console.log("clicked the button");
    let datastuff = `{$("input[type=radio]:checked").val();`
  });

});


function getSize(letter){
  let yesWordArray = ["small", "medium", "large"];
  let noWordArray = ["you cannot adopt Leo!"];
  console.log("in f/n getSize, here the parameter:", letter);


  if (letter === "A"){
    return yesWordArray;
  }
  else if (letter === "B") {
    return noWordArray;
  }
  else { 
    return ["please select a letter"];
  }

};
