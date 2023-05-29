fetch('https://webgyor.net/portfolio-grid/js/portfolio.json')
.then( (response) => response.json())
.then( (data) => {
    // console.log(data);
    // console.log(data[0].item_1[0].title);
    
    const html = data.map( (item) => {
        return(`<div class="grid-item">
            <div class="item">
                <a href="${item.item_1[0].link}" style="background: url(${item.item_1[0].image})"></a>
                <div class="item-title"><h4>${item.item_1[0].title}</h4></div>
            </div>
            <div class="item">
                <a href="${item.item_2[0].link}" style="background: url(${item.item_2[0].image})"></a>
                <div class="item-title"><h4>${item.item_2[0].title}</h4></div>
            </div>
        </div>`);
    }).join("");
    
    const portfolio_grid_wrapper = document.getElementById('portfolio_grid_wrapper');
    portfolio_grid_wrapper.innerHTML = html;
})
.catch( (error) => console.log(error));