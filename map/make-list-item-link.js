function makeListItemLink(locationData) {
    let a = document.createElement('a');

    a.classList.add('location-item');
    a.href = `../location/?id=${locationData.id}`;
    a.textContent = locationData.title;

    return a;
}

export default makeListItemLink;