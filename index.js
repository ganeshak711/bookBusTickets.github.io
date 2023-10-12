const totalTrains = 10;
//array of javascript objects with all details
var trains = [
    { "from": "Banglore-Majestic", "to": "Hubli-main bus stand", "trainNumber": "BANG2HUB123", "totalSeats": "25", "availSeats": "5" },
    { "from": "Banglore-Majestic", "to": "Manglore-adarsh store", "trainNumber": "BANG2MANG123", "totalSeats": "27", "availSeats": "4" },
    { "from": "Banglore-Majestic", "to": "Belgavi-shastri circle", "trainNumber": "BANG2BELGif123", "totalSeats": "30", "availSeats": "9" },

    { "from": "Hubli-main bus stand", "to": "Banglore-Majestic", "trainNumber": "BANG2HUB123", "totalSeats": "39", "availSeats": "3" },
    { "from": "Hubli-main bus stand", "to": "Manglore-adarsh store", "trainNumber": "BANG2MANG123", "totalSeats": "28", "availSeats": "0" },
    { "from": "Hubli-main bus stand", "to": "Belgavi-shastri circle", "trainNumber": "BANG2BELGif123", "totalSeats": "35", "availSeats": "7" },

    { "from": "Manglore-adarsh store", "to": "Banglore-Majestic", "trainNumber": "BANG2HUB123", "totalSeats": "29", "availSeats": "12" },
    { "from": "Manglore-adarsh store", "to": "Hubli-main bus stand", "trainNumber": "BANG2MANG123", "totalSeats": "39", "availSeats": "19" },
    { "from": "Manglore-adarsh store", "to": "Belgavi-shastri circle", "trainNumber": "BANG2BELGif123", "totalSeats": "26", "availSeats": "3" },

    { "from": "Belgavi-shastri circle", "to": "Banglore-Majestic", "trainNumber": "BANG2HUB123", "totalSeats": "32", "availSeats": "5" },
    { "from": "Belgavi-shastri circle", "to": "Hubli-main bus stand", "trainNumber": "BANG2MANG123", "totalSeats": "39", "availSeats": "0" },
    { "from": "Belgavi-shastri circle", "to": "Manglore-adarsh store", "trainNumber": "BANG2BELGif123", "totalSeats": "36", "availSeats": "9" }
];
//fun() called from the search bus button
var searchBus = document.getElementById('search-bus');
searchBus.addEventListener('click', function () {
    var fromAddress = document.getElementById('from').value;//passing values from html
    var toAddress = document.getElementById('to').value;
    //if user didnt enter the address
    if (fromAddress == 'From' || toAddress == 'To') {
        document.getElementById('message').innerHTML = "Select the Address";
    }
    if (fromAddress == toAddress) {//checking whether from n to address r same or not?
        document.getElementById('message').innerHTML = "Boarding Point is same as the Exit Point";
    }
    for (var i = 0; i < totalTrains; i++) { //finding trains on array of objects using for
        var trainFrom = trains[i].from;
        var trainto = trains[i].to;
        var trainFound;
        //checking whether the train in there or not 
        if (trainFrom == fromAddress && trainto == toAddress) // both address should be same 
        {
            trainFound = 1;
        }
        //displays in terminal
        if (fromAddress != toAddress && fromAddress != 'From' && toAddress != 'To') {
            if (trainFound == 1) {
                document.getElementById('message').innerHTML = "Bus Found";
                document.getElementById("trainNumberLabel").innerHTML = "Bus Number : ";
                document.getElementById('trainNumber').innerHTML = trains[i].trainNumber;
                document.getElementById('totalSeatsLabel').innerHTML = 'Total Seats : ';
                document.getElementById('totalSeats').innerHTML = trains[i].totalSeats;
                document.getElementById('availSeatsLabel').innerHTML = 'Available Seats : ';
                document.getElementById('availSeats').innerHTML = trains[i].availSeats;
                break;
            }
            else {
                document.getElementById('message').innerHTML = "Bus not found";
            }
        }
    }
    if (trainFound == 1) {
        $('#book-ticket').toggle(300);
    }
    console.log("Total Trains : " + trains.length);
});


//code to genearte  random no from the given limit
// var rand = Math.random()*60;
// rand = Math.floor(rand);
// console.log(rand);