 //POST
 function enviarDados(){
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const desc = document.getElementById("desc").value;
    const quant = document.getElementById("quant").value;
    const preco = document.getElementById("preco").value;
    const forma = document.getElementById("forma").value;
    const data = document.getElementById("data").value;
    const endereco = document.getElementById("endereco").value;
    const inform = document.getElementById("inform").value;

    

    fetch('http://localhost:3000/formulario', {
        method: "POST",
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({id: id, nome: nome, desc: desc, quant: quant, preco: preco, forma:forma, 
        data: data, endereco: endereco, inform: inform})                    
    }).then(response => response.json());

    location.reload();
}
function usuario(){
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    fetch('http://localhost:3000/login', {
        method: "POST",
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({id:login, senha:senha})
    }).then(response => response.json())
}
function logar(){

    const id = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    fetch(`http://localhost:3000/login/${id}`,{
        method: "GET"
    }).then(response => response.json())
    .then(form => {
       const senhaa = form.senha;

       if(senha == senhaa){
            window.location.href = "index.html"
       }else{
            alert("Usuario ou senha incorreta!")
            window.location.reload(true)
       }
    })
}

//GET
function busarDados(){
    const id = document.getElementById("id").value;

    fetch(`http://localhost:3000/formulario/${id}`,{
        method: "GET"
    }).then(response => response.json())
    .then(form => {
        document.getElementById("nome").value = form.nome;
        document.getElementById("desc").value = form.desc;
        document.getElementById("quant").value = form.quant;
        document.getElementById("preco").value = form.preco;
        document.getElementById("forma").value = form.forma;
        document.getElementById("data").value = form.data;
        document.getElementById("endereco").value = form.endereco;
        document.getElementById("inform").value = form.inform;
    })

    // location.reload();
}
//PUT
function atualizarDados(){
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const desc = document.getElementById("desc").value;
    const quant = document.getElementById("quant").value;
    const preco = document.getElementById("preco").value;
    const forma = document.getElementById("forma").value;
    const data = document.getElementById("data").value;
    const endereco = document.getElementById("endereco").value;
    const inform = document.getElementById("inform").value;

    fetch(`http://localhost:3000/formulario/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, nome: nome, desc: desc, quant: quant, preco: preco, forma:forma, 
        data: data, endereco: endereco, inform: inform})
    })
    .then(response => response.json())

    location.reload();
}
//DELETE
function deletarDados(){
    const id = document.getElementById('id').value;

    fetch(`http://localhost:3000/formulario/${id}`,{
        method: 'DELETE'
    }).then(response => response.json())

    location.reload();
}   

//POST LOGIN
// function usuario(){
//     const login = document.getElementById("login").value;
//     const senha = document.getElementById("senha").value;

//     fetch('http://localhost:3000/formulario', {
//         method: "POST",
//         headers:{
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({login: login, senha: senha})                   
//     }).then(response => response.json())
// }

//GET LOGIN
// function logar(){
//     const login1 = document.getElementById("loginn").value;
// }