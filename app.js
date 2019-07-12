function tipcalculator(){
    var billAmount = document.getElementById("id").value;
    var service = document.getElementById("sid").value;
    var noOfPeople = document.getElementById("pid").value;
    var total = (billAmount * service) / noOfPeople;
    document.getElementById("totalTip").innerHTML = total;
}