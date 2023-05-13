const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eeba95c9d0mshbe7ad233ff61e56p1f7733jsn5edff5e0710c',
		'X-RapidAPI-Host': 'crypto-update-live.p.rapidapi.com'
	}
};
    let table_data=document.getElementById('cryptodata')

    function fetchData()
    {
        fetch('https://crypto-update-live.p.rapidapi.com/top-currency/top_50_details', options)
        .then(response => response.json())
        .then(response => {
            data=response;
            console.log(data)
            const tableTr=`${data['Top 50 Cryptocurrency Details']?.map(i=>`
            <tr>
                        <th scope="row"><div class="customCard d-flex px-4 pt-2">
                            <img src="${i?.Image}" alt="" class="img_thumbnail customImage">
                            <div class="ms-2">
                                <p class="mb-0">${i?.Coin}</p>
                                <p class="new">${i?.Symbol}</p>
                            </div>
                        </th>
                        <td>${i["Market Cap"]}</td>
                        <td>${i?.Price}</td>
                        <td class=${color(i["High/Low 24hr"]?.Low)}>${i["High/Low 24hr"]?.Low}</td>
                        <td class=${color(i["High/Low 24hr"]?.High)}>${i["High/Low 24hr"]?.High}</td>
                        
                    </tr>`).join('')}`
        document.getElementById("cryptodata").innerHTML=tableTr
        })
        .catch(err => console.error(err)); 
    }
    
    fetchData()

    function color(value){
        var a = value.replace("$", '')
        var b = a.replace(",", '')
        var c = +b
        console.log(b)
        console.log(typeof +b)
        if(c>=1){
            return "green"
        }
        else{
            return "red"
        }
    }