import catalog1 from "../assets/catalog-1.png"
import catalog2 from "../assets/catalog-2.png"
import catalog3 from "../assets/catalog-3.png"
import catalog4 from "../assets/catalog-4.png"
import catalog5 from "../assets/catalog-5.png"
import catalog6 from "../assets/catalog-6.png"

export const catalogItems = [
    {
        id: 1,
        title: "Люстры",
        price: "От 540₽",
        image: catalog1
    },
    {
        id: 2,
        title: "Светильники",
        price: "От 540₽",
        image: catalog2
    },
    {
        id: 3,
        title: "Бра",
        price: "От 540₽",
        image: catalog3
    },
    {
        id: 4,
        title: "Торшеры",
        price: "От 540₽",
        image: catalog4
    },
    {
        id: 5,
        title: "Настольные лампы",
        price: "От 540₽",
        image: catalog5
    },
    {
        id: 6,
        title: "Споты",
        price: "От 540₽",
        image: catalog6
    }
]

export const footerItems = [
    {
        id: 1,
        title: "Покупателям",
        items: ["О компании", "Доставка и оплата", "Возврат", "Гарантии", "Контакты", "Блог"],
        links: ["/about", "/shipping", "/return", "/garant", "/contacts", "/blog"]
    },
    {
        id: 2,
        title: "Товары",
        items: ["Люстры", "Светильники", "Бра", "Торшеры", "Комплектуюшие", "Настольные лампы"],
        links: []
    },
    {
        id: 3,
        title: "",
        items: ["Споты", "Трековые светильники", "Уличные светильники", "Технические светильники", "Светодиодные ленты"],
        links: []
    }
]



import blog1 from "../assets/blog-1.png"
import blog2 from "../assets/blog-2.png"
import blog3 from "../assets/blog-3.png"

export const blogItems = [
    {
        id: 1,
        title: "Как правильно освещать дом снаружи?",
        date: "01.01.2024",
        image: blog1
    },
    {
        id: 2,
        title: "Как правильно освещать дом снаружи?",
        date: "01.01.2024",
        image: blog2
    },
    {
        id: 3,
        title: "Как правильно освещать дом снаружи?",
        date: "01.01.2024",
        image: blog3
    }
]