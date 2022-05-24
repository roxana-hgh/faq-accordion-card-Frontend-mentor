document.addEventListener('DOMContentLoaded', () => {
    const questions = document.getElementsByClassName('qa');
    const answer = document.getElementsByClassName('answer');
    for (let i = 0; i < answer.length; i++){
        answer[i].previousElementSibling.addEventListener('click',active);
    }

    function active(){  
        let content = this.nextElementSibling;
        let icon = this.childNodes[1]
        if (Object.values(content.classList).includes("hidden")){
            close()
            content.classList.remove('hidden')
            icon.classList.add('rotate')
        }
        else{
            content.classList.add('hidden')
            icon.classList.remove('rotate')
        }
    }
    
    function close(){
        for (let i = 0; i < questions.length; i++){
        questions[i].childNodes[3].classList.add('hidden')
        answer[i].previousElementSibling.childNodes[1].classList.remove('rotate')
        } 
    }

})