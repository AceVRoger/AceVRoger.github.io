// make an array to hold onto number values
let dataList = [];

function addData() {
    // get users input
    let userInput = document.getElementById("userInput").value;

    //convert input into a number
    let number = parseFloat(userInput);

    // handling users input
    if (!isNaN(number)) {
        dataList.push(number);

        document.getElementById("dataDisplay").textContent = JSON.stringify(dataList);
    } else {
        alert("数じゃない。");
    }
}

function removeData() {
    // get users input
    let userInput = document.getElementById("userInput").value;

    // convert input into a number
    let number = parseFloat(userInput);

    // handling users input
    if (!isNaN(number)) {
        let dataMap = dataList.indexOf(number);

        if (dataMap !== -1) {
            dataList.splice(dataMap, 1);
            document.getElementById("dataDisplay").textContent = JSON.stringify(dataList);
        } else {
            alert('存在しない。');
        }
    } else {
        alert('数じゃない。')
    }
}

function meanCalc() {
    // first confirm if there is anything in the dataList
    if (dataList.length == 0) {
        document.getElementById("meanDisplay").textContent = '何もない';
        return;
    }

    // count up the total value in the array
    let total = 0;

    // use a FOR loop to iterate through the dataset, summing all values
    for (i = 0; i <dataList.length; i++) {
        total += dataList[i];
    }

    // take the total and divide by number of values used to find the mean
    let mean = total / dataList.length;

    // Display mean on page
    document.getElementById("meanDisplay").textContent = mean;
}
