const faqData = [
    {
        id: 1,
        question: "Who are we?",
        answer:
            "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
        id: 2,
        question: "What do we do?",
        answer:
            "Building learning communities with Our Affordable & Competent Courses",
    },
    {
        id: 3,
        question: "Are the community classes boring?",
        answer: "No, not at all!!!",
    },
];

const accordianBody = document.getElementsByClassName("accordian_body")[0];
const faqs = [];

function showFaq() {

    faqData.forEach((val) => {

        // Creating Element 
        let faq_header = document.createElement("div");
        let faq_element = document.createElement("div");

        faq_header.classList.add("faq");
        faq_element.classList.add("faq_header");


        let create_h3 = document.createElement("h3");
        let show_btn = document.createElement("button");
        let answer = document.createElement("p");
        answer.classList.add("hidden")

        show_btn.classList.add("show_btn")

        answer.innerHTML = val["answer"]
        quection = val["question"]
        create_h3.innerHTML = quection
        faq_element.appendChild(create_h3)
        faq_element.appendChild(show_btn)



        faq_header.appendChild(faq_element)
        faq_header.appendChild(answer)

        accordianBody.appendChild(faq_header)

        show_btn.innerHTML = "+"
        show_btn.style.textAlign = "center"
        show_btn.addEventListener("click", () => {
            btnStatusUpdate(answer, show_btn)
        })
    })

}

function createFaq() {

}

function btnStatusUpdate(ans, show_btn) {
    ans.classList.toggle("hidden");
    let btn_cls = show_btn;
    if (btn_cls.innerHTML == "+") {
        btn_cls.innerHTML = "-"
    }
    else {
        btn_cls.innerHTML = "+"

    }
}





showFaq()