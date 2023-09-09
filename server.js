// Usei o Express pra criar e configurar o meu servidor
 const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://cdn-icons-png.flaticon.com/128/6889/6889070.png",
        title: "Inteligência Artificial",
        category: "Chat Gpt 4",
        description: "A Inteligência Artificial (IA) é um campo da ciência cujo propósito é estudar, desenvolver e empregar máquinas para realizarem atividades humanas de maneira autônoma.",
        url: "#"
    },

    {
        img: "https://cdn-icons-png.flaticon.com/128/6889/6889169.png",
        title: "Cloud Computer",
        category: "Computação na Nuvem",
        description: "é um termo coloquial para a disponibilidade sob demanda de recursos do sistema de computador, especialmente armazenamento de dados e capacidade de computação, sem o gerenciamento ativo direto do utilizado",
        url: "#"
    },

    

    {
        img: "https://cdn-icons-png.flaticon.com/128/11220/11220921.png",
        title: "Atividade Física",
        category: "Exercícios para O Bem-Estar",
        description: "A atividade física reduz o estresse e sintomas de ansiedade, melhora a qualidade do sono, melhora a aprendizagem, reduz sintomas depressivos, previne e diminui a mortalidade por doenças crônicas como pressão alta e diabetes, melhora a força, equilíbrio e flexibilidade, proporciona a socialização e a convivência.",
        url: "https://sallet.com.br/8-beneficios-da-atividade-fisica-regular/"
    },

    {
        img: "https://cdn-icons-png.flaticon.com/128/11220/11220868.png",
        title: "Importância de se Hidratar Diariamente",
        category: "Saúde em Primeiro Lugar",
        description: "De acordo com a Organização Mundial da Saúde, o cálculo de quanto de água devemos beber todos os dias é mais simples do que parece. São 35 ml diários para cada quilo que temos. Ou seja, uma pessoa de 60 kg deve fazer a conta 60 kg x 35 ml e descobrir que a recomendação é de 2,1 litros por dia",
        url: "https://saolucascopacabana.com.br/pt/sobre-nos/blog/cinco-motivos-para-beber-mais-agua"
    },

    
]





// configurar arquivos estatícos ( Css, Scripts , Imagens)
server.use(express.static("public"))


// Configuração do NunJucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
 express: server,
 noCache: true, //boolean
})


// Criei uma Rota /
// E Capturo o Pedido do Cliente para Responder
server.get("/", function (req, res) {

const reversedIdeas = [...ideas].reverse()


let lastIdeas = []
for (let idea of reversedIdeas) {
    if(lastIdeas.length < 2) {
    lastIdeas.push(idea)
    }
}

 return res.render("index.html", {ideas: lastIdeas})

 })

 server.get("/Ideias", function (req, res) {

const reversedIdeas = [...ideas].reverse()

 return res.render("ideias Criativas.html", {ideas: reversedIdeas})
   
    })
   


//liguei meu servidor na porta 3000
 server.listen(3000)