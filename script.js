const from=document.querySelector('form')

from.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results= document.querySelector("#results")
 

    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Please give A valid height ${height}`;

    }
    if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`Please give A valid weight ${weight}`;

    }else{
       const bmi=(weight/((height*height)/10000)).toFixed(2)
    //    Show the result
    results.innerHTML=`<span>${bmi}</spam>`
    }
    if(bmi<=18.6){
        const conclusion=document.createElement=(p)
        p.innerHTML=`<p> Under weight</p>`
        console.log(p);
        
    }


})