import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Only the plugins the site uses. Register more here when a section needs them.
gsap.registerPlugin(useGSAP);

export { gsap, useGSAP };
