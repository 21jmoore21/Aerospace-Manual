function openNav() {
    document.getElementById("myNav").style.width = "100%";
    clearNav();
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    clearNav();
}

function clearNav() {
    document.getElementById("overlay-column-2").innerHTML = "";
    document.getElementById("overlay-column-3").innerHTML = "";
    trackButton_1(null);
    trackButton_2(null);
    clear_column_1_underlines();
    clear_column_2_underlines();
}

function clear_column_1_underlines() {
    // Remove the 'underlined' class from all items
    const links = document.querySelectorAll('.overlay-column a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded');
      });
}

function setUnderline(clickedElement) {
    // Remove the 'underlined' class from all items
    const links = document.querySelectorAll('.overlay-column a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded');
      });
  
    // Add the 'underlined' class to the clicked item
    clickedElement.classList.add('underlined');

    // Fade out the unclicked items
    links.forEach(link => {
        if (link !== clickedElement) {
        link.classList.add('faded');
        }
    });
  }

function clear_column_2_underlines() {
    // Remove the 'underlined' class from all items
    const links = document.querySelectorAll('.overlay-column-2 a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded');
      });  
}

function setUnderline_2(clickedElement) {
    const links = document.querySelectorAll('.overlay-column-2 a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded');
      });  
  
    // Add the 'underlined' class to the clicked item
    clickedElement.classList.add('underlined');

    // Fade out the unclicked items
    links.forEach(link => {
        if (link !== clickedElement) {
        link.classList.add('faded');
        }
    });
  }

let lastClicked_1 = null;
let lastClicked_2 = null;

function trackButton_1(buttonName) {
    lastClicked_1 = buttonName;
}

function trackButton_2(buttonName) {
    lastClicked_2 = buttonName;
}

function aerospace_history() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='setUnderline_2(this); united_states_history()'>United States<i class='arrow_right'></i></a>" +
    "<a onclick='setUnderline_2(this); russia_history()'>Russia<i class='arrow_right'></i></a>" +
    "<a onclick='clearNav()' href='#'>Other</a>";

    var last_clicked_content = 'Aerospace History';
    const specialElement = document.getElementById('Aerospace History');


    if (lastClicked_1 == last_clicked_content) {
        document.getElementById("overlay-column-2").innerHTML = "";
        trackButton_1(null);
        clear_column_1_underlines();
    }
    else {
        document.getElementById("overlay-column-2").innerHTML = content;
        trackButton_1(last_clicked_content);
    }

    trackButton_2(null)
    document.getElementById("overlay-column-3").innerHTML = "";
}

function united_states_history() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Rocket History</a>" +
    "<a onclick='clearNav()' href='#'>Engine History</a>" +
    "<a onclick='clearNav()' href='#'>Astronaut History</a>" +
    "<a onclick='clearNav()' href='#'>Milestones</a>";

    var last_clicked_content = 'United States History';


    if (lastClicked_2 == last_clicked_content) {
        document.getElementById("overlay-column-3").innerHTML = "";
        trackButton_2(null);
        clear_column_2_underlines();
    }
    else {
        document.getElementById("overlay-column-3").innerHTML = content;
        trackButton_2(last_clicked_content);
    }    
}

function russia_history() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Rocket History</a>" +
    "<a onclick='clearNav()' href='#'>Engine History</a>" +
    "<a onclick='clearNav()' href='#'>Astronaut History</a>" +
    "<a onclick='clearNav()' href='#'>Milestones</a>";

    var last_clicked_content = 'Russian History';


    if (lastClicked_2 == last_clicked_content) {
        document.getElementById("overlay-column-3").innerHTML = "";
        trackButton_2(null);
        clear_column_2_underlines();
    }
    else {
        document.getElementById("overlay-column-3").innerHTML = content;
        trackButton_2(last_clicked_content);
    }    
}

function theory() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Basic Physics</a>" +
    "<a onclick='clearNav()' href='#'>Orbital Mechanics</a>" +
    "<a onclick='clearNav()' href='#'>Aerodynamics</a>" +
    "<a onclick='clearNav()' href='#'>Thermodynamics</a>" +
    "<a onclick='clearNav()' href='#'>Propulsion</a>" +
    "<a onclick='clearNav()' href='#'>Material Science</a>";

    var last_clicked_content = 'Theory';
    

    if (lastClicked_1 == last_clicked_content) {
        document.getElementById("overlay-column-2").innerHTML = "";
        trackButton_1(null);
        clear_column_1_underlines();
    }
    else {
        document.getElementById("overlay-column-2").innerHTML = content;
        trackButton_1(last_clicked_content);
    }

    trackButton_2(null)
    document.getElementById("overlay-column-3").innerHTML = "";
}

