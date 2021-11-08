const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//Element만들기, 이렇게 만들면 document에서는 찾을 수 없으나 생성은 된 것
//따라서 이것의 조작도 가능함 밑에 처럼 .src 지정하기


bgImage.src = `img/${chosenImage}`

//이제 이 element를 body 내부에 추가하기

document.body.appendChild(bgImage);
//이 .appendChild가 Element 집어 넣는 것, document.body 이 바디에.appendChild(어쩌구) 어쩌구를 집어넣는다

bgImage.id = "bgImg";
