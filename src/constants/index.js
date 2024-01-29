import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const  navLinks =[
    {href:"#home", lable: "Home"},
{href:"#about-us", lable: "About Us"},
{href:"#products", lable: "Products"}
,{href:"#contact-us", lable: "Contact Us"}


]
export const statistics =[{value:'10+', label:'Markalar'
},{value:'50', label:'Mağaza Saysısı'},{value:'50k+', label:'Müşteri Saysısı'}]


export const shoes = [ {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
},
{
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
},
{
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
}]
export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "2.000₺",
    },
    {
        imgURL: shoe5,
        name: "Addidas Galaxy 6",
        price: "1.699₺",
    },
    {
        imgURL: shoe6,
        name: "Puma Anzarun 2.0",
        price: "2.900₺",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "3.500₺",
    },
];
export const services = [
    {
        imgURL: truckFast,
        label: "ÜCRETSİZ KARGO",
        subtext: "Ücretsiz kargo hizmetimizle sorunsuz alışverişin tadını çıkarın."
    },
    {
        imgURL: shieldTick,
        label: "GÜVENLİ ÖDEME",
        subtext: "Güvenli ödeme seçeneklerimizle endişesiz alışveriş deneyimleyin."
    },
    {
        imgURL: support,
        label: "YARDIM SEVER ÇALIŞANLAR",
        subtext: "Size her adımda yardımcı olmaktan mutluluk duyan harika ekibimiz bulunmaktadır."
    },
];