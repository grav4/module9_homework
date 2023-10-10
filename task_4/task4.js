const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
const inputNodeWidht = document.querySelector('.j-limit-width');
const inputNodeHeight = document.querySelector('.j-limit-height');

const useRequest = (url, callback) => {
    return fetch(url)
        .then((response) => response)
        .then((result) => {
            if (callback) {callback(result);}
        })
        .catch(() => {console.log('error')});
}

function displayResult(apiData) {
    const card = `
        <div class="card">
          <img src="${apiData.url}" class="card-image"/>
        </div>
      `;
    resultNode.innerHTML = card;
}

btnNode.addEventListener('click', async () => {
    inputWidhtValue = inputNodeWidht.value;
    inputHeightValue = inputNodeHeight.value;
    if (isNaN(inputWidhtValue) || isNaN(inputHeightValue) || inputWidhtValue > 300 || inputHeightValue > 300 || inputWidhtValue < 100 || inputHeightValue < 100) {
        resultNode.textContent = 'одно из чисел вне диапазона от 100 до 300';
    } else {
        resultNode.textContent = '';
        await useRequest(`https://picsum.photos/${inputWidhtValue}/${inputHeightValue}`, displayResult)
    }
});
