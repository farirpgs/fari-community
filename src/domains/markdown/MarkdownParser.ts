import { Remarkable } from "remarkable";

export const MarkdownParser = {
  toHtml(markdown: string) {
    const md = new Remarkable({
      html: true,
    });
    const pagesContent = markdown || "";
    const html = md.render(pagesContent);

    return html;
  },
  toPlainText(markdown: string) {
    // remove all links
    // remove all iamges
    // remove all headings
    // remove bullets and quotes
    const html = this.toHtml(markdown);
    const text = html.replace(/<[^>]*>?/gm, "");
    return text.trim();
  },
};
