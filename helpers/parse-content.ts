export const parseContent = (text: any) => {
    return text
        .replace(
            /```([\s\S]*?)```/g,
            "<pre class='rounded-md px-4 py-2 dark:bg-zinc-900 bg-zinc-100 lg:text-wrap lg:overflow-hidden overflow-scroll' style='margin: 16px 0px;'><code class='text-zinc-600 dark:text-zinc-400'>$1</code></pre>"
        )
        .replace(/\*(.*?)\*/g, "<b>$1</b>");
};