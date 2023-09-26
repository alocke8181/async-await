let $div = $('#part-one');

// function getFavNumber(){
//     let promise = axios.get('http://numbersapi.com/42?json').then(
//         res => $div.append($('<p>').text(res.data.text))
//     );
// };
// getFavNumber();

async function getFavNumber(){
    let res = await axios.get('http://numbersapi.com/42?json');
    $div.append($('<p>').text(res.data.text));
};
getFavNumber();

// function getMultipleNums(){
//     let promise = axios.get('http://numbersapi.com/1..5').then(function(res){
//         for(key in res.data){
//             $div.append($('<p>').text(res.data[key]))}}
//     )
// };

async function getMultipleNums(){
    let res = await axios.get('http://numbersapi.com/1..5');
    for(key in res.data){
        $div.append($('<p>').text(res.data[key]));
    };
};
getMultipleNums();

// function getMultipleFacts(){
//     let promise = axios.get('http://numbersapi.com/42?json')
//     .then(res => 
//         {$div.append($('<p>').text(res.data.text))
//         return axios.get('http://numbersapi.com/42?json')
//         })
//     .then(res => 
//         {$div.append($('<p>').text(res.data.text))
//         return axios.get('http://numbersapi.com/42?json')
//         })
//     .then(res => 
//         {$div.append($('<p>').text(res.data.text))
//         return axios.get('http://numbersapi.com/42?json')
//         })
//     .then(res => 
//         {$div.append($('<p>').text(res.data.text))
//         return axios.get('http://numbersapi.com/42?json')
//         })
// }
async function getMultipleFacts(){
    let resAll = await Promise.all([
        axios.get('http://numbersapi.com/42?json'),
        axios.get('http://numbersapi.com/42?json'),
        axios.get('http://numbersapi.com/42?json'),
        axios.get('http://numbersapi.com/42?json'),
        axios.get('http://numbersapi.com/42?json')
    ]);
    for(key in resAll){
        $div.append($('<p>').text(resAll[key].data.text));
    };
};
getMultipleFacts();