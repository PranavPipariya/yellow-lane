export async function initNitroliteSession() {
  // TODO: implement Nitrolite auth flow. Placeholder for now.
  return "demo-session";
}

export async function sendTick(sessionId: string, amount: number) {
  console.log("demo sendTick", sessionId, amount);
  return true;
}

export async function getLedgerBalances(sessionId: string) {
  return Math.max(0, Math.floor(100 - Math.random() * 8));
}
