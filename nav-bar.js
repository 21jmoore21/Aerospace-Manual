function set_base_nav_menu() {
    var content = "<div class='overlay-content'>" +

    "<div class='nav_group'><a href='https://www.aerospacemanual.com/aerospace_history/home.html' onclick='closeNav()'>Aerospace History</a>" +
    "<i onclick='setUnderline(this); aerospace_history()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a href='https://www.aerospacemanual.com/theory/home.html' onclick='closeNav()'>Theory</a>" +
    "<i onclick='setUnderline(this); theory()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a href='https://www.aerospacemanual.com/rocket_components/home.html' onclick='closeNav()'>Rocket Components</a>" + 
    "<i onclick='setUnderline(this); rocket_components()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a href='https://www.aerospacemanual.com/engineering_roles/home.html' onclick='closeNav()'>Aerospace Engineering Roles</a>" +
    "<i onclick='setUnderline(this); engineering_roles()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a href='https://www.aerospacemanual.com/company_map/home.html' onclick='closeNav()'>Company Map</a></div>" +

    "<div class='nav_group'><a href='https://www.aerospacemanual.com/authors/home.html' onclick='closeNav()'>Authors</a></div>";

    document.getElementById("overlay-column").innerHTML = content;

    clearNav();
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    clearNav();
  }

function closeNav() {
    // Assuming there's only one close button, otherwise target a specific index (e.g., closeBtn[0])
    let closeBtn = document.getElementsByClassName('closebtn')[0];
    
    // Add the rotate class to the close button
    closeBtn.classList.add('rotate');
    
    // Close the navigation menu by changing its width
    document.getElementById("myNav").style.width = "0%";
    
    // Clear the navigation after the animation completes
    setTimeout(clearNav, 400);
}

function clearNav() {
    document.getElementById("overlay-column-2").innerHTML = "";
    document.getElementById("overlay-column-3").innerHTML = "";
    trackButton_1(null);
    trackButton_2(null);
    clear_column_1_underlines();
    clear_column_2_underlines();

    // Remove rotation
    let closeBtn = document.getElementsByClassName('closebtn')[0];
    closeBtn.classList.remove('rotate');
}

function clear_column_1_underlines() {
    // Remove the 'underlined', 'faded', and 'highlighted' classes from all items
    const links = document.querySelectorAll('.overlay-column i, .overlay-column a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded', 'highlighted');
    });
}

function setUnderline(clickedElement) {
    // Find the parent div with class 'nav_group' for the clicked element
    const navGroup = clickedElement.closest('.nav_group');
    
    // Select all child elements inside the nav_group
    const children = navGroup.querySelectorAll('*');
    
    // Remove the 'underlined', 'faded', and 'highlighted' classes from all items
    const links = document.querySelectorAll('.overlay-column i, .overlay-column a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded', 'highlighted');
    });

    // Apply the 'highlighted' class to the clicked element
    clickedElement.classList.add('highlighted');

    // Fade out all <a> elements in other .nav_group divs, not in the current navGroup
    const allNavGroups = document.querySelectorAll('.overlay-column .nav_group');
    allNavGroups.forEach(group => {
        if (group !== navGroup) {
            const linksInOtherGroups = group.querySelectorAll('a');
            linksInOtherGroups.forEach(link => {
                link.classList.add('faded');
            });
        }
    });

    // Apply the 'highlighted' class to all child elements inside nav_group
    children.forEach(child => {
        child.classList.add('highlighted');
    });

    resetScroll_column2();
    resetScroll_column3();
}

function resetScroll_column1() {
    document.getElementById('overlay-column').scrollTop = 0;
  }

function resetScroll_column2() {
    document.getElementById('overlay-column-2').scrollTop = 0;
  }

function resetScroll_column3() {
    document.getElementById('overlay-column-3').scrollTop = 0;
  }

