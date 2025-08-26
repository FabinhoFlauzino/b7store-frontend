export const data = {
  banners: [
    {img: "/assets/banners/banner-4.png", link: "/"},
    {img: "/assets/banners/banner-3.png", link: "/"},
    {img: "/assets/banners/banner-2.png", link: "/"},
    {img: "/assets/banners/banner-1.png", link: "/"},
  ],
  products: [
    {
      id: 1,
      label: "Camisa PHP",
      image: "/assets/products/camiseta-php.png",
      price: 99.90,
      liked: false
    },
    {
      id: 2,
      label: "Camisa Laravel",
      image: "/assets/products/camiseta-laravel-branca.png",
      price: 149.90,
      liked: true
    },
    {
      id: 3,
      label: "Camisa React",
      image: "/assets/products/camiseta-react-azul.png",
      price: 199.90,
      liked: false
    },
    {
      id: 4,
      label: "Camisa Node.js",
      image: "/assets/products/camiseta-node.png",
      price: 249.90,
      liked: true
    },
  ], 
  menu: [
    { label: "Camisetas", href: "/categories/camisa" },
    { label: "Kits B7Web", href: "/categories/kits" },
  ]
}