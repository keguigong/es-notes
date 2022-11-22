/**
 * https://ts.xcatliu.com/basics/declaration-files
 * 声明文件
 */

declare let jQuery1: (selector: string) => any;
declare function jQuery2(selector: string): any;

interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any;
}
//
declare namespace jQuery {
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
  }
  function ajax(url: string, settings?: AjaxSettings): void;
}