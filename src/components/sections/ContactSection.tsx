import { ArrowRight, ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { type ContactSubjectId, site } from "#/data/site";
import { m } from "#/paraglide/messages";

interface ContactForm {
	name: string;
	email: string;
	subject: ContactSubjectId;
	message: string;
}

const initialForm: ContactForm = {
	name: "",
	email: "",
	subject: "partnership",
	message: "",
};

const subjectOptions: { id: ContactSubjectId; label: () => string }[] = [
	{ id: "partnership", label: () => m.contact_subject_partnership() },
	{ id: "investment", label: () => m.contact_subject_investment() },
	{ id: "career", label: () => m.contact_subject_career() },
	{ id: "press", label: () => m.contact_subject_press() },
	{ id: "other", label: () => m.contact_subject_other() },
];

export function ContactSection() {
	const [form, setForm] = useState<ContactForm>(initialForm);
	const [sent, setSent] = useState(false);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const subjectLabel =
			subjectOptions.find((option) => option.id === form.subject)?.label() ??
			"";

		const subject = encodeURIComponent(
			m.contact_mailto_subject({ subject: subjectLabel }),
		);
		const body = encodeURIComponent(
			m.contact_mailto_body({
				name: form.name,
				email: form.email,
				subject: subjectLabel,
				message: form.message,
			}),
		);

		window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
		setSent(true);
	};

	return (
		<section className="contact section-pad" id="contacto">
			<div className="container contact-layout">
				<div className="contact-copy">
					<Eyebrow>{m.contact_eyebrow()}</Eyebrow>
					<h2>
						{m.contact_title_1()}
						<br />
						<span>{m.contact_title_2()}</span>
					</h2>
					<p>{m.contact_p()}</p>

					<a className="contact-email" href={`mailto:${site.email}`}>
						<Mail size={18} /> {site.email} <ArrowUpRight size={16} />
					</a>

					<div className="contact-location">
						<MapPin size={17} />
						<span>
							{site.location} <small>{m.global_ambition()}</small>
						</span>
					</div>
				</div>

				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-heading">
						<span>{m.contact_form_title()}</span>
						<Send size={18} />
					</div>

					<label>
						{m.contact_label_name()}
						<input
							required
							value={form.name}
							onChange={(event) =>
								setForm({ ...form, name: event.target.value })
							}
							placeholder={m.contact_placeholder_name()}
						/>
					</label>

					<label>
						{m.contact_label_email()}
						<input
							required
							type="email"
							value={form.email}
							onChange={(event) =>
								setForm({ ...form, email: event.target.value })
							}
							placeholder={m.contact_placeholder_email()}
						/>
					</label>

					<label>
						{m.contact_label_subject()}
						<select
							value={form.subject}
							onChange={(event) =>
								setForm({
									...form,
									subject: event.target.value as ContactSubjectId,
								})
							}
						>
							{subjectOptions.map((option) => (
								<option key={option.id} value={option.id}>
									{option.label()}
								</option>
							))}
						</select>
					</label>

					<label>
						{m.contact_label_message()}
						<textarea
							required
							rows={4}
							value={form.message}
							onChange={(event) =>
								setForm({ ...form, message: event.target.value })
							}
							placeholder={m.contact_placeholder_message()}
						/>
					</label>

					<button className="button button-primary submit-button" type="submit">
						{sent ? m.contact_submit_again() : m.contact_submit()}{" "}
						<ArrowRight size={17} />
					</button>

					<p className="form-note">{m.contact_note()}</p>
				</form>
			</div>
		</section>
	);
}
