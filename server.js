const filmesJson = require("./data/filmes.json")

const expres = require("express");
const cors = require("cors")

const app1 = expres()

app1.use(cors())
app1.use(expres.json())

app1.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "API de Filmes Para Maratonar "
    }])
})


app1.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app1.get("/filmes/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let encontrarFilmes = filmesJson.find(filme => filme.id == idRequest)

    console.log(idRequest)
    console.log(encontrarFilmes)

    response.status(200).send(encontrarFilmes)
})

app1.get("/filmes/encontrar/:title", (request, response) => {
    let titleRequest = request.query.title.toLowerCase()
    let encontrarFilmes = filmesJson.find(filme => filme.title.toLowerCase().includes(titleRequest))

    console.log(titleRequest);
    console.log(encontrarFilmes)

    response.status(200).send(encontrarFilmes)
})

app1.post("/filmes/cadastrar", (request, response) => {
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

app1.listen(6070, () => {
    console.log("Utilizando a porta 6070")
});
console.log("** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * ");

const seriesJson = require("./data/series.json")

const express = require("express");
const cors1 = require("cors")

const app = express();
app.use(cors1());
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "API de Séries Para Maratonar "
    }])
})


app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
})

app.get("/series/buscar/:id", (request, response) => {
    let idRequest = request.params.id
    let encontrarSeries = seriesJson.find(serie => serie.id == idRequest)

    console.log(idRequest)
    console.log(encontrarSeries)

    response.status(200).send(encontrarSeries)
})

app.get("/series/procura/:title", (request, response) => {
    let seriesRequest = request.params.title
    let encontrarSeries = seriesJson.find(serie => serie.title == seriesRequest)

    console.log(seriesRequest)
    console.log(encontrarSeries)

    response.status(200).send(encontrarSeries)
})

app.post("/series/cadastro", (request, response) => {
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

app.listen(6080, () => {
    console.log("Utilizando a porta 6080")
})