import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
    name: string;
    email: string;
    message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAILTO = 'gowthamvegi@gmail.com';

export default function Contact() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
    const [touched, setTouched] = useState({ name: false, email: false, message: false });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');

    const errors = {
        name: form.name.trim().length < 2 ? 'Please enter your full name' : '',
        email: !EMAIL_REGEX.test(form.email) ? 'Please enter a valid email' : '',
        message: form.message.trim().length < 10 ? 'Message should be at least 10 characters' : '',
    };

    const isValid = !errors.name && !errors.email && !errors.message;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });

        if (!isValid) return;

        setStatus('sending');

        // Open default mail client with prefilled content.
        const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
        const mailtoUrl = `mailto:${MAILTO}?subject=${subject}&body=${body}`;

        try {
            window.location.href = mailtoUrl;
            setStatus('success');
            setTimeout(() => setStatus('idle'), 4000);
        } catch {
            setStatus('error');
        }
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(MAILTO);
            setCopyState('copied');
            setTimeout(() => setCopyState('idle'), 2000);
        } catch {
            // Fallback — select text if clipboard API blocked
            window.prompt('Copy email:', MAILTO);
        }
    };

    return (
        <section>
            <h2 className="section-title text-text-white text-[26px] sm:text-[32px] mb-6">
                Contact
            </h2>

            <p className="text-text-light text-[14px] sm:text-[15px] font-light leading-[1.7] mb-6">
                Have a project in mind, a role to discuss, or just want to say hi? Drop a message below —
                or copy my email and reach out directly.
            </p>

            {/* Quick email action */}
            <div className="flex flex-wrap gap-3 mb-8">
                <a href={`mailto:${MAILTO}`} className="btn-accent">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    Email Me
                </a>
                <button type="button" className="btn-accent" onClick={copyEmail}>
                    {copyState === 'copied' ? (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            Copied!
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                            </svg>
                            Copy Email
                        </>
                    )}
                </button>
            </div>

            {/* Map */}
            <div className="relative h-[220px] sm:h-[320px] w-full rounded-[16px] sm:rounded-[18px] mb-8 border border-border overflow-hidden">
                <iframe
                    title="Location in Bengaluru"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452149588!3d12.954517009498942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 grayscale invert"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            {/* Contact Form */}
            <h3 className="text-text-white text-[20px] sm:text-[24px] font-semibold mb-5">
                Send a Message
            </h3>

            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <FormField
                        id="name"
                        type="text"
                        placeholder="Full name"
                        value={form.name}
                        error={touched.name ? errors.name : ''}
                        onChange={(v) => setForm({ ...form, name: v })}
                        onBlur={() => setTouched({ ...touched, name: true })}
                    />
                    <FormField
                        id="email"
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        error={touched.email ? errors.email : ''}
                        onChange={(v) => setForm({ ...form, email: v })}
                        onBlur={() => setTouched({ ...touched, email: true })}
                    />
                </div>

                <div className="mb-5">
                    <textarea
                        id="message"
                        placeholder="Your message"
                        aria-invalid={touched.message && !!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onBlur={() => setTouched({ ...touched, message: true })}
                        className="form-input min-h-[120px] max-h-[280px] resize-y"
                    />
                    {touched.message && errors.message && (
                        <p id="message-error" className="text-[12px] text-[hsl(0,72%,65%)] mt-1.5">
                            {errors.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div aria-live="polite" className="min-h-[20px]">
                        {status === 'success' && (
                            <p className="text-[13px] text-accent">
                                ✓ Your email client should open now.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-[13px] text-[hsl(0,72%,65%)]">
                                Something went wrong. Please email me directly.
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-accent w-full sm:w-auto"
                    >
                        <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </section>
    );
}

function FormField({
    id,
    type,
    placeholder,
    value,
    error,
    onChange,
    onBlur,
}: {
    id: string;
    type: string;
    placeholder: string;
    value: string;
    error: string;
    onChange: (v: string) => void;
    onBlur: () => void;
}) {
    return (
        <div>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                className="form-input"
            />
            {error && (
                <p id={`${id}-error`} className="text-[12px] text-[hsl(0,72%,65%)] mt-1.5">
                    {error}
                </p>
            )}
        </div>
    );
}
