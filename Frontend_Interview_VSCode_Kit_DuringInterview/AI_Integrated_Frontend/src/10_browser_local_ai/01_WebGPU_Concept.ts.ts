/**
 * INTERVIEW ONE-LINER:
 * WebGPU enables high-performance GPU compute in the browser, making local/on-device AI inference possible on supported hardware.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


async function checkWebGPU() {
  if (!("gpu" in navigator)) {
    console.log("WebGPU unavailable.");
    return;
  }

  // Request a GPU adapter representing a compatible device.
  const adapter = await navigator.gpu.requestAdapter();

  console.log("WebGPU adapter available:", Boolean(adapter));
}

void checkWebGPU;
