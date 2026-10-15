import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { principleContent } from "#/data/principles";
import { gsap } from "#/lib/gsap";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";

/** Time each letter stays on the card when the dial is on autoplay. */
const HOLD_MS = 2600;
/** Degrees between two letters on the dial. */
const TURN = 60;
/** Where the letters sit, as a fraction of the dial's width from its centre. */
const LABEL_RADIUS = 45;

const CENTER = 50;
const RING = 36;

/** Dial ticks in the 100 by 100 viewBox. Every sixth tick is longer. */
const TICKS = Array.from({ length: 72 }, (_, i) => {
	const angle = (i * 5 * Math.PI) / 180;
	const major = i % 6 === 0;
	const inner = major ? RING - 5 : RING - 2;
	return {
		major,
		x1: CENTER + inner * Math.sin(angle),
		y1: CENTER - inner * Math.cos(angle),
		x2: CENTER + RING * Math.sin(angle),
		y2: CENTER - RING * Math.cos(angle),
	};
});

const reducedMotion = () =>
	typeof window !== "undefined" &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function HeroSection() {
	const scope = useRef<HTMLElement>(null);
	const title = useRef<HTMLHeadingElement>(null);
	const needle = useRef<SVGGElement>(null);
	const shown = useRef(-1);
	const turned = useRef(0);
	const principles = principleContent[getLocale()];
	const count = principles.length;

	const [active, setActive] = useState(0);
	const [autoplay, setAutoplay] = useState(true);

	// Show the card for the active letter and turn the needle to it.
	useEffect(() => {
		const root = scope.current;
		const needleEl = needle.current;
		if (!root || !needleEl) return;
		if (shown.current === active) return;

		const cards = root.querySelectorAll<HTMLElement>(".hero-feature");
		const next = cards[active];
		const prev = shown.current;

		if (prev === -1 || reducedMotion()) {
			gsap.set(cards, { opacity: 0 });
			gsap.set(next, { opacity: 1 });
			gsap.set(needleEl, { svgOrigin: `${CENTER} ${CENTER}` });
			turned.current = active * TURN;
			gsap.set(needleEl, { rotation: turned.current });
		} else {
			gsap.to(cards[prev], {
				opacity: 0,
				xPercent: -40,
				scale: 0.96,
				duration: 0.7,
				ease: "expo.in",
			});
			gsap.fromTo(
				next,
				{ opacity: 0, xPercent: 40, scale: 0.96 },
				{ opacity: 1, xPercent: 0, scale: 1, duration: 0.9, ease: "expo.out" },
			);

			// Always turn forward, so the needle never swings the long way round.
			turned.current += ((active - prev + count) % count) * TURN;
			gsap.to(needleEl, {
				rotation: turned.current,
				duration: 0.9,
				ease: "power3.inOut",
			});
		}

		shown.current = active;
	}, [active, count]);

	// Autoplay moves to the next letter. Picking a letter by hand stops it.
	useEffect(() => {
		if (!autoplay || reducedMotion()) return;
		const id = window.setInterval(
			() => setActive((a) => (a + 1) % count),
			HOLD_MS,
		);
		return () => window.clearInterval(id);
	}, [autoplay, count]);

	// The title pulses between a faint and a strong blue glow.
	useEffect(() => {
		const el = title.current;
		if (!el || reducedMotion()) return;

		const base = getComputedStyle(el).color;
		const tween = gsap.fromTo(
			el,
			{
				color: base,
				textShadow: "0 0 0 rgba(61,155,255,0), 0 0 0 rgba(61,155,255,0)",
			},
			{
				color: "#3d9bff",
				textShadow:
					"0 0 12px rgba(61,155,255,.9), 0 0 40px rgba(61,155,255,.6)",
				duration: 1.2,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true,
				delay: 1.2,
			},
		);
		return () => {
			tween.kill();
		};
	}, []);

	return (
		<section className="hero" id="inicio" ref={scope}>
			<div className="container">
				<Eyebrow>{m.hero_eyebrow()}</Eyebrow>

				<h1 className="hero-title" ref={title}>
					{m.hero_title_1()} {m.hero_title_2()}
				</h1>

				<div className="hero-split">
					<div className="hero-cards">
						{principles.map((principle) => (
							<article
								className="hero-feature"
								key={`${principle.letter}-${principle.word}`}
							>
								<span className="hero-feature-letter" aria-hidden="true">
									{principle.letter}
								</span>
								{principle.pt ? (
									<span className="hero-feature-sub">{principle.word}</span>
								) : null}
								<h3>{principle.pt || principle.word}</h3>
								<p>{principle.text}</p>
							</article>
						))}
					</div>

					<div className="hero-dial">
						<svg
							className="hero-dial-svg"
							viewBox="0 0 100 100"
							aria-hidden="true"
						>
							<circle cx={CENTER} cy={CENTER} r={RING} className="dial-ring" />
							<circle
								cx={CENTER}
								cy={CENTER}
								r={RING - 12}
								className="dial-ring dial-ring-inner"
							/>
							{TICKS.map((tick) => (
								<line
									key={`${tick.x1}-${tick.y1}`}
									x1={tick.x1}
									y1={tick.y1}
									x2={tick.x2}
									y2={tick.y2}
									className={
										tick.major ? "dial-tick dial-tick-major" : "dial-tick"
									}
								/>
							))}
							<g className="hero-needle" ref={needle}>
								<path className="needle-up" d="M50 22 L52.4 50 L47.6 50 Z" />
								<path className="needle-down" d="M50 78 L52.4 50 L47.6 50 Z" />
								<circle
									cx={CENTER}
									cy={CENTER}
									r={2.6}
									className="needle-hub"
								/>
							</g>
						</svg>

						{principles.map((principle, i) => {
							const angle = (i * TURN * Math.PI) / 180;
							return (
								<button
									type="button"
									key={`dial-${principle.letter}-${principle.word}`}
									className={
										i === active
											? "hero-dial-letter is-active"
											: "hero-dial-letter"
									}
									style={{
										left: `${50 + LABEL_RADIUS * Math.sin(angle)}%`,
										top: `${50 - LABEL_RADIUS * Math.cos(angle)}%`,
									}}
									aria-label={principle.pt || principle.word}
									aria-pressed={i === active}
									onClick={() => {
										setAutoplay(false);
										setActive(i);
									}}
								>
									{principle.letter}
								</button>
							);
						})}
					</div>
				</div>

				<p className="hero-lead">{m.hero_lead()}</p>

				<div className="hero-actions">
					<a className="button button-primary" href="#produtos">
						{m.hero_cta_primary()}
					</a>
					<a className="button button-ghost" href="#sobre">
						{m.hero_cta_secondary()}
					</a>
				</div>

				<p className="hero-note">{m.hero_note()}</p>
			</div>
		</section>
	);
}
