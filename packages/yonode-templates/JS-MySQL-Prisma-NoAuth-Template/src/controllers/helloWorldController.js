export const helloWorld = async (req, res)=>{
  try{
    res.send("Hello world!")
  }
  catch(err){
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}