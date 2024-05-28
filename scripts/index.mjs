// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";
console.log("am working ...")
function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}


const returnedValue = await db1(4)
.then((e)=>{
  console.log(e.username,e.website,e.company)
})
