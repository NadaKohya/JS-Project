var img = new Array("https://img.ltwebstatic.com/images3_ach/2021/12/03/16385353430e365db595c5a25b6c756d26fd59f4bc.webp","https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/original/carousel/156/2jofvhba__30885.jpg?c=1", "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/original/carousel/152/karl__32808.jpg?c=1", "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/original/carousel/153/timberland__95338.jpg?c=1")
var Element = document.getElementById("image");
var i = 1;

function next() {
    if (i < 3) {
        i++;
    } else {
        i = 0;
    }

    Element.src = img[i];
}


var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};


function topFunction() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function previous() {
    if (i > 1) {
        i--;
    } else {
        i = 2;
    }
    Element.src = img[i];
}

var images = {
    maincategories: ['https://cdn11.bigcommerce.com/s-y2uyjca306/product_images/uploaded_images/ahvi0qja.jpg',
        'https://cdn11.bigcommerce.com/s-y2uyjca306/product_images/uploaded_images/trva2gsw.jpg',
        'https://cdn11.bigcommerce.com/s-y2uyjca306/product_images/uploaded_images/eiolgzxq.jpg',
        'https://cdn11.bigcommerce.com/s-y2uyjca306/product_images/uploaded_images/nn-jrkew.jpg',
        'https://cdn11.bigcommerce.com/s-y2uyjca306/product_images/uploaded_images/glbrjurq.jpg'
    ],
    hoodies: ["https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9916435/43701751/1_org_zoom__89273.1635137891.jpg?c=1",
     "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/8632108/39320941/T4984AZ_21SP_WT32_01_02__68235.1629127962.jpg?c=1",
     "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9700669/42613675/1_org_zoom__70618.1633753914.jpg?c=1",
     "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9675438/42516983/T4456AZ_20WN_ER22_01_02__64523.1633535429.jpg?c=1",
     "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/8576657/38743804/71dwyeLEqgS__99313.1629024936.jpg?c=1",
     "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9097487/40957948/60239110_180_main__50129.1631669472.jpg?c=1",
     "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9825646/43229685/1_org_zoom__58830.1634790392.jpg?c=1",
     "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/10210895/45028308/1_org_zoom__72867.1636954339.jpg?c=1"],
    outerwear: ["https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9676536/42521233/I6913AZ_20AU_GR28_01_02__91457.1633537303.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/855880/7004114/b4b1f991ba6d79d27efe6d838da000485d830195_clu8956_1__40182.1607960101.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1061414/5476327/16022969979815ce403eabd4fb9ca44f54f4929f67__69906.1607917921.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1786487/8683525/159617829502ccbc1e58985448ef7d97e774b509d3__16186.1609627451.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/8503564/38359416/16239144021b43e9f8b34df824655102eb4e3aee40__81887.1628972005.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/10130995/44720295/1KAL98397UT050_G01_zoom1_V01__38484.1636461321.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/10130796/44719522/1KAK92790HT027_G01_zoom1_V02__21208.1636461051.jpg?c=1"],
    onesies:["https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/10035157/44251280/1M719610__04566.1635995928.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9785481/43046645/1M753610__68905.1634257659.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/4475174/15583033/1L812010__25708.1617593546.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/8592479/39118197/1M147710__65176.1629085279.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9815568/43174414/1M274910__48945.1634531374.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1692130/8307478/1K506510__61338.1609049619.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/4157575/13564886/1I606110__81845.1615696075.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9488234/42198223/1M367410__78890.1633147699.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9710601/42672075/1N398712__45909.1633836794.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/847567/5850901/1J527010__90936.1607924371.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/10251484/45306864/1M720110__18741.1637291197.jpg?c=1"],
    boots: ["https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/8699111/39405234/1_org_zoom__34990.1629183186.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/8998903/40435870/1_org_zoom__94783.1630558933.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/989807/4412812/1_org_zoom__60200.1607909050.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/4871842/17764409/1_org_zoom__01763.1619761706.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/2205513/11836204/71kIopVNSwL__21697.1613706141.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/10109624/44616676/1_org_zoom__22876.1636348868.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/5606880/21881319/1_org_zoom__40463.1622616689.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/9901883/43653132/1_org_zoom__04703.1635085073.jpg?c=1"],
    backpacks:["https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1432537/7457985/1_org_zoom__77709.1608204334.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1519725/7743433/16050868320eb28ea5e2c2cad21aa37e2a24afb67a__50695.1608292751.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/7525385/34609242/217_org_zoom__89346.1625195114.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/2347178/12640208/1613791047577e86d464ebdb7ed9465ef7c80afd60__35527.1614304028.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1319118/5783152/157604975372a1ec73414a6659488b5ed006d19662__76165.1607924071.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1759928/8568187/15621176552397658574__32408.1609500039.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/1319462/5785856/15680223811444528084__59143.1607924081.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-y2uyjca306/images/stencil/700x1050/products/3038786/12969340/811wJZ26fYL__82124.1614397248.jpg?c=1"]
}
setCollection(images['maincategories']);


function onClick(collectionName) {
    var collectionImages = images[collectionName];
    setCollection(collectionImages);
}



function setCollection(collectionImages) {
    var innerHTML = '<center>';
    for (var i = 0; i < collectionImages.length; i++) {
        innerHTML += '<img class="img wow fadeInUp" src="' + collectionImages[i] + '">';
    }
    innerHTML += '</center>';

    var collection = document.getElementById('images');

    collection.innerHTML = innerHTML;
}
