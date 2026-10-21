const fetchDatas = async ()=>{



    const getData = await fetch("https://dummyjson.com/products")

    //   console.log(getData);

   const change = await getData.json()
  
   const data = change.products
   
    

    // const products= getData.products;
    // console.log(products);

//     const datas = change.users
    const ShowData_tbody = document.getElementById("ShowData")
    
    let getshow =""

    data.forEach((e) => {

            getshow += `<tr>
            <td>${e.id}</td>
            <td>${e.category}</td>
            <td>${e.price}</td>


            </tr>`
        
    });
   
   
   
    ShowData_tbody.innerHTML= getshow 
}
fetchDatas()