// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.mjs";
console.log("am working ...");
const getUserData = async (id) => {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  let Which_db = await central(id);
  let returnedValue;
  try {
    switch (Which_db) {
      case "db1":
        await db1(id).then((data) => {
          dbs.db1 = data;
        });
        // dbs.db1 = returnedValue;
        console.log("user data-1 ..", dbs.db1);
        break;
      case "db2":
        await db2(id).then((data) => {
          dbs.db2 = data;
          console.log("user data -2 ", dbs.db2);
        });
        // dbs.db2 = returnedValue;
        // console.log("user data-2", dbs.db2);
        break;
      case "db3":
        await db3(id).then((data) => {
          dbs.db3 = data;
          console.log("usedata -3 ", dbs.db3);
        });
        break;
      // dbs.db3 = returnedValue;with out then
      // console.log("usedata -3 ", dbs.db3);
      default:
        throw new error("unknow database");
    }
    if (id >= 1 && id <= 10) {
      const vaultData = await vault(id);
      console.log(vaultData);
      return { id, dbs, vaultData };
    } else {
      return { id, dbs };
    }
  } catch (err) {
    console.log(err);
  }
};
getUserData(6);
// const returnedValue = await db1(4)
// .then((e)=>{
//   console.log(e.username,e.website,e.company)
// })
/*
{
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}
*/
