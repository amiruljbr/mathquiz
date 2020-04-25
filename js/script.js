var jumlahsoalbenar = 0;
var questions = [
    {
        question: "(Benar/Salah) Puasa adalah rukun Islam ke-4",
        trueAnswer: "Benar"
    },
    {
        question: "(Benar/Salah) Rukun Iman ada 5",
        trueAnswer: "Salah"
    },
    {
        question: "(Benar/Salah) Tarawih saat bulan Ramadhan hukummnya Sunnah",
        trueAnswer: "Benar"
    },
    {
        question: "(Benar/Salah) Puasa pada tanggal 12 Dzulhijjah hukumnya Haram",
        trueAnswer: "Benar"
    },
    {
        question: "(Benar/Salah) Sahur adalah salah satu Rukun Puasa",
        trueAnswer: "Salah"
    },
    {
        question: "(Benar/Salah) Berbuka dengan Gorengan adalah buka puasa terbaik",
        trueAnswer: "Benar"
    },
];

var soal= document.getElementById("question");
var boxJawaban = document.getElementById("box-answer");

var answer1 = document.createElement("INPUT");
answer1.setAttribute("type","button");
answer1.style.padding = "10px";

var answer2 = document.createElement("INPUT");
answer2.setAttribute("type","button");
answer2.style.padding = "10px";

var mulailagi = document.getElementById("mulai");
var cln = mulailagi.cloneNode(true);

function startQuiz () {
    answer1.setAttribute("id","answer1");
    answer1.value = "Benar";
    answer1.setAttribute("onclick","checkAnswer('Benar')");
    boxJawaban.appendChild(answer1);

    answer2.setAttribute("id","answer2"); 
    answer2.value = "Salah";
    answer2.setAttribute("onclick","checkAnswer('Salah')");
    boxJawaban.appendChild(answer2);

    var txtQuestion = document.getElementById("question");
    txtQuestion.remove();

    var ques = document.createElement("p");
    ques.setAttribute("id", "question");
    var txt = document.createTextNode(questions[0].question);
    ques.appendChild(txt);

    var elem = document.getElementById("box-question")
    elem.appendChild(ques);

    var element = document.getElementById("mulai");
    element.parentNode.removeChild(element);
    localStorage.setItem('number_q', 0);
    jumlahsoalbenar=0;
}

function checkAnswer(ans) {
    var noQues = localStorage.getItem('number_q')

    if (ans === questions[noQues].trueAnswer) {
        jumlahsoalbenar++;
    }
    noQues++
    if (noQues > questions.length - 1) {
        var txtQuestion = document.getElementById("question")
        txtQuestion.remove()

        var boxans1 = document.getElementById("answer1")
        boxans1.parentNode.removeChild(boxans1)
        var boxans2 = document.getElementById("answer2")
        boxans2.parentNode.removeChild(boxans2)

        var ques = document.createElement("p")
        ques.setAttribute("id", "question")
        var txt = document.createTextNode('Score Anda:' + Math.round(jumlahsoalbenar/questions.length*100) + '. Klik "START!" untuk memulai Math Quiz.')
        ques.appendChild(txt)

        var elem = document.getElementById("box-question")
        elem.appendChild(ques)
        
        cln.setAttribute("id","mulai")
        elem.appendChild(cln)
    } else {
        localStorage.setItem('number_q', noQues)
        var txtQuestion = document.getElementById("question")
        txtQuestion.remove()

        var ques = document.createElement("p")
        ques.setAttribute("id", "question")
        var txt = document.createTextNode(questions[noQues].question)
        ques.appendChild(txt)

        var elem = document.getElementById("box-question")
        elem.appendChild(ques)

        document.getElementById("answer1").value = "Benar"
        document.getElementById("answer2").value = "Salah"
    }
}