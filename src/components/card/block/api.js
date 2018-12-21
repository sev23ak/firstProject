import Layer4 from '../../../../project/Layer4.png';
import Layer5 from '../../../../project/Layer 5.png';
import Layer6 from '../../../../project/Layer 6.png';
import Layer8 from '../../../../project/Layer 8.png';
import Layer9 from '../../../../project/Layer 9.png';
import Layer10 from '../../../../project/Layer 10.png';
import RectangleGreen from '../../../../project/RectangleGreen.png';
import RectangleBlue from '../../../../project/RectangleDarkBlue.png';
import RectangleBlack from '../../../../project/RectangleBlack.png';
import RectangleRed from '../../../../project/RectangleRed.png';
import RectangleDarkBlue from '../../../../project/RectangleDarkBlue.png';
const api={
    layerThree:[
        {number:1,img:Layer10,rectangleImg:RectangleGreen,text:'“When life gives you lemons ask it for sugar and water too. Otherwise your final product would be some acidic lemon juice!”',data:'10 Dectember 2018 |',author:'Priyavrat Gupta',contentHead:'INTERESTING FACTS ABOUT LEMONS',content:'Lemons are native to Asia.Lemons are a hybrid between a sour orange and a citron.Lemons are rich in vitamin C.Lemons trees can produce up to 600lbs of lemons every year.Lemon trees produce fruit all year round.Lemon zest, grated rinds, is often used in baking.Lemon tree leaves can be used to make tea.The high acidity of lemons make them good cleaning aids.California and Arizona produces most of the United States’ lemon crop.The most common types of lemons are the Meyer, Eureka, and Lisbon lemons.'},
        {number:2,img:Layer4,rectangleImg:RectangleBlue,text:'“Some people dream of success, while other people get up every morning and make it happen.“',data:'10 Dectember 2018 |',author:'Wayne Huizenga',contentHead:'President Barack Obama aims to change people`s lives.',content:'Obama once held the highest office in the land — but he doesn`t equate power with success.At the 2012 Democratic National Convention, First Lady Michelle Obama told the audience that her husband "started his career by turning down high-paying jobs and instead working in struggling neighborhoods where a steel plant had shut down.She went on:"For Barack, success isn\'t about how much money you make. It\'s about the difference you make in people\'s lives."'},
        {number:3,img:Layer6,rectangleImg:RectangleBlack,text:'“You can not build a great building on a weak foundation. You must have a solid foundation if you are going to have a strong superstructure.“',data:' 10 Dectember 2018 |',author:'Gordon B. Hinckley',contentHead:'Tallest Building In The World (Burj Khalifa, United Arab Emirates - 2,717 Feet)',content:'At 2,717 ft, Dubai\'s Burj Khalifa is the tallest building in the world. Primarily constructed from steel and concrete, the building was designed by the same architects who were responsible for other famous super-talls like the Willis Tower in Chicago and One World Trade Center in New York City.'},
        {number:4,img:Layer8,rectangleImg:RectangleRed,text:'“Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.”',data:' 10 Dectember 2018 | ',author:'Mahatma Gandhi ',contentHead:'HOW DO WE FIND STARS IN THE SKY',content:'Some of the brighter stars appear to form groups in the sky, these we call constellations. Most constellations were named a very long time ago by the Greeks or Arabs. People thought they could see the shapes of animals or their gods and named the constellations after them. In most cases it is very hard to imagine how they saw the shape that the star pattern is supposed to represent but we still use the same names today.'},
        {number:5,img:Layer9,rectangleImg:RectangleRed,text:'“Together we can face any challenges as deep as the ocean and as high as the sky.“',data:' 10 Dectember 2018 | ',author:'Sonia Gandhi',contentHead:'Unbelievable Facts About the Ocean',content:'Our oceans cover more than 70 per cent of the Earth’s surface.The majority of life on Earth is aquatic.Less than five per cent of the planet’s oceans have been explored.The world’s longest mountain chain is underwater.There are more historic artefacts under the sea than in all of the world’s museums.We still only know a fraction of the marine species in our oceans. Over 70 per cent of our planet’s oxygen is produced by the ocean. '},
        {number:6,img:Layer5,rectangleImg:RectangleDarkBlue,text:'“In life, usually, even if you live in a big city, you can count on your fingers on one hand how many real friends you have; that is human.“',data:' 10 Dectember 2018 | ',author:'Rodrigo Santoro',contentHead:'The most populated cities in the world',content:'1. Tokyo, Japan - Although its population is predicted to begin declining, Tokyo is still projected to hold the top spot as the most populated city on earth until 2030. Modern, stylish and full of culture, Tokyo is one of the most captivating cities to live but also the most tightly packed. And, in a city of approximately 38,140,000 people, you are sure to have a hard time pushing through the crowds to get to your destination.'}
    ],
    all:function () {
        return this.layerThree;
    },
    get: function(id) {
        const isImage = p => p.number === id;
        return this.layerThree.find(isImage);
    }
};
export default api;