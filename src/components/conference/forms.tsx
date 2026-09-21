import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClass = "h-11 bg-paper/70 shadow-none focus-visible:ring-2";

export function RegistrationForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div role="status" className="glass-panel p-8"><CheckCircle2 className="size-9 text-brand" /><h2 className="mt-5 font-display text-3xl font-semibold text-ink">Registration noted</h2><p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/65">This is a demonstration form. No registration has been sent and no payment has been taken.</p><Button className="mt-6" variant="outline" onClick={() => setSent(false)}>Return to form</Button></div>;
  return <form onSubmit={submit} className="glass-panel p-6 md:p-8"><div className="grid gap-5 sm:grid-cols-2">
    <Field id="first" label="First name"><Input id="first" name="first" required autoComplete="given-name" className={fieldClass} /></Field>
    <Field id="last" label="Last name"><Input id="last" name="last" required autoComplete="family-name" className={fieldClass} /></Field>
    <Field id="institution" label="Institution"><Input id="institution" name="institution" required autoComplete="organization" className={fieldClass} /></Field>
    <Field id="email" label="Email"><Input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} /></Field>
    <Field id="status" label="Academic status"><select id="status" name="status" required className="h-11 w-full rounded-md border border-input bg-paper/70 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"><option value="">Select a category</option><option>PhD candidate</option><option>Professor / Academic</option><option>Postdoctoral researcher</option><option>Student</option><option>Professional</option><option>Other</option></select></Field>
    <Field id="diet" label="Dietary requirements"><Input id="diet" name="diet" placeholder="None, vegetarian, allergies…" className={fieldClass} /></Field>
    <div className="sm:col-span-2"><Field id="comments" label="Additional comments"><Textarea id="comments" name="comments" rows={4} className="bg-paper/70 shadow-none focus-visible:ring-2" /></Field></div>
  </div><Button type="submit" size="lg" className="mt-7">Register now</Button><p className="mt-3 text-xs text-muted-foreground">Demonstration only. No payment or submission service is connected.</p></form>;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <form onSubmit={submit} className="glass-panel p-6 md:p-8">{sent ? <div role="status"><CheckCircle2 className="size-9 text-brand" /><h2 className="mt-4 font-display text-3xl font-semibold">Message noted</h2><p className="mt-2 text-sm text-ink/65">This demonstration form is not connected to an inbox.</p><Button className="mt-6" variant="outline" onClick={() => setSent(false)} type="button">Send another message</Button></div> : <><div className="grid gap-5 sm:grid-cols-2"><Field id="contact-name" label="Name"><Input id="contact-name" required className={fieldClass} /></Field><Field id="contact-email" label="Email"><Input id="contact-email" type="email" required className={fieldClass} /></Field><div className="sm:col-span-2"><Field id="subject" label="Subject"><Input id="subject" required className={fieldClass} /></Field></div><div className="sm:col-span-2"><Field id="message" label="Message"><Textarea id="message" required rows={6} className="bg-paper/70 shadow-none focus-visible:ring-2" /></Field></div></div><Button className="mt-7" size="lg">Send enquiry</Button></>}</form>;
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) { return <div><label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">{label}</label>{children}</div>; }
