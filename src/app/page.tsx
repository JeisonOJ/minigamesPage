import { redirect } from "next/navigation";
export default function Home() {
  redirect("/pages/numberguessing");
  return <></>;
}
