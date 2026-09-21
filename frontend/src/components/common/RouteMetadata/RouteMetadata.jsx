import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { routeMetadata, siteUrl, socialImage } from "./metadataConfig";

// Reuse an existing tag when present; restore it when this route is left.
function setHeadTag(tagName, key, value, attribute, content) {
  let element = document.head.querySelector(`${tagName}[${key}="${value}"]`);
  const existed = Boolean(element);
  const previousContent = element?.getAttribute(attribute);

  if (!element) {
    element = document.createElement(tagName);
    element.setAttribute(key, value);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, content);

  return () => {
    if (!existed) {
      element.remove();
    } else if (previousContent === null) {
      element.removeAttribute(attribute);
    } else {
      element.setAttribute(attribute, previousContent);
    }
  };
}

function RouteMetadata() {
  const { pathname } = useLocation();
  // Match the router's case-insensitive paths and normalize trailing slashes.
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";

  useEffect(() => {
    const metadata = routeMetadata[path];

    if (!metadata) {
      return;
    }

    const previousTitle = document.title;
    document.title = metadata.title;

    // Query parameters and hashes never become part of the canonical URL.
    const canonicalUrl = new URL(path, siteUrl).href;
    const imageUrl = new URL(socialImage.path, siteUrl).href;
    const tags = [
      ["name", "description", metadata.description],
      ["property", "og:title", metadata.title],
      ["property", "og:description", metadata.description],
      ["property", "og:url", canonicalUrl],
      ["property", "og:type", "website"],
      ["property", "og:image", imageUrl],
      ["property", "og:image:alt", socialImage.alt],
      ["property", "og:image:width", String(socialImage.width)],
      ["property", "og:image:height", String(socialImage.height)],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", metadata.title],
      ["name", "twitter:description", metadata.description],
      ["name", "twitter:image", imageUrl],
      ["name", "twitter:image:alt", socialImage.alt],
    ];
    const restoreTags = tags.map(([key, value, content]) =>
      setHeadTag("meta", key, value, "content", content),
    );
    restoreTags.push(
      setHeadTag("link", "rel", "canonical", "href", canonicalUrl),
    );

    return () => {
      document.title = previousTitle;
      restoreTags.forEach((restore) => restore());
    };
  }, [path]);

  return null;
}

export default RouteMetadata;
