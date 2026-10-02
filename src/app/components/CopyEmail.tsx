"use client";

/**
 * Copy-email action with a plotted-stamp toast (sonner, headless via
 * toast.custom). Clipboard API first; execCommand fallback for webviews
 * (LinkedIn's in-app browser often has no navigator.clipboard); as a last
 * resort the toast shows the address itself, selectable — never a surprise
 * mailto: navigation out of the site.
 */

import { Check } from "lucide-react";
import { toast } from "sonner";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.readOnly = true;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

export default function CopyEmail({
  email,
  label,
  stamped,
}: {
  email: string;
  label: string;
  stamped: string;
}) {
  return (
    <button
      type="button"
      className="stamp-btn stamp-btn--ghost"
      onClick={async () => {
        const copied = await copyText(email);
        if (copied) {
          toast.custom(
            () => (
              <div className="plot-toast flex items-center gap-2 font-mono">
                <Check size={14} strokeWidth={1.5} aria-hidden />
                {stamped}
              </div>
            ),
            { duration: 2200 }
          );
        } else {
          toast.custom(() => <div className="plot-toast select-text font-mono normal-case">{email}</div>, {
            duration: 6000,
          });
        }
      }}
    >
      {label}
    </button>
  );
}
