import React, { useState, useEffect } from "react";
import { LuCalendar, LuSend, LuRotateCcw, LuX } from "react-icons/lu";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

// Import UI Components (assuming they're exported from a separate file)
import {
  UndertaleTextField,
  UndertaleButton,
  UndertaleSelect,
} from "../ui/undertale/Form";

import UndertaleCard from "../ui/undertale/Card";
import { ContactLinkButton } from "../ui/undertale/Button";

function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return ""; // Handle empty strings
  }
  return str.charAt(0).toUpperCase() + str.slice(1)?.toLowerCase();
}

const IconComponent = (icon = "", className = "") => {
  const Icon =
    SiIcons["Si" + capitalizeFirstLetter(icon)] ||
    FaIcons["Fa" + capitalizeFirstLetter(icon)];
  return Icon;
};

// Form Logic Hook
const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workType: "",
    timeline: "",
    projectDesc: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [hp, setHp] = useState(100);

  // Validation rules
  const validateField = (field, value) => {
    switch (field) {
      case "name":
        if (!value.trim())
          return "* You feel like you should tell me your name.";
        if (value.length < 2)
          return "* That name seems too short to be real...";
        return "";

      case "email":
        if (!value.trim()) return "* An email address would be VERY helpful.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "* That doesn't look like a valid email address...";
        return "";

      case "workType":
        if (!value) return "* You must choose what kind of help you need!";
        return "";

      case "projectDesc":
        if (!value.trim())
          return "* Tell me about your project! I'm determined to help.";
        if (value.length < 20)
          return "* Could you give me a bit more detail? (At least 20 characters)";
        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      // Timeline is optional, skip validation
      if (field === "timeline") return;

      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }

    // Restore HP when fixing errors
    if (hp < 100) {
      setHp(Math.min(hp + 5, 100));
    }
  };

  const submitForm = async () => {
    if (!validateForm()) {
      setHp(Math.max(hp - 10, 10));
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setShowSuccess(true);
      setHp(100);
    } catch (error) {
      console.error("Submission failed:", error);
      setHp(Math.max(hp - 20, 10));
    } finally {
      setIsSubmitting(false);
    }
  };

  const bookMeeting = () => {
    if (!canBookMeeting()) return;
    setShowCalendly(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      workType: "",
      timeline: "",
      projectDesc: "",
    });
    setErrors({});
    setShowSuccess(false);
    setShowCalendly(false);
    setHp(100);
    setIsSubmitting(false);
  };

  const getCalendlyUrl = () => {
    const baseUrls = {
      freelance: "https://calendly.com/aishwarya-b-raghavan/30min",
      "tech-consultant":
        "https://calendly.com/aishwarya-b-raghavan/tech-consultation",
      mentor: "https://calendly.com/aishwarya-b-raghavan/mentorship",
    };

    const baseUrl =
      baseUrls[formData.workType] ||
      "https://calendly.com/aishwarya-b-raghavan/30min";
    const url = new URL(baseUrl);

    // Pre-fill Calendly
    if (formData.name) url.searchParams.set("name", formData.name);
    if (formData.email) url.searchParams.set("email", formData.email);
    if (formData.projectDesc) url.searchParams.set("a1", formData.projectDesc);
    if (formData.timeline) url.searchParams.set("a2", formData.timeline);

    return url.toString();
  };

  const getFormProgress = () => {
    const requiredFields = ["name", "email", "workType", "projectDesc"];
    const filledRequired = requiredFields.filter((field) =>
      formData[field].trim(),
    ).length;
    const totalFields = Object.values(formData).filter((value) =>
      value.trim(),
    ).length;

    return `${totalFields}/5 (${filledRequired}/4 required)`;
  };

  return {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    showCalendly,
    hp,
    updateField,
    submitForm,
    bookMeeting,
    resetForm,
    canBookMeeting,
    getCalendlyUrl,
    getFormProgress,
    setShowCalendly,
  };
};

