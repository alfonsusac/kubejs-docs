type Scopes = "startup" | "server" | "client";

export const SCOPE = {
  common: ["startup", "server", "client"] as Scopes[],
  server: ["server"] as Scopes[],
  client: ["client"] as Scopes[],
  startup: ["startup"] as Scopes[],
}