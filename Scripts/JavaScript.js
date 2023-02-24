// === === === === === === === === === === === === === === === === === === === === === === === ===
// COMMENTS FORMATTING:
//
// End comments with your initials please, so we can keep track.
// 
// INITIALS:
// Dale Hunt: DH
// Beck Farrington-Wheeler: BFW
// Artemi Sementsenko: AS
//
// === === === === === === === === === === === === === === === === === === === === === === === ===


function UpdateTimeOnOpen() // Get and Update Time - DH.
{
    let StartTime = document.querySelector("#StartTime")
    let CurrentTime = new Date();
    let Hours = CurrentTime.getHours();
    let Minutes = CurrentTime.getMinutes();
    // Apparently HH:MM has to return a second digit so anything below 10 will need to be ammended with "0" - DH.
    if (Minutes < 10) { Minutes = "0" + Minutes; };
    // Store StartTime because we are not animals - DH.
    let FormattedTime = Hours + ":" + Minutes;
    StartTime.value = FormattedTime;
}

function UpdateStudentName() // Demonstration Only - DH.
{
    // Store it as a variable because we can - DH.
    let StudentFirstName = document.querySelector(".StudentFirstName");
    let StudentFirstNames = ["Beck", "Max", "Dale", "Artemi", "Lynx"]; 
    let NumOfStudents = StudentFirstName.length;
    let RandomizeStudent = StudentFirstNames[Math.floor(Math.random() * NumOfStudents)];
    StudentFirstName.textContent = "Welcome " + RandomizeStudent;
}

function UpdateModule() // Demonstration Only - DH.
{
    // Store it as a variable because we can - DH.
    let ModuleTitle = document.querySelector(".ModuleTitle");
    let ModuleTitles = ["CI536: Integrated Group Project", "CI520: Narrative Game Design", "CI517: Game Engine Fundamentals"];
    let NumOfModules = ModuleTitles.length;
    let RandomizeModules = ModuleTitles[Math.floor(Math.random() * NumOfModules)];
    ModuleTitle.textContent = RandomizeModules;
}

function OnWindowLoad() // If you can find a better way, do it, but this should work for now - DH.
{
    UpdateTimeOnOpen();
    UpdateStudentName();
    UpdateModule();
}

window.onload = OnWindowLoad();

