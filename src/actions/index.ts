import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  contactFormAction: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address"),
      subject: z.string().min(1, "Subject is required"),
      message: z.string().min(1, "Message is required"),
    }),
    handler: async (input) => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        });
        if (!response.ok) {
          throw new Error("Failed to submit contact form");
        }

        return response;
      } catch (error) {
        console.error("Error submitting contact form:", error);
        throw new Error(
          "An error occurred while submitting the form. Please try again later.",
        );
      }
    },
  }),
};
