var APF = {log:function(A) {
}};
APF.Namespace = {register:function(D) {
    var C = D.split(".");
    var A = window;
    for (var B = 0; B < C.length; B++) {
        if (typeof A[C[B]] == "undefined") {
            A[C[B]] = new Object()
        }
        A = A[C[B]]
    }
}};
APF.Utils = {getWindowSize:function() {
    var B = 0,A = 0;
    if (typeof (window.innerWidth) == "number") {
        B = window.innerWidth;
        A = window.innerHeight
    } else {
        if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            B = document.documentElement.clientWidth;
            A = document.documentElement.clientHeight
        } else {
            if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                B = document.body.clientWidth;
                A = document.body.clientHeight
            }
        }
    }
    return{width:B,height:A}
},getScroll:function() {
    var B = 0,A = 0;
    if (typeof (window.pageYOffset) == "number") {
        A = window.pageYOffset;
        B = window.pageXOffset
    } else {
        if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            A = document.body.scrollTop;
            B = document.body.scrollLeft
        } else {
            if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                A = document.documentElement.scrollTop;
                B = document.documentElement.scrollLeft
            }
        }
    }
    return{left:B,top:A}
},setCookie:function(C, E, A, H, D, G) {
    var B = new Date();
    B.setTime(B.getTime());
    if (A) {
        A = A * 1000 * 60 * 60 * 24
    }
    var F = new Date(B.getTime() + (A));
    document.cookie = C + "=" + escape(E) + ((A) ? ";expires=" + F.toGMTString() : "") + ((H) ? ";path=" + H : "") + ((D) ? ";domain=" + D : "") + ((G) ? ";secure" : "")
},getCookie:function(A) {
    var F = document.cookie.split(";");
    var B = "";
    var D = "";
    var E = "";
    var C = false;
    for (i = 0; i < F.length; i++) {
        B = F[i].split("=");
        D = B[0].replace(/^\s+|\s+$/g, "");
        if (D == A) {
            C = true;
            if (B.length > 1) {
                E = decodeURIComponent(B[1].replace(/^\s+|\s+$/g, ""))
            }
            return E;
            break
        }
        B = null;
        D = ""
    }
    if (!C) {
        return null
    }
},deleteCookie:function(A, C, B) {
    if (this.getCookie(A)) {
        document.cookie = A + "=" + ((C) ? ";path=" + C : "") + ((B) ? ";domain=" + B : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT"
    }
},setScrollTop:function(A) {
    if (document.body) {
        document.body.scrollTop = A;
        if (document.body.scrollTop == 0) {
            if (document.documentElement) {
                document.documentElement.scrollTop = A
            }
        }
    } else {
        if (document.documentElement) {
            document.documentElement.scrollTop = A
        }
    }
},getScrollTop:function() {
    return document.body ? document.body.scrollTop || document.documentElement.scrollTop : document.documentElement.scrollTop
},gotoScrollTop:function(D, C) {
    var B = APF.Utils.getScrollTop(),F = 0,E = 0;
    var C = C || 1;
    var D = D || 0;
    var A = B > D ? 1 : 0;
    (function() {
        B = APF.Utils.getScrollTop();
        F = A ? B - D : D - B;
        E = A ? B - F / 15 * C : B + 1 + F / 15 * C;
        APF.Utils.setScrollTop(E);
        if (F <= 0 || B == APF.Utils.getScrollTop()) {
            return
        }
        setTimeout(arguments.callee, 10)
    })()
}};