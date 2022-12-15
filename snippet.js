const nft_number = document.querySelector('#__next > main > div > div > div > section.section-nft-details > div.dynamic-area > div.dynamic-area__header > span').innerText

if(nft_number.length<=12){
    attributes = []
    for (i=0; i<9; i++){
        let attribute = document.querySelector(`#__next > main > div > div > div > section.info.common-spacing > div > div.rhs > div > div > div > a:nth-child(${i+1}) > div > span:nth-child(3)`).innerText.slice(0, 5).replace("%","")
        attributes.push(parseFloat(attribute));
    }
    let lo = Math.min(...attributes);
    let avg = Math.trunc(attributes.reduce((a, b) => (a + b)) / attributes.length);
    let hi = Math.max(...attributes);
    
    console.log(attributes)

    document.querySelector('#__next > main > div > div > div > section.section-nft-details > div.dynamic-area > div.dynamic-area__header > span').innerHTML = nft_number + `<br><div style="padding-left:5px;background-color:black;color:white;border: 1px solid black; width: 300px">Average: ${avg}%<br>Low: ${lo}% <br>High: ${hi}%<div>`;
}
