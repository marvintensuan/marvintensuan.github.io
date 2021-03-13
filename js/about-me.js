let about = document.getElementById("about-me")

// Title
let title = document.createElement('h1')
title.className = "text-center mb-5"
title.innerText = "About Me"
about.append(title)

// Row1
let row1 = document.createElement('div')
row1.className = "row mx-auto"
// r1c1
let about_me_img = document.createElement('div')
about_me_img.className = "col-sm-6"

let unsplash = document.createElement('img')
unsplash.setAttribute('alt', 'image')
unsplash.className = "img-fluid w-75 h-75"
unsplash.setAttribute("id", "img-unsplash-1")
about_me_img.append(unsplash)

// r1c2
let about_me_txt = document.createElement('div')
about_me_txt.className = "col-sm-6 text-justify"

let p1 = document.createElement('p')
p1.innerText = "Hi, I'm Marvin!"
let p2 = document.createElement('p')
p2.innerHTML = "Professionally, I have made scripts and modules, focusing on languages such as Python and the Visual Basic family over the past <span id='work-xp'>_</span> years. Primarily, I have scripted for Microsoft Office (mostly Excel and Outlook) but notable mentions would include SAP GUI and SAP AO."
let p3 = document.createElement('p')
p3.innerText = "I have utilized Jupyter Notebooks for data analysis. This combined with pandas for data aggregation and segregation not just allow for reusable data analysis tools but also lets users focus on actual activities that provide value."
let p4 = document.createElement('p')
p4.innerText = "I also offer training materials geared towards Python beginners."
let p5 = document.createElement('p')
p5.innerText = "Outside of work, I've had my exposure in C and C++ to program for Arduino and Zigbee circuits, as well as NXT-G for Lego NXT. I have web development skills lean toward backend, especially on server-side rendering (Django, Flask). I am familiar with Google Cloud Platform."

about_me_txt.append(p1)
about_me_txt.append(p2)
about_me_txt.append(p3)
about_me_txt.append(p4)
about_me_txt.append(p5)
    
row1.append(about_me_img)
row1.append(about_me_txt)

about.append(row1)

let hrElement = document.createElement('hr')
about.append(hrElement)



