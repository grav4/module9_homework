const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
const inputNodePage = document.querySelector('.j-page');
const inputNodeLimit = document.querySelector('.j-limit');


resultNode.innerHTML = localStorage.getItem("lastResult");

const useRequest = (url, callback) => {
    return fetch(url)
        .then((response) => response.json())
        .then((result) => {
            if (callback) {callback(result);}
        })
        .catch(() => {console.log('error')});
}

function displayResult(apiData) {
    let cards = '';  
    apiData.forEach(item => {
      const cardBlock = `
      <div class="card">
        <img src="${item.download_url}" class="card-image"/>
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
});
resultNode.innerHTML = cards;
localStorage.setItem("lastResult", resultNode.innerHTML);
}

btnNode.addEventListener('click', async () => {
    inputPageValue = inputNodePage.value;
    inputLimitValue = inputNodeLimit.value;

    if ((isNaN(inputPageValue) || inputPageValue > 10 || inputPageValue < 1) && (isNaN(inputLimitValue) || inputLimitValue > 10 || inputLimitValue < 1)) {
        resultNode.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (isNaN(inputLimitValue) || inputLimitValue > 10 || inputLimitValue < 1) {
        resultNode.textContent = 'Лимит вне диапазона от 1 до 10';
    } else if (isNaN(inputPageValue) || inputPageValue > 10 || inputPageValue < 1) {
        resultNode.textContent = 'Номер страницы вне диапазона от 1 до 10';
    } else {
        resultNode.textContent = '';
        await useRequest(`https://picsum.photos/v2/list?page=${inputPageValue}&limit=${inputLimitValue}`, displayResult);
    }
});