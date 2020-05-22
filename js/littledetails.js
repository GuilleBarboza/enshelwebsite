import data from '../contenido/data.js'



const root = document.getElementById('root');

const header = document.createElement('header');

const banner1 = document.createElement('img');
banner1.src = data.banners.imagenes.bannerPrincipal;

root.appendChild(header);
header.appendChild(banner1);
