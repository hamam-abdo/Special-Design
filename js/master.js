document.querySelector(".settings i").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".settings").classList.toggle("open");
};

let colors = document.querySelectorAll(".option li");
if (localStorage.color) {
  document.documentElement.style.setProperty("--hover", localStorage.color);
  colors.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color = "${localStorage.color}"]`)
    .classList.add("active");
}

colors.forEach((li) => {
  li.addEventListener("click", (e) => {
    colors.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.target.dataset.color);
    document.documentElement.style.setProperty("--hover", localStorage.color); // تغير متغير من روت
  });
});

let span = document.querySelectorAll(".option .Random span");
let bak;
localStorage.getItem("bak");
if (localStorage.bak === undefined) {
  localStorage.bak = true;
}

if (localStorage.bak) {
  span.forEach((li) => {
    li.classList.remove("active-2");
  });
  if (localStorage.bak === "true") {
    randam();
    document.querySelector(`[data-bak = "Yes"]`).classList.add("active-2");
  } else {
    document.querySelector(`[data-bak = "No"]`).classList.add("active-2");
  }
}

span.forEach((li) => {
  li.addEventListener("click", (e) => {
    span.forEach((li) => {
      li.classList.remove("active-2");
    });
    e.currentTarget.classList.add("active-2");

    if (e.target.dataset.bak == "Yes") {
      randam();
      localStorage.bak = true;
    } else {
      clearInterval(bak);
      localStorage.bak = false;
    }
  });
});



let landing = document.querySelector(".landing");

let imges = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function randam() {
  bak = setInterval(() => {
    let random = Math.floor(Math.random() * imges.length);

    landing.style.backgroundImage = 'url("imgs/' + imges[random] + '")';
  }, 4000);
}

let link = document.querySelectorAll(".link a");

link.forEach((li) => {
  li.addEventListener("click", (e) => {
    link.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

document.querySelector("nav i").onclick = function () {
  document.querySelector(".link").classList.toggle("top");
  let icon = ["fa-regular", "fa-circle-xmark", "fa-solid", "fa-bars"];
  for (let i = 0; i < icon.length; i++) {
    this.classList.toggle(icon[i]);
  }
};

let navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  let a3 = this.scrollY;
  let a = navbar.scrollHeight;

  if (a3 > a) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

let s = document.querySelector(".Skills");

window.addEventListener("scroll", () => {
  let a = s.offsetTop; //  المسافه اللى فوق عنصر
  let a1 = s.scrollHeight; // طول العنر
  let a2 = this.innerHeight; // طول صفحه كلها
  let a3 = this.scrollY; // المسافه اللى بنزلها بي اسكورال

  if (a3 >= a + a1 - a2) {
    document.querySelectorAll(".Skills span").forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
});

let r = document.querySelectorAll(".s");
r.forEach((i) => {
  i.classList.remove("s");

  window.addEventListener("scroll", () => {
    let t = i.offsetTop; //  المسافه اللى فوق عنصر
    let t1 = i.scrollHeight; // طول العنر
    let t2 = this.innerHeight; // طول صفحه كلها
    let t3 = this.scrollY; // المسافه اللى بنزلها بي اسكورال

    if (t3 >= t + t1 - t2) {
      link.forEach((li) => {
        li.classList.remove("active");
        if (i.className === li.innerHTML) {
          li.classList.add("active");
        }
      });
    }
    if (t3 < 400) {
      link.forEach((li) => {
        li.classList.remove("active");
      });
    }
  });
});

let Gallery = document.querySelectorAll(".Gallery img");
Gallery.forEach((img) => {
  img.addEventListener("click", (i) => {
    let ovr = document.createElement("div");
    ovr.className = "ovr";
    document.body.appendChild(ovr);
    let div = document.createElement("div");
    div.className = "ar-c";
    let h3 = document.createElement("h3");
    h3.textContent = img.alt;
    let imgs = document.createElement("img");
    imgs.src = img.src;
    let span = document.createElement("span");
    span.textContent = "x";
    div.appendChild(span);
    div.appendChild(h3);
    div.appendChild(imgs);
    document.body.appendChild(div);
    span.addEventListener("click", (i) => {
      ovr.remove();
      div.remove();
    });
  });
});


let bullets = document.querySelectorAll(".nav-bullets li")

bullets.forEach(b => {
  b.addEventListener("click", (e) => {
    document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
      behavior: "smooth"
    })
  })
})
let span2 = document.querySelectorAll(".option .Bullets span");
if (localStorage.dis) {
  span2.forEach((li) => {
    li.classList.remove("active-2");
  });
  document
    .querySelector(`[data-dis = "${localStorage.dis}"]`)
    .classList.add("active-2");
  if (localStorage.dis === "No") {
    document.querySelector(".nav-bullets").style.display = "none"
  }
}

span2.forEach((li) => {
  li.addEventListener("click", (e) => {
    span2.forEach((li) => {
      li.classList.remove("active-2");
    });
    e.currentTarget.classList.add("active-2");
    window.localStorage.setItem("dis", e.target.dataset.dis);
    if (e.target.dataset.dis === "No") {
      document.querySelector(".nav-bullets").style.display = "none"
    }else{
      document.querySelector(".nav-bullets").style.display = "block"
    }
  });
});


document.querySelectorAll("form [placeholder]").forEach(e=>{
  e.addEventListener("focus", (e) =>{
    e.currentTarget.setAttribute("data",e.currentTarget.getAttribute("placeholder"))
   e.currentTarget.setAttribute("placeholder" , "")
  })
  e.addEventListener("blur", (e) =>{
    
   e.currentTarget.setAttribute("placeholder" , e.currentTarget.getAttribute("data"))
   e.currentTarget.setAttribute("data" , "")
  })
})