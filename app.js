// Single Page View Layer Controller System
function switchView(event, targetViewId) {
    // 1. Prevent standard browser anchor tag interaction logic if called via event
    if (event) {
        event.preventDefault();
    }
    
    // 2. Locate all interface stack layers and top navigation buttons
    const layers = document.querySelectorAll('.view-layer');
    const navLinks = document.querySelectorAll('.nav-trigger');
    
    // 3. Deactivate current active states
    layers.forEach(layer => {
        layer.classList.remove('active-layer');
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-nav');
    });

    // 4. Reveal the targeted layer instantly inside the dynamic window frame
    const targetLayer = document.getElementById(`view-${targetViewId}`);
    if (targetLayer) {
        targetLayer.classList.add('active-layer');
    }

    // 5. Match and highlight the structural nav button text link element
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active-nav');
    } else {
        // Fallback finder strategy to bind links mapped through contextual quick badges
        document.querySelectorAll('.nav-trigger').forEach(link => {
            if (link.getAttribute('onclick').includes(`'${targetViewId}'`)) {
                link.classList.add('active-nav');
            }
        });
    }
    
    // Auto collapse responsive sidebar menu drawer when links are executed
    closemenu();
}

// Internal Technical Knowledge Tab Elements Selector Engine
function opentab(event, tabname) {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Cellular Breakpoint Responsive Push-Menu Toggle Operators
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Client Side Form Data Interceptor Execution
const contactForm = document.forms['contact-form'];
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert("Thank you! Your system submission message has been successfully recorded.");
        contactForm.reset();
    });
}