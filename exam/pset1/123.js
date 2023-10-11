function parseScores(scoresString) {
        // Your code here
        
        var inString = scoresString.split(" ");
        return inString;
        }
        
        function buildDistributionArray(scoresArray) {
        // Your code here
        var x = 0;
        var distributionArray = new Array(5);
        distributionArray[0] = 0;
        distributionArray[1] = 0;
        distributionArray[2] = 0;
        distributionArray[3] = 0;
        distributionArray[4] = 0;
        
        while (x < scoresArray.length) {
        if (scoresArray[x] >= 90) {
        distributionArray[0]++
        }
        if (scoresArray[x] >= 80 && scoresArray[x] <=89) {
        distributionArray[1]++
        }
        if (scoresArray[x] >= 70 && scoresArray[x] <=79) {
        distributionArray[2]++
        }
        if (scoresArray[x] >= 60 && scoresArray[x] <=69) {
        distributionArray[3]++
        }
        if (scoresArray[x] <= 59) {
        distributionArray[4]++
        }
        x++;
        }
        return distributionArray;
        }
        
        function setTableContent(userInput) {
        var heightArray;
        var parsedScores = parseScores(userInput);
        var buildArray = buildDistributionArray(parsedScores);
        var myTable = document.getElementById("distributionTable");
        
        for (x = 0; x < 5; x++) {
        heightArray = (buildArray[x] * 10) + "px";
        document.getElementById("distributionTable").style.height = heightArray[x];
        
        }
        
        var row = myTable.insertRow(0);
        var row2 = myTable.insertRow(1);
        var row3 = myTable.insertRow(2);
        
        
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        div1 = document.createElement("div");
        
    
        div1.className = "bar0";
        div1.id = "uniquetest";
        document.getElementById('uniquetest').style.height = "50";
        
        div2 = document.createElement("div");
        div3 = document.createElement("div");
        div4 = document.createElement("div");
        div5 = document.createElement("div");
        cell1.appendChild(div1);
        cell2.appendChild(div2);
        cell3.appendChild(div3);
        cell4.appendChild(div4);
        cell5.appendChild(div5);
        cell1.style.height = 200;
        
        
        var cell6 = row2.insertCell(0);
        var cell7 = row2.insertCell(1);
        var cell8 = row2.insertCell(2);
        var cell9 = row2.insertCell(3);
        var cell10 = row2.insertCell(4);
        cell6.innerHTML = "A";
        cell7.innerHTML = "B";
        cell8.innerHTML = "C";
        cell9.innerHTML = "D";
        cell10.innerHTML = "F";
    
    
        var cell11 = row3.insertCell(0);
        var cell12 = row3.insertCell(1);
        var cell13 = row3.insertCell(2);
        var cell14 = row3.insertCell(3);
        var cell15 = row3.insertCell(4);
        cell11.innerHTML = buildArray[0];
        cell12.innerHTML = buildArray[1];
        cell13.innerHTML = buildArray[2];
        cell14.innerHTML = buildArray[3];
        cell15.innerHTML = buildArray[4];

    }
    
    function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for
    // testing purposes
    setTableContent("45 78 98 83 86 99 90 59");
    }