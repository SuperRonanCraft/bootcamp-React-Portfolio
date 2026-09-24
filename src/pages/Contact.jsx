import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, CheckCircle2, Loader2, Send } from "lucide-react";
import { contactSchema } from "../../shared/contact";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });
  async function onSubmit(values) {
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      if (!response.ok || !data.success)
        throw new Error(
          data.error ||
            "Your message could not be sent. Please try again or email me directly.",
        );
      setStatus({
        success: true,
        message:
          "Message sent. Thanks for reaching out — I’ll reply to the email you provided.",
      });
      reset();
    } catch (error) {
      setStatus({
        success: false,
        message:
          error instanceof TypeError ||
          error.name === "TimeoutError" ||
          error instanceof SyntaxError
            ? "We could not confirm your message was sent. Check your connection or email me directly."
            : error.message,
      });
    }
  }
  return (
    <section className="contact-page page-width">
      <div className="contact-intro">
        <p className="eyebrow">Let’s connect</p>
        <h1>
          Good things start
          <br />
          with a conversation.
        </h1>
        <p>
          Have a project, a role, or an interesting problem in mind? Tell me a
          little about it.
        </p>
        <a className="direct-email" href="mailto:superronancraft@gmail.com">
          superronancraft@gmail.com <ArrowUpRight size={18} />
        </a>
        <p className="contact-note">
          Prefer email? You can reach me directly, too.
        </p>
      </div>
      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-busy={isSubmitting}
      >
        <h2>Send me a message</h2>
        <p className="form-intro">All fields are required.</p>
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            autoComplete="name"
            placeholder="Alex Morgan"
            maxLength={100}
            required
            {...register("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="field-error">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="alex@example.com"
            maxLength={254}
            required
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="field-error">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="message">What are you working on?</label>
          <textarea
            id="message"
            rows={6}
            placeholder="A little about your project, opportunity, or idea…"
            maxLength={5000}
            required
            {...register("message")}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
          />
          {errors.message ? (
            <p id="message-error" className="field-error">
              {errors.message.message}
            </p>
          ) : (
            <p id="message-hint" className="field-hint">
              10–5,000 characters.
            </p>
          )}
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <button
          className="button-primary send-button"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="spin" size={17} /> Sending…
            </>
          ) : (
            <>
              Send message <Send size={17} />
            </>
          )}
        </button>
        <div aria-live="polite" aria-atomic="true">
          {status && (
            <p
              className={`form-status ${status.success ? "success" : "error"}`}
              role={status.success ? "status" : "alert"}
            >
              {status.success && <CheckCircle2 size={19} />}
              {status.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