function clear_column_2_underlines() {
    // Remove the 'underlined' class from all items
    const links = document.querySelectorAll('.overlay-column-2 i, .overlay-column-2 a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded', 'highlighted');
      });  
}

function setUnderline_2(clickedElement) {
    // Find the parent div with class 'nav_group' for the clicked element
    const navGroup = clickedElement.closest('.nav_group');
    
    // Select all child elements inside the nav_group
    const children = navGroup.querySelectorAll('*');
    
    // Remove the 'underlined', 'faded', and 'highlighted' classes from all items
    const links = document.querySelectorAll('.overlay-column-2 i, .overlay-column-2 a');
    links.forEach(link => {
        link.classList.remove('underlined', 'faded', 'highlighted');
    });

    // Apply the 'highlighted' class to the clicked element
    clickedElement.classList.add('highlighted');

    // Fade out all <a> elements in other .nav_group divs, not in the current navGroup
    const allNavGroups = document.querySelectorAll('.overlay-column-2 .nav_group');
    allNavGroups.forEach(group => {
        if (group !== navGroup) {
            const linksInOtherGroups = group.querySelectorAll('a');
            linksInOtherGroups.forEach(link => {
                link.classList.add('faded');
            });
        }
    });

    // Apply the 'underlined' class to all child elements inside nav_group
    children.forEach(child => {
        child.classList.add('highlighted');
    });

    resetScroll_column3();
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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/home.html'>United States</a>" + 
    "<i onclick='setUnderline_2(this); united_states_history()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/home.html'>Russia</a>" + 
    "<i onclick='setUnderline_2(this); russia_history()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/other/home.html'>Other</a></div>";

    var last_clicked_content = 'Aerospace History';


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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/rocket_history.html'>Rocket History</a></div>" +
    
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/engine_history.html'>Engine History</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/astronaut_history.html'>Astronaut History</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/united_states/milestones.html'>Milestones</a></div>";

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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/rocket_history.html'>Rocket History</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/engine_history.html'>Engine History</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/astronaut_history.html'>Astronaut History</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/aerospace_history/russia/milestones.html'>Milestones</a></div>";

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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/math/home.html'>Math</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/physics/home.html'>Physics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/statics/home.html'>Statics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/dynamics/home.html'>Dynamics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/mse/home.html'>Materials Science</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/mechanics/home.html'>Mechanics of Materials</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/thermo/home.html'>Thermodynamics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/fluids/home.html'>Fluid Dynamics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/heat_transfer/home.html'>Heat Transfer</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/aero/home.html'>Aerodynamics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/orbital/home.html'>Orbital Mechanics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/role_specific/home.html'>Role Specific</a>" +
    "<i onclick='setUnderline_2(this); role_specific()' class='arrow_right'></i></div>";

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

function role_specific() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/role_specific/dynamics/home.html'>Dynamics Engineering</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/role_specific/fluids/home.html'>Fluid Dynamics</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/role_specific/mse/home.html'>Materials Science & Engineering</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/role_specific/propulsion/home.html'>Propulsion Engineering</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/role_specific/structural_analysis/home.html'>Structural Analysis</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/theory/role_specific/thermal_analysis/home.html'>Thermal Analysis</a></div>";

    var last_clicked_content = 'Role Specific';


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

function rocket_components() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/propulsion/home.html'>Propulsion</a>" +
    "<i onclick='setUnderline_2(this); propulsion_components()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/structural/home.html'>Structural</a>" +
    "<i onclick='setUnderline_2(this); structural_components()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/payload/home.html'>Payload</a>" +
    "<i onclick='setUnderline_2(this); payload_components()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/gnc/home.html'>Guidance, Navigation & Control</a>" +
    "<i onclick='setUnderline_2(this); gnc_components()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/ets/home.html'>Environmental & Thermal Systems</a>" +
    "<i onclick='setUnderline_2(this); ets_components()' class='arrow_right'></i></div>";

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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/propulsion/rocket_engines.html'>Rocket Engines</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/propulsion/prop_tanks.html'>Propellant Tanks</a></div>";

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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/structural/airframe.html'>Airframe</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/structural/interstages.html'>Interstages</a></div>";

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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/payload/cargo_resupply.html'>Cargo Resupply</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/payload/crew_modules.html'>Crew Modules</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/payload/satellites.html'>Satellites</a></div>";

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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/gnc/avionics.html'>Avionics</a></div>" +
    
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/propulsion/stabilizers.html'>Stabilizers</a></div>";

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
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/ets/tps.html'>Thermal Protection System</a></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/rocket_components/ets/insulation.html'>Insulation</a></div>";

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

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/design/home.html'>Design Engineering</a>" +
    "<i onclick='setUnderline_2(this); design_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/dynamics/home.html'>Dynamics Engineering</a>" +
    "<i onclick='setUnderline_2(this); dynamics_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/electrical/home.html'>Electrical Engineering</a>" +
    "<i onclick='setUnderline_2(this); electrical_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/fluid_dynamics/home.html'>Fluid Dynamics</a>" +
    "<i onclick='setUnderline_2(this); fluid_dynamics()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/gnc/home.html'>GNC Engineering</a>" +
    "<i onclick='setUnderline_2(this); gnc_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/manufacturing/home.html'>Manufacturing Engineering</a>" +
    "<i onclick='setUnderline_2(this); manufacturing_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/mse/home.html'>Materials Science & Engineering</a>" +
    "<i onclick='setUnderline_2(this); mse()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/payload/home.html'>Payload Engineering</a>" +
    "<i onclick='setUnderline_2(this); payload_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/program_manager/home.html'>Program Management</a>" +
    "<i onclick='setUnderline_2(this); program_manager()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/propulsion/home.html'>Propulsion Engineering</a>" +
    "<i onclick='setUnderline_2(this); propulsion_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/quality/home.html'>Quality Engineering</a>" +
    "<i onclick='setUnderline_2(this); quality_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/software/home.html'>Software Engineering</a>" +
    "<i onclick='setUnderline_2(this); software_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/structural_analysis/home.html'>Structural Analysis</a>" +
    "<i onclick='setUnderline_2(this); structural_analysis()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/systems/home.html'>Systems Engineering</a>" +
    "<i onclick='setUnderline_2(this); systems_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/test/home.html'>Test Engineering</a>" +
    "<i onclick='setUnderline_2(this); test_engineering()' class='arrow_right'></i></div>" +

    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/thermal_analysis/home.html'>Thermal Analysis</a>" +
    "<i onclick='setUnderline_2(this); thermal_analysis()' class='arrow_right'></i></div>";

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

function design_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/design/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Design Engineering';


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

function dynamics_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/dynamics/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Dynamics Engineering';


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

function electrical_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/electrical/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Electrical Engineering';


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

function fluid_dynamics() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/fluid_dynamics/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Fluid Dynamics Engineering';


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

function gnc_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/gnc/overview.html'>Overview</a></div>";

    var last_clicked_content = 'GNC Engineering';


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

function manufacturing_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/manufacturing/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Manufacturing Engineering';


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

function mse() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/mse/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Materials Science & Engineering';


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

function payload_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/payload/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Payload Engineering';


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

function program_manager() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/program_manager/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Program Manager';


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

function propulsion_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/propulsion/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Propulsion Engineering';


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

function quality_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/quality/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Quality Engineering';


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

function software_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/software/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Software Engineering';


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

function structural_analysis() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/structural_analysis/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Structural Analysis';


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

function systems_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/systems/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Systems Engineering';


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

function test_engineering() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/test/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Test Engineering';


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

function thermal_analysis() {
    var content = "<div class='overlay-content'>" +
    "<div class='nav_group'><a onclick='closeNav()' href='https://www.aerospacemanual.com/engineering_roles/thermal_analysis/overview.html'>Overview</a></div>";

    var last_clicked_content = 'Thermal Analysis';


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