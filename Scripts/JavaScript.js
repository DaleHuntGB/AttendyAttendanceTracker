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

if (document.title == "AAttendy: Check In") // Swap to Indexing - DH
{
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
        let NumOfStudents = StudentFirstNames.length;
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
}

if (document.title == "Attendy: Your Attendance") // Swap To Indexing - DH
{   
    function UpdateAttendance()
    {
        let AttendedText = document.querySelector(".AttendedText");
        let AbsentText = document.querySelector(".AbsentText");
        let TotalSessionsText = document.querySelector(".TotalSessionsText");

        let TotalSessions = 30;

        let RandomizeAttendance = Math.floor(Math.random() * TotalSessions);
        let RandomizeAbsences = Math.floor(Math.random() * TotalSessions);

        AttendedText.textContent = RandomizeAttendance;
        AbsentText.textContent = RandomizeAbsences;
        TotalSessionsText.textContent = TotalSessions;

    }

    function UpdateAllModules()
    {
        let ModuleTitles = ["CI536: Integrated Group Project", "CI520: Narrative Game Design", "CI517: Game Engine Fundamentals"];
        let NumOfModules = ModuleTitles.length;

        let ModuleOne = document.querySelector(".ModuleOne");
        let RandomizeModuleOne = ModuleTitles[Math.floor(Math.random() * NumOfModules)];
        ModuleOne.textContent = RandomizeModuleOne;

        let ModuleTwo = document.querySelector(".ModuleTwo");
        let RandomizeModuleTwo = ModuleTitles[Math.floor(Math.random() * NumOfModules)];
        ModuleTwo.textContent = RandomizeModuleTwo;

        let ModuleThree = document.querySelector(".ModuleThree");
        let RandomizeModuleThree = ModuleTitles[Math.floor(Math.random() * NumOfModules)];
        ModuleThree.textContent = RandomizeModuleThree;
    }

}

function OnWindowLoad() // If you can find a better way, do it, but this should work for now - DH.
{
    if (document.title == "Attendy: Check In") // Swap To Indexing - DH
    {
        UpdateTimeOnOpen();
        UpdateStudentName();
        UpdateModule();
    }

    if (document.title == "Attendy: Your Attendance") // Swap To Indexing - DH
    {
        UpdateAttendance();
        UpdateAllModules();
    }
}

window.onload = OnWindowLoad();

