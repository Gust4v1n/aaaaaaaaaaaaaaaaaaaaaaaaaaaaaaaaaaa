//linda database estatica de pizzaria

const idGenerator = () => 
  (Math.random() * (999999999 - 100000000) + 100000000).toFixed(0);

const categoria = [
    { categoria: "Pizzas Tradicionais", itens: [
        { id: idGenerator(), nome: "Margherita", descricao: "Tomate, mussarela e manjericão", valor: 25.00, imagem: "https://images.prismic.io/eataly-us/ed3fcec7-7994-426d-a5e4-a24be5a95afd_pizza-recipe-main.jpg?auto=compress,format" },
        { id: idGenerator(), nome: "Calabresa", descricao: "Mussarela, calabresa e cebola", valor: 28.00, imagem: "https://swiftbr.vteximg.com.br/arquivos/ids/213885/618283-pizza-artesanal-calabresa_inn.jpg?v=639051131497770000" },
        { id: idGenerator(), nome: "Portuguesa", descricao: "Presunto, ovo, mussarela e cebola", valor: 30.00, imagem: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/2eb7ece4ae9a67b773aa138589e2031d.jpg?itok=8rB5qKP-" }
    ]},

    { categoria: "Pizzas Especiais", itens: [
        { id: idGenerator(), nome: "Frango com Catupiry", descricao: "Frango desfiado e catupiry", valor: 32.00, imagem: "https://blog.fornettostore.com.br/wp-content/uploads/2025/03/blog-receita-frango-catupiry.jpg" },
        { id: idGenerator(), nome: "Quatro Queijos", descricao: "Mussarela, gorgonzola, parmesão e provolone", valor: 34.00, imagem: "https://redefoodservice.com.br/wp-content/uploads/2023/07/Pizza-Quatro-Queijos.jpg" },
        { id: idGenerator(), nome: "Vegetariana", descricao: "Mix de legumes e mussarela", valor: 29.00, imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/04/01/942600306-pizza-vegetariana.jpg" }
    ]},

    { categoria: "Bebidas", itens: [
        { id: idGenerator(), nome: "Refrigerante 2L", descricao: "Coca Cola, Fanta ou Sprite", valor: 10.00, imagem: "https://io.convertiez.com.br/m/trimais/shop/products/images/2/medium/refrigerante-coca-cola-original-garrafa-2l_2.png" },
        { id: idGenerator(), nome: "Água Mineral", descricao: "500ml sem gás", valor: 4.00, imagem: "https://mambodelivery.vtexassets.com/arquivos/ids/184965-800-450?v=637884009070200000&width=800&height=450&aspect=true" },
        { id: idGenerator(), nome: "Cerveja 350ml", descricao: "Skol, Brahma ou Heineken", valor: 7.00, imagem: "https://www.arenaatacado.com.br/on/demandware.static/-/Sites-storefront-catalog-sv/default/dw60e582d4/Produtos/988391-7896045506873-cerveja%20heineken%20lata%20-%20350ml-heineken-1.jpg" }
    ]},

    { categoria: "Sobremesas", itens: [
        { id: idGenerator(), nome: "Bolo de Chocolate", descricao: "Fatia de bolo de chocolate", valor: 6.00, imagem: "https://receitadaboa.com.br/wp-content/uploads/2024/10/iStock-1190659479.jpg" },
        { id: idGenerator(), nome: "Sorvete", descricao: "Copa de sorvete (chocolate, baunilha ou morango)", valor: 8.00, imagem: "https://img.freepik.com/fotos-premium/um-copo-de-chocolate-amargo-gelado-um-coberto-com-sorvete-de-chocolate_49003-1127.jpg" }
    ]}
];

module.exports = categoria;