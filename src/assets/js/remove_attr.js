// share文件夹下页面(1rem=37.5px)和其它页面(1rem=16px)样式1rem单位对应的px数不同，导致的样式不同的修正函数
//share类页面需引用
export function removeFlexjs(){
    var html_script = document.getElementsByTagName("html")[0]
    var body_script = document.getElementsByTagName("body")[0]
    html_script.removeAttribute("style")
    html_script.removeAttribute("data-dpr")
    body_script.removeAttribute("style")
}
