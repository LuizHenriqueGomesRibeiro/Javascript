var asyncRequest;

// função que armazena o objeto XMLHttpRequest;
function getContent(url){
    // tenta criar o XMLHttpRequest e faz a solicitação;
    try{
        asyncRequest=new XMLHttpRequest();// criação do objeto partindo do método XMLHttpRequest();

        asyncRequest.onreadystatechange=stateChange;
        asyncRequest.open('GET',url,true);// prepara a solicitação do XMLHttpRequest();
        asyncRequest.send(null);// envia a solicitação do XMLHttpRequest();
    }
    catch(exception){
        alert("Requisição falhou.");
    }
}
function stateChange(){
    if(asyncRequest.readyState==4 && asyncRequest.status==200){
        document.getElementById('contentArea').innerHTML=asyncRequest.responseText;// adiciona o texto HTML em 'contentArea';
    }
}
function clearContent(){
    document.getElementById('contentArea').innerHTML="";// obviamente, limpa o conteúdo da 'contentArea';
}