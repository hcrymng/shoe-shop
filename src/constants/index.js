import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import{support, truckFast, shieldTick, twitter, facebook, instagram} from "../assets/icons"
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
export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];
export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Aaddidas Galaxy 6", link: "/" },
            { name: "Puma Anzarun 2.0", link: "/" },
            { name: "Air Jordan 01", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Air Jordan 001", link: "/" },
        ]
    },{
        title: "Yardım",
        links: [
            { name: "Hakkımızda", link: "/" },
            { name: "sık sorulan sorular", link: "/" },

            { name: "Gizlilik politikası", link: "/" },
            { name: "Ödeme politikası", link: "/" },
        ],
    },
    {
        title: "İletişim",
        links: [
            { name: "customer@nike.com", link: "mailto:yardım@modaayakkabidunyasi.com" },
            { name: "+90554862354", link: "tel:+90554862354" },
        ],
    },
]