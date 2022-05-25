const filmesJson = require("./data/filmes.json")

const express = require("express");
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "API de Filmes Para Maratonar "
    }])
})


app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let buscarFilmes = filmesJson.find(filme => filme.id == idRequest)

    console.log(idRequest)
    console.log(buscarFilmes)

    response.status(200).send(buscarFilmes)
})

app.get("/filmes/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)

    let encontrarFilmes = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest))


    response.status(200).send(encontrarFilmes)
})

app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body
    console.log(bodyRequest)

    let filmeNovo = {
        id: (filmesJson.length) + 1,
        title: bodyRequest.title,
        description: bodyRequest.description

    }
    filmesJson.push(filmeNovo)
    response.status(201).send({
        "mensagem": "Filmes cadastrado com sucesso ",
        filmeNovo
    })

})

app.listen(6070, () => {
    console.log("Utilizando a porta 6070")
});
console.log("** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ");

const seriesJson = require("./data/series.json")

const express1 = require("express");
const cors1 = require("cors")

const app1 = express1();
app1.use(cors1());
app1.use(express1.json())

app1.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "API de Séries Para Maratonar "
    }])
})


app1.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
})

app1.get("/series/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let encontrarSeries = seriesJson.find(serie => serie.id == idRequest)

    console.log(idRequest)
    console.log(encontrarSeries)

    response.status(200).send(encontrarSeries)
})

app1.get("/series/filtro", (request, response) => {
    let seriesRequest = request.query.nome.toLocaleLowerCase()
    console.log(seriesRequest)

    let encontrarSeries = seriesJson.filter(serie => serie.title.toLowerCase().includes(seriesRequest))

    console.log(seriesRequest)


    response.status(200).send(encontrarSeries)
})

app1.post("/series/cadastro", (request, response) => {
    let bodySeriesRequest = request.body
    console.log(bodySeriesRequest)

    let serieNovo = {
        id: (seriesJson.length) + 1,
        title: bodySeriesRequest.title,
        description: bodySeriesRequest.description

    }
    seriesJson.push(serieNovo)
    response.status(201).send({
        "mensagem": "Séries cadastradas com sucesso ",
        serieNovo
    })

})

app1.listen(6080, () => {
    console.log("Utilizando a porta 6080")
})