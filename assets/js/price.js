// const adisyoPackages = [{
//     type: 12,
//     title: '12 Aylık',
//     discount: '%30',
//     price: 104,
//     totalPrice: 1249,
//     isShowHomePage: true
// }, {
//     type: 6,
//     title: '6 Aylık',
//     discount: '%10',
//     price: 133,
//     totalPrice: 799,
//     isShowHomePage: false
// }, {
//     type: 3,
//     title: '3 Aylık',
//     discount: '%5',
//     price: 139,
//     totalPrice: 419,
//     isShowHomePage: false
// }, {
//     type: 1,
//     title: 'Aylık',
//     discount: '15 Gün Ücretsiz',
//     price: 149,
//     totalPrice: 149,
//     isShowHomePage: true
// }];

// const externalAppPackages = [{
//     id: 16,
//     title: 'Dijital Menü',
//     1: { price: 49, isSelected: false },
//     3: { price: 139, isSelected: false },
//     6: { price: 259, isSelected: false },
//     12: { price: 490, isSelected: false }
// }, {
//     id: 15,
//     title: 'Trendyol Yemek',
//     1: { price: 39, isSelected: false },
//     3: { price: 109, isSelected: false },
//     6: { price: 209, isSelected: false },
//     12: { price: 390, isSelected: false }
// }, {
//     id: 9,
//     title: 'Getir Yemek',
//     1: { price: 39, isSelected: false },
//     3: { price: 109, isSelected: false },
//     6: { price: 209, isSelected: false },
//     12: { price: 390, isSelected: false }
// }, {
//     id: 2,
//     title: 'Yemek Sepeti',
//     1: { price: 39, isSelected: false },
//     3: { price: 109, isSelected: false },
//     6: { price: 209, isSelected: false },
//     12: { price: 390, isSelected: false }
// }, {
//     id: 13,
//     title: 'Hotelier 101',
//     1: { price: 49, isSelected: false },
//     3: { price: 139, isSelected: false },
//     6: { price: 259, isSelected: false },
//     12: { price: 490, isSelected: false }
// }, {
//     id: 12,
//     title: 'HMS',
//     1: { price: 49, isSelected: false },
//     3: { price: 139, isSelected: false },
//     6: { price: 259, isSelected: false },
//     12: { price: 490, isSelected: false }
// }];

// function calculateTotalPrice(adisyoPackageType, externalPackageId) {
//     const adisyoPackage = adisyoPackages.find(o => o.type == adisyoPackageType);

//     const externalAppPackage = externalAppPackages.find(o => o.id === externalPackageId);

//     const packageType = externalAppPackage[adisyoPackageType];

//     packageType.isSelected = !packageType.isSelected;

//     if (packageType.isSelected)
//         adisyoPackage.totalPrice += packageType.price;
//     else
//         adisyoPackage.totalPrice -= packageType.price;

//     changeHtml(adisyoPackage, externalAppPackage, packageType);
// }

// function changeHtml(adisyoPackage, externalAppPackage, packageType) {
//     $(`#totalPrice${adisyoPackage.type}`).html(`${adisyoPackage.totalPrice > 0 && adisyoPackage.type !== 1 ? (`Toplam : <span id="changeTotalPrice${adisyoPackage.type}">${adisyoPackage.totalPrice},00 ₺</span> + KDV`) : 'Denemesi Bedava'}`);

//     $(`#changeTotalPrice${adisyoPackage.type}`).html((adisyoPackage.totalPrice / adisyoPackage.type).toFixed(0));

//     $(`#changeTotalPrice${adisyoPackage.type}`).addClass('change_total_price_effect');

//     setTimeout(() => {
//         $(`#changeTotalPrice${adisyoPackage.type}`).removeClass('change_total_price_effect');
//     }, 300);

//     $(`#externalPackage${externalAppPackage.id}_${adisyoPackage.type}`).html(
//         packageType.isSelected ? `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
//             height="24px" viewBox="0 0 24 24" width="24px" fill="#c82c2d">
//             <rect fill="none" height="24" width="24" />
//              <path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" /></svg>` :
//             `<svg xmlns="http://ww
//             w.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2          12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`
//     );
// }

// function fillContent(contentId, packages, isHomePage = false) {
//     $(`#${contentId}`).empty();

//     const colSize = isHomePage ? 5 : 3;

//     packages.forEach(el => {
//         let childEl = `
//         <div class="col-xl-${colSize} col-sm-12 col-md-6 pb_15">
//          <div class="price_item ${el.type === 12 ? 'select-price' : ''}">
//              <div>
//                  <img src="../assets/img/price-label.png" class="price_label" loading="lazy"/>
//                  <h5 class="f_p f_500 t_color2 mb_10 price_label_title">${el.title}</h5>

//                  <span class="price_label_discount">
//                      ${el.type !== 1 ? el.discount + ' İndirimli' : el.discount}
//                  </span>
//              </div>

//              <div class="f_p f_size_38 f_600 t_color2 mb_10 price_content_value">
//                  <span class="d-flex">
//                      <span class="price_content_value_icon f_size_30">₺</span>
//                      <span class="price_content_value_price" id="changeTotalPrice${el.type}">${el.price}</span>
//                  </span>

