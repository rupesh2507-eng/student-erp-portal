const icon = document.querySelector(".heading i");
const panel = document.querySelector(".panel");
const dashboard = document.querySelector(".dashboard");

icon.addEventListener("click", () => {
    panel.classList.toggle("collapsed");
    dashboard.classList.toggle("reverse");
});


const date = document.querySelector("#date");
const check = document.querySelector("#check");

date.addEventListener("change", () => {
    if(date.value === "2026-09-05" ||
       date.value === "2026-09-06" ||
       date.value === "2026-09-12" ||
       date.value === "2026-09-13" ||
       date.value === "2026-09-19" ||
       date.value === "2026-09-20" ||
       date.value === "2026-09-26" ||
       date.value === "2026-09-27" ||
       date.value === "2026-10-03" ||
       date.value === "2026-10-04"){

       check.innerText = `Can't track Daily Punch Record because of Holiday`;
       check.style.color = "black";
       check.style.fontSize = "1.2rem";
    }
    else if(date.value === "2026-09-07" ||
            date.value === "2026-09-08" ||
            date.value === "2026-09-10" ||
            date.value === "2026-09-11" ||
            date.value === "2026-09-14" ||
            date.value === "2026-09-15" ||
            date.value === "2026-09-17" ||
            date.value === "2026-09-18" ||
            date.value === "2026-09-21" ||
            date.value === "2026-09-22" ||
            date.value === "2026-09-24" ||
            date.value === "2026-09-25" ||
            date.value === "2026-09-28" ||
            date.value === "2026-09-29" ||
            date.value === "2026-10-01" ||
            date.value === "2026-10-02"){

            check.innerText = `Present`;
            check.style.color = "green";
            check.style.fontSize = "2.5rem";
    }
    else if(date.value === "2026-09-09" ||
            date.value === "2026-09-16" ||
            date.value === "2026-09-23" ||
            date.value === "2026-09-30"){

            check.innerText = `Absent`;
            check.style.color = "red";
            check.style.fontSize = "2.5rem";
    }else{
        check.innerText = `Please Select a Date to check Your punch record...`;
    }
});