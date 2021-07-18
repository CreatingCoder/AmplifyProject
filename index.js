document.getElementById("submit").onclick = function(){

    var fullName = document.getElementById("fullName").value;
    var org = document.getElementById("org").value;
    var telephone = document.getElementById("telephone").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var description = document.getElementById("description").value;

    //If else logic for radio check marks
    var urgency;
    
    if (document.getElementById('low').checked) {
        urgency = document.getElementById('low').value;
      }
    else if (document.getElementById('medium').checked) {
        urgency = document.getElementById('medium').value;
      }
    else if (document.getElementById('high').checked) {
        urgency = document.getElementById('high').value;
      }

    var adrLine1 = document.getElementById("adrLine1").value;
    var adrLine2 = document.getElementById("adrLine2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    //counts time in milliseconds from Jan 1, 1970 and up
    const date = new Date();
    var uniqueID = date.getTime();
    


    console.log("Full name is", fullName);
    console.log("Organization is", org);
    console.log("Telephone is", telephone);
    console.log("Email Address is", emailAddress);
    console.log("Description is", description);
    console.log("Urgency is", urgency);
    console.log("Address Line 1 is", adrLine1);
    console.log("Address Line 2 is", adrLine2);
    console.log("City is", city);
    console.log("State is", state);
    console.log("Zip is", zip);
    console.log("Complaint ID is", uniqueID);

}
