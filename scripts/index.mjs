// Importing database functions. DO NOT MODIFY THIS LINE.

import { central, db1, db2, db3, vault } from "./databases.mjs";

let startTime=performance.now()
// const endTime=performance.now();
const getUserData = async (id) => {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  let Which_db = await central(id);
  
  let returnedValue={};

  
  try {
    returnedValue["id"]=id;
    switch (Which_db) {
      case "db1":
        await db1(id).then((data) => {
          dbs.db1 = data;
          returnedValue["db1"]=data;
        });
        // dbs.db1 = returnedValue;
        console.log("user data-1 ..", dbs.db1);
        break;
      case "db2":
        await db2(id).then((data) => {
          dbs.db2 = data;
          returnedValue["db2"]=data;
          console.log("user data -2 ", dbs.db2);
        });
        // dbs.db2 = returnedValue;
        // console.log("user data-2", dbs.db2);
        break;
      case "db3":
        await db3(id).then((data) => {
          dbs.db3 = data;
          returnedValue["db3"]=data;
          console.log("usedata -3 ", dbs.db3);
        });
        break;
      // dbs.db3 = returnedValue;with out then
      // console.log("usedata -3 ", dbs.db3);
      default:
        throw new error("unknow database");
    }

      const vaultData = await vault(id);
      console.log(vaultData);

      returnedValue=Object.assign(returnedValue,returnedValue,vaultData)
      return returnedValue;
  } catch (err) {
    console.error(err);
  }
};
getUserData(5);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////second way
//or it can be done 
/*
let profile={};
try {
   let getData=await dbs[Which_db](id);
         profile["id"]=id;
          const vaultData = await vault(id);
          console.log(vaultData);
        
profile=Object.assign(profile,getData,vaultData);
console.log(profile)
return profile;
} catch (error) {
  console.error(error)
  
}
}
const endTime=performance.now();
getUserData(5);
console.log((endTime-startTime)*1000);
*/