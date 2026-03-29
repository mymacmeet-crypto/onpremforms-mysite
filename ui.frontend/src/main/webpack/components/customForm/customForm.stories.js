import { CustomForm } from "./customForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/CustomForm",
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Form colour theme",
    },
    title: {
      control: { type: "text" },
      description: "Optional heading above the form",
    },
    namePlaceholder: {
      control: { type: "text" },
      description: "Placeholder for the Name field",
    },
    emailPlaceholder: {
      control: { type: "text" },
      description: "Placeholder for the Email field",
    },
    messagePlaceholder: {
      control: { type: "text" },
      description: "Placeholder for the Message field",
    },
    submitLabel: {
      control: { type: "text" },
      description: "Submit button label",
    },
    required: {
      control: { type: "boolean" },
      description: "Mark all fields as required",
    },
    onSubmit: {
      action: "submitted",
      description: "Submit handler — logged in the Actions panel",
    },
  },
  args: {
    theme: "light",
    title: "Contact Us",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    messagePlaceholder: "Write your message...",
    submitLabel: "Submit",
    required: true,
    onSubmit: action("submitted"),
  },
};

const renderCustomForm = (args) => {
  const container = document.createElement("div");
  container.innerHTML = CustomForm({ ...args, onSubmit: null });

  const form = container.querySelector(".custom-form");
  if (form && args.onSubmit) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      args.onSubmit(e);
    });
  }
  return container.firstElementChild;
};

export const Light = {
  render: renderCustomForm,
  args: { theme: "light" },
};

export const Dark = {
  render: renderCustomForm,
  args: { theme: "dark" },
};

export const WithoutTitle = {
  render: renderCustomForm,
  args: { title: "" },
};

export const CustomLabels = {
  render: renderCustomForm,
  args: {
    title: "Get in Touch",
    namePlaceholder: "Full name",
    emailPlaceholder: "you@company.com",
    messagePlaceholder: "How can we help?",
    submitLabel: "Send Message",
  },
};
