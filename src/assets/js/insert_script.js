export function insert(){
    var body = document.getElementsByTagName("head")[0]
    var s = document.createElement("script")
    s.setAttribute("id", "flexible-js")
    s.setAttribute("src", "http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js")
    body.appendChild(s)
}