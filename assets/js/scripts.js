const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const gender = document.getElementById('gender').options[gender.selectedIndex].value
    const age = Number(document.getElementById('age').value)
    const weight = Number(document.getElementById('weight').value)
    const height = Number(document.getElementById('height').value)
    const activityLevel = document.getElementById('activity_level').options[selectedIndex].value

    const metabolicRate = Math.round(
        gender === 'female' ?
        (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) :
        (66 + (13.7 * weight) + (5 * height) - (6.8 * age))

    )

    const maintenance = Math.round(metabolicRate * Number(activityLevel))
    const loseWeight = maintenance - 450
    const gainWeight = maintenance + 450

    const layout = `
        <h2>Aqui está o resultado:</h2>

        <div class="result-content">
         <ul>
            <li>
             Seu metabolismo basal é de <strong>${metabolicRate} calorias</strong>.
            </li>
            
            <li>
            Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
            </li>
            
            <li>
             Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
            </li>
            
            <li>
              Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
            </li>
         </ul>
        </div>
    
    `
    const result = document.getElementById('result')

    result.innerHTML = layout
})