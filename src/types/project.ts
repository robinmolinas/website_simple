/**
 * Project — shared data model for the portfolio work section.
 *
 * This is the single source of truth for the Project type.
 * Import from here in all components — do NOT redefine inline.
 */
export interface Project {
  /** Unique identifier (used for deep-linking or analytics). */
  id?: string;
  /** Display number, e.g. "01", "02". */
  number: string;
  /** Category label shown above the project title. */
  category: string;
  /** Project title. Use "\n" for line breaks in the heading. */
  name: string;
  /** Short description shown on the card. */
  description: string;
  /** CTA button label. */
  buttonLabel: string;
  /** External link for live projects. */
  buttonHref?: string;
  /** Link to an external case study. */
  caseStudyLink?: string;
  /** Small subtitle shown next to the CTA button. */
  buttonSubtitle?: string;
  /** Skill / competency tags. */
  tags?: string[];
  /**
   * Accent colour for the animated visual.
   * Either a named palette key ("pink" | "blue" | "teal" | "amber")
   * or a raw CSS colour value (e.g. "#6C5CE7").
   */
  accent?: string;
  /** RGB channel values for the accent colour, used in rgba() expressions. */
  accentRgb?: string;

  // ─── Modal detail-view fields ────────────────────────────────────────────

  /** Client / engagement label. */
  client?: string;
  /** Executive summary paragraph. */
  intro?: string;
  /** Bullet list of responsibilities. */
  role?: string[];
  /** Bullet list of business outcomes. */
  impact?: string[];
  /** Stat blocks: [value, label] pairs. */
  metrics?: [string, string][];
  /** Competency tags shown specifically in the modal (falls back to `tags`). */
  competencies?: string[];
  /** Local image paths for the card visual (e.g. animated GIFs). */
  images?: {
    col2: string;
  };
}
