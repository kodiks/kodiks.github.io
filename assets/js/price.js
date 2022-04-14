const adisyoPackages = [{
    type: 12,
    title: '12 Aylık',
    discount: '%30',
    price: 70,
    totalPrice: 839,
    isShowHomePage: true
}, {
    type: 6,
    title: '6 Aylık',
    discount: '%10',
    price: 88,
    totalPrice: 529,
    isShowHomePage: false
}, {
    type: 3,
    title: '3 Aylık',
    discount: '%5',
    price: 93,
    totalPrice: 279,
    isShowHomePage: false
}, {
    type: 1,
    title: 'Aylık',
    discount: '15 Gün Ücretsiz',
    price: 99,
    totalPrice: 99,
    isShowHomePage: true
}];

const externalAppPackages = [{
    id: 16,
    title: 'Dijital Menü',
    1: { price: 49, isSelected: false },
    3: { price: 139, isSelected: false },
    6: { price: 259, isSelected: false },
    12: { price: 490, isSelected: false }
}, {
    id: 15,
    title: 'Trendyol Yemek',
    1: { price: 29, isSelected: false },
    3: { price: 79, isSelected: false },
    6: { price: 149, isSelected: false },
    12: { price: 290, isSelected: false }
}, {
    id: 9,
    title: 'Getir Yemek',
    1: { price: 29, isSelected: false },
    3: { price: 79, isSelected: false },
    6: { price: 149, isSelected: false },
    12: { price: 290, isSelected: false }
}, {
    id: 2,
    title: 'Yemek Sepeti',
    1: { price: 29, isSelected: false },
    3: { price: 79, isSelected: false },
    6: { price: 149, isSelected: false },
    12: { price: 290, isSelected: false }
}, {
    id: 13,
    title: 'Hotelier 101',
    1: { price: 49, isSelected: false },
    3: { price: 139, isSelected: false },
    6: { price: 259, isSelected: false },
    12: { price: 490, isSelected: false }
}, {
    id: 12,
    title: 'HMS',
    1: { price: 49, isSelected: false },
    3: { price: 139, isSelected: false },
    6: { price: 259, isSelected: false },
    12: { price: 490, isSelected: false }
}];

function calculateTotalPrice(adisyoPackageType, externalPackageId) {
    const adisyoPackage = adisyoPackages.find(o => o.type == adisyoPackageType);

    const externalAppPackage = externalAppPackages.find(o => o.id === externalPackageId);

    const packageType = externalAppPackage[adisyoPackageType];

    packageType.isSelected = !packageType.isSelected;

    if (packageType.isSelected)
        adisyoPackage.totalPrice += packageType.price;
    else
        adisyoPackage.totalPrice -= packageType.price;

    changeHtml(adisyoPackage, externalAppPackage, packageType);
}

function changeHtml(adisyoPackage, externalAppPackage, packageType) {
    $(`#totalPrice${adisyoPackage.type}`).html(`${adisyoPackage.totalPrice > 0 && adisyoPackage.type !== 1 ? (`Toplam : <span id="changeTotalPrice${adisyoPackage.type}">${adisyoPackage.totalPrice},00 ₺</span> + KDV`) : 'Denemesi Bedava'}`);

    $(`#changeTotalPrice${adisyoPackage.type}`).html((adisyoPackage.totalPrice / adisyoPackage.type).toFixed(0));

    $(`#changeTotalPrice${adisyoPackage.type}`).addClass('change_total_price_effect');

    setTimeout(() => {
        $(`#changeTotalPrice${adisyoPackage.type}`).removeClass('change_total_price_effect');
    }, 300);

    $(`#externalPackage${externalAppPackage.id}_${adisyoPackage.type}`).html(
        packageType.isSelected ? `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
            height="24px" viewBox="0 0 24 24" width="24px" fill="#c82c2d">
            <rect fill="none" height="24" width="24" />
             <path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" /></svg>` :
            `<svg xmlns="http://ww
            w.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2          12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`
    );
}

function fillContent(contentId, packages, isHomePage = false) {
    $(`#${contentId}`).empty();

    const colSize = isHomePage ? 5 : 3;

    packages.forEach(el => {
        let childEl = `
        <div class="col-xl-${colSize} col-sm-12 col-md-6 pb_15">
         <div class="price_item ${el.type === 12 ? 'select-price' : ''}">
             <div>
                 <img src="../assets/img/price-label.png" class="price_label" loading="lazy"/>
                 <h5 class="f_p f_500 t_color2 mb_10 price_label_title">${el.title}</h5>
    
                 <span class="price_label_discount">
                     ${el.type !== 1 ? el.discount + ' İndirimli' : el.discount}
                 </span>
             </div>
    
             <div class="f_p f_size_38 f_600 t_color2 mb_10 price_content_value">
                 <span class="d-flex">
                     <span class="price_content_value_icon f_size_30">₺</span>
                     <span class="price_content_value_price" id="changeTotalPrice${el.type}">${el.price}</span>
                 </span>
    
                 <span class="d-flex flex-column align-items-start pl-1">
                     <span class="price_content_value_price_split">,00</span>
    
                     <span class="f_400 f_size_14 price_content_value_tax">
                         + KDV / AY
                     </span>
                 </span>
             </div>
    
             <div class="border-price">
                 <p id="totalPrice${el.type}">${el.totalPrice > 0 && el.type !== 1 ? (`Toplam : <span id="changeTotalPrice${el.type}">${el.totalPrice},00 ₺</span> + KDV`) : 'Denemesi Bedava'}</p>
             </div>
             <ul class="list-unstyled p_list text-left">
                 <li class="py-2 px-1">
                     <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                         height="24px" viewBox="0 0 24 24" width="24px" fill="#c82c2d">
                         <rect fill="none" height="24" width="24" />
                         <path
                             d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" />
                     </svg>
                     Adisyo
                 </li>
                 <li class="price-split text-center">
                     <span>Ek Paket Seçiniz</span>
                 </li>`;

        externalAppPackages.forEach(ext => {
            childEl += ` <li class="py-2 px-1" onclick="calculateTotalPrice(${el.type},${ext.id})">
                    <div id="externalPackage${ext.id}_${el.type}" class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0z" fill="none"/><path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
                    </div>
                    ${ext.title}
                </li>`;
        });


        childEl += ` </ul>
    
                 <a href="https://pos.adisyo.com/#/signup" target="_blank"
                     class="price_btn btn_hover mt-4">Ücretsiz Dene</a>
             </div>
         </div>`;

        $(`#${contentId}`).append(childEl);
    });
}

$(() => {
    fillContent('price_page_packages', adisyoPackages);

    fillContent('home_page_packages', adisyoPackages.filter(o => o.isShowHomePage), true);
});