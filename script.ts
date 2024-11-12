document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page refresh

    // Type assertion and fetching form elements
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById(
      "address"
    ) as HTMLInputElement;
    let formBtn = document.getElementById(
      "backToFormButton"
    ) as HTMLButtonElement;
    const educationContainer = document.getElementById("educationContainer");
    const experienceContainer = document.getElementById("experienceContainer");
    const skillsContainer = document.getElementById("skillsContainer");

    // Collect values from form fields
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;

    // Gather dynamic fields with initial values included
    const educationInitial = (
      document.getElementById("education") as HTMLInputElement
    ).value;
    const education = [educationInitial, getAllInputValues(educationContainer)]
      .filter(Boolean)
      .join(", ");

    const experienceInitial = (
      document.getElementById("experience") as HTMLInputElement
    ).value;
    const experience = [
      experienceInitial,
      getAllInputValues(experienceContainer),
    ]
      .filter(Boolean)
      .join(", ");

    const skillsInitial = (
      document.getElementById("skills") as HTMLInputElement
    ).value;
    const skills = [skillsInitial, getAllInputValues(skillsContainer)]
      .filter(Boolean)
      .join(", ");

    // Profile picture handling
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile
      ? URL.createObjectURL(profilePictureFile)
      : "";

    // Function to gather all input values within a container
    function getAllInputValues(container: any) {
      const inputs = container?.getElementsByTagName("input") || [];
      const values = Array.prototype.slice
        .call(inputs)
        .map((input: HTMLInputElement) => input.value);
      return values.join(", "); // Separate entries by commas
    }

    // Resume output template
    const resumeOutput = `
    <h2>Resume :</h2>
    ${
      profilePictureURL
        ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
        : ""
    }
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;

    // Displaying resume output
    const resumeOutputElement = document.getElementById("resumeOutput");
    const formElement = document.getElementById("resumeForm");

    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      resumeOutputElement.style.display = "block";
      formElement!.style.display = "none"; // Hide form after generating resume
    } else {
      console.error("Resume output element is missing.");
    }
  });

// Function to add dynamic input fields
function addField(containerId: string, placeholder: string) {
  const container = document.getElementById(containerId);
  if (container) {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = placeholder;
    newInput.required = true;
    container.appendChild(newInput);
    container.appendChild(document.createElement("br"));
  } else {
    console.error("Container not found:", containerId);
  }
}
