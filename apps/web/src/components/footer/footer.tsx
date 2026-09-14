import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 py-7">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-2.5 px-7 font-mono text-[0.72rem] text-muted">
        <span>{t("copyright", { year })}</span>
        <span>{t("built")}</span>
      </div>
    </footer>
  );
}
