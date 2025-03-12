"use client";

import PageTemplate from "@/components/template";

export default function ContactPage() {
  return (
    <PageTemplate
      title="CONTACT"
      heroImage="/images/contact-hero.jpg"
      content={`We'd love to hear from you! Whether you have a project in mind or just want to learn more about our services, don't hesitate to reach out.

Our team is available to discuss your video production needs and answer any questions you might have about working with us.

For project inquiries, please provide as much detail as possible about your vision, timeline, and budget. This helps us understand your needs better and respond with more accurate information.

For general inquiries, feel free to use the contact form below or reach out directly via email or phone.

Email: info@jumaraproductions.com
Phone: +40 123 456 789

Our office is located at:
123 Video Production Street
Bucharest, Romania

We typically respond to all inquiries within 24-48 hours during business days. If your matter is urgent, please indicate this in your message.`}
      rightImage="/images/contact-side.jpg"
    />
  );
}
