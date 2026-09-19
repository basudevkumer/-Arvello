import { FiStar } from "react-icons/fi";

export default function RatingStars({ rating = 0, reviewCount, max = 5, size = 16, showValue = true, className = "" }) {
  const roundedRating = Math.round(Math.min(Math.max(rating, 0), max));
  return <div className={`inline-flex items-center gap-2 ${className}`} aria-label={`${rating} out of ${max} stars${reviewCount !== undefined ? `, ${reviewCount} reviews` : ""}`}><span className="flex items-center gap-0.5" aria-hidden="true">{Array.from({ length: max }, (_, index) => <FiStar key={index} size={size} className={index < roundedRating ? "fill-accent text-accent" : "text-text-muted"} />)}</span>{showValue ? <span className="text-caption text-text-secondary">{rating.toFixed(1)}</span> : null}{reviewCount !== undefined ? <span className="text-caption text-text-secondary">({reviewCount})</span> : null}<span className="sr-only">Rated {rating} out of {max}</span></div>;
}