// Main Contact Form Component
const UndertaleContactForm = ({ contactInfo }) => {
  const {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    showCalendly,
    hp,
    updateField,
    submitForm,
    bookMeeting,
    resetForm,
    canBookMeeting,
    getCalendlyUrl,
    getFormProgress,
    setShowCalendly,
  } = useContactForm();

  // Load Calendly script
  useEffect(() => {
    if (showCalendly && !window.Calendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, [showCalendly]);

  const workTypeOptions = [
    {
      value: "freelance",
      label: "⚔️ Freelance Work",
      description: "Build something awesome together",
    },
    {
      value: "tech-consultant",
      label: "🧙‍♂️ Tech Consultant",
      description: "Get expert technical guidance",
    },
    {
      value: "mentor",
      label: "📚 Mentorship",
      description: "Level up your skills",
    },
  ];

  const timelineOptions = [
    { value: "asap", label: "ASAP (This Week)" },
    { value: "month", label: "Within a Month" },
    { value: "quarter", label: "This Quarter" },
    { value: "flexible", label: "Flexible Timeline" },
  ];

  const CalendlyPopup = () => {
    useEffect(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: getCalendlyUrl(),
        });
      }
    }, []);

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-b from-blue-900 to-purple-900 border-4 border-yellow-400 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b-2 border-yellow-400">
            <h3 className="text-yellow-300 font-mono font-bold text-xl">
              * Choose your meeting time!
            </h3>
            <button
              onClick={() => setShowCalendly(false)}
              className="text-yellow-300 hover:text-red-400 transition-colors"
            >
              <LuX size={24} />
            </button>
          </div>

          <div className="h-[600px] bg-white">
            <div
              className="calendly-inline-widget w-full h-full"
              data-url={getCalendlyUrl()}
            />
          </div>
        </div>
      </div>
    );
  };

  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 border-4 border-yellow-600 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">⭐</div>
          <h2 className="text-2xl font-bold text-yellow-800 mb-4 font-mono">
            * DETAILS SENT!
          </h2>
          <p className="text-yellow-600 font-mono mb-6">
            * I'll get back to you within 24 hours!
          </p>

          <UndertaleButton onClick={resetForm} className="mx-auto">
            <LuRotateCcw size={20} />
            START NEW
          </UndertaleButton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row justify-between align-start">
      <div>
        <div className="grid grid-cols-2 gap-4 h-40">
          <ContactLinkButton
            key="gmail"
            text="Gmail"
            href={contactInfo?.gmail || ""}
            icon={IconComponent("gmail")}
            className="h-10"
          />
          {[
            ...Object.entries(contactInfo?.messaging || {}),
            ...Object.entries(contactInfo?.social || {}),
          ].map(([platform, link]) => (
            <ContactLinkButton
              key={platform}
              text={capitalizeFirstLetter(platform)}
              href={link}
              icon={IconComponent(platform)}
              className="h-10"
            />
          ))}
        </div>
        <div></div>
        <div className="grid grid-cols-4 gap-4 h-40">
          {Object.entries(contactInfo?.code || {}).map(([platform, link]) => (
            <ContactLinkButton
              key={platform}
              text={capitalizeFirstLetter(platform)}
              href={link}
              icon={IconComponent(platform)}
              className="h-10"
            />
          ))}
        </div>
      </div>

      <UndertaleCard className="w-120" title="Lets do this!" description="">
        <div className="space-y-6">
          {/* Name Field */}
          <UndertaleTextField
            label="* What's your name, human?"
            value={formData.name}
            onChange={(value) => updateField("name", value)}
            error={errors.name}
            placeholder="Enter your name..."
          />

          {/* Email Field */}
          <UndertaleTextField
            label="* Your email address?"
            type="email"
            value={formData.email}
            onChange={(value) => updateField("email", value)}
            error={errors.email}
            placeholder="your.email@domain.com"
          />

          {/* Work Type */}
          <UndertaleSelect
            label="* What kind of work do you need?"
            options={workTypeOptions}
            value={formData.workType}
            onChange={(value) => updateField("workType", value)}
            error={errors.workType}
          />

          {/* Timeline (Optional) */}
          <UndertaleSelect
            label="Timeline (Optional)"
            options={timelineOptions}
            value={formData.timeline}
            onChange={(value) => updateField("timeline", value)}
            placeholder="When do you need this done?"
            error={errors.timeline}
          />

          {/* Project Description */}
          <div>
            <UndertaleTextField
              label="* Tell me about your project:"
              value={formData.projectDesc}
              onChange={(value) => updateField("projectDesc", value)}
              error={errors.projectDesc}
              placeholder="Describe your project, requirements, budget, and any other details..."
              rows={5}
            />
            <div className="flex justify-end mt-2">
              <span
                className={`font-mono text-sm ${
                  formData.projectDesc.length < 20
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {formData.projectDesc.length}/20 min
              </span>
            </div>
          </div>

          {/* Meeting Booking Section */}

          {/* Action Buttons */}

          <div className="flex gap-4">
            <UndertaleButton
              onClick={bookMeeting}
              disabled={!canBookMeeting()}
              variant="secondary"
              size="default"
            >
              <LuCalendar size={20} />
              BOOK MEETING
            </UndertaleButton>
            <UndertaleButton
              onClick={submitForm}
              disabled={isSubmitting}
              variant="primary"
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin">⭐</div>
                  SENDING...
                </>
              ) : (
                <>
                  <LuSend size={20} />
                  SUBMIT
                </>
              )}
            </UndertaleButton>
          </div>
        </div>
      </UndertaleCard>
      {/* Calendly Popup */}
      {showCalendly && <CalendlyPopup />}
    </div>
  );
};

export default UndertaleContactForm;
