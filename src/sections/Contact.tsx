import React, { useState } from "react";
import { LuSend, LuRotateCcw } from "react-icons/lu";
import {
  PortfolioTextField,
  PortfolioButton,
  PortfolioSelect,
} from "../components/ui/dev/Form";

import Card from "../components/ui/components/card/Card";
import { ContactLinkButton } from "../components/ui/dev/Button";
import { Contact } from "@/types/personal";
import { useToast } from "@/hooks/useToast";
import { ApiError, submitContactForm } from "@/lib/api";
import IconComponent from "../components/ui/Icon";
// import { ToastContainer } from "../ui/components/toast/Toast";

interface FormData {
  name: string;
  email: string;
  workType: string;
  timeline?: string;
  projectDesc?: string;
}

interface ContactProps {
  contactInfo: Contact;
  id: string;
}

const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    workType: "",
    timeline: "",
    projectDesc: "",
  });

  const [errors, setErrors] = useState<FormData>({
    name: "",
    email: "",
    workType: "",
    timeline: "",
    projectDesc: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Updated to include all toast types and container
  const { success, error, warning, info } = useToast();

  // Validation rules
  const validateField = (field: string, value: string) => {
    switch (field) {
      case "name":
        if (!value.trim()) return "You feel like you should tell me your name.";
        if (value.length < 2) return "That name seems too short to be real...";
        return "";

      case "email":
        if (!value.trim()) return "An email address would be VERY helpful.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "That doesn't look like a valid email address...";
        return "";

      case "workType":
        if (!value) return "You must choose what kind of help you need!";
        return "";

      case "projectDesc":
        if (!value.trim())
          return "Tell me about your project! I'm determined to help.";
        if (value.length < 20)
          return "Could you give me a bit more detail? (At least 20 characters)";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      workType: "",
      timeline: "",
      projectDesc: "",
    };

    let hasErrors = false;

    Object.entries(formData).forEach(([fieldName, value]) => {
      // Timeline is optional, skip validation
      if (fieldName === "timeline") return;

      const errorMessage = validateField(fieldName, value);
      if (errorMessage) {
        newErrors[fieldName as keyof typeof formData] = errorMessage;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  };

  // Check if basic fields are filled for meeting booking
  const canBookMeeting = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.workType
    );
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const submitForm = async () => {
    // Validate form before submission
    if (!validateForm()) {
      error("Please fix the form errors before submitting");
      return;
    }

    // Additional business logic validation
    if (!formData.projectDesc || formData.projectDesc.length < 10) {
      warning(
        "Project description seems a bit short. Could you add more details?"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Show info toast for processing
      info("Processing your request...");

      // Prepare form data for API
      const submissionData = {
        name: formData.name,
        email: formData.email,
        workType: formData.workType,
        projectDesc: formData.projectDesc,
        timeline: formData.timeline || "", // Optional field
      };

      // Call the API
      const response = await submitContactForm(submissionData);

      if (response.success) {
        // Success case
        success(
          "🎉 Your message has been sent successfully! Check your email for confirmation."
        );

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          workType: "",
          timeline: "",
          projectDesc: "",
        });
        setErrors({
          name: "",
          email: "",
          workType: "",
          timeline: "",
          projectDesc: "",
        });
      } else {
        throw new Error(response.message || "Submission failed");
      }
    } catch (submitError) {
      console.error("Submission failed:", submitError);

      if (submitError instanceof ApiError) {
        // Handle API errors with specific messages
        if (submitError.status === 400) {
          error("Please check your form data and try again.");
        } else if (submitError.status === 500) {
          error("Server error. Please try again later or contact me directly.");
        } else {
          error(`Error: ${submitError.message}`);
        }
      } else {
        error(
          "Oops! Something went wrong. Please try again or contact me directly."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      workType: "",
      timeline: "",
      projectDesc: "",
    });
    setErrors({
      name: "",
      email: "",
      workType: "",
      timeline: "",
      projectDesc: "",
    });
    setShowSuccess(false);
    setIsSubmitting(false);

    // Show toast confirmation
    info("Form has been reset");
  };

  return {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    updateField,
    submitForm,
    resetForm,
    canBookMeeting,
  };
};

const ContactForm: React.FC<ContactProps> = ({ contactInfo, id }) => {
  const {
    formData,
    errors,
    isSubmitting,
    updateField,
    submitForm,
    resetForm,
    canBookMeeting,
  } = useContactForm();

  const workTypeOptions = [
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

  return (
    <>
      <div
        id={id}
        className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between md:p-0 lg:p-0"
      >
        <div className="md:mr-10 mb-10 sm:mb-10 md:mb-0 lg:mb-0 md:w-1/2 lg:w-4/5 flex flex-col gap-2">
          {/* Message Section */}
          <div className="relative p-5 bg-black/20 border-1 border-current/30">
            {/* Portfolio-style corner decorations */}
            <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

            <p className="mb-3 text-[#C778DD]  font-bold">Interrupt Me On</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {contactInfo.messaging.map((contact) => {
                return (
                  <ContactLinkButton
                    key={contact.id}
                    text={contact.id}
                    href={contact.url}
                    icon={<IconComponent id={contact.id} section="contact" />}
                    className="h-10"
                  />
                );
              })}
            </div>
          </div>

          {/* Social Section */}
          <div className="relative p-5 bg-black/20 border-1 border-current/30">
            {/* Portfolio-style corner decorations */}
            <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

            <p className="mb-3 text-[#C778DD]  font-bold">
              Professional Stalking
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {contactInfo.social.map((contact) => {
                return (
                  <ContactLinkButton
                    key={contact.id}
                    text={contact.id}
                    href={contact.url}
                    icon={<IconComponent id={contact.id} section="contact" />}
                    className="h-10"
                  />
                );
              })}
            </div>
          </div>

          {/* Code Section */}
          <div className="relative p-5 bg-black/20 border-1 border-current/30">
            {/* Portfolio-style corner decorations */}
            <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

            <p className="mb-3 text-[#C778DD]  font-bold">My Code Laboratory</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {contactInfo.code.map((contact) => {
                return (
                  <ContactLinkButton
                    key={contact.id}
                    text={contact.id}
                    href={contact.url}
                    icon={<IconComponent id={contact.id} section="contact" />}
                    className="h-10"
                  />
                );
              })}
            </div>
          </div>

          {/* Blog Section */}
          <div className="relative p-5 bg-black/20 border-1 border-current/30">
            {/* Portfolio-style corner decorations */}
            <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

            <p className="mb-3 text-[#C778DD]  font-bold">My Thoughts Cloud</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {contactInfo.blog.map((contact) => {
                return (
                  <ContactLinkButton
                    key={contact.id}
                    text={contact.id}
                    href={contact.url}
                    icon={<IconComponent id={contact.id} section="contact" />}
                    className="h-10"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <Card
          className="w-1/2"
          title="Skip the vibe code, let's build it right"
          titleClassName="text-[#C778DD] mb-5"
          description=""
        >
          <div className="space-y-4">
            <PortfolioTextField
              label="What's your name, human?"
              value={formData.name}
              onChange={(value: string) => updateField("name", value)}
              error={errors.name}
              placeholder="Enter your name..."
              className="text-sm"
            />
            {/* Email Field */}
            <PortfolioTextField
              label="Your email address?"
              type="email"
              value={formData.email}
              onChange={(value: string) => updateField("email", value)}
              error={errors.email}
              placeholder="your.email@domain.com"
              className="text-sm"
            />
            <PortfolioSelect
              label="What kind of work do you need?"
              options={workTypeOptions}
              value={formData.workType}
              onChange={(value: string) => updateField("workType", value)}
              error={errors.workType}
              className="text-sm"
            />

            {/* Project Description */}
            <div>
              <PortfolioTextField
                label="Tell me about your project:"
                value={formData.projectDesc}
                onChange={(value: string) => updateField("projectDesc", value)}
                error={errors.projectDesc}
                placeholder="Describe your project, requirements, budget, and any other details..."
                rows={3}
                className="text-sm"
              />
              <div className="flex justify-end mt-1">
                <span
                  className={` text-xs ${
                    (formData.projectDesc?.length || 0) < 10
                      ? "text-red-400"
                      : "text-green-400"
                  }`}
                >
                  {formData.projectDesc?.length}/20 min
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <PortfolioButton
                onClick={submitForm}
                disabled={!canBookMeeting() || isSubmitting}
                variant="subtle-primary"
                size="small"
                className="flex-1 px-4 py-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin text-sm">⭐</div>
                    <span className="text-sm">SENDING...</span>
                  </>
                ) : (
                  <>
                    <LuSend size={16} />
                    <span className="text-sm">SUBMIT</span>
                  </>
                )}
              </PortfolioButton>
              <PortfolioButton
                onClick={resetForm}
                disabled={
                  !Object.values(formData).filter((val) => !!val).length
                }
                variant="subtle-danger"
                size="small"
                className="flex-1 px-4 py-2"
              >
                <>
                  <LuRotateCcw size={16} />
                  <span className="text-sm">Reset</span>
                </>
              </PortfolioButton>
            </div>
          </div>
        </Card>
      </div>

      {/* <ToastContainer toasts={}/> */}
    </>
  );
};

export default ContactForm;
