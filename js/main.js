let baroffset = $(".sidebar1").innerWidth()
let flag = true
let username = /^[a-z ,.'-]+$/i
let email = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
let phone = /^\d{11}$/
let password = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
let cartona = ``
async function filterbyarea(value) {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${value}`)
    var data = await response.json()
    console.log(data)
    let cartona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `<div class="col-md-3  meal-open" id="${data.meals[i].idMeal}">
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer">
            <img src="${data.meals[i].strMealThumb}" alt="" class="w-100">
            <div class="overlay1 position-absolute">
                <h2 class="fw-bold text-center">${data.meals[i].strMeal}</h2>
            </div>
        </div>
    </div>`;
    }
    $(".areashow > .container > .row").html(cartona)
    $(".meal-open").on("click", function (e) {
        console.log(e.currentTarget.id)
        openmeal(e.currentTarget.id)
    })
}
async function searchdatabyfirst(value) {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${value}`)
    var data = await response.json()
    console.log(data)
    let cartona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `<div class="col-md-3  meal-open" id="${data.meals[i].idMeal}">
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer">
            <img src="${data.meals[i].strMealThumb}" alt="" class="w-100">
            <div class="overlay1 position-absolute">
                <h2 class="fw-bold text-center">${data.meals[i].strMeal}</h2>
            </div>
        </div>
    </div>`;
    }
    $(".mealshow").html(cartona)
    $(".meal-open").on("click", function (e) {
        console.log(e.currentTarget.id)
        openmeal(e.currentTarget.id)
    })
}
async function searchdata(value) {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${value}`)
    var data = await response.json()
    console.log(data)
    let cartona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `<div class="col-md-3  meal-open" id="${data.meals[i].idMeal}">
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer">
            <img src="${data.meals[i].strMealThumb}" alt="" class="w-100">
            <div class="overlay1 position-absolute">
                <h2 class="fw-bold text-center">${data.meals[i].strMeal}</h2>
            </div>
        </div>
    </div>`;
    }
    $(".mealshow").html(cartona)
    $(".meal-open").on("click", function (e) {
        openmeal(e.currentTarget.id)
    })
}
async function getdata(id) {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/${id}.php`)
    data = await response.json()
}
async function openmeal(mealid) {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    data = await response.json()
    console.log(data)
    cartona = ` <div class="row">
    <div class="col-md-4">
        <img src="${data.meals[0].strMealThumb}" alt="" class="w-100 rounded mealimg">
        <h2 class="mealname">${data.meals[0].strMeal}</h2>
    </div>
    <div class="col-md-8">
        <h1>Instructions</h1>
        <p class="instructions">${data.meals[0].strInstructions}.</p>
            <h2 class="mealarea">Area : ${data.meals[0].strArea}</h2>
            <h2 class="mealcateg">category : ${data.meals[0].strCategory}</span>
            <h2> ingrediants :</h2>
            <div class=" text-success-emphasis row">
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient1}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient2}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient3}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient4}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient5}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient6}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient7}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient8}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient9}</span>
                <span class="bg-info-subtle rounded col-md-2 p-2 m-2">${data.meals[0].strIngredient10}</span>
            </div>
            <h2 class="tags">Tags :</h2>
            <div class="d-flex text-danger-emphasis py-3">
                <span class="bg-danger-subtle rounded px-2 mx-2">${data.meals[0].strTags}</span>
            </div>
            <a href="${data.meals[0].strYoutube}" target="_blank" class="text-decoration-none"><button class="btn btn-danger youtube">Youtube</button> </a>
            <a href="${data.meals[0].strSource}" target="_blank" class="text-decoration-none"><button class="btn btn-success source">Source</button></a>
    </div>
</div>`
    console.log(cartona)
    $(".myitem").addClass("d-none")
    $(".mymeal").removeClass("d-none")
    $(".mymeal").html(cartona)
}
async function filtercateg(type) {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${type}`)
    data = await response.json()
    console.log(data)
    cartona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `<div class="col-md-3  meal-open" id="${data.meals[i].idMeal}">
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer">
            <img src="${data.meals[i].strMealThumb}" alt="" class="w-100">
            <div class="overlay1 position-absolute">
                <h2 class="fw-bold text-center">${data.meals[i].strMeal}</h2>
            </div>
        </div>
    </div>`;
    }
    $(".categories > .container > .row").html(cartona)
    $(".meal-open").on("click", function (e) {
        console.log(e.currentTarget.id)
        openmeal(e.currentTarget.id)
    })
}
function bartoggler() {
    if (flag == true) {
        $(".sidebar1").animate({ left: `0px` }, 500)
        $(".sidebar2").animate({ left: `${baroffset}px` }, 500)
        $(".sidebar-toggler").html("<i class='fa-solid fa-x fa-2xl'></i>")
        flag = false
    } else {
        $(".sidebar1").animate({ left: `-${baroffset}px` }, 500)
        $(".sidebar2").animate({ left: `0px` }, 500)
        $(".sidebar-toggler").html("<i class='fa-solid fa-bars fa-2xl'></i>")
        flag = true
    }
}
$(".sidebar-toggler").on("click", bartoggler)
$(".sidebar2").css({ "left": "0" })
$(".sidebar1").css({ "left": -baroffset })
$(".list-item").on("click", function (e) {
    $(".myitem").addClass("d-none")
    $(`.${e.target.id}`).removeClass("d-none")
    bartoggler()
    if (e.target.id == "categories") {
        getcategories()
    } else if (e.target.id == "area") {
        getbyarea()
    }
    else if (e.target.id == "ingredients") {
        getbyingredients()
    }
})
function classtoggler(id) {
    if (regexvalue == false) {
        $(`.${id}`).removeClass("d-none")
    }
    else {
        $(`.${id}`).addClass("d-none")
    }
}
function checkregex(id) {
    if (id == "username") {
        regexvalue = username.test($(`#${id}`).val())
        classtoggler(id)
    }
    else if (id == "email") {
        regexvalue = email.test($(`#${id}`).val())
        classtoggler(id)
    }
    else if (id == "phone") {
        regexvalue = phone.test($(`#${id}`).val())
        classtoggler(id)
    }
    else if (id == "age") {
        if ($(`#${id}`).val() <= 0 || $(`#${id}`).val() > 200) {
            $(`.${id}`).removeClass("d-none")
        }
        else {
            $(`.${id}`).addClass("d-none")
        }
    }
    else if (id == "password") {
        regexvalue = password.test($(`#${id}`).val())
        classtoggler(id)
    }
    else if (id == "repassword") {
        if ($(`#${id}`).val() != $(`#password`).val()) {
            $(`.${id}`).removeClass("d-none")
        }
        else if ($(`#${id}`).val() == $(`#password`).val()) {
            $(`.${id}`).addClass("d-none")
        }
    }
}
$(`.cont-us-input`).on("input", function (e) {
    checkregex(e.target.id)
})
async function getcategories() {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`)
    data = await response.json()
    cartona = ``
    for (let i = 0; i < data.categories.length; i++) {
        cartona += `<div class="col-md-3 categ-open" id="${data.categories[i].strCategory}" >
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer ">
            <img src="${data.categories[i].strCategoryThumb}" alt="">
            <div class="overlay position-absolute">
                <h2 class="fw-bold">${data.categories[i].strCategory}</h2>
                <p class=" p-1">${data.categories[i].strCategoryDescription}</p>
            </div>
        </div>
    </div>`;
    }
    $(".categories > .container > .row").html(cartona)
    $(".categ-open").on("click", function (e) {
        filtercateg(e.currentTarget.id)
    })
}
$("#searchfull").on("input", function (e) {
    searchval = $("#searchfull").val()
    searchdata(searchval)
})
$("#searchletter").on("input", function (e) {
    searchval = $("#searchletter").val()
    searchdatabyfirst(searchval)
})
async function getbyarea() {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/list.php?a=list`)
    data = await response.json()
    console.log(data)
    cartona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `<div class="col-md-3 categ-open" >
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer areas text-white" id = "${data.meals[i].strArea}">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h2 class="">${data.meals[i].strArea}</h2>
        </div>
    </div>`;
    }
    $(".areashow > .container > .row").html(cartona)
    $(".areas").on("click", function (e) {
        filterbyarea(e.currentTarget.id)
    })
}
async function getbyingredients() {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/list.php?i=list`)
    data = await response.json()
    console.log(data)
    cartona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `<div class="col-md-3 categ-open" >
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer areas text-white ingredient" id = "${data.meals[i].strIngredient}">
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h2 class="">${data.meals[i].strIngredient}</h2>
        <div class="wrapper">
  <p class="myp">${data.meals[i].strDescription}</p>
</div>
        </div>
    </div>`;
    }
    $(".ingredients > .container > .row").html(cartona)
    $(".ingredient").on("click", function (e) {
        filterbying(e.currentTarget.id)
    })
}
async function filterbying(value) {
    var response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${value}`)
    var data = await response.json()
    console.log(data)
    let cartona = ``
    for (let i = 0; i < data.meals.length; i++) {
        cartona += `<div class="col-md-3  meal-open" id="${data.meals[i].idMeal}">
        <div class="category position-relative overflow-hidden text-center text-capitalize rounded pointer">
            <img src="${data.meals[i].strMealThumb}" alt="" class="w-100">
            <div class="overlay1 position-absolute">
                <h2 class="fw-bold text-center">${data.meals[i].strMeal}</h2>
            </div>
        </div>
    </div>`;
    }
    $(".ingredients > .container > .row").html(cartona)
    $(".meal-open").on("click", function (e) {
        openmeal(e.currentTarget.id)
    })
}
searchdata("s")