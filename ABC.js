class ABC {
    constructor(config = {}) {
        this.type = config.type || "blank"
        this.url = config.url || "./index.html"
    }
    setType(type) {
        if (!type) return;
        this.type = type
    }
    setUrl(url) {
        if (!url) return;
        this.url = url
    }
    getCode() {
        return `<iframe style="height:100%;
         width: 100%;
          border: none;
           position: fixed;
            top: 0;
             right: 0;
             left: 0;
              bottom: 0;
               border: none" 
               sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
    }
    open() {
        if (this.type == "blank") {
            try {
                var page = window.open()
                if (!page || page.closed) {
                    alert("Please allow popups and redirects.")
                } else {
                const doc = page.document
                const iframe = doc.createElement('iframe')
                const style = iframe.style
                const link = doc.createElement('link')
            
                const name = localStorage.getItem('name') || 'My Drive - Google Drive'
                const icon = localStorage.getItem('icon') || 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'
            
                doc.title = name
                link.rel = 'icon'
                link.href = icon

                // console.log(this.url)

                iframe.src = `${this.url}`
                style.position = 'fixed'
                style.top = style.bottom = style.left = style.right = 0
                style.border = style.outline = 'none'
                style.width = style.height = '100%'
            
                doc.head.appendChild(link)
                doc.body.appendChild(iframe)
                location.replace(localStorage.getItem('panicLink') || 'https://classroom.google.com/')
            } 
        }catch{}
        
        } else if (this.type == "blob") {
            try {
                var page = new Blob([`<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`], { type: "text/html" })
                window.open(URL.createObjectURL(page))
            } catch {
            }
        } else if (this.type == "overwrite") {
            try {
                document.body.innerHTML = `<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="` + this.url + `"></iframe>`
            } catch {
            }
        }

    }
}


// let inFrame

// try {
//     inFrame = window !== top
// } catch (e) {
//     inFrame = true
// }

// // Cloaking Code
// if (!inFrame && !navigator.userAgent.includes("Firefox")) {
//     const popup = open("about:blank", "_blank")
//     if (!popup || popup.closed) {
//         alert("Please allow popups and redirects.")
//     } else {
//         const doc = popup.document
//         const iframe = doc.createElement("iframe")
//         const style = iframe.style
//         const link = doc.createElement("link")

//         const name = localStorage.getItem("name") || "My Drive - Google Drive";
//         const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";
        
//         doc.title = name;
//         link.rel = "icon";
//         link.href = icon;
        
//         iframe.src = location.href 
//         style.position = "fixed"
//         style.top = style.bottom = style.left = style.right = 0
//         style.border = style.outline = "none"
//         style.width = style.height = "100%"

//         doc.head.appendChild(link);
//         doc.body.appendChild(iframe)
//         location.replace("https://www.nasa.gov/")
//     }
// }

// document.addEventListener("DOMContentLoaded", function(event) { 
//     if(window.localStorage.getItem("v4Particles") == "true") {
//       const scr = document.createElement("script");
//       scr.src="/scripts/particles.js";
//       document.body.appendChild(scr);
//     }
//   });