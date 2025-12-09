// src/components/ProjectImage.jsx
import defaultImage from "../../assets/images/projects/no_preview.png"; // Your default image

const images = import.meta.glob(
  "../../assets/images/projects/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

export default function ProjectImage({ imageName, alt, className }) {
  // Use default if imageName is empty
  const src = imageName
    ? images[`../../assets/images/projects/${imageName}`] || defaultImage
    : defaultImage;

  if (!src) {
    console.warn(`Image not found: ${imageName}`);
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy" // Lazy loading
      decoding="async" // Async decoding for better performance
    />
  );
}
