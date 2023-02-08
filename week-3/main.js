divHolder = document.querySelector("#divHolder")



fetch('https://uconndxlab.github.io/json-phonebook-example/dxlab-staff.json')
   .then(response => response.json())
   .then(response => {
    response.contacts.sort((a,b) => {
        if(a.lastname < b.lastname){
            return -1
        }else if(a.lastname > b.lastname){
            return 1
        }else {return 0}
    })
    for(let i in response.contacts){
        let person = {
            firstname: response.contacts[i].firstname,
            lastname: response.contacts[i].lastname,
            phone: response.contacts[i].phone,
            title: response.contacts[i].title,
            birthdate: response.contacts[i].birthdate,
            email: response.contacts[i].email
        }

        let div = document.createElement("div")
        div.setAttribute("id", `div${i}`)
        div.setAttribute("class", "contact")
        divHolder.appendChild(div)

        for(let x in person){
            let h2 = document.createElement("h2");
            h2.setAttribute("id", `${x}`)
            if(x === "firstname"){
                h2.innerHTML = `First: ${person[x]}`
            } else if(x === "lastname"){
                h2.innerHTML = `Last: ${person[x]}`
            }else if(x === "phone"){
                h2.innerHTML = `Phone: 
                ${person[x]}`
            }else if(x === "title"){
                h2.innerHTML = `Title: ${person[x]}`
            }else if(x === "birthdate"){
                h2.innerHTML = `Birthdate: ${person[x]}`
            }else if(x === "email"){
                h2.innerHTML = `Email: ${person[x]}`
            }
            h2.setAttribute("class", "contactText")
            div.appendChild(h2)
        }


        
        // firstNameText.innerHTML = person.firstname
        // lastNameText.innerHTML = person.lastname
        // phoneText.innerHTML = person.phone
        // titleText.innerHTML = person.title
        // birthdateText.innerHTML = person.birthdate
        // emailText.innerHTML = person.email
    }
   })


   