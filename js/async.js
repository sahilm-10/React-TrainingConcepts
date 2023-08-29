const fetchData = async () =>{
    try{
    const quotes = await fetch("https://type.fit/api/quotes");
    const response = await quotes.json();
    console.log(response);
  }
  catch(error){
    console.error(error);
  }
}
  
  fetchData();