import * as React from "@pwa-fundament/reactivity";

export default function Icon(iconName: string): HTMLSpanElement {
  return <span class="icon">{iconName}</span>;
}
