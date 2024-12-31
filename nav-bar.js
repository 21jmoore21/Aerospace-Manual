function set_base_nav_menu() {
    var content = "<div class='overlay-content'>" +
    "<a onclick='setUnderline(this); aerospace_history()' id='Aerospace History'>Aerospace History<i class='arrow_right'></i></a>" +
    "<a onclick='setUnderline(this); theory()'>Theory<i class='arrow_right'></i></a>" +
    "<a onclick='setUnderline(this); rocket_components()'>Rocket Components<i class='arrow_right'></i></a>" +
    "<a href='https://www.aerospacemanual.com/engineering_roles/home.html' onclick='setUnderline(this); closeNav()'>Aerospace Engineering Roles</a>" +
    "<a href='https://www.aerospacemanual.com/company_map/home.html' onclick='setUnderline(this); closeNav()'>Company Map</a>" +
    "<a href='https://www.aerospacemanual.com/Authors/home.html' onclick='setUnderline(this); closeNav()'>Authors</a>";

    document.getElementById("overlay-column").innerHTML = content;

    clearNav();
}

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/other/home.html'>Other</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/rocket_history.html'>Rocket History</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/engine_history.html'>Engine History</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/astronaut_history.html'>Astronaut History</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/milestones.html'>Milestones</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/rocket_history.html'>Rocket History</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/engine_history.html'>Engine History</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/astronaut_history.html'>Astronaut History</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/milestones.html'>Milestones</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/basic_physics/home.html'>Basic Physics</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/statics_dynamics/home.html'>Statics & Dynamics</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/mechanics/home.html'>Mechanics of Materials</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/thermo/home.html'>Thermodynamics</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/aero/home.html'>Aerodynamics</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/orbital/home.html'>Orbital Mechanics</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/propulsion/home.html'>Propulsion</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/propulsion/rocket_engines.html'>Rocket Engines</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/propulsion/prop_tanks.html'>Propellant Tanks</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/structural/airframe.html'>Airframe</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/structural/interstages.html'>Interstages</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/payload/cargo_resupply.html'>Cargo Resupply</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/payload/crew_modules.html'>Crew Modules</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/payload/satellites.html'>Satellites</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/gnc/avionics.html'>Avionics</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/propulsion/stabilizers.html'>Stabilizers</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/ets/tps.html'>Thermal Protection System</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/ets/insulation.html'>Insulation</a>";

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
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/home.html'>View All</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/design/home.html'>Design Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/dynamics/home.html'>Dynamics Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/electrical/home.html'>Electrical Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/fluid_dynamics/home.html'>Fluid Dynamics</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/gnc/home.html'>GNC Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/manufacturing/home.html'>Manufacturing Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/mse/home.html'>Materials Science & Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/payload/home.html'>Payload Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/program_manager/home.html'>Program Management</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/propulsion/home.html'>Propulsion Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/quality/home.html'>Quality Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/software/home.html'>Software Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/structural_analysis/home.html'>Structural Analysis</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/systems/home.html'>Systems Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/test/home.html'>Test Engineering</a>" +
    "<a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/thermal_analysis/home.html'>Thermal Analysis</a>";

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