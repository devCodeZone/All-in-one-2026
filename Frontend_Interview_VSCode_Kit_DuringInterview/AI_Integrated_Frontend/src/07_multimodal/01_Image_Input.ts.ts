/**
 * INTERVIEW ONE-LINER:
 * Multimodal models can combine text with image input, enabling frontend flows such as screenshot analysis, visual search, document understanding, and design review.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const multimodalInput = [
  {
    role: "user",
    content: [
      { type: "input_text", text: "Review this UI screenshot for accessibility issues." },
      { type: "input_image", image_url: "https://example.com/screenshot.png" }
    ]
  }
];

console.log(multimodalInput);
