const searchFrom = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchFrom.addEventListener('submit', retrieve)

function retrieve(e){
    if (input.value == ''){
        alert('input field is empty!')
        return
    }


    newsList.innerHTML = ''
    e.preventDefault()
    const apiKey = 'e636c1ce5d9d474898bbe263a0bd418a'
    let topic = input.value;
    const pageSize = 10;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}&pageSize=${pageSize}`


    fetch(url).then((res) =>{
      return res.json()  
    }).then((data) =>{
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li);


        });
    }).catch((error) =>{
        console.log(error)
    })
}
