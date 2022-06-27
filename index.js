const express=require("express")

const app=express()

const dns=require("dns")

app.use(express.json())

app.use(express.urlencoded ({extended:true}))

app.get("/",(req,res)=>{
    res.send("hello")
    // res.end()
})
app.get("/products",(req,res)=>{
    res.send("prod page")
})
let url;
app.post("/getmeip",(req,res)=>{
    url=req.body.website_name
    // console.log(url)
   
    dns.resolve4(url, (err, addresses) => {
    
        if (err) {
          console.err(err);
          return;
        }
      
        console.log(`IP Address of ${url} is ${addresses[0]}`); 
        res.send(`IP Address of ${url} is ${addresses[0]}`)
    });
   
})





app.listen(7000,()=>{

    console.log("server started")
})

