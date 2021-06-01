var category_key;
var Category_info_wall;
var Category_info_title;
var Category_info_IMG;

var sort_by_year_asc = true;
var sort_by_brand_asc = true;
var sort_by_date_asc = true;

var vehicles_filtered = [];

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

function sort_by_year(key)
{
  if(sort_by_year_asc)
  {
    vehicles_filtered.sort(dynamicsort("year",1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_year_asc = false;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_year_tab").innerHTML = `Year&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp^`;
  }else{
    vehicles_filtered.sort(dynamicsort("year",-1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_year_asc = true;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_year_tab").innerHTML = `Year&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspv`;
  }

  sort_by_brand_asc = true;
  sort_by_date_asc = true;
  if(document.getElementById("sort_brand_tab") != null)
  {
    document.getElementById("sort_brand_tab").innerHTML = `Brand`;
  }
  //Set back to initial page and refresh
  load_cars(key);
}

function sort_by_brand(key)
{
  if(sort_by_brand_asc)
  {
    vehicles_filtered.sort(dynamicsort("brand",1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_brand_asc = false;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_brand_tab").innerHTML = `Brand&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp^`;
  }else{
    vehicles_filtered.sort(dynamicsort("brand",-1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_brand_asc = true;
    //Set texts in tab by corresponding flag, initialize other tabs 
    document.getElementById("sort_brand_tab").innerHTML = `Brand&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspv`;
  }

  document.getElementById("sort_year_tab").innerHTML = `Year`;
  //Set back to initial page and refresh
  sort_by_year_asc = true;
  sort_by_date_asc = true;
  load_cars(key);
}

function sort_by_date(key)
{
  if(sort_by_date_asc)
  {
    vehicles_filtered.sort(dynamicsort("date",1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_date_asc = false;
    //Set texts in tab by corresponding flag
    document.getElementById("sort_date_tab").innerHTML = `Oldest`;
  }else{
    vehicles_filtered.sort(dynamicsort("date",-1));
    //Set sort_by_year_asc, initialize other two flags
    sort_by_date_asc = true;
    //Set texts in tab by corresponding flag
    document.getElementById("sort_date_tab").innerHTML = `Latest`;
  }

  document.getElementById("sort_year_tab").innerHTML = `Year`;
  if(document.getElementById("sort_brand_tab") != null){
    document.getElementById("sort_brand_tab").innerHTML = `Brand`;
  }
  sort_by_year_asc = true;
  sort_by_brand_asc = true;
  load_cars(key);
}

//Function for html buttons
function sort_by_year_onclick(){
  sort_by_year(category_key);
}

function sort_by_brand_onclick(){
  sort_by_brand(category_key);
}

function sort_by_date_onclick(){
  sort_by_date(category_key);
}

//Functions for Category Information Section
function get_category_info(key, value)
{
  Category_info_wall.src = `./${key}/${value}_wall.png`;
  Category_info_title.innerHTML = `${value}`;
  if(key == "country")
  {
    Category_info_title.innerHTML = `${countries[value]}`;
    Category_info_IMG.src = `./${key}/${value}_seal.png`;

    let Category_info_flag = document.createElement("img");
    Category_info_flag.setAttribute("id", "Category_info_flag");
    Category_info_flag.setAttribute("src", `./${key}/${value}.png`);
    document.getElementById("Category_info_background").appendChild(Category_info_flag);
  }else if(key == "series"){
    Category_info_title.innerHTML = `${series[value]}`;
    Category_info_IMG.src = `./${key}/${value}.png`;
  }else{
    Category_info_IMG.src = `./${key}/${value}.png`;
  }
  
  filter_cars(key,value);
  generate_boxes(key);
}

function filter_cars(key, value)
{
  switch(key){
    case "brand":
      for(let i = 0; i < vehicles.length;i++)
      {
        if(vehicles[i].brand == value)
        {
          vehicles_filtered.push(vehicles[i]);
        }
      }
      break;
    case "country":
      for(let i = 0; i < vehicles.length;i++)
      {
        if(vehicles[i].country == value)
        {
          vehicles_filtered.push(vehicles[i]);
        }
      }
      break;
    case "manufacturer":
      for(let i = 0; i < vehicles.length;i++)
      {
        if(vehicles[i].manufacturer == value)
        {
          vehicles_filtered.push(vehicles[i]);
        }
      }
      break;
    case "series":
      for(let i = 0; i < vehicles.length;i++)
      {
        if(vehicles[i].series !== undefined && vehicles[i].series.includes(value))
        {
          vehicles_filtered.push(vehicles[i]);
        }
      }
      break;
  }
  vehicles_filtered.sort(dynamicsort("year",1));
}

function generate_boxes(key)
{
  for(let i = 0;i < vehicles_filtered.length;i++)
  {
    let FG_box = document.createElement("div");
    FG_box.setAttribute("class", "FG_box");
    document.getElementById("Canvas").appendChild(FG_box);

    let img_title_link = document.createElement("a");
    img_title_link.setAttribute("class", "img_title_link");
    FG_box.appendChild(img_title_link);

    let img_title = document.createElement("P");
    img_title.setAttribute("class", "img_title");
    img_title_link.appendChild(img_title);

    if(key == "brand" || key == "series"){
      let img_tag = document.createElement("P");
      img_tag.setAttribute("class", "img_tag");
      FG_box.appendChild(img_tag);
    }else{
      let img_tag = document.createElement("img");
      img_tag.setAttribute("class", "img_tag");
      img_tag.style.marginBottom = "10px";
      FG_box.appendChild(img_tag);
    }

    let img_box = document.createElement("img");
    img_box.setAttribute("class", "img_box");
    FG_box.appendChild(img_box);
  }
  load_cars(key);
}

function load_cars(key)
{
  let img_title_link = document.querySelectorAll(".img_title_link");
  let img_title = document.querySelectorAll(".img_title");
  let img_tag = document.querySelectorAll(".img_tag");
  let img_box = document.querySelectorAll(".img_box");

  console.log(key);
  for(let i = 0; i < vehicles_filtered.length; i++)
  {
    img_title_link[i].href = `../Vehicles/vehicle_data.html?date=${vehicles_filtered[i].date}`;
    img_title[i].innerHTML = `${vehicles_filtered[i].name}`;
    if(key == `brand` || key == `series`)
    {
      img_tag[i].innerHTML = vehicles_filtered[i].year;
    }else{
      img_tag[i].src = `./Brand/${vehicles_filtered[i].brand}_small.png`;
    }
    img_box[i].src = `../Vehicles/${vehicles_filtered[i].date}/1.jpg`;
  }
}

url = new URL(window.location.href);
category_key = url.toString();
category_key = category_key.slice(category_key.indexOf('?')+1,category_key.indexOf('='));

window.onload = function(){
  url = new URL(window.location.href);
  category_key = url.toString();
  category_key = category_key.slice(category_key.indexOf('?')+1,category_key.indexOf('='));
  
  Category_info_wall = document.getElementById("Category_info_wall");
  Category_info_title = document.getElementById("Category_info_title");
  Category_info_IMG = document.getElementById("Category_info_img");

  if(category_key == "brand" || category_key == "series")
  {
    let to_be_removed = document.getElementById("sort_brand_tab");
    let remove = document.getElementById("sort_content").removeChild(to_be_removed);
  }
  
  get_category_info(category_key, url.searchParams.get(category_key));
}