var btn;
var roll_img;
var roll_img_description_title;
var roll_img_description;
var roll_img_dot;

var IMG_boxes;
var IMG_title_links;
var IMG_titles;
var IMG_tags;

var page_blank;
var page_selector_btn;
var page_num = 0;
var page_num_onsite;

var sort_by_year_asc = true;
var sort_by_brand_asc = true;
var sort_by_date_asc = true;

/*Sort Functions Section*/
function dynamicsort(key,order) {
  var sort_order = 1;
  if(order === -1){
    sort_order = -1;
  }
  return function (a, b){
      // a should come before b in the sorted order
      if(a[key] < b[key]){
        return -1 * sort_order;
      // a should come after b in the sorted order
      }else if(a[key] > b[key]){
        return 1 * sort_order;
      // a and b are the same
      }else{
        return 0 * sort_order;
      }
  }
}

function sort_by_year()
{
  if(sort_by_year_asc)
  {
    vehicles.sort(dynamicsort("year",1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_year_asc = false;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_year_tab").innerHTML = `Year&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp^`;
  }else{
    vehicles.sort(dynamicsort("year",-1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_year_asc = true;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_year_tab").innerHTML = `Year&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspv`;
  }
  //Initialize other elements
  sort_by_brand_asc = true;
  sort_by_date_asc = true;
  document.getElementById("sort_brand_tab").innerHTML = `Brand`;
  //Set back to initial page and refresh
  page_num = 0;
  change_page(1);
}

function sort_by_brand()
{
  if(sort_by_brand_asc)
  {
    vehicles.sort(dynamicsort("brand",1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_brand_asc = false;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_brand_tab").innerHTML = `Brand&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp^`;
  }else{
    vehicles.sort(dynamicsort("brand",-1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_brand_asc = true;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_brand_tab").innerHTML = `Brand&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspv`;
  }
  //Initialize other elements
  sort_by_year_asc = true;
  sort_by_date_asc = true;
  document.getElementById("sort_year_tab").innerHTML = `Year`;
  //Set back to initial page and refresh
  page_num = 0;
  change_page(1);
}

function sort_by_date()
{
  if(sort_by_date_asc)
  {
    vehicles.sort(dynamicsort("date",1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_date_asc = false;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_date_tab").innerHTML = `Oldest`;
  }else{
    vehicles.sort(dynamicsort("date",-1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_date_asc = true;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_date_tab").innerHTML = `Latest`;
  }
  //Initialize other elements
  sort_by_year_asc = true;
  sort_by_brand_asc = true;
  document.getElementById("sort_year_tab").innerHTML = `Year`;
  document.getElementById("sort_brand_tab").innerHTML = `Brand`;
  //Set back to initial page and refresh
  page_num = 0;
  change_page(1);
}

/*Rolling Image Function Section*/
var counter = 1;//counter for rolling images

function changeimg(num)
{
  let img = document.getElementById("roll_img");
  counter = num;
  switch(num)
  {
    case 1:
      //Switch image, title and description
      img.src = "./top_02.jpg";
      roll_img_description_title.innerHTML = "Eat, Sleep, JDM!";
      roll_img_description.innerHTML = "&nbsp&nbspThey say this is a picture with a collection of JDMs, or is it?";
      //Highlight corresponding dot
      roll_img_dot[0].style.background = "#888888";
      roll_img_dot[1].style.background = "#cccccc";
      roll_img_dot[2].style.background = "#888888";
      roll_img_dot[3].style.background = "#888888";
      break;
    case 2:
      //Switch image, title and description
      img.src = "./top_03.jpg";
      roll_img_description_title.innerHTML = "The Spirit of BMW";
      roll_img_description.innerHTML = "&nbsp&nbspAn elegant legacy of BMW 3 series. From the classic 2002 to F87 M2. Well, M2 IS the real M3!";
      //Highlight corresponding dot
      roll_img_dot[0].style.background = "#888888";
      roll_img_dot[1].style.background = "#888888";
      roll_img_dot[2].style.background = "#cccccc";
      roll_img_dot[3].style.background = "#888888";
      break;
    case 3:
      //Switch image, title and description
      img.src = "./top_04.jpg";
      roll_img_description_title.innerHTML = "昴宿, SUBARU WRX STI";
      roll_img_description.innerHTML = "&nbsp&nbspSubaru, which is Japanese stands for Pleiades, or Seven Sisters. While WRX STI are the brightest starts of them.";
      //Highlight corresponding dot
      roll_img_dot[0].style.background = "#888888";
      roll_img_dot[1].style.background = "#888888";
      roll_img_dot[2].style.background = "#888888";
      roll_img_dot[3].style.background = "#cccccc";
      break;
    case 4:
      //Switch image, title and description
      img.src = "./top_01.jpg";
      roll_img_description_title.innerHTML = "DRAG!";
      roll_img_description.innerHTML = "&nbsp&nbspA drag race between a Toyota rocketbunny A80 Supra and Luigi's rusty-looking 1956 Ford F-100 pickup. Who's gonna win?";
      //Highlight corresponding dot
      roll_img_dot[0].style.background = "#cccccc";
      roll_img_dot[1].style.background = "#888888";
      roll_img_dot[2].style.background = "#888888";
      roll_img_dot[3].style.background = "#888888";
      break;
  }
}

function changeimg_by_Time()
{
  if(counter == 4)
  {
    counter = 1;
  }else{
    counter++;
  }
  changeimg(counter);
}

function sayhello(name){
  alert(`Name: ${name}`);
}

//Functions for showing items
function load_cars(page){
  for(let i = 0; i < 12; i++)
  {
    if ((page*12+i) < vehicles.length)
    {
      let name = vehicles[page*12+i].name;
      let tag = vehicles[page*12+i].brand;
      let date = vehicles[page*12+i].date;

      IMG_boxes[i].src=`./Vehicles/${date}/1.jpg`;
      IMG_tags[i].src=`./Categories/Brand/${tag}_small.png`;
      IMG_titles[i].innerHTML = `${name}`;

      IMG_title_links[i].href = `./Vehicles/vehicle_data.html?date=${date}`;

    }else{
      IMG_boxes[i].src=`./Vehicles/pioneer.png`;
      IMG_tags[i].src=`./Categories/Country/roc.png`;
      IMG_titles[i].innerHTML = `Up to Date`;
    }
  }
}

//Functions to support pages
function check_btn_exist(page_num)
{
  if(page_num == 0)
  {
    document.getElementById("previous_btn").style.visibility = "hidden";
    document.getElementById("next_btn").style.visibility = "visible";
  }else if(page_num >= vehicles.length / 12 - 1){
    document.getElementById("previous_btn").style.visibility = "visible";
    document.getElementById("next_btn").style.visibility = "hidden";
  }else{
    document.getElementById("previous_btn").style.visibility = "visible";
    document.getElementById("next_btn").style.visibility = "visible";
  }
}

function change_page(order)
{
  if(order == "back")
  {
    if(page_num > 0)
    {
      page_num--;
    }
  }else if(order == "next"){
    if(page_num < vehicles.length / 12 - 1)
    {
      page_num++;
    }
  }else{
    page_num = order-1;
  }
  page_num_onsite.innerHTML = `${page_num+1}`;
  check_btn_exist(page_num);
  load_cars(page_num);
}

function change_page_by_btn(){
  if(page_blank.value != "")
  {
    change_page(Number(page_blank.value));
  }
}

window.onload = function(){
  roll_img = document.getElementById("roll_img");
  roll_img_description_title = document.getElementById("roll_img_description_title");
  roll_img_description = document.getElementById("roll_img_description");
  roll_img_dot = document.querySelectorAll(".roll_img_dot");
  
  roll_img.addEventListener("click", changeimg);
  roll_img_description.innerHTML = "&nbsp&nbspA drag race between a Toyota rocketbunny A80 Supra and Luigi's rusty-looking 1956 Ford F-100 pickup. Who's gonna win?";
  roll_img_dot[0].style.background = "#cccccc";

  IMG_boxes = document.querySelectorAll(".img_box");
  IMG_title_links = document.querySelectorAll(".img_title_link");
  IMG_titles = document.querySelectorAll(".img_title");
  IMG_tags = document.querySelectorAll(".img_tag");
  
  page_num_onsite = document.getElementById("Page_number");

  page_blank = document.getElementById("Page_blank");
  page_selector_btn = document.getElementById("Page_selector_btn");
  page_selector_btn.addEventListener("click",change_page_by_btn,false);
  check_btn_exist(page_num);
  load_cars(page_num);

  btn = document.getElementById("btn");
  btn.addEventListener("click", sayhello);
}

setInterval(changeimg_by_Time, 9000);

async function getusername(){
  try{
    let username = await fetch("https://jsonplaceholder.typicode.com/users");
    username = await username.json();
    console.log(username);
  }catch(err){
    console.log(`Error; ${err}`);1
  }
}
getusername();