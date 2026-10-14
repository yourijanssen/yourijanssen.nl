/** Creates the same section descriptor used by both the code label and its reveal. */
export function createSection(label) {
  return {
    label,
    /** Prepares available assets without forcing off-screen lazy images to download. */
    async load(element) {
      const document = element.ownerDocument;
      const images = Array.from(element.querySelectorAll('img')).filter(image => image.complete && image.naturalWidth > 0 && typeof image.decode === 'function');
      await Promise.allSettled([
        document.fonts?.ready ?? Promise.resolve(),
        ...images.map(image => image.decode()),
      ]);
    },
  };
}
