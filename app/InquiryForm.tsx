"use client";

import { FormEvent, useState } from "react";

export function InquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      "TECTASEAL project enquiry",
      "",
      `Name: ${form.get("name") || ""}`,
      `Company: ${form.get("company") || ""}`,
      `Email / WhatsApp: ${form.get("contact") || ""}`,
      `Country: ${form.get("country") || ""}`,
      `Membrane: ${form.get("membrane") || ""}`,
      `Thickness: ${form.get("thickness") || ""}`,
      `Quantity: ${form.get("quantity") || ""}`,
      `Delivery destination: ${form.get("destination") || ""}`,
      "",
      `Project notes: ${form.get("message") || ""}`,
    ];
    const subject = encodeURIComponent(
      `TECTASEAL enquiry — ${form.get("company") || form.get("name") || "new project"}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    setStatus("Your email app is opening with the project brief.");
    window.location.href = `mailto:export@tectaseal.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email or WhatsApp
          <input name="contact" autoComplete="email" required />
        </label>
        <label>
          Country
          <input name="country" autoComplete="country-name" required />
        </label>
      </div>
      <div className="form-row form-row-three">
        <label>
          Membrane
          <select name="membrane" defaultValue="PVC">
            <option>PVC</option>
            <option>TPO</option>
            <option>Not confirmed</option>
          </select>
        </label>
        <label>
          Thickness
          <select name="thickness" defaultValue="1.5 mm">
            <option>1.2 mm</option>
            <option>1.5 mm</option>
            <option>Other / TBD</option>
          </select>
        </label>
        <label>
          Quantity
          <input name="quantity" placeholder="e.g. 10,000 m²" />
        </label>
      </div>
      <label>
        Delivery destination
        <input
          name="destination"
          placeholder="City, country or preferred port"
          required
        />
      </label>
      <label>
        Project notes
        <textarea
          name="message"
          rows={4}
          placeholder="Installation method, reinforcement, colour, accessories or target comparison product"
        />
      </label>
      <button type="submit">
        Prepare email enquiry <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" aria-live="polite">
        {status || "The form prepares an email to export@tectaseal.com."}
      </p>
    </form>
  );
}
