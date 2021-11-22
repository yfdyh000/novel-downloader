import { PublicConstructor } from "../../lib/misc";
import { Chapter } from "../../main";
import { BaseRuleClass } from "../../rules";
interface MkRuleClassOptions {
    bookUrl: string;
    bookname: string;
    author: string;
    introDom: HTMLElement;
    introDomPatch: (introDom: HTMLElement) => HTMLElement;
    coverUrl: string | null;
    aList: NodeListOf<Element>;
    sections?: NodeListOf<Element>;
    getName?: (sElem: Element) => string;
    postHook?: (chapter: Chapter) => Chapter | void;
    getContentFromUrl?: (chapterUrl: string, chapterName: string | null, charset: string) => Promise<HTMLElement | null>;
    getContent?: (doc: Document) => HTMLElement | null;
    contentPatch: (content: HTMLElement) => HTMLElement;
    concurrencyLimit?: number;
}
export declare function mkRuleClass({ bookUrl, bookname, author, introDom, introDomPatch, coverUrl, aList, sections, getName: _getSectionName, postHook, getContentFromUrl, getContent, contentPatch, concurrencyLimit, }: MkRuleClassOptions): PublicConstructor<BaseRuleClass>;
export {};