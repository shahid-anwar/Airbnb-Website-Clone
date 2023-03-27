let responseJSON;
const WebsiteAPI = async () => {
  const response = await fetch(url);
  responseJSON = await response.json();
  //fakeAPIResponse = await response.json();
  console.log(responseJSON);
  //return fakeAPIResponse;
};
WebsiteAPI();

const AirbnbAPI = [
    {
      id: 1,
      placename: "Jibhi, India",
      price: "Rs 5,705 night",
      description:"1473 kilometres away",
      time:"23-28 April",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-42619024/original/bb160741-3b28-46ed-b702-1de547fc47d9.jpeg?im_w=720",
      favourite:" ./assets/image/fav1.png ",
      rating:{
        rate:4.91,  
        star:"./assets/image/star.png",
      }
    },
    {
      id: 2,
      placename: "Jibhi, India",
      price: "Rs 6,846 night",
      description:"1943 Kilometres away",
      time:"21-26 May",
      image: "https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720" ,
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.32,  
        star:"./assets/image/star.png",
      }
    },
   
    {
      id: 3,
      placename: "Hemmathagama, Sri Lanka",
      price: "Rs 28,295 night",
      description:"1,552 Kilometres away",
      time:"1-6 April",
      image: "https://a0.muscache.com/im/pictures/d3b2b902-6143-46e1-90fc-f6eee6f66e42.jpg?im_w=720" ,
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.5,  
        star:"./assets/image/star.png",
      }
      
    },
     
    {
      id: 4,
      placename: "Dehradun, India",
      price: "Rs 22,824 night",
      description:"1,373 Kilometres away",
      time:"1-6 April",
      image: "https://a0.muscache.com/im/pictures/52e03dbc-c135-4c0d-975c-4781823a3b0d.jpg?im_w=720" ,
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.4,  
        star:"./assets/image/star.png",
      }
      
    },

    {
      id: 5,
      placename: "Mae Taeng, Thailand",
      price: "Rs 5,792 night",
      description:"2,740 Kilometres away",
      time:"1-6 April",
      image: "https://a0.muscache.com/im/pictures/5813338/7c1c4f7c_original.jpg?im_w=720" ,
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.6,  
        star:"./assets/image/star.png",
      }  
    },
    {
      id: 6,
      placename: "Ko Pha-ngan District, Thailand",
      price: "Rs 1,37,427 night",
      description:"3092 Kilometres away",
      time:"1-6 April",
      image: "https://a0.muscache.com/im/pictures/93a253aa-eb7b-4c0b-b099-af47b2a88e8d.jpg?im_w=720",
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.15,  
        star:"./assets/image/star.png",
      }  
    },
    {
      id: 7,
      placename: "Muppainad,India",
      price: "Rs 9000 night",
      description:"903 Kilometres away",
      time:"1-6 April",
      image: "https://a0.muscache.com/im/pictures/8be6905f-d7a7-4e30-9f50-2bdc36d6cad3.jpg?im_w=720",
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.3,  
        star:"./assets/image/star.png",
      } 
    },
    {
      id: 8,
      placename: "Khaothong Muang Krabi, Thailand",
      price: "Rs 6,596 night",
      description:"3043 Kilometres away",
      time:"11-16 April",
      image: "https://a0.muscache.com/im/pictures/100f76ad-ddf3-4f46-9fd4-15ea00b6bbd9.jpg?im_w=720",
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.2,  
        star:"./assets/image/star.png",
      } 
    },
    {
      id: 9,
      placename: "Kottathara, India",
      price: "Rs 7,302 night",
      description:"884 Kilometres away",
      time:"12-17 April",
      image: "https://a0.muscache.com/im/pictures/c59d4481-f48a-43db-ade2-1df5689b725f.jpg?im_w=720",
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.06,  
        star:"./assets/image/star.png",
      }

    },
    {
      id: 10,
      placename: "Hai Ya, Thailand",
      price: "Rs 10,994 night",
      description:"2,750 Kilometres away",
      time:"5-10 May",
      image: "https://a0.muscache.com/im/pictures/31015e06-a621-4591-a724-f2f75ff2e376.jpg?im_w=720",
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:4.82,  
        star:"./assets/image/star.png",
      } 
    },
    {
      id: 11,
      placename: "Ellmau, Austria",
      price: "Rs 27,239 night",
      description:"6,266 Kilometres away",
      time:"6-13 May",
      image: "https://a0.muscache.com/im/pictures/e8b6e3c2-df2e-4b9c-913c-c21c83b10426.jpg?im_w=720 ",
      favourite:"./assets/image/fav1.png",
      rating:{
      rate:4.96,  
      star:"./assets/image/star.png",
    }
    },
    {
      id: 12,
      placename: "Samnaun, Switzerland",
      price: "Rs 20,627 night",
      description:"6,403 Kilometres away",
      time:"1-6 April",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-44242507/original/7d7e6816-ee7a-42b7-8644-293ebb967417.jpeg?im_w=720 ",
      favourite:"./assets/image/fav1.png",
      rating:{
        rate:5.0,  
        star:"./assets/image/star.png",
      } 
       
    },





]


const cardContainer=document.getElementById("section-container");
for(let i=0;i<AirbnbAPI.length;i++){
  const mainCardContainer=document.createElement("div");
  mainCardContainer.className="container-css";


  // const namerating=document.createElement("div");
  // namerating.className="name-rating";

  const placename=document.createElement("p");
  placename.className="hotels-name";
  const rating=document.createElement("span");
  rating.className="hotels-rating";
  const ratingStar=document.createElement("img");
  ratingStar.className="hotels-ratingStar";
  ratingStar.src=AirbnbAPI[i].rating.star;
  const price=document.createElement("p");
  price.className="hotels-price";
  const description=document.createElement("p");
  description.className="hotels-description"
  const time=document.createElement("p");
  time.className="hotels-time";
  const image=document.createElement("img");
  image.src=AirbnbAPI[i].image;
  image.className="hotels-image";
  const favourite=document.createElement("img")
  favourite.src=AirbnbAPI[i].favourite;
  favourite.className="hotels-fav";
 
  

  
  placename.textContent=AirbnbAPI[i].placename;
  price.textContent=AirbnbAPI[i].price;
  description.textContent=AirbnbAPI[i].description;
  time.textContent=AirbnbAPI[i].time;
  image.textContent=AirbnbAPI[i].image;
  favourite.textContent=AirbnbAPI[i].favourite;
  rating.textContent=AirbnbAPI[i].rating.rate;
  ratingStar.textContent=AirbnbAPI[i].rating.star;
  // namerating.textContent=placename,rating;

  mainCardContainer.appendChild(image);
  mainCardContainer.appendChild(favourite);
  // mainCardContainer.appendChild(namerating);
  mainCardContainer.appendChild(placename);
  mainCardContainer.appendChild(ratingStar);
  mainCardContainer.appendChild(rating);
  mainCardContainer.appendChild(description);
  mainCardContainer.appendChild(time);
  mainCardContainer.appendChild(price);

cardContainer.appendChild(mainCardContainer);
}

  
 
