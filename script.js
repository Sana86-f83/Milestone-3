var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault(); // Prevents page refresh
    // Type assertion and fetching form elements
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var formBtn = document.getElementById("backToFormButton");
    var educationContainer = document.getElementById("educationContainer");
    var experienceContainer = document.getElementById("experienceContainer");
    var skillsContainer = document.getElementById("skillsContainer");
    // Collect values from form fields
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var address = addressElement.value;
    // Gather dynamic fields with initial values included
    var educationInitial = document.getElementById("education").value;
    var education = [educationInitial, getAllInputValues(educationContainer)]
        .filter(Boolean)
        .join(", ");
    var experienceInitial = document.getElementById("experience").value;
    var experience = [
        experienceInitial,
        getAllInputValues(experienceContainer),
    ]
        .filter(Boolean)
        .join(", ");
    var skillsInitial = document.getElementById("skills").value;
    var skills = [skillsInitial, getAllInputValues(skillsContainer)]
        .filter(Boolean)
        .join(", ");
    // Profile picture handling
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";
    // Function to gather all input values within a container
    function getAllInputValues(container) {
        var inputs = (container === null || container === void 0 ? void 0 : container.getElementsByTagName("input")) || [];
        var values = Array.prototype.slice
            .call(inputs)
            .map(function (input) { return input.value; });
        return values.join(", "); // Separate entries by commas
    }
    // Resume output template
    var resumeOutput = "\n    <h2>Resume :</h2>\n    ".concat(profilePictureURL
        ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
        : "", "\n    <p><strong>Name:</strong> ").concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n    <p><strong>Address:</strong> ").concat(address, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Displaying resume output
    var resumeOutputElement = document.getElementById("resumeOutput");
    var formElement = document.getElementById("resumeForm");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
        formElement.style.display = "none"; // Hide form after generating resume
    }
    else {
        console.error("Resume output element is missing.");
    }
});
// Function to add dynamic input fields
function addField(containerId, placeholder) {
    var container = document.getElementById(containerId);
    if (container) {
        var newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = placeholder;
        newInput.required = true;
        container.appendChild(newInput);
        container.appendChild(document.createElement("br"));
    }
    else {
        console.error("Container not found:", containerId);
    }
}
