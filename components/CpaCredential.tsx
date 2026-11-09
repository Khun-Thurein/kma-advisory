import {
  CheckBadgeIcon,
  IdentificationIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import { site } from "@/lib/site";

export function CpaCredential({ className = "" }: { className?: string }) {
  const { credential } = site;

  return (
    <div
      className={`inline-flex w-fit items-center gap-4 rounded-sm border border-ink/10 bg-white p-4 ${className}`}
    >
      <Image
        src={credential.imageSrc}
        alt={credential.imageAlt}
        width={128}
        height={128}
        className="h-16 w-16 shrink-0 rounded-sm object-cover"
      />
      <div className="min-w-0">
        <p className="inline-flex items-center gap-1.5 text-base font-semibold leading-6 text-ink">
          <CheckBadgeIcon className="size-4 shrink-0 text-teal" aria-hidden />
          {credential.title}
        </p>
        <p className="text-sm text-ink">{credential.issuer}</p>
        <p className="mt-1 text-sm text-stone">{credential.issued}</p>
        <p className="inline-flex items-center gap-1.5 text-sm text-stone">
          <IdentificationIcon className="size-4 shrink-0" aria-hidden />
          Credential ID {credential.id}
        </p>
      </div>
    </div>
  );
}
