let deckID = 0;
let deckID2 = 0;
let $div2 = $('#part-two');

// function drawOne(){
//     let promise = axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
//     .then(res => {
//         let value = res.data.cards[0].value
//         let suit = res.data.cards[0].suit
//         console.log(`${value} of ${suit}`)
//     })
// };
async function drawOne(){
    let res = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
    let value = res.data.cards[0].value;
    let suit = res.data.cards[0].suit;
    console.log(`${value} of ${suit}`);
};
drawOne();

// function drawTwo(){
//     let promise = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(res =>{
//         deckID = res.data['deck_id']
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
//     }).then(res =>{
//         res.data.cards.forEach((card) => {
//             let value = card.value
//             let suit = card.suit
//             console.log(`${value} of ${suit}`)
//         })
//     })
// };
async function drawTwo(){
    let deckRes = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    deckID = deckRes.data['deck_id'];
    let cardRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`);
    cardRes.data.cards.forEach((card) => {
        let value = card.value;
        let suit = card.suit;
        console.log(`${value} of ${suit}`);
    });
};
drawTwo();

// let promise = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// .then(res =>{deckID2 = res.data['deck_id']});

// let $drawButton = $('#draw-button');
// let $cardPic = $('#card-pic');
// $drawButton.on('click',function(){
//     let promise = axios.get(`https://deckofcardsapi.com/api/deck/${deckID2}/draw/?count=1`)
//     .then(function(res){
//         $cardPic.attr('src',res.data.cards[0].image);
//         if (res.data.remaining == 0){
//             $drawButton.prop('disabled',true);
//             $drawButton.text('No More Cards!');
//         };
//     });
// });

async function drawCardButton(){
    let deckRes = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    deckID2 = deckRes.data['deck_id'];
    let $drawButton = $('#draw-button');
    let $cardPic = $('#card-pic');
    $drawButton.on('click', async function(){
        let cardRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID2}/draw/?count=1`);
        $cardPic.attr('src',cardRes.data.cards[0].image);
        if (cardRes.data.remaining == 0){
            $drawButton.prop('disabled',true);
            $drawButton.text('No More Cards!');
        };
    });
};
drawCardButton();