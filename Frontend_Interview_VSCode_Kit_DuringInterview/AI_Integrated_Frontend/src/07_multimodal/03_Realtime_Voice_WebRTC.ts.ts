/**
 * INTERVIEW ONE-LINER:
 * Realtime voice AI uses low-latency transports such as WebRTC for browser audio and requires server-mediated session authorization rather than exposing permanent API keys.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


async function createRealtimePeerConnection(ephemeralCredential: string) {
  const pc = new RTCPeerConnection(); // Browser WebRTC peer connection.

  // Microphone permission must be user-mediated.
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  for (const track of stream.getTracks()) {
    pc.addTrack(track, stream); // Send microphone audio to the peer connection.
  }

  console.log("Use the short-lived credential to negotiate with your backend/provider.");
  return pc;
}

void createRealtimePeerConnection;
