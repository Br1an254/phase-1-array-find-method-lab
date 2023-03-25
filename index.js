// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superBowlWin(arr) {
    if(arr.result === "W") {
        return arr.year
    }
}

 record.find(superBowlWin);

 console.log(superBowlWin(...record))
