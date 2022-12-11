const btn = document.getElementById('button')
let imgDiv = document.querySelector('.images')

btn.addEventListener('click', function() {
    alert('Pronto agora a gente pode ficar juntinho mesmo de longe(me desculpa mesmo meu amor, a ultima coisa que eu quero é que fique triste)')
    imgDiv.classList.replace('images', 'image2')
})