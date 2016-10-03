// Thanks to https://github.com/conclurer/markdown-to-html-pipe
import {Pipe, PipeTransform} from '@angular/core';
import marked = require('marked');

@Pipe({
    name: 'markdown'
})
export class MarkdownToHtmlPipe implements PipeTransform {
    public transform(markdown: string, options?: any): string {
        if (markdown == null) return '';
        return marked(markdown, options);
    }

    public static setOptions(options: any): void {
        marked.setOptions(options);
    }
}