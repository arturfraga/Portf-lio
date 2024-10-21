let escolha = 0
let inventario = []
var pontosDeAtletismo = 2

alert("Seja bem vindo!!!")
alert("Esse jogo é baseado em Alaa Maso")
alert("Nadador olimpico refugiado da Síria")
alert("Bom jogo")

alert("Mãe: ei filho, acorda")
alert("filho, filho, voce vai se atrasar para escola")


    while (escolha != 1 & escolha != 2){
escolha = Number(prompt("oi mãe, bom dia...\n1- levantar\n2- pedir mais um tempo para dormir\n5- abrir inventário\n6- ver pontos de atletismo"))    
    if (escolha === 1) {
        alert("Você levanta e vai se arrumar")
        alert("Você toma um café e vai para a ecola")
        alert("Assim que você chegou na escola estava perto do horario de entrada")
        alert("E acaba se encontrando com seus amigos e fica converando com eles antes da aula")
        alert("Foi um dia normal de aula")
        alert("Você ficou muito feliz +1 emoção")
        inventario.push("Felicidade")

    } else if (escolha === 2) {
        alert("Sua mãe te deixa dormir mais 10 minutinhos")
        alert("Após esses minutos você acorda novamente e levanta")
        alert("Se arruma mas não tem tempo para o café")
        alert("Indo para a escola")
        alert("Você chega um pouco atrasado")
        alert("Foi só um dia normal de aula")
        alert("Voce não ganha nenhuma emoção")
    } else if (escolha === 5) {
        abrirInventario
    } else if (escolha === 6){
        alert("Seus pontos de atletismo são: " + verPontosDeAtletismo())
    } else if (escolha != 1 & escolha != 2 & escolha != 5 & escolha != 6){
        alert("Essa opção não existe")
    }
}
escolha = 0

alert("Chegando em casa você é recebido por sua mãe")
alert("Mãe: Boa tarde filho, o almoço ja esta na mesa")
    while (escolha != 1 & escolha != 2){
escolha = Number(prompt("Senta na mesa e vem almoçar\n1- ir almoçar\n2- ir para o quarto\n5- abrir inventário\n6- ver pontos de atletismo"))
    if (escolha === 1) {
        alert("Você almoça com sua família, foi um ótimo almoço")
        alert("Sua mãe fica contente que você esta feliz hoje")
        alert("Nova emoção (amor)")
        inventario.push(amor)
    } else if (escolha === 2) {
        alert("Não mãe, não quero almoçar agora")
        alert("Sua mãe fica triste com você")
        alert("Você vai para o seu quarto e tira um cochilo")
        alert("Você não ganha nenhuma emoção")
        alert("Não demora muito para você acordar")
    } else if (escolha === 3) {
        alert("Essa opção não existe")
    } else if (escolha === 5) {
        abrirInventario
    } else if (escolha === 6){
        verPontosDeAtletismo
        
    }
}
escolha = 0
    alert("De tardezinha é horario da sua natação")
    while(escolha != 1 & escolha != 2) {
    escolha = Number(prompt("Pai: Você vai ir treinar natação comigo hoje filho?\n1- sim \n2- não\n5- abrir inventário\n6- ver pontos de atletismo"))
    if (escolha === 1) {
        alert("Você vai para o treino")
        alert("Após um tempinho caminhando com seu pai você chega até o local")
        alert("entrando la você e seu pai começam a se ajeitar")
        alert("Ele fica muito feliz em ver que você realmente esta gostando de nadar")
        alert("Ele olha para você e fala que a cada dia que passa fica mais orgulhoso de te ter como aluno e filho")
        alert("Começando os treinos você se destaca no meio dos outros atletas")
        alert("No final do treino você recebe varios elogios dos seus colegas e pai")
        alert("Mais 1 ponto de atletismo")
        pontosDeAtletismo++
        alert("Voces vão para casa")
        alert("Após mais um tempinho caminhando voces chegam em casa")
    } else if (escolha === 2) {
        alert("Você apenas volta a dormir")
        alert("Você acorda após um tempo")
    } else if (escolha != 1 & escolha != 2) {
        alert("Essa opção não existe")
    } else if (escolha === 5) {
        abrirInventario
    } else if (escolha === 6){
        verPontosDeAtletismo
    }
}
escolha = 0
    alert("Voces veem sua família na sala olhando televisão")
    alert("Voces vão se aproximando e ouvindo a notícia ao mesmo tempo")
    alert("A cada passo voces vão ficando ainda mais nervosos")
    alert("Na televisão voces ouvem um aviso")
    alert("alerta? Guerra? Evacuação")
    alert("Sem nem pensar duas vezes seus pais começam a arrumar as coisas")
    alert("Sua casa esta um caos pela ansiedade que a televisão deu")
    alert("Sem você mal perceber ja estava no carro evacuando da cidade")
    alert("Vocês vão em direção ao continente Europeu")
    alert("E decidem se estabelecer na Alemanha")
    alert("Um tempo se passou e você e sua família se estabeleceram normalmente")
    alert("Você e seu pai acharam um novo lugar para nadar")
    while (escolha != 1 & escolha != 2){
        escolha = Number(prompt("Você vai querer ir ver o lugar hoje?"))
        if (escolha === 1) {
            alert("Durante o caminho você e seu pai vão conversando sobre a situação")
            
        }
    }

    function abrirInventario() {
        alert("Seu inventario ira aparecer no console")
        let o = 0
        for (let i = 0; i < inventario.length; i++) {
            o++
            console.log(`${o} - ${inventario[i]}`)
        }
    }

    function verPontosDeAtletismo() {
        console.log(pontosDeAtletismo)
        let verPontos = pontosDeAtletismo

        return(verPontos)
    }