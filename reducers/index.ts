const reducerFunc = (state: any, action: any) => {
  switch (action.type) {
    case "COMPANY_NAME":
      return { ...state, companyName: action.payload };
    case "ROLE_NAME":
      return { ...state, roleName: action.payload };
    case "EMAILING_TO":
      return { ...state, emailingTo: action.payload };
    case "YOUR_NAME":
      return { ...state, yourName: action.payload };
    case "EXPERIENCE_IN":
      return { ...state, experienceIn: action.payload };
    case "EXCITED_ABOUT_JOB_BECAUSE":
      return { ...state, excitedAboutJobBecause: action.payload };
    case "PASSIONATE_ABOUT":
      return { ...state, passionateAbout: action.payload };
    case "OPENAI_OUTPUT":
      return { ...state, openAIOutput: action.payload };
    default:
      return state;
  }
};

const initFunc = {
  companyName: "Google",
  roleName: "Machine Learning Engineer",
  emailingTo: "Technical Hiring Manager",
  yourName: "Khushal Sharma",
  experienceIn:
    "natural language processing, fraud detection, statistical modeling, and machine learning algorithms.",
  excitedAboutJobBecause:
    "this role will allow me to work on technically challenging problems and create impactful solutions while working with an innovative team.",
  passionateAbout:
    "solving problems at the intersection of technology and social good.",
  openAIOutput: "",
};

export { reducerFunc, initFunc };
