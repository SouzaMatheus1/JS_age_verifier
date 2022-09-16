function verify(){
    // Year
    let now = new Date()
    let now_year = now.getFullYear() // Real year
    let year = document.querySelector('input#year').value // Inputed year
    
    // Result div
    let result = document.querySelector('div#result')

    // Create image
    let img = document.createElement('img')
    img.setAttribute('id','image_person')
    img.setAttribute('style','margin-top: 3.6%;')

    // Sex definition p.1
    let sex = document.getElementsByName('sex')
    let gender = ''

    if(year > now_year || year == 0 || year == null){
        alert('Invalid year! Please try again.')
    }else{
        // Age definition
        let age = Number(now_year) - Number(year)

        // Sex definition p.2
        if(sex[0].checked){
            gender = 'Man'
            // Image definition p.1
            if(age <= 14){
                img.setAttribute('src','images/crianca_1.png')
            }else if(age > 14 && age <= 28){
                img.setAttribute('src', 'images/menino adole.png')
            }else if(age > 28 && age <= 60){
                img.setAttribute('src', 'images/homem.png')
            }else{
                img.setAttribute('src', 'images/homem velho.png')
            }
        }else{
            gender = 'Woman'
            // Image definition p.2
            if(age <= 14){
                img.setAttribute('src','images/crianca_2.png')
            }else if(age > 14 && age <= 28){
                img.setAttribute('src', 'images/menina adole.png')
            }else if(age > 28 && age <= 60){
                img.setAttribute('src', 'images/mulher.png')
            }else{
                img.setAttribute('src','images/mulher velha.png')
            }
        }
        // Age gender exibition
        result.innerHTML = `It's a ${age} years old ${gender}`
        // Image exibition
        result.appendChild(img)
    }
    
}
