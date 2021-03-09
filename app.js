const pictureItems = document.querySelectorAll('.picture-item-wrapper')
    pictureItems.forEach(pictureItem => {
        pictureItem.addEventListener('mouseover', () => {
                pictureItem.childNodes[1].classList
                pictureItem.childNodes[1].classList.add('img-lighten');
        })

        pictureItem.addEventListener('mouseout', () => {
                pictureItem.childNodes[1].classList.remove('img-lighten');
        });
    });

    const darkMode = document.querySelectorAll('#dark-mode');

    const background = document.querySelectorAll('.topnav');



   darkMode.onclick = function(event) {
        darkMode.style = 'background-color: white; color: black';
}