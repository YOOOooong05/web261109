
// script.js : 내 영화 평점 통계
//  용연승(2651042)

const titles = [
    "Spider-Man: Across the Spider-Verse",
    "Spider-Man: Brand New Day",
    "Spider-Man: No Way Home",
    "Spider-Man 3",
    "Spider-Man"
];
const ratings = [8.3, 8.5, 7.9, 6.4, 7.3];
const years = [2023, 2026, 2021, 2007, 2002];

(function init(){
    console.log("나는 함수다. 실행이 되었다");
})();

let sum = 0;

for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}

console.log("합계:", sum);


const average = sum / ratings.length;
console.log("평균:", average);


let max = ratings[0];
let maxIndex = 0;


let count = 0;

for (let i = 0; i < ratings.length; i++) {

    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }

    if (ratings[i] >= 8) {
        count++;
    }

    
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(
        titles[i] + " (" + years[i] + ") : " +
        ratings[i] + " " + label
    );
}


console.log("최고:", titles[maxIndex], max);


console.log("8점 이상:", count + "편");


const avgText = average.toFixed(1);
const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

/*document.write("외부 스크립트 방법");

console.log("여기 부분은 웹페이지가 아니라 콘솔에 출력이 됩니다.");

let dan = 3;

console.log('**"구구단" 3단**');
for(let i=1; i <=9; i++) {
    console.log('${dan} x ${i} = ${dan*i}');
}


if(dan === 3) {
    console.log("3단이 맞습니다.");
}else{
    console.log("틀렸습니다.");
}

let arr = [80, 70, 90 , 60];
console.log(arr);
console.log(arr[2]);

let stdScore = {
    korean : 80,
    english : 70,
    math : 90,
    science : 60
};
console.log(stdScore);
console.log(stdScore.math);
stdScore.name = "홍길동";
console.log(stdScore);*/