// src/components/ProjectImage.jsx
import defaultImage from "../../assets/images/projects/no_preview.png";

const images = import.meta.glob(
  "../../assets/images/projects/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

// Helper: check if string is a URL
const isExternalUrl = (value) =>
  typeof value === "string" &&
  (value.startsWith("http://") || value.startsWith("https://"));

export default function ProjectImage({ imageName, alt, className }) {
  let src = defaultImage;

  if (imageName) {
    if (isExternalUrl(imageName)) {
      // External image URL
      src = imageName;
    } else {
      // Local image from assets
      src = images[`../../assets/images/projects/${imageName}`] || defaultImage;
    }
  }

  return (
    <img
      src={src}
      alt={alt || "Project preview"}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        // Fallback if external image fails to load
        e.currentTarget.src = defaultImage;
      }}
    />
  );
}
