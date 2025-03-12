"use client";

import PageTemplate from "@/components/template";

export default function AboutUsPage() {
  return (
    <PageTemplate
      title="ABOUT US"
      heroImage="/images/about-us-hero.jpg"
      content={`Jumară Productions is a creative video production company dedicated to helping brands tell their stories through compelling visual content.

Founded with a passion for storytelling and technical excellence, we've grown into a team of dedicated professionals who share a common goal: to create videos that not only look amazing but also deliver results.

Our team brings together experts in cinematography, direction, editing, and sound design. We combine our diverse skills and perspectives to create content that stands out in today's crowded digital landscape.

What sets us apart is our commitment to understanding your brand on a deeper level. We don't just create videos; we create strategic visual assets that align with your business objectives and resonate with your target audience.

Over the years, we've had the privilege of working with clients across various industries, from startups to established brands. Each project has enriched our experience and expanded our creative horizons.

At Jumară Productions, we believe in building lasting relationships with our clients. Many of our clients come back to us for multiple projects, a testament to our dedication to client satisfaction and quality work.`}
      rightImage="/images/about-us-side.jpg"
    />
  );
}
