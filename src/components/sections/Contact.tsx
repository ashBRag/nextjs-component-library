import React, { useState, useEffect } from "react";
import { LuCalendar, LuSend, LuRotateCcw, LuX } from "react-icons/lu";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import {
  UndertaleTextField,
  UndertaleButton,
  UndertaleSelect,
} from "../ui/undertale/Form";

import UndertaleCard from "../ui/undertale/Card";
import { ContactLinkButton } from "../ui/undertale/Button";
import { Contact } from "@/types/personal";
import { useCalendly } from "../forms/calendly/useCalendly";
import { CalendlyPopup } from "../forms/calendly/Calendly";

interface FormData {
  name: string;
  email: string;
  workType: string;
  timeline?: string;
  projectDesc?: string;
}

interface ContactProps {
  contactInfo: Contact;
}

function capitalizeFirstLetter(str = "") {
  if (str.length === 0) {
    return ""; // Handle empty strings
  }
  return str.charAt(0).toUpperCase() + str.slice(1)?.toLowerCase();
}

const IconComponent = (icon = "") => {
  const Icon =
    SiIcons["Si" + capitalizeFirstLetter(icon)] ||
    FaIcons["Fa" + capitalizeFirstLetter(icon)];
  return Icon;
};

const getIconColor = (platform: string) => {
  const colors = {
    gmail: "text-red-500",
    phone: "text-green-500",
    whatsapp: "text-green-600",
    discord: "text-indigo-500",
    linkedin: "text-blue-500",
    peerlist: "text-emerald-500",
    github: "text-gray-300",
    gitlab: "text-orange-500",
    hackerrank: "text-green-600",
    leetcode: "text-yellow-500",
  };
  return colors[platform.toLowerCase()] || "text-gray-400";
};
const useContactForm = ({ calendlyUrl = "" }) => {
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
  const [showCalendly, setShowCalendly] = useState(false);
  const [hp, setHp] = useState(100);

  // Validation rules
  const validateField = (field: string, value: string) => {
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
    const newErrors = {
      name: "",
      email: "",
      workType: "",
      timeline: "",
      projectDesc: "",
    };

    Object.entries(formData).forEach(([fieldName, value]) => {
      // Timeline is optional, skip validation
      if (fieldName === "timeline") return;

      const error = validateField(fieldName, value);
      if (error) newErrors[fieldName as keyof typeof formData] = error;
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

  const updateField = (field: keyof FormData, value: string) => {
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
    const url = new URL(calendlyUrl);

    // Pre-fill Calendly
    if (formData.name) url.searchParams.set("name", formData.name);
    if (formData.email) url.searchParams.set("email", formData.email);
    if (formData.projectDesc) url.searchParams.set("a1", formData.projectDesc);
    if (formData.timeline) url.searchParams.set("a2", formData.timeline);

    return url.toString();
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
    resetForm,
    canBookMeeting,
    getCalendlyUrl,
    setShowCalendly,
  };
};

const UndertaleContactForm: React.FC<ContactProps> = ({ contactInfo }) => {
  const {
    formData,
    errors,
    isSubmitting,
    showSuccess,
    updateField,
    submitForm,
    resetForm,
    canBookMeeting,
    getCalendlyUrl,
  } = useContactForm({ calendlyUrl: contactInfo.availability.calendar });

  const { openPopup } = useCalendly();

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

  const [showCalendly, setShowCalendly] = useState(false);

  const bookMeeting = () => {
    if (!canBookMeeting()) return;
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 border-4 border-yellow-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4 font-mono">
            * DETAILS SENT!
          </h2>
          <p className="text-yellow-600 font-mono mb-6">
            * I&apos;ll get back to you within 24 hours!
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
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between align-start">
      <div className="mr-10 w-2/5 flex flex-col">
        {/* Message Section */}
        <div className="relative p-5 bg-black/20 border-2 border-purple-400/30 rounded-lg mb-4">
          {/* Undertale-style corner decorations */}
          <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

          <p className="mb-3 text-purple-300 font-mono font-bold">
            * Interrupt Me On
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <ContactLinkButton
              key="gmail"
              text="Gmail"
              href={contactInfo?.gmail || ""}
              icon={IconComponent("gmail")}
              className="h-10"
              iconColor="text-red-500" // Gmail red
            />
            {Object.entries(contactInfo?.messaging || {}).map(
              ([platform, link]) => (
                <ContactLinkButton
                  key={platform}
                  text={capitalizeFirstLetter(platform)}
                  href={link}
                  icon={IconComponent(platform)}
                  className="h-10"
                  iconColor={getIconColor(platform)}
                />
              ),
            )}
          </div>
        </div>

        {/* Social Section */}
        <div className="relative p-5 bg-black/20 border-2 border-purple-400/30 rounded-lg mb-4">
          {/* Undertale-style corner decorations */}
          <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

          <p className="mb-3 text-purple-300 font-mono font-bold">
            * Professionally Stalk Me On
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {Object.entries(contactInfo?.social || {}).map(
              ([platform, link]) => (
                <ContactLinkButton
                  key={platform}
                  text={capitalizeFirstLetter(platform)}
                  href={link}
                  icon={IconComponent(platform)}
                  className="h-10"
                  iconColor={getIconColor(platform)}
                />
              ),
            )}
          </div>
        </div>

        {/* Code Section */}
        <div className="relative p-5 bg-black/20 border-2 border-purple-400/30 rounded-lg">
          {/* Undertale-style corner decorations */}
          <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-current opacity-30"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-current opacity-30"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-current opacity-30"></div>

          <p className="mb-3 text-purple-300 font-mono font-bold">
            * My Code Laboratory
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {Object.entries(contactInfo?.code || {}).map(([platform, link]) => (
              <ContactLinkButton
                key={platform}
                text={capitalizeFirstLetter(platform)}
                href={link}
                icon={IconComponent(platform)}
                className="h-10"
                iconColor={getIconColor(platform)}
              />
            ))}
          </div>
        </div>
      </div>

      <UndertaleCard
        title="Skip the vibe code, let's build it right"
        description=""
        className="w-full lg:w-3/5 max-h-[70vh] overflow-y-auto custom-scroll"
      >
        <div className="space-y-4">
          {" "}
          {/* Reduced from space-y-6 */}
          {/* Name Field */}
          <UndertaleTextField
            label="* What's your name, human?"
            value={formData.name}
            onChange={(value: string) => updateField("name", value)}
            error={errors.name}
            placeholder="Enter your name..."
            className="text-sm" // Add smaller text
          />
          {/* Email Field */}
          <UndertaleTextField
            label="* Your email address?"
            type="email"
            value={formData.email}
            onChange={(value: string) => updateField("email", value)}
            error={errors.email}
            placeholder="your.email@domain.com"
            className="text-sm"
          />
          {/* Work Type */}
          <UndertaleSelect
            label="* What kind of work do you need?"
            options={workTypeOptions}
            value={formData.workType}
            onChange={(value: string) => updateField("workType", value)}
            error={errors.workType}
            className="text-sm"
          />
          {/* Timeline (Optional) */}
         
          {/* Project Description */}
          <div>
            <UndertaleTextField
              label="* Tell me about your project:"
              value={formData.projectDesc}
              onChange={(value: string) => updateField("projectDesc", value)}
              error={errors.projectDesc}
              placeholder="Describe your project, requirements, budget, and any other details..."
              rows={4} // Reduced from 5
              className="text-sm"
            />
            <div className="flex justify-end mt-1">
              {" "}
              {/* Reduced margin */}
              <span
                className={`font-mono text-xs ${
                  // Reduced from text-sm
                  (formData.projectDesc?.length || 0) < 10
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {formData.projectDesc?.length}/10 min
              </span>
            </div>
          </div>
          {/* Action Buttons - More Subtle */}
          <div className="flex gap-3 pt-2">
            {" "}
            {/* Reduced gap and padding */}
            <UndertaleButton
              onClick={bookMeeting}
              disabled={!canBookMeeting()}
              variant="subtle-secondary" // New subtle variant
              size="small" // Smaller size
              className="px-4 py-2" // Override with smaller padding
            >
              <LuCalendar size={16} /> {/* Smaller icon */}
              <span className="text-sm">BOOK MEETING</span>
            </UndertaleButton>
            <UndertaleButton
              onClick={submitForm}
              disabled={isSubmitting}
              variant="subtle-primary" // New subtle variant
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
            </UndertaleButton>
          </div>
        </div>
      </UndertaleCard>
      {/* Calendly Popup */}
      {showCalendly && (
        <CalendlyPopup
          isOpen={openPopup}
          onClose={closeCalendly}
          url={getCalendlyUrl()}
        />
      )}
    </div>
  );
};

export default UndertaleContactForm;
