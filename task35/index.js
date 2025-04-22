setInterval(()=>{
    let time = new Date()
    const clock = document.getElementById("clock");
    clock.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
},1000)