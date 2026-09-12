const icon = document.querySelector(".heading i");
const panel = document.querySelector(".panel");
const dashboard = document.querySelector(".dashboard");

icon.addEventListener("click", () => {
    panel.classList.toggle("collapsed");
    dashboard.classList.toggle("reverse");
});

const days = document.querySelector("#day");
const sub = document.querySelector(".sub");

days.addEventListener("change", () => {
    if(days.value === "Monday"){
        sub.innerText = `CSA(Tutorial)_____10:25-11:20____R-307
                         DBMS___________11:20-12:15____R-204
                         CSA_____________12:15-01:10____R-204
                         LUNCH__________01:10-02:00
                         DCN_____________02:00-2:50____R-204
                         OS______________02:50-03:40____R-204`;
    }else if(days.value === "Tuesday"){
        sub.innerText = `CSA________10:25-11:20____R-304
                         DCN________11:20-12:15____R-304
                         NCC________12:15-01:10____R-304
                         LUNCH_____01:10-02:00
                         DBMS_______02:00-2:50____R-204
                         OS__________02:50-03:40____R-204`;
    }else if(days.value === "Wednesday"){
        sub.innerText = `WD_____________10:25-11:20____R-204
                         OS______________11:20-12:15____R-204
                         LUNCH__________12:15-01:10
                         PROJECT(LAB)___01:10-02:00____L-C8
                         DBMS(LAB)______02:00-03:40____L-C7`;
    }else if(days.value === "Thrusday"){
        sub.innerText = `DCN___________10:25-11:20____R-204
                        WD____________11:20-12:15____R-204
                        LUNCH_________12:15-01:10
                        CSA____________01:10-02:00____R-204
                        WD(LAB)_______02:00-03:40____L-C8`;
    }else if(days.value === "Friday"){
        sub.innerText = `OS(Tutorial)_______10:25-11:20____R-307
                        DBMS____________11:20-12:15____R-204
                        LUNCH___________12:15-01:10
                        PROJECT(LAB)____01:10-02:00____L-C3
                        DCN_____________02:00-02:50____R-204
                        WD______________02:50-03-40____R-204`;
    }else if(days.value === "Saturday"){
        sub.innerText = `It's Holiday! Enjoy....`
    }else if(days.value === "Sunday"){
        sub.innerText = `It's Holiday! Enjoy....`
    }else{
        sub.innerText = `Please Select A Day!!`
    }
})