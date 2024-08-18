import{i as m,S as h}from"./assets/vendor-f33cd494.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const g=t=>`
    <li class="gallery-item">
        <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}"
                alt="${t.tags}"
                width="360"
                height="152"
            />
        </a>

        <ul class="img-statistics">
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Likes</h3>
                <p class="img-statistics-item-value">${t.likes}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Views</h3>
                <p class="img-statistics-item-value">${t.views}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Comments</h3>
                <p class="img-statistics-item-value">${t.comments}</p>
            </li>
            <li class="img-statistics-item">
                <h3 class="img-statistics-item-title">Downloads</h3>
                <p class="img-statistics-item-value">${t.downloads}</p>
            </li>
        </ul>
    </li>
    `,d="https://pixabay.com",p=t=>{const r=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"45444033-7a199cc8ba7e30bdfbfaa3141"});return fetch(`${d}/api/?${r}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})},n=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");let c;const f=t=>{t.preventDefault(),u.innerHTML="",l.classList.remove("is-hidden");const r=n.elements.search.value;p(r).then(i=>{if(i.hits.length===0){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.classList.add("is-hidden"),n.reset();return}const a=i.hits.map(e=>g(e)).join("");l.classList.add("is-hidden"),u.innerHTML=a,c?c.refresh():c=new h(".gallery a",{captionsData:"alt",captionDelay:150})}).catch(i=>{m.error({title:"Error",message:"The server is not responding or does not exist",position:"topRight"}),l.classList.add("is-hidden")})};n.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
