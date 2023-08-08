const {Pool}=require("pg");
const pool=new Pool(
    {
        user:"postgres",
        password:"Teja@2002",
        host:"localhost",
        port:2002,
        database:"CSE_Library"
    }
)
module.exports=Pool;