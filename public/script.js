document.getElementById("form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const data = {
        nome:document.getElementById("nome").ariaValueMax,
        cpf:document.getElementById("cpf").value
    };

    const res = await fetch("/cadastro", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const json = await res.json();
    alert(JSON.stringify(json));
});