function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
   var x = 0;
   var arr = [0, 0, 0, 0, 0];
   
   while (x < scoresArray.length) {
      if (scoresArray[x] >= 90) {
         arr[0]++
      }
      if (scoresArray[x] >= 80 && scoresArray[x] <=89) {
         arr[1]++
      }
      if (scoresArray[x] >= 70 && scoresArray[x] <=79) {
         arr[2]++
      }
      if (scoresArray[x] >= 60 && scoresArray[x] <=69) {
         arr[3]++
      }
      if (scoresArray[x] <= 59) {
         arr[4]++
      }
      x++;
   }
      return arr;
   }

   function setTableContent(userInput) {
      const sArr = parseScores(userInput);
      const dArr = buildDistributionArray(sArr);
      const row1 = document.getElementById("firstRow");
      const row3 = document.getElementById("thirdRow");
   
      row1.innerHTML += "<td><div style=\"height: " + (dArr[0]*10) + "px;\" class=\"bar0\"></div></td>";
      row1.innerHTML += "<td><div style=\"height: " + (dArr[1]*10) + "px;\" class=\"bar1\"></div></td>";
      row1.innerHTML += "<td><div style=\"height: " + (dArr[2]*10) + "px;\" class=\"bar2\"></div></td>";
      row1.innerHTML += "<td><div style=\"height: " + (dArr[3]*10) + "px;\" class=\"bar3\"></div></td>";
      row1.innerHTML += "<td><div style=\"height: " + (dArr[4]*10) + "px;\" class=\"bar4\"></div></td>";
   
      row3.innerHTML += "<td>" + dArr[0] + "</td>";
      row3.innerHTML += "<td>" + dArr[1] + "</td>";
      row3.innerHTML += "<td>" + dArr[2] + "</td>";
      row3.innerHTML += "<td>" + dArr[3] + "</td>";
      row3.innerHTML += "<td>" + dArr[4] + "</td>";
   
   }
    
setTableContent("45 78 98 83 86 99 90 59");

