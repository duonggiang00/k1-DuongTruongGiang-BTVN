function getData(callback) {
    // Code của bạn ở đây
    setTimeout(()=>{
        callback([1,2,3,4],1000)
    })
  }
  
  // Sử dụng
  getData((data) => {
    console.log("bai 1:" +data); // Sau 1 giây in ra: [1, 2, 3, 4]
  });

  function getData2(callback) {
    // Code của bạn ở đây
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const callback = [1,2,3,4]
            resolve(callback)
        },1000)
    })
  }
  // Sử dụng
  getData2()
    .then((data) => console.log("bai 2: " + data)) // Sau 1 giây in ra: [1, 2, 3, 4]
    .catch((error) => console.error(error));

    async function getData3() {
        // Code của bạn ở đây
        try{
            const data = await getData2();
            console.log("bai 3:" + data)
        }catch(error){
            console.log(error)
        }
       

      }
      // Sử dụng
      getData3()
       