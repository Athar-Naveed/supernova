export interface productType{
    title:string;
    para:string;
    src:string;
    price?:number;
}
export const cards:Array<productType> = [
    {
        title:"Formal Blue Suite",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img1.png",
        price:20000
    },
    {
        title:"Laptop",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img2.png",
        price:20000
    },
    {
        title:"Watch",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img3.png",
        price:20000
    },
    {
        title:"Surf Excel",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img4.png",
        price:20000
    },
    {
        title:"Medicine",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img5.png",
        price:20000
    },
    {
        title:"Gaming PC",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img6.png",
        price:20000
    },
    {
        title:"Iphone 14 pro",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img7.png",
        price:20000
    },
    {
        title:"Rolex Watch",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, quidem?",
        src:"/img/trendy/img8.png",
        price:20000
    },
]
export interface navItem {
    title:string;
    href:string;
    src:string;
    icon?:JSX.Element;
}
export const Category:Array<navItem> = [
    {
        title:"Grocery",
        href:"grocery",
        src:"/img/categories/grocery.png"
    },
    {
        title:"Electronics",
        href:"electronics",
        src:"/img/categories/electronics.png"
    },
    {
        title:"Fashion",
        href:"fashion",
        src:"/img/categories/fashion.png"
    },
    {
        title:"Watches",
        href:"watches",
        src:"/img/categories/watch.png"
    },
    {
        title:"Health Care",
        href:"healthcare",
        src:"/img/categories/health.png"
    },
    {
        title:"Keychains",
        href:"keychains",
        src:"/img/categories/keychains.png"
    },
]