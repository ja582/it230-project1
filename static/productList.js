const mockDatabase = [
    {
        img: 'imgs/1.jpg',
        name: 'Moving Pictures',
        artist: 'Rush',
        year: '1981',
        price: '5',
        categories: ['Progressive Rock', '80s'],
    },
    {
        img: 'imgs/2.jpg',
        name: 'Hemispheres',
        artist: 'Rush',
        year: '1978',
        price: '41',
        categories: ['Progressive Rock', '70s'],
    },
    {
        img: 'imgs/3.jpg',
        name: 'Permanent Waves',
        artist: 'Rush',
        year: '1980',
        price: '23',
        categories: ['Progressive Rock', '80s'],
    },
    {
        img: 'imgs/1.jpg',
        name: 'Roll the Bones',
        artist: 'Rush',
        year: '1981',
        price: '60',
        categories: ['Progressive Rock', 'Hard Rock', '90s'],
    },
    {
        img: 'imgs/1.jpg',
        name: 'Truth',
        artist: 'Jeff Beck',
        year: '1968',
        price: '89',
        categories: ['Blues Rock', 'Hard Rock', '70s'],
    },
];

function renderData(results){
        const cardHolder = document.querySelector('.card-deck');
        window.cardHolder = cardHolder;
        cardHolder.innerHTML = '';
        const cardRows = results.map(function (result) {
            return '<div class="card"><div class="card-body"><img class="card-img-top" src=' + result.img + '><h5 class="card-title">' + result.name + '</h5><p class="card-text">' + result.artist + '</p><p class="card-text">' + result.year + '</p><p class="card-text">' + result.price + '</p></div></div>';
        });
        cardRows.forEach(function (row) {
            cardHolder.innerHTML += row;
        });
    }
    renderData(mockDatabase);
