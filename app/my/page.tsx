import { redirect } from "next/navigation";

export default function BurmeseLanguageRedirect() {
  redirect("/?lang=my");
}
