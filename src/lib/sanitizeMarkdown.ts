import sanitizeHtml from "sanitize-html"

export function sanitizeMarkdown(markdown: string): string {
  return sanitizeHtml(markdown, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "b", "i", "em", "strong", "a",
      "ul", "ol", "li", "code", "pre", "blockquote", "hr", "br",
      "table", "thead", "tbody", "tr", "td", "th",
      "img", "div", "span"
    ],
    allowedAttributes: {
      a: ["href", "target", "rel", "title"],
      img: ["src", "alt", "title", "width", "height", "style"],
      div: ["style"],
      span: ["style"]
    },
    allowedStyles: {
      "*": {
        "width": [/^\d+(px|%)?$/],
        "height": [/^\d+(px|%)?$/],
        "border": [/^.+$/],
        "border-radius": [/^.+$/],
        "object-fit": [/^.+$/],
        "max-width": [/^.+$/],
      }
    },
    allowedSchemes: ["http", "https", "mailto"]
  })
}
