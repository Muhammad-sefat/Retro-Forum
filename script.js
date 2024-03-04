const getAllFetchData = async () =>{
    loadingBar(true);
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await response.json();
    const allData = data.posts;

    const cardContainer = document.getElementById('card-container');
    allData.forEach((item)=>{
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="flex flex-col md:flex-row items-center gap-5 bg-[#F3F3F5] rounded-xl p-5 mb-10">
                        <div class="relative md:w-[20%]">
                            <i class="fa-solid fa-circle right-0 -top-2  text-base absolute ${item.isActive?"text-green-700":"text-red-700"}"></i>
                            <img class="rounded-xl" src="${item.image}">
                        </div>
                        <div class = "md:w-[70%]">
                            <div class="flex items-center gap-8">
                                <p class="text-base font-medium">#${item.category}</p>
                                <p class="text-base font-medium">Author : ${item.author.name}</p>
                            </div>
                            <h2 id="title" class="text-2xl font-bold py-5">${item.title}</h2>
                            <p class="text-base text-[#666] leading-normal pb-3">${item. description}</p>
                            <hr class="border-dotted border border-gray-400 mb-4">
                            <div class="flex items-center justify-between gap-5">
                                <div class="flex">
                                    <div class="flex items-center pr-5">
                                        <i id="fa-regular" class="fa-regular fa-message text-base text-[#666] mr-2 font-medium"></i>
                                        <p class="text-base text-[#666] font-medium">${item.comment_count}</p>
                                    </div>
                                    <div class="flex items-center pr-5">
                                        <i class="fa-regular fa-eye text-base text-[#666] mr-2 font-medium"></i>
                                        <p  class="text-base text-[#666] font-medium">${item.view_count}</p>
                                    </div>
                                    <div class="flex items-center pr-5">
                                        <i class="fa-regular fa-clock text-base text-[#666] mr-2 font-medium"></i>
                                        <p  class="text-base text-[#666] font-medium">${item.posted_time} min</p>
                                    </div>
                                </div>
                                <p onclick="getData('${item.title.replace("'","")}',${item.view_count})"><i class="fa-regular fa-envelope bg-lime-600 text-white p-2 rounded-full"></i></p>
                            </div>
                        </div>

                    </div>
        `;
        cardContainer.appendChild(newDiv);
    }) 
    loadingBar(false);
}

const getAllLatestData = async ()=>{
    loadingBar(true);
    const response = await fetch(" https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await response.json();
    
    const latestCardContainer = document.getElementById("latest-card-container");

    data.forEach((item)=>{
        // console.log(item);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                        <figure><img src="${item.cover_image}" /></figure>
                        <div class="card-body">
                          <div class="flex items-center gap-3">
                            <i class="fa-solid fa-calendar-days"></i>
                            <p>${item.author.posted_date ? item.author.posted_date : "No Publish Date"}</p>
                          </div>
                          <h2 class="text-lg font-extrabold">${item.title}</h2>
                          <p class="text-[#666] py-1 font-medium">${item.description}</p>
                          <div class="flex gap-3">
                            <img class ="w-[30%] rounded-full" src="${item.profile_image}">
                            <div>
                                <h2 class="font-bold text-lg">${item.author.name}</h2>
                                <p class="text-[#666]">${item.author.designation ? item.author.designation : "Unknown"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
        `;
        latestCardContainer.appendChild(newDiv);
    })
    loadingBar(false);
}


function getData(title,view){
    // increse counter number
    const counterNumber = parseInt(document.getElementById('counter-number').innerText);
    const newCounterNumber = counterNumber + 1;
    addNumberElementById("counter-number",newCounterNumber);

    // append div
    const faRegular = document.getElementById('fa-regular');
    console.log(faRegular);
    const appendDiv = document.getElementById('append-div');
    const newDiv = document.createElement('div');
    newDiv.className = "flex justify-between bg-white p-3 rounded-lg mt-5";
    const p1 = document.createElement('p1');
    p1.className = "text-lg font-bold"
    const p2 = document.createElement('p2');
    p2.className = "text-lg text-[#666] font-bold";
    const p3 = document.createElement('p3');
    p3.className = "text-lg text-[#666] font-bold";
    p1.innerText = title;
    p2.innerHTML = `<i class="fa-regular fa-eye"></i>`
    p3.innerText = view;
    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);
    appendDiv.appendChild(newDiv);

}

const searchBtn = async ()=>{
    loadingBar(true);
    const inputBtn = document.getElementById('input-btn')
    const inputValueById = inputBtn.value;
    getCategoryById(inputValueById); 
}
const getCategoryById = async (inputValueById)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputValueById}`);
    const data = await response.json();
    const allData = data.posts;

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    allData.forEach((item)=>{
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="flex flex-col md:flex-row items-center gap-5 bg-[#F3F3F5] rounded-xl p-5 mb-10">
                        <div class="relative md:w-[20%]">
                            <i class="fa-solid fa-circle right-0 -top-2  text-base absolute ${item.isActive?"text-green-700":"text-red-700"}"></i>
                            <img class="rounded-xl" src="${item.image}">
                        </div>
                        <div class = "md:w-[70%]">
                            <div class="flex items-center gap-8">
                                <p class="text-base font-medium">#${item.category}</p>
                                <p class="text-base font-medium">Author : ${item.author.name}</p>
                            </div>
                            <h2 id="title" class="text-2xl font-bold py-5">${item.title}</h2>
                            <p class="text-base text-[#666] leading-normal pb-3">${item. description}</p>
                            <hr class="border-dotted border border-gray-400 mb-4">
                            <div class="flex items-center justify-between gap-5">
                                <div class="flex">
                                    <div class="flex items-center pr-5">
                                        <i id="fa-regular" class="fa-regular fa-message text-base text-[#666] mr-2 font-medium"></i>
                                        <p class="text-base text-[#666] font-medium">${item.comment_count}</p>
                                    </div>
                                    <div class="flex items-center pr-5">
                                        <i class="fa-regular fa-eye text-base text-[#666] mr-2 font-medium"></i>
                                        <p  class="text-base text-[#666] font-medium">${item.view_count}</p>
                                    </div>
                                    <div class="flex items-center pr-5">
                                        <i class="fa-regular fa-clock text-base text-[#666] mr-2 font-medium"></i>
                                        <p  class="text-base text-[#666] font-medium">${item.posted_time} min</p>
                                    </div>
                                </div>
                                <p onclick="getData('${item.title.replace("'","")}',${item.view_count})"><i class="fa-regular fa-envelope bg-lime-600 text-white p-2 rounded-full"></i></p>
                            </div>
                        </div>

                    </div>
        `;
        cardContainer.appendChild(newDiv);
    })
    loadingBar(false)
}

const loadingBar = (isLoding)=>{
    const loadingbar = document.getElementById('loading-bar');
   if(isLoding){
    loadingbar.classList.remove('hidden');
   }else{
    loadingbar.classList.add('hidden');
   }
}


function addNumberElementById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

getAllLatestData();
getAllFetchData();