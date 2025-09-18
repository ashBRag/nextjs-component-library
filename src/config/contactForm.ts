import { ValidationRules } from "../types/form";
import { createValidationRules } from "../utils/formValidations";

// Contact form data structure
export interface ContactFormData {
  name: string;
  email: string;
  workType: string;
  timeline: string;
  projectDesc: string;
}

// Initial form values
export const initialContactFormValues: ContactFormData = {
  name: "",
  email: "",
  workType: "",
  timeline: "",
  projectDesc: "",
};

// Create validation rules for contact form
const rules = createValidationRules<ContactFormData>();

export const contactFormValidationRules: ValidationRules<ContactFormData> = {
  name: {
    ...rules.required("You feel like you should tell me your name."),
    ...rules.minLength(2, "That name seems too short to be real..."),
  },

  email: {
    ...rules.required("An email address would be VERY helpful."),
    ...rules.email("That doesn't look like a valid email address..."),
  },

  workType: rules.required("You must choose what kind of help you need!"),

  projectDesc: {
    ...rules.required("Tell me about your project! I'm determined to help."),
    ...rules.minLength(
      20,
      "Could you give me a bit more detail? (At least 20 characters)",
    ),
  },

  timeline: {
    required: false, // Optional field
  },
};

// Work type options
export interface WorkTypeOption {
  value: string;
  label: string;
  description: string;
}

export const workTypeOptions: WorkTypeOption[] = [
  {
    value: "freelance",
    label: "⚔️ Freelance Work",
    description: "Build something awesome together",
  },
  {
    value: "consultation",
    label: "🧙‍♂️ Tech Consultant",
    description: "Get expert technical guidance",
  },
  {
    value: "mentorship",
    label: "📚 Mentorship",
    description: "Level up your skills",
  },
];

// Business logic validation
export const validateContactFormForSubmission = (
  formData: ContactFormData,
): string[] => {
  const warnings: string[] = [];

  if (formData.projectDesc && formData.projectDesc.length < 10) {
    warnings.push(
      "Project description seems a bit short. Could you add more details?",
    );
  }

  return warnings;
};

// Check if basic fields are filled for meeting booking
export const canBookMeeting = (formData: ContactFormData): boolean => {
  return !!(
    formData.name?.trim() &&
    formData.email?.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.workType
  );
};

// API submission data interface
export interface ContactFormSubmissionData {
  name: string;
  email: string;
  workType: string;
  projectDesc: string;
  timeline: string;
}
