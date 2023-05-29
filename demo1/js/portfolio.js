fetch('https://webgyor.net/portfolio-grid/js/portfolio.json')
.then( (response) => response.json())
.then( (data) => {
    // console.log(data);
    // console.log(data[0].title);
    
    const html = data.map( (item) => {
        return(`<div class="grid-item">
            <div class="item">
                <a href="${item.link}" data-src="${item.image}"></a>
                <div class="item-title"><h4>${item.title}</h4></div>
            </div>
            <div class="item">
                <a href="${item.link}" data-src="${item.image}"></a>
                <div class="item-title"><h4>${item.title}</h4></div>
            </div>
        </div>`);
    }).join("");
    
    const portfolio_grid_wrapper = document.getElementById('portfolio_grid_wrapper');
    portfolio_grid_wrapper.innerHTML = html;
})
.catch( (error) => console.log(error));