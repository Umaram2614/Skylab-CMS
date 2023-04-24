///<reference types="cypress"/>
export const fun = {
  readExcel(sheetnumber:number, row:number, col:number){
      let path = "../fixtures/Book.xlsx";
      let reader = require("xlsx");
      var file = reader.readFile(path);
      var data:any = [];
      var sheets = file.SheetNames;
      if (sheets.length > sheetnumber) {
        var temp = reader.utils.sheet_to_json(
          file.Sheets[file.SheetNames[sheetnumber]]
        );
        temp.forEach(function (res:any) {
          data.push(res);
        });
      } else {
        console.log("Invalid sheet number");
      }
      //Searching row and column
      var value2 = Object.values(data[row]);
      return value2[col];
    }
  }
  
  console.log(fun.readExcel(0, 1, 1));
  