function rocket_components() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='setUnderline_2(this); propulsion_components()'>Propulsion<i class='arrow_right'></i></a>" +
    "<a onclick='setUnderline_2(this); structural_components()'>Structural<i class='arrow_right'></i></a>" +
    "<a onclick='setUnderline_2(this); payload_components()'>Payload<i class='arrow_right'></i></a>" +
    "<a onclick='setUnderline_2(this); gnc_components()'>Guidance, Navigation & Control<i class='arrow_right'></i></a>" +
    "<a onclick='setUnderline_2(this); ets_components()'>Environmental & Thermal Systems<i class='arrow_right'></i></a>";

    var last_clicked_content = 'Rocket Components';


    if (lastClicked_1 == last_clicked_content) {
        document.getElementById("overlay-column-2").innerHTML = "";
        trackButton_1(null);
        clear_column_1_underlines();;
    }
    else {
        document.getElementById("overlay-column-2").innerHTML = content;
        trackButton_1(last_clicked_content);
    }

    trackButton_2(null)
    document.getElementById("overlay-column-3").innerHTML = "";
}

function propulsion_components() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Rocket Engines</a>" +
    "<a onclick='clearNav()' href='#'>Propellant Tanks</a>";

    var last_clicked_content = 'Propulsion Components';


    if (lastClicked_2 == last_clicked_content) {
        document.getElementById("overlay-column-3").innerHTML = "";
        trackButton_2(null);
        clear_column_2_underlines();
    }
    else {
        document.getElementById("overlay-column-3").innerHTML = content;
        trackButton_2(last_clicked_content);
    }    
}

function structural_components() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Airframe</a>" +
    "<a onclick='clearNav()' href='#'>Interstages</a>";

    var last_clicked_content = 'Structural Components';


    if (lastClicked_2 == last_clicked_content) {
        document.getElementById("overlay-column-3").innerHTML = "";
        trackButton_2(null);
        clear_column_2_underlines();
    }
    else {
        document.getElementById("overlay-column-3").innerHTML = content;
        trackButton_2(last_clicked_content);
    }    
}

function payload_components() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Crew Modules</a>" +
    "<a onclick='clearNav()' href='#'>Cargo Resupply</a>" +
    "<a onclick='clearNav()' href='#'>Satellites</a>";

    var last_clicked_content = 'Payload Components';


    if (lastClicked_2 == last_clicked_content) {
        document.getElementById("overlay-column-3").innerHTML = "";
        trackButton_2(null);
        clear_column_2_underlines();
    }
    else {
        document.getElementById("overlay-column-3").innerHTML = content;
        trackButton_2(last_clicked_content);
    }    
}

function gnc_components() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Avionics</a>" +
    "<a onclick='clearNav()' href='#'>Stabilizers</a>";

    var last_clicked_content = 'GNC Components';


    if (lastClicked_2 == last_clicked_content) {
        document.getElementById("overlay-column-3").innerHTML = "";
        trackButton_2(null);
        clear_column_2_underlines();
    }
    else {
        document.getElementById("overlay-column-3").innerHTML = content;
        trackButton_2(last_clicked_content);
    }    
}

function ets_components() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Thermal Protection System</a>" +
    "<a onclick='clearNav()' href='#'>Insulation</a>";

    var last_clicked_content = 'ETS Components';


    if (lastClicked_2 == last_clicked_content) {
        document.getElementById("overlay-column-3").innerHTML = "";
        trackButton_2(null);
        clear_column_2_underlines();
    }
    else {
        document.getElementById("overlay-column-3").innerHTML = content;
        trackButton_2(last_clicked_content);
    }    
}

function engineering_roles() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='clearNav()' href='#'>Overview</a>" +
    "<a onclick='clearNav()' href='#'>Design Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Dynamics Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Electrical Engineering</a>" +
    "<a onclick='clearNav()' href='#'>GNC Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Manufacturing Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Materials Science & Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Payload Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Program Manager</a>" +
    "<a onclick='clearNav()' href='#'>Propulsion Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Quality Control</a>" +
    "<a onclick='clearNav()' href='#'>Software Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Structural Analysis</a>" +
    "<a onclick='clearNav()' href='#'>Systems Engineer</a>" +
    "<a onclick='clearNav()' href='#'>Test Engineering</a>" +
    "<a onclick='clearNav()' href='#'>Thermal Analysis</a>";

    var last_clicked_content = 'Engineering Roles';


    if (lastClicked_1 == last_clicked_content) {
        document.getElementById("overlay-column-2").innerHTML = "";
        trackButton_1(null);
        clear_column_1_underlines();
    }
    else {
        document.getElementById("overlay-column-2").innerHTML = content;
        trackButton_1(last_clicked_content);
    }

    trackButton_2(null)
    document.getElementById("overlay-column-3").innerHTML = "";
}