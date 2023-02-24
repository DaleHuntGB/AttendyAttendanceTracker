// Update Time
function UpdateTimeOnOpen()
{
    let CurrentTime = new Date()
    let Hours = CurrentTime.getHours()
    let Minutes = CurrentTime.getMinutes()

    // JavaScript doesn't know what to do with non-double digits
    if (Minutes < 10)
    {
        Minutes = "0" + Minutes;
    }
    
    let StartTime = Hours + ":" + Minutes
    
    let TimeInput = document.querySelector("#StartTime")
    
    TimeInput.value = StartTime
}

function UpdateStudentName() // Demonstration Only!
{
    let StudentFirstName = ["Beck", "Max", "Dale", "Artemi", "Lynx"]; 
    let NumOfStudents = StudentFirstName.length
    let RandomizeStudent = StudentFirstName[Math.floor(Math.random() * NumOfStudents)];
    document.querySelector(".StudentFirstName").textContent = "Welcome " + RandomizeStudent;
}

function UpdateModule()
{
    let ModuleTitles = ["CI536: Integrated Group Project", "CI520: Narrative Game Design", "CI517: Game Engine Fundamentals"];
    let NumOfModules = ModuleTitles.length
    let RandomizeModules = ModuleTitles[Math.floor(Math.random() * NumOfModules)];
    document.querySelector(".ModuleTitle").textContent = RandomizeModules;
}

function OnWindowLoad()
{
    UpdateTimeOnOpen();
    UpdateStudentName()
    UpdateModule();
}

window.onload = OnWindowLoad();

