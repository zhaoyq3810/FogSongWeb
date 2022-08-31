import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import type { AxiosRequestTransformer } from 'axios'

// Router
export type IRouter = Array<RouteRecordRaw>

// Router ScrollBehavior
export type IScrollBehavior = RouterScrollBehavior | undefined

// NormalObject
export interface IObj<T = any> {
  [key: string]: T
}

// IObjArray
export type IObjArray = Array<IObj>

// Function
export type IFunc<T = any> = (...params: Array<T>) => any

// IAxiosReqParams
export interface IAxiosReqParams {
  url: string,
  method?: 'get' | 'post',
  headers?: IObj,
  params?: IObj,
  data?: IObj,
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[] | undefined
}

// IAxiosReqFunc
export interface IAxiosReqFunc extends IObj {
  (config: IAxiosReqParams): Promise<IObj>
}

// RefElement
export type IRefEl = IObj | null

// vuex mutations
export type IMutations<T = any> = {
  [key: string]: (state: IObj, value?: T) => void
}

// HTMLElement
export type IEl =
  HTMLElement
  | HTMLAnchorElement
  | HTMLAreaElement
  | HTMLAudioElement
  | HTMLBaseElement
  | HTMLQuoteElement
  | HTMLBodyElement
  | HTMLBRElement
  | HTMLButtonElement
  | HTMLCanvasElement
  | HTMLTableCaptionElement
  | HTMLTableColElement
  | HTMLDataElement
  | HTMLDataListElement
  | HTMLModElement
  | HTMLDetailsElement
  | HTMLDivElement
  | HTMLDListElement
  | HTMLEmbedElement
  | HTMLFieldSetElement
  | HTMLFormElement
  | HTMLHeadingElement
  | HTMLHeadElement
  | HTMLHRElement
  | HTMLHtmlElement
  | HTMLIFrameElement
  | HTMLImageElement
  | HTMLInputElement
  | HTMLLabelElement
  | HTMLLegendElement
  | HTMLLIElement
  | HTMLLinkElement
  | HTMLMapElement
  | HTMLMenuElement
  | HTMLMetaElement
  | HTMLMeterElement
  | HTMLObjectElement
  | HTMLOListElement
  | HTMLOptGroupElement
  | HTMLOptionElement
  | HTMLOutputElement
  | HTMLParagraphElement
  | HTMLParamElement
  | HTMLPictureElement
  | HTMLPreElement
  | HTMLProgressElement
  | HTMLScriptElement
  | HTMLSelectElement
  | HTMLSlotElement
  | HTMLSourceElement
  | HTMLSpanElement
  | HTMLStyleElement
  | HTMLTableElement
  | HTMLTableSectionElement
  | HTMLTemplateElement
  | HTMLTextAreaElement
  | HTMLTimeElement
  | HTMLTitleElement
  | HTMLTableRowElement
  | HTMLTrackElement
  | HTMLUListElement
  | HTMLVideoElement