//                  <span class="d-flex flex-column align-items-start pl-1">
//                      <span class="price_content_value_price_split">,00</span>

//                      <span class="f_400 f_size_14 price_content_value_tax">
//                          + KDV / AY
//                      </span>
//                  </span>
//              </div>

//              <div class="border-price">
//                  <p id="totalPrice${el.type}">${el.totalPrice > 0 && el.type !== 1 ? (`Toplam : <span id="changeTotalPrice${el.type}">${el.totalPrice},00 ₺</span> + KDV`) : 'Denemesi Bedava'}</p>
//              </div>
//              <ul class="list-unstyled p_list text-left">
//                  <li class="py-2 px-1">
//                      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
//                          height="24px" viewBox="0 0 24 24" width="24px" fill="#c82c2d">
//                          <rect fill="none" height="24" width="24" />
//                          <path
//                              d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z" />
//                      </svg>
//                      Adisyo
//                  </li>
//                  <li class="price-split text-center">
//                      <span>Ek Paket Seçiniz</span>
//                  </li>`;

//         externalAppPackages.forEach(ext => {
//             childEl += ` <li class="py-2 px-1" onclick="calculateTotalPrice(${el.type},${ext.id})">
//                     <div id="externalPackage${ext.id}_${el.type}" class="mr-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#888"><path d="M0 0h24v24H0z" fill="none"/><path   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
//                     </div>
//                     ${ext.title}
//                 </li>`;
//         });


//         childEl += ` </ul>

//                  <a href="https://pos.adisyo.com/#/signup" target="_blank"
//                      class="price_btn btn_hover mt-4">Ücretsiz Dene</a>
//              </div>
//          </div>`;

//         $(`#${contentId}`).append(childEl);
//     });
// }

// $(() => {
//     // fillContent('price_page_packages', adisyoPackages);

//     // fillContent('home_page_packages', adisyoPackages.filter(o => o.isShowHomePage), true);

//     $("#switch").change((e) => {
//         var checked = e.currentTarget.checked;

//         $(".show_params").toggleClass("d-block", checked);

//         $(".pricing_area").toggleClass("show_other_package", checked);

//         $(".pricing_area .price_container").toggleClass("custom_container", checked);
//     });
// });

function setActivePriceBtn(packageId) {
    const buttons = document.querySelectorAll('.selection_price');

    buttons.forEach(o => {
        o.classList.remove('selection_price_active');

        const elemntPackageId = o.id.split('-')[1];

        if (elemntPackageId == packageId)
            o.classList.add('selection_price_active');
    });
}

function onChangePricePackage(packageId) {
    setActivePriceBtn(packageId);

    const { standart, lite, pro } = {
        standart: {
            month: 295,
            monthTotal: 295,
            month3: 265,
            month3Total: 795,
            month6: 245,
            month6Total: 1470,
            month12: 207,
            month12Total: 2490,
            discount12: 30,
            discount6: 10,
            discount3: 5,
            

        },
        lite: {
            month: 195,
            monthTotal: 195,
            month3: 182,
            month3Total: 545,
            month6: 166,
            month6Total: 995,
            month12: 146,
            month12Total: 1750,
            discount12: 25,
            discount6: 10,
            discount3: 5,
        },
        pro: {
            month: 395,
            monthTotal: 395,
            month3: 375,
            month3Total: 1125,
            month6: 349,
            month6Total: 2095,
            month12: 274,
            month12Total: 3290,
            discount12: 30,
            discount6: 10,
            discount3: 5,
        },
    }

    setPackage('lite', lite, packageId);

    setPackage('pro', pro, packageId);

    setPackage('standart', standart, packageId);
}

function setPackage(packageName, priceValue, packageId) {
    const price = document.getElementById(packageName + '-price');
    const totalPrice = document.getElementById(packageName + '-total-price');
    const totalPriceDiscount = document.getElementById(packageName + '-total-price-discount');
    const discountText = document.querySelectorAll('.discount_text');

    discountText.forEach(m => m.classList.remove('d-none'));


    if (!price) return;

    switch (packageId) {
        case 1:
            price.innerHTML = priceValue.month;
            totalPrice.innerHTML = priceValue.monthTotal;
            totalPriceDiscount.innerHTML = priceValue.discount;

            discountText.forEach(m => m.classList.add('d-none'));
            break;
        case 3:
            price.innerHTML = priceValue.month3;
            totalPrice.innerHTML = priceValue.month3Total;
            totalPriceDiscount.innerHTML = priceValue.discount3;
            break;
        case 6:
            price.innerHTML = priceValue.month6;
            totalPrice.innerHTML = priceValue.month6Total;
            totalPriceDiscount.innerHTML = priceValue.discount6;
            break;
        case 12:
            price.innerHTML = priceValue.month12;
            totalPrice.innerHTML = priceValue.month12Total;
            totalPriceDiscount.innerHTML = priceValue.discount12;
            break;
    }
}