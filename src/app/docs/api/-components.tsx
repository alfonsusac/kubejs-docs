import { Pill } from "@/component/pill"

export function StartupPill() {
  return (
    <Pill className="text-green-400/75 bg-green-200/7">
      Startup
    </Pill>
  )
}

export function ServerPill() {
  return (
    <Pill className="text-pink-400/75 bg-pink-200/7">
      Server
    </Pill>
  )
}

export function ClientPill() {
  return (
    <Pill className="text-orange-400/75 bg-orange-200/7">
      Client
    </Pill>
  )
}


