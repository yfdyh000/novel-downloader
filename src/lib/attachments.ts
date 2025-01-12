import { AttachmentClass } from "../main/Attachment";
import { ReferrerMode } from "../main/main";
import { calculateSha1 } from "./hash";
import { log } from "../log";
import { randomUUID } from "./misc";

let attachmentClassCache: AttachmentClass[] = [];
export function getAttachmentClassCache(url: string) {
  return attachmentClassCache.find(
    (attachmentClass) => attachmentClass.url === url
  );
}

export function putAttachmentClassCache(attachmentClass: AttachmentClass) {
  attachmentClassCache.push(attachmentClass);
  return true;
}

export function clearAttachmentClassCache() {
  attachmentClassCache = [];
}

export async function getImageAttachment(
  url: string,
  imgMode: "naive" | "TM",
  prefix = "",
  noMD5 = false,
  comments = getRandomName(),
  options?: {
    referrerMode?: ReferrerMode;
    customReferer?: string;
  }
): Promise<AttachmentClass> {
  if (imgMode === "naive") {
    const u = new URL(url);
    if (document.location.protocol === "https:" && u.protocol === "http:") {
      u.protocol = document.location.protocol;
      url = u.href;
    }
  }

  const imgClassCache = getAttachmentClassCache(url);
  if (imgClassCache) {
    return imgClassCache;
  }
  const imgClass = new AttachmentClass(
    url,
    comments,
    imgMode,
    options?.referrerMode,
    options?.customReferer
  );
  imgClass.comments = comments;
  const blob = await imgClass.init();
  if (blob) {
    if (noMD5) {
      imgClass.name = getLastPart(url);
    } else {
      const hash = await calculateSha1(blob);
      const ext = getExt(blob, url);
      imgClass.name = [prefix, hash, ".", ext].join("");
    }
  }
  putAttachmentClassCache(imgClass);
  log.debug(
    `[attachment]下载附件完成！ url:${imgClass.url}, name: ${imgClass.name}`
  );
  return imgClass;
}

export function getRandomName() {
  return `__${randomUUID()}__`;
}

export function getExt(b: Blob, u: string) {
  const contentType = b.type.split(";")[0].split("/")[1];
  const contentTypeBlackList = ["octet-stream"];
  if (contentTypeBlackList.includes(contentType)) {
    return getExtFromUrl(u);
  } else {
    return contentType;
  }
}
function getExtFromUrl(u: string) {
  const _u = new URL(u);
  const p = _u.pathname;
  return p.substring(p.lastIndexOf(".") + 1);
}
function getLastPart(u: string) {
  const _u = new URL(u);
  const p = _u.pathname;
  return p.substring(p.lastIndexOf("/") + 1);
}
