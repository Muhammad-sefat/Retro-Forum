const getAllFetchData = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await response.json();
    const allData = data.posts;

    const cardContainer = document.getElementById('card-container');

    allData.forEach((item)=>{
        console.log(item);
        const newDiv = document.createElement('div');
        newDiv.className = "mb-10"
        newDiv.innerHTML = `
        <div class="flex flex-col md:flex-row items-center gap-5 bg-[#F3F3F5] rounded-xl p-5 mb-10">
                        <div class="relative md:w-[20%]">
                            <i class="fa-solid fa-circle text-xs -left-1 absolute text-lime-700"></i>
                            <img class="rounded-xl" src="${item.image}">
                        </div>
                        <div class = "md:w-[70%]">
                            <div class="flex items-center gap-8">
                                <p class="text-base font-medium">#${item.category}</p>
                                <p class="text-base font-medium">Author : ${item.author.name}</p>
                            </div>
                            <h2 class="text-2xl font-bold py-5">${item.title}</h2>
                            <p class="text-base text-[#666] leading-normal pb-3">${item. description}</p>
                            <hr class="border-dotted border border-gray-400 mb-4">
                            <div class="flex items-center justify-between gap-5">
                                <div class="flex">
                                    <div class="flex items-center pr-5">
                                        <i class="fa-regular fa-message text-base text-[#666] mr-2 font-medium"></i>
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
                                <i class="fa-regular fa-envelope bg-lime-600 text-white p-2 rounded-full"></i>
                            </div>
                        </div>

                    </div>
        `;
        cardContainer.appendChild(newDiv);
    })
}
getAllFetchData();