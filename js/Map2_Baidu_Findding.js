String.prototype.substringPro = function(C, D) {
    var E = "";
    D = D || "...";
    if (this.getLen() <= C) {
        return this
    }
    for (var B = 0,A = 0; A < C - D.length;) {
        if (this.charCodeAt(B) >= 0 && this.charCodeAt(B) < 256) {
            E += this.charAt(B);
            A++
        } else {
            if ((A += 3) <= C) {
                E += this.charAt(B)
            }
        }
        B++
    }
    E += D;
    return E
};
String.prototype.getRootDomain = function() {
    var A = /^([^:]*:\/\/)?([^\/\.]+\.([^\/]+))/.exec(this);
    return A && A[3] !== undefined ? A[3] + "" : ""
};
String.prototype.Trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "")
};
String.prototype.getLen = function(B) {
    if ("undefined" == typeof B) {
        B = true
    } else {
        B = false
    }
    var A = 0;
    if (B) {
        for (var C = 0; C < this.length; ++C) {
            if (this.charCodeAt(C) > 127) {
                A += 3
            } else {
                A++
            }
        }
    } else {
        A = this.length
    }
    return A
};
String.prototype.chkLen = function(B, A) {
    var C = this.getLen(this);
    if (C > A || C < B) {
        return false
    } else {
        return true
    }
};
String.prototype.chkType = function(A) {
    switch (A) {
        case"int":
            return(/^-?[1-9][0-9]+$|^-?[0-9]$/).test(this);
        case"url":
            return(/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/).test(this);
        case"email":
            return(/^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i).test(this);
        case"idcard":
            return(/^[0-9]{15}$|^[0-9]{17}[a-zA-Z0-9]/).test(this);
        case"area":
            return(/^\d+(\.\d{1,2})?$/).test(this);
        case"money":
            return(/^\d+(\.\d{1,2})?$/).test(this);
        case"year":
            return(/^(19|20)\d\d$/).test(this);
        case"input":
            return(/^[\u4e00-\u9fa5A-Za-z0-9_\s\~\@\!\#\$\.\,\/\\\%\^\&\*\(\)_\+\?\>\<《〉》\:：〉、，。？！￥（）\{\}\[\]]+$/).test(this)
    }
    return false
};
String.prototype.containType = function(A) {
    switch (A) {
        case"mobile":
            return(/[0-9]{11}/).test(this)
    }
    return false
};
Array.prototype.unique = function() {
    var C = {};
    for (var B = 0,A = 0; B < this.length; B++) {
        if (this[B] !== undefined) {
            if (!C[this[B]]) {
                this[A++] = this[B];
                C[this[B]] = true
            }
        }
    }
    this.length = A;
    return this
};
Array.prototype.clone = function() {
    var A = [];
    for (var B in this) {
        if (A[B] === undefined && typeof this[B] == "string") {
            A[B] = this[B]
        }
    }
    return A
};
Array.prototype.insertAt = function(A, C) {
    var D = this.slice(0, A);
    var B = this.slice(A);
    D.push(C);
    return(D.concat(B))
};
window.openNew = function(C, A) {
    var B = document.createElement("form");
    form.action = C;
    form.target = A;
    form.submit()
};
window.getRadioValue = function(B) {
    var C = document.getElementsByName(B);
    var D = C.length;
    if (0 == D) {
        return null
    }
    for (var A = 0; A < D; ++A) {
        if (C[A].checked == true) {
            return C[A].value
        }
    }
    return""
};
window.cancelBubble = function(A) {
    if (A && A.stopPropagation) {
        A.stopPropagation()
    } else {
        window.event.cancelBubble = true
    }
    return false
};
strip_tags = function(G, H) {
    var K = "",I = false;
    var F = [];
    var A = [];
    var J = "";
    var D = 0;
    var C = "";
    var E = "";
    var B = function(M, L, N) {
        return N.split(M).join(L)
    };
    if (H) {
        A = H.match(/([a-zA-Z0-9]+)/gi)
    }
    G += "";
    F = G.match(/(<\/?[\S][^>]*>)/gi);
    for (K in F) {
        if (isNaN(K)) {
            continue
        }
        E = F[K].toString();
        I = false;
        for (C in A) {
            J = A[C];
            D = -1;
            if (D != 0) {
                D = E.toLowerCase().indexOf("<" + J + ">")
            }
            if (D != 0) {
                D = E.toLowerCase().indexOf("<" + J + " ")
            }
            if (D != 0) {
                D = E.toLowerCase().indexOf("</" + J)
            }
            if (D == 0) {
                I = true;
                break
            }
        }
        if (!I) {
            G = B(E, "", G)
        }
    }
    return G
};
APF.Namespace.register("anjuke.global.header");
anjuke.global.header.CitySelector = Class.create({initialize:function(D, C, A) {
    this.selector = $(D);
    this.panelId = C;
    this.hideTimeout = A;
    var B = $(C);
    this.iframe = B.select("iframe").first();
    this.iframe.setStyle({width:B.getWidth() + "px",height:B.getHeight() + "px"});
    this.selector.observe("mouseover", function() {
        window.clearTimeout(this.timeoutHandle);
        $(this.panelId).show()
    }.bind(this));
    this.selector.observe("mouseout", function() {
        window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout("$('" + this.panelId + "').hide()", this.hideTimeout)
    }.bind(this));
    B.observe("mouseover", function() {
        window.clearTimeout(this.timeoutHandle);
        $(this.panelId).show()
    }.bind(this));
    B.observe("mouseout", function() {
        window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout("$('" + this.panelId + "').hide()", this.hideTimeout)
    }.bind(this));
    var E = this.selector.select("a").first();
    if (E != undefined) {
        E.observe("click", function(F) {
            F.preventDefault()
        })
    }
}});
APF.Namespace.register("anjuke.global.search");
anjuke.global.search.Autocompleter = Class.create(Ajax.Autocompleter, {initialize:function($super, C, D, B, A) {
    $super(C, D, B, A);
    this.index = -1;
    this.keyMove = false;
    this.kwLen = 100;
    this.curKw = "";
    this.input_kw = $(C);
    if (A.formid) {
        this.form_elem = $(A.formid);
        this.bindSubmitForm()
    }
    this._fixChineseInputMethodProblem()
},_fixChineseInputMethodProblem:function() {
    var A = window.setInterval(function() {
        if (this.oldElementValue == this.element.value) {
            return
        }
        this.oldElementValue = this.element.value;
        if (this.observer) {
            clearTimeout(this.observer)
        }
        this.observer = setTimeout(this.onObserverEvent.bind(this), 0)
    }.bind(this), this.options.frequency * 1000)
},selectEntry:function($super) {
    this.oldElementValue = this.element.value;
    if (this.observer) {
        clearTimeout(this.observer)
    }
    $super()
},updateChoices:function($super, D) {
    if (!this.changed && this.hasFocus) {
        if (D == "" || D == "<ul></ul>") {
            this.entryCount = 0;
            this.curKw = ""
        } else {
            this.update.innerHTML = D;
            Element.cleanWhitespace(this.update);
            Element.cleanWhitespace(this.update.down());
            this.kwLen = 100;
            var C = this.strIsEnglish(this.input_kw.value);
            if (this.update.firstChild && this.update.down().childNodes) {
                this.entryCount = this.update.down().childNodes.length;
                for (var A = 0; A < this.entryCount; A++) {
                    var B = this.getEntry(A);
                    B.autocompleteIndex = A;
                    this.addObservers(B);
                    if (C) {
                        this.getKeywords(B.childNodes[0].innerHTML)
                    }
                }
            } else {
                this.entryCount = 0;
                this.curKw = ""
            }
        }
        this.stopIndicator();
        this.index = -1;
        if (this.entryCount == 1 && this.options.autoSelect) {
            this.selectEntry();
            this.hide()
        } else {
            this.render()
        }
    }
},onKeyPress:function(A) {
    if (this.observer) {
        clearTimeout(this.observer);
        this.observer = null
    }
    if (this.active) {
        switch (A.keyCode) {
            case Event.KEY_RETURN:
                if (this.index < 0) {
                    return
                }
                if (this.keyMove == false) {
                    return false
                }
                this.selectEntry();
                Event.stop(A);
            case Event.KEY_TAB:
            case Event.KEY_ESC:
                this.hide();
                this.active = false;
                Event.stop(A);
                return;
            case Event.KEY_LEFT:
            case Event.KEY_RIGHT:
                return;
            case Event.KEY_UP:
                this.markPrevious();
                this.render();
                Event.stop(A);
                this.keyMove = true;
                return;
            case Event.KEY_DOWN:
                this.markNext();
                this.render();
                Event.stop(A);
                this.keyMove = true;
                return
        }
    } else {
        if (A.keyCode == Event.KEY_TAB || A.keyCode == Event.KEY_RETURN || (Prototype.Browser.WebKit > 0 && A.keyCode == 0)) {
            return
        }
    }
    this.changed = true;
    this.hasFocus = true
},show:function($super) {
    $super();
    this.update.setStyle({width:this.update.getWidth() - 2 + "px"})
},markPrevious:function() {
    if (this.index > 0) {
        this.index--
    } else {
        this.index = this.entryCount - 1
    }
    this.getEntry(this.index).scrollIntoView(false)
},getUpdatedChoices:function($super) {
    this.startIndicator();
    var B = encodeURIComponent(this.options.paramName) + "=" + encodeURIComponent(this.getToken());
    this.options.parameters = this.options.callback ? this.options.callback(this.element, B) : B;
    if (this.options.defaultParams) {
        this.options.parameters += "&" + this.options.defaultParams
    }
    var A = new Ajax.Request(this.url, this.options);
    this.requestingURL = A.url
},onComplete:function(A) {
    this.updateChoices(A.responseText)
},getKeywords:function(A) {
    var B = this.getStrLength(A);
    if (B < this.kwLen) {
        this.kwLen = B;
        this.curKw = A
    } else {
        if (B == this.kwLen && this.strIsEnglish(A)) {
            this.curKw = A
        }
    }
},getStrLength:function(A) {
    return A.replace(/[^\x00-\xff]/g, "**").length
},strIsEnglish:function(A) {
    return/^[A-Za-z ]+$/.test(A)
},bindSubmitForm:function() {
    var A = this;
    A.form_elem.observe("submit", function() {
        var B = A.strIsEnglish(A.input_kw.value);
        if (B && A.curKw != "") {
            A.input_kw.value = A.curKw
        }
    })
}});
anjuke.global.search.SearchSuggestion = Class.create({initialize:function(C, B, A) {
    this.options = A || {};
    this.element = $(C);
    this.update = this.options.update ? $(this.options.update) : this._createUpdateElement();
    this.url = B;
    this.useSuggestion = false;
    this.autocompleter = new anjuke.global.search.Autocompleter(this.element, this.update, this.url, {method:"GET",frequency:0.2,minChars:1,formid:this.options.formid,afterUpdateElement:function(D, F) {
        D.value = this._removeTags(F.firstDescendant().innerHTML);
        var E = this._findParentForm(D);
        if (E) {
            E.submit()
        }
    }.bind(this),callback:function(D, E) {
        if (!this.options.onParameters) {
            return E
        }
        var F = this.options.onParameters(E);
        if (F && "function" == typeof (F.toQueryString)) {
            return F.toQueryString()
        } else {
            return F
        }
    }.bind(this)})
},_findParentForm:function(A) {
    var B = A;
    while (B) {
        if (B.tagName == "FORM") {
            break
        }
        B = B.parentNode
    }
    return B
},_createUpdateElement:function() {
    var A = $(document.createElement("div"));
    this.options.className = this.options.className || "SearchSuggestion";
    A.addClassName(this.options.className);
    var C = this._getInternetExplorerVersion();
    if (C > 0 && C <= 7) {
        var B = this.element.ancestors();
        Element.insert(B[0], {after:A})
    } else {
        Element.insert(document.body, {top:A})
    }
    return A
},_getInternetExplorerVersion:function() {
    var C = -1;
    if (navigator.appName == "Microsoft Internet Explorer") {
        var A = navigator.userAgent;
        var B = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        if (B.exec(A) != null) {
            C = parseFloat(RegExp.$1)
        }
    }
    return C
},_removeTags:function(A) {
    return A.replace(/\<em\>/g, "").replace(/\<\/em\>/g, "").replace(/\<EM\>/g, "").replace(/\<\/EM\>/g, "")
}});
APF.Namespace.register("anjuke.global.header");
anjuke.global.header.SearchBar = Class.create({initialize:function(A) {
    this.defaultSale = "请输入房源特征,地点或小区名...";
    this.defaultCommunity = "请输入小区名或路名...";
    this.defaultBroker = "请输入小区、路名、姓名、特长、所属公司...";
    this.defaultQuestion = "请输入您想要知道的房产相关内容...";
    this.searchForm = $(A.searchform);
    this.searchType = $(A.searchtype);
    this.searchkw = $(A.searchkw);
    this.searchbutton = $(A.searchbutton);
    this.searchingLable = this.searchForm.select(".select_cont").first();
    this.searchSelect = this.searchForm.select(".select_list").first();
    this.searchingLable.observe("click", function(B) {
        this.searchSelect.style.display = this.searchSelect.style.display == "none" ? "block" : "none";
        Event.stop(B);
        document.observe("click", function() {
            this.searchSelect.style.display = "none"
        }.bind(this))
    }.bind(this));
    this.searchSelect.select("li").each(function(B) {
        B.observe("click", function() {
            var C = B.select("a").first();
            if (C) {
                var D = C.innerHTML
            } else {
                var D = B.innerHTML
            }
            this.searchingLable.select("a").first().innerHTML = D;
            this.searchType.value = B.getAttribute("rel");
            switch (this.searchType.value) {
                case"1":
                case"2":
                    this.searchkw.value = this.defaultSale;
                    this.searchbutton.className = "input_button se_house";
                    break;
                case"3":
                    this.searchkw.value = this.defaultCommunity;
                    this.searchbutton.className = "input_button se_community";
                    break;
                case"4":
                    this.searchkw.value = this.defaultBroker;
                    this.searchbutton.className = "input_button search";
                    break;
                case"8":
                    this.searchkw.value = this.defaultQuestion;
                    this.searchbutton.className = "input_button search";
                    break;
                default:
                    this.searchkw.value = this.defaultSale;
                    this.searchbutton.className = "input_button search"
            }
            Element.fire(document, "SearchBar:OptionList", this.searchType.value);
            this.searchSelect.select("li").each(function(F) {
                var E = F.select("a").first();
                if (E) {
                    tmptext = E.innerHTML
                } else {
                    tmptext = F.innerHTML
                }
                if (F.getAttribute("rel") == this.searchType.value) {
                    F.update(tmptext)
                } else {
                    F.update('<a href="javascript:;">' + tmptext + "</a>")
                }
                this.initSearchKeyword()
            }.bind(this))
        }.bind(this))
    }.bind(this));
    this.initSearchKeyword()
},initSearchKeyword:function() {
    this.searchkw.stopObserving("focus");
    this.searchkw.stopObserving("blur");
    var A = this.searchType.value;
    if (A == 3) {
        var B = this.defaultCommunity
    } else {
        if (A == 4) {
            var B = this.defaultBroker
        } else {
            if (A == 8) {
                var B = this.defaultQuestion
            } else {
                var B = this.defaultSale
            }
        }
    }
    this.searchkw.observe("focus", function() {
        if (this.searchkw.value == B) {
            this.searchkw.value = "";
            this.searchkw.addClassName("focus")
        }
    }.bind(this));
    this.searchkw.observe("blur", function() {
        if (this.searchkw.value == "") {
            this.searchkw.value = B;
            this.searchkw.removeClassName("focus")
        }
    }.bind(this))
}});
function dw_add_link_from(A) {
    var G = /^http:\/\//;
    var B = document.getElementsByTagName("a");
    for (var F = 0; F < B.length; F++) {
        var H = B[F].getAttribute(A);
        if (H != null) {
            var E = B[F].href;
            if (!E.match(G)) {
                continue
            }
            if (E.indexOf("from=") != -1) {
                continue
            }
            H = encodeURIComponent(H);
            var D = E.split("#");
            if (E.indexOf("?") != -1) {
                E = D[0] + "&from=" + H
            } else {
                E = D[0] + "?from=" + H
            }
            if (D.length > 1) {
                for (var C = 1; C < D.length; C++) {
                    E += "#" + D[C]
                }
            }
            B[F].href = E
        }
    }
}
Event.observe(window, "load", function() {
    dw_add_link_from("_soj")
});
APF.Namespace.register("anjuke.global.topnav");
anjuke.global.topnav = Class.create({initialize:function(A, B) {
    this.objMsgDiv = $(A);
    this.divAnjuke = $(B);
    this.intTimeout = 500;
    var D = function(J) {
        var F = J.responseJSON;
        if (0 == F.common.userid) {
            return
        }
        this.intUserType = F.common.usertype;
        var L = "您好，";
        if (1 == this.intUserType || 2 == this.intUserType || 3 == this.intUserType) {
            L += '<a href="' + F.lefturl.profileurl + '">' + F.common.usernamestr + "</a>"
        } else {
            L += F.common.usernamestr
        }
        L += '！ <a href="' + F.lefturl.pmurl + '" ' + F.common.msgstyle + ">" + F.common.msgcntstr + '</a>&nbsp;[&nbsp;<a href="' + F.lefturl.logouturl + '" class="ba">退出</a>&nbsp;]';
        this.objMsgDiv.innerHTML = L;
        this.divAnjuke.innerHTML = "";
        this.aSelector = document.createElement("a");
        this.aSelector.className = "ba";
        this.aSelector.href = F.righturl.myanjuke;
        if (2 == this.intUserType || 3 == this.intUserType) {
            this.divAnjuke.className = "myanjuke_b";
            var G = document.createElement("img");
            G.src = "../img/icon_brocker_14.gif";
            this.divAnjuke.appendChild(G);
            this.aSelector.innerHTML = ""
        } else {
            if (1 == this.intUserType) {
                this.divAnjuke.className = "myizaojiao";
                this.aSelector.innerHTML = "我的爱早教"
            } else {
                this.divAnjuke.className = "myanjuke_store";
                var G = document.createElement("img");
                G.src = "../img/icon_brocker_14.gif";
                this.divAnjuke.appendChild(G);
                this.aSelector.innerHTML = ""
            }
        }
        this.divAnjuke.appendChild(this.aSelector);
        var K = F.righturl.links.length;
        if (0 < K) {
            var I = document.createElement("ul");
            I.className = "list_submenu";
            for (var H = 0; H < K; ++H) {
                var E = document.createElement("li");
                E.className = "liMenu";
                E.innerHTML = '<a href="' + F.righturl.links[H][1] + '">' + F.righturl.links[H][0] + "</a>";
                I.appendChild(E)
            }
            this.divAnjuke.appendChild(I)
        }
        this.divAnjuke.observe("mouseover", function() {
            window.clearTimeout(this.timeoutHandle);
            this.aSelector.className = "ba_s";
            if (2 == this.intUserType) {
                this.divAnjuke.className = "myanjuke_b_s"
            } else {
                this.divAnjuke.className = "myanjuke_s"
            }
        }.bind(this));
        this.divAnjuke.observe("mouseout", function() {
            window.clearTimeout(this.timeoutHandle);
            this.timeoutHandle = window.setTimeout(function() {
                if (2 == this.intUserType) {
                    this.divAnjuke.className = "myanjuke_b"
                } else {
                    this.divAnjuke.className = "myanjuke"
                }
                this.aSelector.className = "ba"
            }.bind(this), this.intTimeout)
        }.bind(this))
    };
    var C = {method:"get",onSuccess:D.bind(this)};
    new Ajax.Request("/ajax/checklogin/?r=" + Math.random(), C)
}});
anjuke.global.topnav2 = Class.create({initialize:function(C, B, D, A, E) {
    this.divAnjuke = $(C);
    this.divList = $(B);
    this.aSelector = $(D);
    this.intTimeout = A;
    this.intUserType = E;
    this.arrLis = this.divList.getElementsByTagName("li");
    this.divAnjuke.observe("mouseover", function() {
        window.clearTimeout(this.timeoutHandle);
        this.aSelector.className = "ba_s";
        if (2 == this.intUserType) {
            this.divAnjuke.className = "myanjuke_b_s"
        } else {
            this.divAnjuke.className = "myanjuke_s"
        }
    }.bind(this));
    this.divAnjuke.observe("mouseout", function() {
        window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout(function() {
            if (2 == this.intUserType) {
                this.divAnjuke.className = "myanjuke_b"
            } else {
                this.divAnjuke.className = "myanjuke"
            }
            this.aSelector.className = "ba"
        }.bind(this), this.intTimeout)
    }.bind(this))
}});
APF.Namespace.register("anjuke.global.header");
anjuke.global.header.LoginPanel = Class.create({initialize:function(A) {
    this.bolAjax = A.bolAjax;
    this.topLoginPanel = $(A.loginpanel);
    this.ProCondUrl = A.procondurl;
    this.ProCondButton = $(A.procondbutton);
    this.ProCondContainer = $(A.procondcontent);
    this.RightContainer = $(A.rightcontent);
    this.UserId = A.defuserid;
    this.UserType = A.defusertype;
    this.weitoAllow = A.weitoAllow;
    this.strBaseDomain = A.strBaseDomain;
    this.objPropConditions = null;
    this.loadingPropCondition = false;
    this.strIOSParams = A.strIOSParams;
    this.initLoginStatus()
},initLoginStatus:function() {
    if (this.bolAjax == 1) {
        this.UserId = 0;
        this.UserType = 0;
        var A = {method:"get",onSuccess:function(B) {
            var D = B.responseJSON;
            if (D.common.userid > 0) {
                this.UserId = D.common.userid;
                this.UserType = D.common.usertype;
                this.UserName = D.common.usernamestr;
                this.UserMsgNum = D.common.msgcntstr;
                this.UserMsgStyle = D.common.msgstyle;
                this.lefturl = D.lefturl;
                this.righturl = D.righturl;
                if (this.UserType == 1) {
                    var C = this.buildMemberHtml()
                } else {
                    if (this.UserType == 2) {
                        var C = this.buildBrokerHtml()
                    } else {
                        var C = this.buildBrokerCompanyHtml()
                    }
                }
                this.topLoginPanel.hide();
                new Insertion.After(this.topLoginPanel, C);
                this.topLoginPanel.remove();
                this.initBrokerFloatMenu()
            }
        }.bind(this)};
        new Ajax.Request("/ajax/checklogin/?r=" + Math.random(), A)
    } else {
        this.initBrokerFloatMenu()
    }
},initBrokerFloatMenu:function() {
    if (this.UserType == 2) {
        var B = $("top_broker_panel").select(".broker_boxer").first();
        B.observe("mouseover", function() {
            $("broker_menu").show();
            B.select("a").first().addClassName("hover")
        }.bind(this));
        B.observe("mouseout", function() {
            $("broker_menu").hide();
            B.select("a").first().removeClassName("hover")
        }.bind(this))
    } else {
        if (this.UserType == 1) {
            try {
                var D = $("toplogin_cont_userlogin").select(".username_boxer").first();
                D.observe("mouseover", function() {
                    $("user_info").show();
                    D.select("a").first().addClassName("hover")
                }.bind(this));
                var C = document.attachEvent ? "mouseleave" : "mouseout";
                D.observe(C, function() {
                    $("user_info").hide();
                    D.select("a").first().removeClassName("hover")
                }.bind(this))
            } catch(A) {
            }
        }
    }
},initPropCondFloatMenu:function() {
    if (this.UserType > 1) {
        this.RightContainer.hide();
        return
    }
    this.actPropMoving = false;
    Event.observe(this.ProCondButton, "mouseover", function() {
        if (this.UserType == 1) {
            if (this.objPropConditions == null && this.loadingPropCondition == false) {
                var options = {method:"get",parameters:{act:"fetch",r:Math.random()},onSuccess:function(transfer) {
                    this.loadingPropCondition = false;
                    this.objPropConditions = eval(transfer.responseText);
                    this.showPropCondition()
                }.bind(this)};
                this.loadingPropCondition = true;
                new Ajax.Request("/ajax/propcond", options)
            } else {
                this.showPropCondition()
            }
        } else {
            this.showPropCondition()
        }
    }.bind(this));
    Event.observe(this.ProCondButton, "mouseout", function() {
        this.hidePropCondition()
    }.bind(this))
},hidePropCondition:function() {
    this.actPropMoving = false;
    this.ProCondButton.select("a").first().removeClassName("hover");
    this.ProCondContainer.hide()
}});
APF.Namespace.register("anjuke.global.footer");
anjuke.global.footer.CityList = Class.create({initialize:function(C, B) {
    this.selector = $(C);
    this.panelId = B;
    var A = $(B);
    this.hideTimeout = 500;
    this.selector.observe("mouseover", function() {
        window.clearTimeout(this.timeoutHandle);
        $(this.panelId).show()
    }.bind(this));
    this.selector.observe("mouseout", function() {
        window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout("$('" + this.panelId + "').hide()", this.hideTimeout)
    }.bind(this));
    A.observe("mouseover", function() {
        window.clearTimeout(this.timeoutHandle);
        $(this.panelId).show()
    }.bind(this));
    A.observe("mouseout", function() {
        window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout("$('" + this.panelId + "').hide()", this.hideTimeout)
    }.bind(this));
    var D = this.selector.select("a").first();
    if (D != undefined) {
        D.observe("click", function(E) {
            E.preventDefault()
        })
    }
}});
APF.Namespace.register("anjuke.global.header");
anjuke.global.header.OptionList = Class.create({initialize:function(I, D, A, E, F, G) {
    this.trigger = $(I);
    this.panel = $(D);
    var H = $(E);
    this.current_option = $(A);
    var B = $(G);
    var C = $(F);
    this.trigger.observe("click", function(J) {
        this.panel.style.display = this.panel.style.display == "none" ? "block" : "none";
        Event.stop(J);
        document.observe("click", function() {
            this.panel.style.display = "none"
        }.bind(this))
    }.bind(this));
    this.searchAction = new anjuke.global.SearchInputAction(F, E, "kw_input2");
    this.current_option.observe("mouseover", function() {
        this.current_option.addClassName("focus")
    }.bind(this));
    this.current_option.observe("mouseout", function() {
        if (this.panel.visible()) {
            return
        }
        this.current_option.removeClassName("focus")
    }.bind(this));
    this.current_option.observe("blur", function(J) {
        var K = J.explicitOriginalTarget == undefined ? document.activeElement : J.explicitOriginalTarget;
        if (Element.descendantOf(K, this.panel)) {
            this.current_option.focus();
            return
        }
        this.current_option.removeClassName("focus");
        this.panel.hide()
    }.bind(this));
    this.panel.getElementsBySelector("li").each(function(J) {
        J.observe("click", function() {
            var K = J.select("a").first();
            this.current_option.innerHTML = K.innerHTML;
            this.current_option.removeClassName("focus");
            this.panel.getElementsBySelector("li").each(function(M) {
                var L = M.select("a").first();
                L.removeClassName("default")
            });
            K.addClassName("default");
            H.value = K.rel;
            if (H.value == "5") {
                $(F).value = "请输入房源特征,地点或楼盘名..."
            } else {
                if (H.value == "3") {
                    $(F).value = "请输入小区名或路名..."
                } else {
                    $(F).value = "请输入房源特征,地点或小区名..."
                }
            }
            if (H.value == "1" || H.value == "3") {
                B.target = ""
            } else {
                B.target = "_blank"
            }
            if ($("sbtn")) {
                if (H.value == "3") {
                    $("sbtn").value = "找小区"
                } else {
                    $("sbtn").value = "找房子"
                }
            }
            this.panel.hide();
            Element.fire(document, "SearchBar:OptionList", H.value)
        }.bind(this))
    }.bind(this))
},descendantOfPanel:function(A) {
    if (A == null) {
        return false
    }
    if (A == this.panel) {
        return true
    }
    return this.descendantOfPanel(A.parentNode)
}});
APF.Namespace.register("anjuke.global");
anjuke.global.SearchInputAction = Class.create({initialize:function(D, A, B, C) {
    this.defaultkeyword = ["请输入房源特征,地点或小区名...","请输入楼盘名称或地址...","请输入小区名或路名...","请输入房源特征,地点或楼盘名..."];
    this.kw_input = $(D);
    this.kw_type_textbox = $(A);
    this.ishk = C;
    this.kw_input.observe("focus", function() {
        if (this.defaultkeyword.indexOf(this.kw_input.value) >= 0) {
            this.kw_input.value = "";
            this.kw_input.addClassName(B)
        }
    }.bind(this));
    this.kw_input.observe("blur", function() {
        this.setKeyword(this.kw_type_textbox.value, this.kw_input.value);
        if (this.kw_input.value == "" || this.defaultkeyword.indexOf(this.kw_input.value) >= 0) {
            this.kw_input.removeClassName(B)
        }
    }.bind(this))
},setKeyword:function(A, B) {
    if (this.defaultkeyword.indexOf(B) >= 0 || !B) {
        if (this.ishk == 1) {
            this.kw_input.value = this.defaultkeyword[3];
            return
        }
        switch (A) {
            case"5":
                this.kw_input.value = this.defaultkeyword[1];
                break;
            case"3":
                this.kw_input.value = this.defaultkeyword[2];
                break;
            default:
                this.kw_input.value = this.defaultkeyword[0];
                break
        }
    }
}});
APF.Namespace.register("Anjuke.Map2");
Anjuke.Map2.HeaderFilter = Class.create({initialize:function(X, G, U, F) {
    this.map2SidebarFilter = $(X);
    this.hideTimeout = G;
    this.filter = {};
    this.switchModel = $("switch_model");
    this.listlink = this.switchModel.select(".switch_to_list").first();
    this.load = F;
    var M = this.map2SidebarFilter.select(".btn_search").first();
    var A = this.map2SidebarFilter.select(".qwhereinput").first();
    var Q = this.map2SidebarFilter.select(".btn_search").first();
    if (U.keyword != undefined) {
        A.value = U.keyword
    }
    this.switchModel = $("switch_model");
    var D = this.switchModel.select(".qmtype_normal").first();
    var W = this.switchModel.select(".qmtype_hybrid").first();
    if (D) {
        D.observe("click", function() {
            document.fire("map:type", {type:"normal"})
        })
    }
    if (W) {
        W.observe("click", function() {
            document.fire("map:type", {type:"hybrid"})
        })
    }
    Q.observe("mouseover", function() {
        this.addClassName("hover")
    });
    Q.observe("mouseout", function() {
        this.removeClassName("hover")
    });
    var R = $("area");
    var S = $("areaList");
    var T = this.map2SidebarFilter.select("#areaList a");
    var C = $("subway");
    var K = $("subwayList");
    var L = this.map2SidebarFilter.select("#subwayList a");
    var V = $("recent");
    var O = $("recentList");
    var P = this.map2SidebarFilter.select("#recentList a");
    var E = $("block");
    var I = $("blockList");
    var J = null;
    R.observe("mouseover", function(Y) {
        S.show();
        S.style.display = "block";
        R.className = "i1 on"
    }.bind(this));
    R.observe("mouseout", function(Y) {
        S.show();
        S.style.display = "none";
        R.className = "i1 off"
    }.bind(this));
    document.observe("filter:initArea", function(Y) {
        this.filter.areaid = U.a1;
        this.updateListUrl();
        T.each(function(a) {
            var b = a.readAttribute("aid");
            if (b == Y.memo.id) {
                $("area_select").update(a.innerHTML);
                var Z = "/ajax/getblock?map=1&areaid=" + b + "&load=" + this.load;
                new Ajax.Request(Z, {method:"get",onSuccess:function(d) {
                    var c = d.responseText;
                    if (c != "") {
                        I.update(c)
                    }
                    document.fire("filter:initBlock", {id:U.a2})
                }.bind(this)})
            }
        }.bind(this))
    }.bind(this));
    document.observe("filter:initSubway", function(Y) {
        L.each(function(a) {
            var Z = a.readAttribute("type");
            var b = a.readAttribute("oid");
            if (b == Y.memo.id) {
                $("subway_select").update(a.innerHTML)
            }
        })
    });
    E.observe("mouseover", function(Z) {
        var Y = I.innerHTML.replace(/(^\s*)|(\s*$)/g, "");
        if (Y == "") {
            return
        }
        I.show();
        I.style.display = "block";
        E.className = "i2 on"
    }.bind(this));
    E.observe("mouseout", function(Y) {
        I.show();
        I.style.display = "none";
        E.className = "i2 i2off"
    }.bind(this));
    document.observe("filter:initBlock", function(Y) {
        this.blockid = U.a2;
        this.filter.blockid = U.a2;
        this.updateListUrl();
        J = $("blockList").select("a");
        if (J.length > 0) {
            document.fire("block:click", {blockItem:J})
        }
    }.bind(this));
    document.observe("block:click", function(Z) {
        var Y = Z.memo.blockItem;
        Y.each(function(a) {
            var b = a.readAttribute("blockid");
            if (b > 0 && b == U.a2) {
                $("block_select").update(a.innerHTML)
            }
            a.observe("click", function(f) {
                var c = a.readAttribute("blockid");
                this.filter.blockid = c;
                this.updateListUrl();
                if (c > 0) {
                    $("block_select").update(a.innerHTML)
                } else {
                    $("block_select").update("板块")
                }
                $("blockList").hide();
                var h = a.readAttribute("lat");
                var d = a.readAttribute("lng");
                var e = parseInt(a.readAttribute("zoom"));
                document.fire("map:center", {lat:h,lng:d,zoom:e,select:"block",blockid:c});
                document.fire("map:log", {title:"map.blockclick",content:'{"blockid":"' + c + '"}'});
                var g = a.innerHTML;
                g = g.replace(/(^\s*)|(\s*$)/g, "");
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",eVar13:g,events:"event9",pVar:"板块"})
            }.bind(this))
        }.bind(this))
    }.bind(this));
    T.each(function(Y) {
        Y.observe("click", function(c) {
            var e = Y.readAttribute("aid");
            this.filter.areaid = e;
            this.filter.blockid = 0;
            U.a2 = 0;
            this.updateListUrl();
            $("area_select").update(Y.innerHTML);
            $("areaList").hide();
            $("area_select").writeAttribute("lat", Y.readAttribute("lat"));
            $("area_select").writeAttribute("lng", Y.readAttribute("lng"));
            $("area_select").writeAttribute("zoom", Y.readAttribute("zoom"));
            $("block_select").update("板块");
            if ($("subway_select")) {
                $("subway_select").update("地铁")
            }
            var f = Y.readAttribute("lat");
            var a = Y.readAttribute("lng");
            var b = parseInt(Y.readAttribute("zoom"));
            document.fire("map:center", {lat:f,lng:a,zoom:b,select:"area",areaid:e});
            document.fire("map:log", {title:"map.areaclick",content:'{"aid":"' + e + '"}'});
            var d = Y.innerHTML;
            d = d.replace(/(^\s*)|(\s*$)/g, "");
            H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",eVar13:d,events:"event9",pVar:"区域"});
            var Z = "/ajax/getblock?map=1&areaid=" + e + "&load=" + this.load;
            new Ajax.Request(Z, {method:"get",onSuccess:function(h) {
                var g = h.responseText;
                if (g != "") {
                    I.update(g);
                    J = this.map2SidebarFilter.select("#blockList a");
                    document.fire("block:click", {blockItem:J})
                }
            }.bind(this)})
        }.bind(this))
    }.bind(this));
    if (L.length > 0) {
        C.observe("mouseover", function(Y) {
            K.show();
            K.style.display = "block";
            C.className = "i3 on"
        }.bind(this));
        C.observe("mouseout", function(Y) {
            K.show();
            K.style.display = "none";
            C.className = "i3 off"
        }.bind(this));
        L.each(function(Y) {
            Y.observe("click", function() {
                var a = Y.readAttribute("type");
                var e = Y.readAttribute("oid");
                document.fire("custom:tracker", {type:a,id:e});
                this.filter.areaid = 0;
                this.filter.blockid = 0;
                this.updateListUrl();
                $("area_select").update("区域");
                $("block_select").update("板块");
                $("blockList").update('<dt class="none_block"><-请先选择区域</dt>');
                $("subway_select").update(Y.innerHTML);
                $("subwayList").hide();
                var d = Y.readAttribute("lat");
                var Z = Y.readAttribute("lng");
                var b = parseInt(Y.readAttribute("zoom"));
                var a = Y.readAttribute("type");
                document.fire("map:center", {lat:d,lng:Z,zoom:b,type:a,select:"subway",subwayid:e});
                var c = Y.innerHTML;
                c = c.replace(/(^\s*)|(\s*$)/g, "");
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",eVar13:c,events:"event9",pVar:"轨道交通"})
            }.bind(this))
        }.bind(this))
    }
    V.observe("mouseover", function(Y) {
        O.show();
        O.style.display = "block";
        V.className = "i4 on"
    }.bind(this));
    V.observe("mouseout", function(Y) {
        O.show();
        O.style.display = "none";
        V.className = "i4 off"
    }.bind(this));
    if (P.length > 0) {
        P.each(function(Y) {
            Y.observe("click", function() {
                var a = Y.readAttribute("commid");
                document.fire("map:geo", {keyword:Y.innerHTML});
                $("recent_select").update(Y.innerHTML);
                $("recentList").hide();
                var Z = Y.innerHTML;
                Z = Z.replace(/(^\s*)|(\s*$)/g, "");
                document.fire("map:log", {title:"map.recentclick",content:'{"commid":"' + a + '"}'});
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",eVar13:Z,events:"event9",pVar:"最近浏览"})
            }.bind(this))
        }.bind(this))
    }
    var N = this.map2SidebarFilter.select(".price dt a");
    if (N.length > 0) {
        N.each(function(Y) {
            Y.observe("click", function() {
                N.each(function(a) {
                    if ($(a).hasClassName("focus") == true) {
                        $(a).removeClassName("focus");
                        return
                    }
                });
                var Z = Y.readAttribute("paramid");
                this.addClassName("focus");
                document.fire("filter:price", {price:Z});
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",events:"event9",eVar13:Z,pVar:"售价"})
            })
        })
    }
    var B = this.map2SidebarFilter.select(".model dt a");
    if (B.length > 0) {
        B.each(function(Y) {
            Y.observe("click", function() {
                B.each(function(a) {
                    if ($(a).hasClassName("focus") == true) {
                        $(a).removeClassName("focus");
                        return
                    }
                });
                var Z = Y.readAttribute("paramid");
                this.addClassName("focus");
                document.fire("filter:price", {price:Z});
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",events:"event9",eVar13:Z,pVar:"房型"})
            })
        })
    }
    this.timeoutHandles = [];
    var H = this;
    M.observe("click", function() {
        var Y = A.className.indexOf("gray") == -1 ? A.value : "";
        if (Y.length > 20) {
            alert("关键字最多可输入20个字符!");
            return
        }
        if (!Y.blank()) {
            document.fire("map:geo", {keyword:Y});
            H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event1",events:"event1",eVar13:Y,pVar:"click"})
        }
    });
    A.observe("keyup", function(Z) {
        if (Z.keyCode == 13) {
            var Y = A.value;
            if (!Y.blank()) {
                document.fire("map:geo", {keyword:Y});
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event1",events:"event1",eVar13:Y,pVar:"click"})
            }
        }
    });
    A.observe("focus", function(Y) {
        if (A.className.indexOf("gray") != -1) {
            A.removeClassName("gray");
            if (A.value == "输入名称或地标") {
                A.value = ""
            }
        }
    });
    A.observe("blur", function(Y) {
        if (A.value == "") {
            A.addClassName("gray");
            A.value = "输入名称或地标"
        }
    })
},hideDiv:function(E, D, C, B, A) {
    if (this.realOut(E, D) == true) {
        window.clearTimeout(this.timeoutHandles[B]);
        this.timeoutHandles[B] = window.setTimeout(function() {
            A.removeClassName("selected");
            D.setStyle({display:"none"})
        }, C)
    }
},realOut:function(A, C) {
    var B = A.explicitOriginalTarget == undefined ? document.activeElement : A.explicitOriginalTarget;
    if (Element.descendantOf(B, C)) {
        return false
    } else {
        return true
    }
},doTrack:function(B) {
    if (typeof s_account == "undefined") {
        return
    }
    var A = s_gi(s_account);
    if (B.linkTrackVars) {
        A.linkTrackVars = B.linkTrackVars
    }
    if (B.linkTrackEvents) {
        A.linkTrackEvents = B.linkTrackEvents
    }
    if (B.eVar13) {
        A.eVar13 = B.eVar13
    }
    if (B.events) {
        A.events = B.events
    }
    A.tl(this, "o", B.pVar)
},updateListUrl:function() {
    var B = "/jigou/shanghai";
    var C = "";
    var A = this.listlink.readAttribute("leftParam");
    if (this.filter.areaid > 0) {
        C += "QQp1Z" + this.filter.areaid
    }
    if (this.filter.blockid > 0) {
        C += "QQp2Z" + this.filter.blockid
    }
    if (C != "") {
        this.listlink.writeAttribute("headParam", C)
    }
    if (A != null) {
        C += A
    }
    this.listlink.href = B + C
}});
APF.Namespace.register("anjuke.global.topnav");
anjuke.global.topnav = Class.create({initialize:function(A, B) {
    this.objMsgDiv = $(A);
    this.divAnjuke = $(B);
    this.intTimeout = 500;
    var D = function(J) {
        var F = J.responseJSON;
        if (0 == F.common.userid) {
            return
        }
        this.intUserType = F.common.usertype;
        var L = "您好，";
        if (1 == this.intUserType || 2 == this.intUserType || 3 == this.intUserType) {
            L += '<a href="' + F.lefturl.profileurl + '">' + F.common.usernamestr + "</a>"
        } else {
            L += F.common.usernamestr
        }
        L += '！ <a href="' + F.lefturl.pmurl + '" ' + F.common.msgstyle + ">" + F.common.msgcntstr + '</a>&nbsp;[&nbsp;<a href="' + F.lefturl.logouturl + '" class="ba">退出</a>&nbsp;]';
        this.objMsgDiv.innerHTML = L;
        this.divAnjuke.innerHTML = "";
        this.aSelector = document.createElement("a");
        this.aSelector.className = "ba";
        this.aSelector.href = F.righturl.myanjuke;
        if (2 == this.intUserType || 3 == this.intUserType) {
            this.divAnjuke.className = "myanjuke_b";
            var G = document.createElement("img");
            G.src = "../img/icon_brocker_14.gif";
            this.divAnjuke.appendChild(G);
            this.aSelector.innerHTML = "我的网络经纪人"
        } else {
            if (1 == this.intUserType) {
                this.divAnjuke.className = "myanjuke";
                this.aSelector.innerHTML = "我的爱早教"
            } else {
                this.divAnjuke.className = "myanjuke_store";
                var G = document.createElement("img");
                G.src = "../img/icon_brocker_14.gif";
                this.divAnjuke.appendChild(G);
                this.aSelector.innerHTML = "我的网络经纪人"
            }
        }
        this.divAnjuke.appendChild(this.aSelector);
        var K = F.righturl.links.length;
        if (0 < K) {
            var I = document.createElement("ul");
            I.className = "list_submenu";
            for (var H = 0; H < K; ++H) {
                var E = document.createElement("li");
                E.className = "liMenu";
                E.innerHTML = '<a href="' + F.righturl.links[H][1] + '">' + F.righturl.links[H][0] + "</a>";
                I.appendChild(E)
            }
            this.divAnjuke.appendChild(I)
        }
        this.divAnjuke.observe("mouseover", function() {
            window.clearTimeout(this.timeoutHandle);
            this.aSelector.className = "ba_s";
            if (2 == this.intUserType) {
                this.divAnjuke.className = "myanjuke_b_s"
            } else {
                this.divAnjuke.className = "myanjuke_s"
            }
        }.bind(this));
        I.observe("mouseover", function() {
            window.clearTimeout(this.timeoutHandle)
        }.bind(this));
        I.observe("mouseout", function() {
            window.clearTimeout(this.timeoutHandle);
            this.timeoutHandle = window.setTimeout(function() {
                if (2 == this.intUserType) {
                    this.divAnjuke.className = "myanjuke_b"
                } else {
                    this.divAnjuke.className = "myanjuke"
                }
                this.aSelector.className = "ba"
            }.bind(this), this.intTimeout)
        }.bind(this));
        this.divAnjuke.observe("mouseout", function() {
            window.clearTimeout(this.timeoutHandle);
            this.timeoutHandle = window.setTimeout(function() {
                if (2 == this.intUserType) {
                    this.divAnjuke.className = "myanjuke_b"
                } else {
                    this.divAnjuke.className = "myanjuke"
                }
                this.aSelector.className = "ba"
            }.bind(this), this.intTimeout)
        }.bind(this))
    };
    var C = {method:"get",onSuccess:D.bind(this)};
    new Ajax.Request("/ajax/checklogin/?r=" + Math.random(), C)
}});
anjuke.global.topnav2 = Class.create({initialize:function(C, B, D, A, E) {
    this.divAnjuke = $(C);
    this.divList = $(B);
    this.aSelector = $(D);
    this.intTimeout = A;
    this.intUserType = E;
    this.arrLis = this.divList.getElementsByTagName("li");
    this.divAnjuke.observe("mouseover", function() {
        window.clearTimeout(this.timeoutHandle);
        this.aSelector.className = "ba_s";
        if (2 == this.intUserType) {
            this.divAnjuke.className = "myanjuke_b_s"
        } else {
            this.divAnjuke.className = "myanjuke_s"
        }
    }.bind(this));
    this.divList.observe("mouseover", function() {
        window.clearTimeout(this.timeoutHandle)
    }.bind(this));
    this.divList.observe("mouseout", function() {
        window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout(function() {
            if (2 == this.intUserType) {
                this.divAnjuke.className = "myanjuke_b"
            } else {
                this.divAnjuke.className = "myanjuke"
            }
            this.aSelector.className = "ba"
        }.bind(this), this.intTimeout)
    }.bind(this));
    this.divAnjuke.observe("mouseout", function() {
        window.clearTimeout(this.timeoutHandle);
        this.timeoutHandle = window.setTimeout(function() {
            if (2 == this.intUserType) {
                this.divAnjuke.className = "myanjuke_b"
            } else {
                this.divAnjuke.className = "myanjuke"
            }
            this.aSelector.className = "ba"
        }.bind(this), this.intTimeout)
    }.bind(this))
}});
APF.Namespace.register("Anjuke.Map2");
Anjuke.Map2.Header = Class.create({initialize:function(B, A) {
    this.map2Header = $(B);
    this.hideTimeout = A
},doTrack:function(B) {
    if (typeof s_account == "undefined") {
        return
    }
    var A = s_gi(s_account);
    if (B.linkTrackVars) {
        A.linkTrackVars = B.linkTrackVars
    }
    if (B.linkTrackEvents) {
        A.linkTrackEvents = B.linkTrackEvents
    }
    if (B.eVar13) {
        A.eVar13 = B.eVar13
    }
    if (B.events) {
        A.events = B.events
    }
    A.tl(this, "o", B.pVar)
}});
APF.Namespace.register("Anjuke.Map2");
var baiduMap = Class.create({initialize:function(B, A) {
    this.bmp = new BMap.Map(B, A)
}});
var googleMap = Class.create({initialize:function(A) {
    this.gmp = new GMap2(A)
}});
var AnjukeMap = Class.create({initialize:function(C, B, A) {
    this.mapType = B;
    this.mapArea = C;
    if (this.mapType == "baidu") {
        this.map = new baiduMap(C, A);
        this.ajkMap = this.map.bmp;
        this.myDisTools = new BMap.DistanceTool(this.ajkMap)
    } else {
        this.map = new googleMap(C);
        this.ajkMap = this.map.gmp
    }
},Point:function(C, B) {
    if (this.mapType == "baidu") {
        var A = new BMap.Point(B, C)
    } else {
        var A = new GLatLng(C, B)
    }
    return A
},Pixel:function(A, C) {
    if (this.mapType == "baidu") {
        var B = new BMap.Pixel(A, C)
    } else {
        var B = new GPoint(A, C)
    }
    return B
},setCenter:function(A, B) {
    if (this.mapType == "baidu") {
        this.map.bmp.centerAndZoom(A, B);
        this.map.bmp.setCenter(A)
    } else {
        this.map.gmp.setCenter(A, B)
    }
},addControl:function(A) {
    if (this.mapType == "baidu") {
        this.map.bmp.addControl(A)
    } else {
        this.map.gmp.addControl(A)
    }
},scaleControl:function() {
    if (this.mapType == "baidu") {
        this.addControl(new BMap.ScaleControl())
    } else {
        this.addControl(new GScaleControl())
    }
},largeMapControl:function() {
    if (this.mapType == "baidu") {
        this.addControl(new BMap.NavigationControl())
    } else {
        this.addControl(new GLargeMapControl())
    }
},overviewMapControl:function() {
    if (this.mapType == "baidu") {
        this.addControl(new BMap.OverviewMapControl())
    } else {
        this.addControl(new GOverviewMapControl())
    }
},enableScrollWheelZoom:function() {
    if (this.mapType == "baidu") {
        this.map.bmp.enableScrollWheelZoom()
    } else {
        this.map.gmp.enableScrollWheelZoom()
    }
},addListener:function(B, A) {
    if (this.mapType == "baidu") {
        this.map.bmp.addEventListener(B, A)
    } else {
        GEvent.addListener(this.map.gmp, B, A)
    }
},pointToPixel:function(A) {
    if (this.mapType == "baidu") {
        return this.map.bmp.pointToPixel(A)
    } else {
        return this.map.gmp.fromLatLngToContainerPixel(A)
    }
},pointToOverlayPixel:function(A) {
    if (this.mapType == "baidu") {
        var B = this.map.bmp.pointToOverlayPixel(A)
    } else {
        var B = this.map.gmp.fromLatLngToDivPixel(A)
    }
    return B
},pixelToPoint:function(B) {
    if (this.mapType == "baidu") {
        var A = this.map.bmp.pixelToPoint(B)
    } else {
        var A = this.map.gmp.fromContainerPixelToLatLng(B)
    }
    return A
},getBounds:function() {
    if (this.mapType == "baidu") {
        return this.map.bmp.getBounds()
    } else {
        return this.map.gmp.getBounds()
    }
},getLat:function(A) {
    if (this.mapType == "baidu") {
        return A.lat
    } else {
        return A.lat()
    }
},getLng:function(A) {
    if (this.mapType == "baidu") {
        return A.lng
    } else {
        return A.lng()
    }
},setZoom:function(A) {
    if (this.mapType == "baidu") {
        return this.map.bmp.zoomTo(A)
    } else {
        return this.map.gmp.setZoom(A)
    }
},setGoogleZoomLevel:function(B, A) {
    if (this.mapType == "baidu") {
        return
    } else {
        G_NORMAL_MAP.getMinimumResolution = function() {
            return B
        };
        G_NORMAL_MAP.getMaximumResolution = function() {
            return A
        }
    }
},setGoogleSatellite:function(B, A) {
    G_HYBRID_MAP.getMinimumResolution = function() {
        return B
    };
    G_HYBRID_MAP.getMaximumResolution = function() {
        return A
    }
},getPanes:function(A) {
    if (this.mapType == "baidu") {
        return this.map.bmp.getPanes()
    } else {
        return this.map.gmp.getPane(A)
    }
},getMarkerPane:function() {
    if (this.mapType == "baidu") {
        var A = this.getPanes();
        return A.markerPane
    } else {
        var A = this.getPanes(G_MAP_MARKER_PANE);
        return A
    }
},localSearch:function(C, A) {
    if (this.mapType == "baidu") {
        var B = new BMap.LocalSearch(C, A)
    } else {
        var B = new google.search.LocalSearch()
    }
    return B
}});
APF.Namespace.register("Anjuke.Map2");
Anjuke.Map2.Findding2 = Class.create({initialize:function(B, A) {
    this.cavanId = B;
    this.cavansElement = $(B);
    this.canvas = this.cavansElement.select("#" + B + "_map2_canvas2").first();
    this.canvas_div = B + "_map2_canvas2";
    this.commname = this.cavansElement.select(".map2_commname").first();
    this.commname_heighlight = this.cavansElement.select(".map2_commname_highlight").first();
    this.propwind = this.cavansElement.select(".map2_propwind").first();
    this.proparrow = this.cavansElement.select(".map2_proparrow").first();
    this.propwind_commname = this.propwind.select(".map2_propwind_commname").first();
    this.propwind_listlink = this.propwind.select(".map2_propwind_listlink").first();
    this.propwind_morelink = this.propwind.select(".map2_filters_morelink").first();
    this.switchModel = $("switch_model");
    this.listlink = this.switchModel.select(".switch_to_list").first();
    this.win_price_list = this.propwind.select(".map2_filters_price").first();
    this.win_housemodel_list = this.propwind.select(".map2_filters_housemodel").first();
    this.noPrompt = APF.Utils.getCookie("noprmp");
    this.noPromptNoResult = APF.Utils.getCookie("noprmp_norslt");
    this.comm_id = A.commid;
    this.last_comm_id = 0;
    this.last_comm = "";
    this.lat = 0;
    this.lng = 0;
    this.commNum = 0;
    this.showFlagMarker = 0;
    this.searchselect = 0;
    this.logSearch = 0;
    this.logCommName = "";
    this.PageSidebar = sidebar;
    this.PageHeaderObj = sidebarFilter;
    this.hqbutton = $("map2_is_hq");
    this.page_info = this.propwind.select(".total_pages").first();
    this.maxSearchNumber = 8;
    this.getCanvasDimension();
    this.DEF_CITY_INFO = A.cityInfo;
    this.DEF_TRADE_TYPE = A.tradetype;
    this.load = A.load;
    this.filter = A.filter;
    this.isrankon = A.isrankon;
    this.filter.defaultPrice = this.filter.price;
    this.filter.defaultRoom = this.filter.room;
    this.flag = A.filter.flag;
    this.flagname = A.filter.flagname;
    this.keyword = A.filter.keyword;
    this.DEF_PROP_WINDOW_WIDTH = 350;
    this.DEF_PROP_WINDOW_HEIGHT = 165;
    this.DEF_LEFT_LIMIT = 380;
    this.DEF_ARROW_WIDTH = 7;
    this.mapMarkers = new Hash();
    this.mapAreaMarkers = new Hash();
    this.pwCommId = 0;
    this.propPage = 1;
    this.propOrder = 41;
    this.propIsHq = 0;
    this.dragging = 0;
    this.subwayZoom = 18;
    this.currentCommId = 0;
    this.maxPage = 0;
    this.curr_lat = A.cityInfo.lat;
    this.curr_lng = A.cityInfo.lng;
    this.curr_zoom = A.cityInfo.zoom;
    this.propMaxCondition = 17;
    this.propHideLinkCondition = 11;
    this.propConditions = 0;
    this.logurl = "/map/log/";
    this.currentClickType = 0;
    this.currentClickFrom = 0;
    this.mapTrackers = new Hash();
    this.polyLine = new Hash();
    this.cavansElement.select(".map2_propwind_close").each(function(C) {
        //监控关闭动作
        C.observe("click", function() {
            this.currentClickType = 2;
            this.currentClickFrom = 9;
            var D = this.buildUrl(this.currentCommId, this.propPage, this.propOrder);
            new Ajax.Request(D, {method:"get",onSuccess:function(E) {
            }.bind(this)});
            this.hidePropWind();
            this.hideMapLayer()
        }.bind(this))
    }.bind(this));
    //下一页
    this.propwind.select(".page_next").first().observe("click", function() {
        if (this.propPage < this.maxPage) {
            this.propPage += 1;
            this.updatePropWind(this.propCommId, this.propPage, this.propOrder, 2, 1)
        }
    }.bind(this));
    //上一页
    this.propwind.select(".page_prev").first().observe("click", function() {
        this.propPage -= 1;
        if (this.propPage == 0) {
            this.propPage = 1
        }
        this.updatePropWind(this.propCommId, this.propPage, this.propOrder, 2, 2)
    }.bind(this));

    this.hqbutton.observe("click", function() {
        if (this.hqbutton.checked) {
            this.propIsHq = 1
        } else {
            this.propIsHq = 0
        }
        this.propPage = 1;
        this.updatePropWind(this.propCommId, this.propPage, this.propOrder, 2, 3)
    }.bind(this));

    document.observe("map:pan", function(C) {
        this.map.ajkMap.panTo(this.map.Point(C.memo.lat, C.memo.lng));
        if (C.memo.zoom != undefined) {
            this.removeMapMarkers();
            this.map.setZoom(C.memo.zoom)
        }
    }.bind(this));

    document.observe("map:center", function(D) {
        var C = this.map.Point(D.memo.lat, D.memo.lng);
        this.map.setCenter(C, D.memo.zoom);
        if (D.memo.select == "area") {
            this.filter.areaid = D.memo.areaid;
            this.filter.blockid = 0;
            this.filter.subwayid = 0
        }
        if (D.memo.select == "block") {
            this.filter.blockid = D.memo.blockid
        }
        if (D.memo.select == "subway") {
            this.filter.subwayid = D.memo.subwayid;
            this.filter.customtype = D.memo.type;
            this.filter.customid = D.memo.subwayid;
            this.filter.areaid = 0;
            this.filter.blockid = 0
        }
        if (D.memo.select == "area" || D.memo.select == "block") {
            this.removeTrackers();
            this.removePolyLine();
            this.filter.customtype = 0;
            this.filter.customid = 0
        }
    }.bind(this));
    document.observe("map:zoom", function(C) {
        this.map.setZoom(C.memo.zoom)
    }.bind(this));
    document.observe("map:log", function(C) {
        this.logging(C.memo.title, C.memo.content)
    }.bind(this));
    document.observe("filter:price", function(C) {
        this.filter.price = C.memo.price;
        this.filter.defaultPrice = C.memo.price;
        this.hidePropWind();
        this.getJsonMarkers();
        this.updateListUrl()
    }.bind(this));
    document.observe("filter:age", function(C) {
        this.filter.age = C.memo.age;
        this.filter.defaultAge = C.memo.age;
        this.hidePropWind();
        this.getJsonMarkers();
        this.updateListUrl()
    }.bind(this));
    document.observe("filter:type", function(C) {
        this.filter.type = C.memo.type;
        this.hidePropWind();
        this.getJsonMarkers();
        this.updateListUrl()
    }.bind(this));
    document.observe("filter:model", function(C) {
        this.filter.room = C.memo.model;
        this.filter.defaultRoom = C.memo.model;
        this.hidePropWind();
        this.getJsonMarkers();
        this.updateListUrl()
    }.bind(this));
    document.observe("filter:range", function(C) {
        this.filter.area = C.memo.range;
        this.hidePropWind();
        this.getJsonMarkers();
        this.updateListUrl()
    }.bind(this));
    document.observe("filter:fitment", function(C) {
        this.filter.fitment = C.memo.fitment;
        this.hidePropWind();
        this.getJsonMarkers();
        this.updateListUrl()
    }.bind(this));
    document.observe("map:type", function(C) {
        if (C.memo.type == "normal") {
            this.map.ajkMap.setMapType(G_NORMAL_MAP);
            this.logging("map.maptype", "{tradetype:" + this.DEF_TRADE_TYPE + ",frommode:'hybrid',tomode:'normal'}")
        } else {
            if (C.memo.type == "hybrid") {
                this.map.ajkMap.setMapType(G_HYBRID_MAP);
                this.logging("map.maptype", '{"tradetype":"' + this.DEF_TRADE_TYPE + '","frommode":"normal","tomode":"hybrid"}')
            }
        }
    }.bind(this));
    document.observe("map:geo", function(D) {
        var C = D.memo.keyword;
        this.keyword = D.memo.keyword;
        $("keyword").value = this.keyword;
        this.hideSuggestion();
        this.getResult(C)
    }.bind(this));
    document.observe("custom:tracker", function(C) {
        this.filter.customtype = C.memo.type;
        this.filter.customid = C.memo.id
    }.bind(this));
    document.observe("search:kw", function(D) {
        this.comm_id = D.memo.commid;
        var C = this.map.Point(D.memo.lat, D.memo.lng);
        this.map.setCenter(C, 18);
        this.lat = D.memo.lat;
        this.lng = D.memo.lng;
        this.searchselect = 1;
        this.logSearch = 1;
        this.logCommName = D.memo.commname
    }.bind(this));
    this.propWindOrder = this.propwind.select(".sort_buttons").first().select(".sort_button");
    this.propWindOrder.each(function(C) {
        C.observe("click", function(E) {
            this.propWindOrder.each(function(F) {
                F.className = "sort_button"
            }.bind(this));
            switch (C.rel) {
                case"11":
                    if (this.propOrder == 11) {
                        C.className = "sort_button sort_button_up";
                        this.propOrder = 12
                    } else {
                        C.className = "sort_button sort_button_down";
                        this.propOrder = 11
                    }
                    var D = 4;
                    break;
                case"21":
                    if (this.propOrder == 21) {
                        C.className = "sort_button sort_button_up";
                        this.propOrder = 22
                    } else {
                        C.className = "sort_button sort_button_down";
                        this.propOrder = 21
                    }
                    var D = 5;
                    break;
                case"41":
                    C.className = "sort_button sort_button_down";
                    this.propOrder = 41;
                    var D = 6;
                    break
            }
            this.updatePropWind(this.propCommId, this.propPage, this.propOrder, 2, D)
        }.bind(this))
    }.bind(this));
    if (this.filter.customtype > 0 && this.filter.customid > 0) {
        this.customTrackers()
    }
},customTrackers:function() {
    this.removeTrackers();
    this.removePolyLine();
    var B = this.filter.customtype;
    var C = this.filter.customid;
    if (!this.mapTrackers.get(C)) {
        var A = "./markers.php?" + C + "&load=" + this.load;
        new Ajax.Request(A, {method:"get",onSuccess:function(D) {
            this.mapTrackers.set(C, D.responseJSON);
            this.drawTrackers(C)
        }.bind(this)})
    } else {
        this.drawTrackers(C)
    }
},drawTrackers:function(B) {
    var C = this.mapTrackers.get(B);
    if (C) {
        if (C.points != null) {
            C.points.each(function(D) {
                if (D.title.blank()) {
                    return false
                }
                var E = this.buildTracker(this.filter.customtype, D.title, D.lat, D.lng);
                if ($("tracker_" + this.filter.customtype + D.lat + D.lng)) {
                    $("tracker_" + this.filter.customtype + D.lat + D.lng).remove()
                }
                var G = this.map.Point(D.lat, D.lng);
                var F = this.map.pointToOverlayPixel(G);
                this.drawTracker(E, F.y, F.x)
            }.bind(this))
        }
        if (C.lines != "") {
            var A = 0;
            C.lines.each(function(F) {
                var D = new Array();
                for (i = 0; i < F.vertex.length; i++) {
                    D[i] = this.map.Point(F.vertex[i].lat, F.vertex[i].lng)
                }
                var E = this.buildPolyLine(D, F.color, F.weight, 0.9);
                this.polyLine.set(A, E);
                this.map.ajkMap.addOverlay(E);
                A++
            }.bind(this))
        }
    }
},removeTrackers:function() {
    this.cavansElement.select(".tracker").each(function(A) {
        A.remove()
    })
},removePolyLine:function() {
    var A = this.polyLine.keys();
    //clearOverlays();

    for (i = 0; i < A.length; i++) {
        this.map.ajkMap.removeOverlay(this.polyLine.get(A[i]))          //清除地图覆盖物
    }
},buildPolyLine:function(A, B, D, C) {
    return new GPolyline(A, B, D, C)
},buildTracker:function(D, A, F, B) {
    var E = $(document.createElement("dl"));
    E.id = "tracker_" + D + F + B;
    E.className = "tracker";
    var C = $(document.createElement("dt"));
    if (D == 2) {
        C.className = "tracker_icon icon_subway"
    } else {
        C.className = "tracker_icon icon_custom"
    }
    var G = $(document.createElement("dd"));
    G.className = "tracker_text";
    G.update(A);
    Event.observe(C, "mouseover", function(H) {
        E.className = "tracker tracker_hover"
    });
    Event.observe(C, "mouseout", function(H) {
        E.className = "tracker"
    });
    Event.observe(G, "mouseover", function(H) {
        E.className = "tracker tracker_hover"
    });
    Event.observe(G, "mouseout", function(H) {
        E.className = "tracker"
    });
    Event.observe(C, "click", function() {
        document.fire("map:center", {lat:F,lng:B,zoom:this.subwayZoom})
    }.bind(this));
    Event.observe(G, "click", function() {
        document.fire("map:center", {lat:F,lng:B,zoom:this.subwayZoom})
    }.bind(this));
    E.insert(C);
    E.insert(G);
    return E
},drawTracker:function(A, C, B) {
    this.markerPanel.appendChild(A);
    A.setStyle({top:C - 50 + "px",left:B + "px",display:"block"})
},searchResult:function() {
    this.map.ajkMap.clearOverlays();
    if (this.search && this.search.len > 0) {
        this.hideLastCommMarker();
        var B = this.map.Point(this.search.lat, this.search.lng);
        this.map.setCenter(B, 18);
        this.drawFlagMarker(B, this.address);
        this.lat = this.map.getLat(B);
        this.lng = this.map.getLng(B);
        this.last_comm_id = 0;
        this.last_comm = this.address;
        this.showFlagMarker = 1;
        this.DEF_CITY_INFO.lat = this.lat;
        this.DEF_CITY_INFO.lng = this.lng
    } else {
        if (this.noticeNoResult == undefined) {
            this.noticeNoResult = this.cavansElement.select(".map2_notice_noresult").first();
            var D = this.noticeNoResult.select(".l4").first();
            D.observe("click", function() {
                this.hideNoResultNotice()
            }.bind(this))
        }
        this.lat = 0;
        this.lng = 0;
        this.last_comm = "";
        var E = (this.canvasDimension.width - 360) / 2;
        this.noticeNoResult.select(".l1").first().innerHTML = '没找到"' + this.address + '"这个地方.';
        this.noticeNoResult.setStyle({display:"block",left:E + "px",zIndex:10});
        APF.log("NO ADDRESS")
    }
    var C = new Date();
    var A = C.getFullYear() + "-" + (C.getMonth() + 1) + "-" + C.getDate() + " " + C.getHours() + ":" + C.getMinutes() + ":" + C.getSeconds();
    this.logging("map.searchbox", '{"tradetype":"' + this.DEF_TRADE_TYPE + '","keywords":"' + this.address + '","lat":"' + this.lat + '","lng":"' + this.lng + '","search_time":"' + A + '"}')
},bLocalSearch:function(B) {
    var A = this.map.localSearch(this.map.ajkMap);
    A.setPageCapacity(10);
    A.enableAutoViewport();
    A.setSearchCompleteCallback(function(D) {
        var C = D.getPoi(0);
        if (C) {
            this.search = {};
            this.search.lat = C.point.lat;
            this.search.lng = C.point.lng;
            this.search.len = D.getNumPois()
        }
        this.searchResult()
    }.bind(this));
    A.search(B)
},gLocalSearch:function(A) {
    this.search = new google.search.LocalSearch();
    this.search.setResultSetSize(GSearch.LARGE_RESULTSET);
    this.search.setSearchCompleteCallback(this, function() {
        if (this.search.results[0]) {
            this.search.lat = this.search.results[0].lat;
            this.search.lng = this.search.results[0].lng;
            this.search.len = this.search.results.length
        }
        this.searchResult()
    }.bind(this));
    this.search.execute(A)
},getResult:function(A) {
    var C = this.DEF_CITY_INFO.name + " " + A;
    this.address = A;
 
    new Ajax.Request(B, {method:"get",onSuccess:function(E) {
        var D = E.responseJSON[0];
        if (D && D.id > 0) {
            this.comm_id = D.id;
            this.logSearch = 1;
            this.logCommName = A;
            this.map.setCenter(this.map.Point(D.lat, D.lng), 18)
        } else {
            this.comm_id = 0;
            if (this.load == "baidu") {
                this.bLocalSearch(C).bind(this)
            } else {
                this.gLocalSearch(C).bind(this)
            }
        }
    }.bind(this)})
},getCanvasDimension:function() {
    this.canvasDimension = this.canvas.getDimensions()
},drawMap:function() {
    var B = {zoomLevelMin:9,zoomLevelMax:18};
    this.map = new AnjukeMap(this.canvas, this.load, B);
    var A = this.map.Point(this.DEF_CITY_INFO.lat, this.DEF_CITY_INFO.lng);
    this.map.setCenter(A, this.curr_zoom);
    this.map.ajkMap.enableScrollWheelZoom();
    this.map.scaleControl();
    this.map.largeMapControl();
    this.map.overviewMapControl();
    this.getBounds();
    this.markerPanel = this.map.getMarkerPane();
    if (this.keyword != undefined) {
        this.getResult(this.keyword)
    }
    if (this.load != "baidu") {
        this.map.setGoogleZoomLevel(9, 19);
        this.map.setGoogleSatellite(9, 19)
    }
    this.map.addListener("click", function() {
    }.bind(this));
    this.map.addListener("dragstart", function() {
    }.bind(this));
    this.map.addListener("zoomend", function() {       
        window.clearTimeout(this.timeoutHandle);
        this.hideCommName();
        this.hideCommNameHighLight();
        this.hidePropWind();
        this.removeMapMarkers();
        this.removeTrackers();
        this.doTrack({linkTrackVars:"events",linkTrackEvents:"event8",events:"event8",pVar:"zoom"});
        if (this.load == "baidu") {
            this.customTrackers();
            this.timeoutHandle = window.setTimeout(function() {
                this.getBounds();
                this.getJsonMarkers()
            }.bind(this), 800);
            this.dragging = 0;
            this.hidePropWind();
            if (this.showFlagMarker != 1) {
                this.hideFlagMarker()
            }
            if (this.flag == "1") {
                var C = this.map.Point(this.DEF_CITY_INFO.lat, this.DEF_CITY_INFO.lng);
                this.drawFlagMarker(C, this.flagname)
            } else {
                if (this.last_comm != "" && this.last_comm_id == 0) {
                    var C = this.map.Point(this.lat, this.lng);
                    this.drawFlagMarker(C, this.last_comm)
                }
            }
        }
    }.bind(this));
    this.map.addListener("movestart", function() {
        window.clearTimeout(this.timeoutHandle);
        this.dragging = 1;
        this.hidePropWind();
        this.hideCommName();
        this.hideCommNameHighLight();
        this.hideNotice()
    }.bind(this));
    this.map.addListener("moveend", function() {
        if (this.load == "baidu") {
            this.removeTrackers()
        }
        this.customTrackers();
        this.timeoutHandle = window.setTimeout(function() {
            this.getBounds();
            this.getJsonMarkers()
        }.bind(this), 800);
        this.dragging = 0;
        this.hidePropWind();
        this.hideCommName();
        this.hideCommNameHighLight();
        if (this.showFlagMarker != 1) {
            this.hideFlagMarker()
        }
        if (this.flag == "1") {
            var C = this.map.Point(this.DEF_CITY_INFO.lat, this.DEF_CITY_INFO.lng);
            this.drawFlagMarker(C, this.flagname)
        } else {
            if (this.last_comm != "" && this.last_comm_id == 0) {
                var C = this.map.Point(this.lat, this.lng);
                this.drawFlagMarker(C, this.last_comm)
            }
        }
    }.bind(this));
    if (this.flag == "1") {
        this.drawFlagMarker(this.map.Point(this.DEF_CITY_INFO.lat, this.DEF_CITY_INFO.lng), this.flagname)
    }
    return this.map
},getBounds:function() {                                                                            //范围搜索
    var E = 80;
    var G = this.map.pixelToPoint(this.map.Pixel(E, E / 2));
    var D = this.map.pixelToPoint(this.map.Pixel(this.canvasDimension.width - E / 2, this.canvasDimension.height - E / 2));
    var B = this.map.getLat(D).toFixed(3);
    var A = this.map.getLat(G).toFixed(3);
    var F = this.map.getLng(G).toFixed(3);
    var C = this.map.getLng(D).toFixed(3);
    this.bounds = {slatFrom:B,slatTo:A,slngFrom:F,slngTo:C}
},buildMarker:function(D, C, F, E, B) {
    var A = $(document.createElement("div"));
    A.update('<div id="prop_num_' + E + '"><strong>' + D + "</strong></div>");             //显示在地图上的标注信息内容
    A.className = "marker";
    A.writeAttribute("propNum", D);
    A.id = E;
    A.name = C;
    A.fullname = B;
    this.updateMarker(A, F);
    return A
},buildAreaMarker:function(B, D) {                                                                          //添加标注信息
    var A = $(document.createElement("table"));
    var C = "";
    C += '<td id="area_name_' + B.id + "\" class='area_name'><span>" + B.point_name + "</span></td>";
    C += '<td id="area_prop_' + B.id + "\" class='area_prop'>" + B.propNum + "</td>";
    A.update(C);
    A.className = "marker_area";
    A.writeAttribute("propNum", B.propNum);
    A.writeAttribute("lat", B.lat);
    A.writeAttribute("lng", B.lng);
    A.id = B.id;
    A.name = B.point_name;
    this.updateAreaMarker(A, D);
    return A
},buildDefaultCommName:function(A, B) {
    if ($("map2_commname_default_" + A.id)) {
        $("map2_commname_default_" + A.id).remove()
    }
    comm_name = $(document.createElement("div"));
    comm_name.className = "map2_commname_default";
    comm_name.id = "map2_commname_default_" + A.id;
    comm_name.update(A.name);
    Event.observe(comm_name, "click", function() {
        this.lockMapLayer();
        if (this.currentCommId > 0) {
            $("prop_num_" + this.currentCommId).parentNode.className = "marker"
        }
        var C = this.map.pointToPixel(B);
        this.showPropWind(C.y, C.x, A.id, A.name, A.fullname)
    }.bind(this));
    Event.observe(comm_name, "mouseover", function(C) {
        if (C.stopPropagation) {
            C.stopPropagation()
        } else {
            C.cancelBubble = true
        }
        A.className = "marker marker_hover";
        $("map2_commname_default_" + A.id).addClassName("map2_commname_hover");
        this.hideCommNameHighLight()
    }.bind(this));
    Event.observe(comm_name, "mouseout", function(C) {
        if (this.comm_id == A.id) {
            return false
        }
        if (this.currentCommId != A.id) {
            if (C.stopPropagation) {
                C.stopPropagation()
            } else {
                C.cancelBubble = true
            }
            Event.stop(C);
            A.className = "marker";
            this.hideCommName();
            if ($("map2_commname_default_" + A.id)) {
                $("map2_commname_default_" + A.id).removeClassName("map2_commname_hover")
            }
        }
    }.bind(this));
    return comm_name
},drawAreaMarker:function(A, C, B, D) {
    this.markerPanel.appendChild(A);
    A.setStyle({top:C - 40 + "px",left:B + "px",display:"block"});
    current_zoom = this.map.ajkMap.getZoom();
    if (current_zoom > 15) {
        default_commname = this.buildDefaultCommName(A, D);
        default_commname.setStyle({top:C - 42 + "px",left:B + 45 + "px"});
        this.markerPanel.appendChild(default_commname)
    }
},drawMarker:function(A, C, B, D) {
    this.markerPanel.appendChild(A);
    A.setStyle({top:C - 40 + "px",left:B + "px",display:"block"});
    current_zoom = this.map.ajkMap.getZoom();
    if (current_zoom > 17) {
        default_commname = this.buildDefaultCommName(A, D);
        default_commname.setStyle({top:C - 42 + "px",left:B + 45 + "px"});
        this.markerPanel.appendChild(default_commname)
    }
},updateMarker:function(A, B) {
    Event.observe(A, "mouseover", function(C) {
        if (this.currentCommId > 0 && this.currentCommId != A.id) {
            this.hideCommNameHighLight()
        }
        Event.stop(C);
        A.className = "marker marker_hover";
        if (this.dragging == 0) {
            var D = this.map.pointToPixel(B);
            this.showCommName(A.name, D.y, D.x)
        }
    }.bind(this));
    Event.observe(A, "mouseout", this.bfx = function(C) {
        if (this.comm_id == A.id) {
            return false
        }
        if (this.currentCommId != A.id) {
            Event.stop(C);
            A.className = "marker";
            this.hideCommName()
        }
    }.bind(this));
    Event.observe(A, "click", function(C) {
        this.lockMapLayer();
        Event.stop(C);
        if (this.currentCommId > 0) {
            $("prop_num_" + this.currentCommId).parentNode.className = "marker"
        }
        var D = this.map.pointToPixel(B);
        this.showPropWind(D.y, D.x, A.id, A.name, A.fullname);
        this.doTrack({linkTrackVars:"events",linkTrackEvents:"event10",events:"event10",pVar:"click"})
    }.bind(this))
},updateAreaMarker:function(A, B) {
    Event.observe(A, "mouseover", function(C) {
        var D = $("area_name_" + A.id);
        var E = $("area_prop_" + A.id);
        A.setStyle({zIndex:"10"});
        D.className = "area_name_hover";
        E.className = "area_prop_hover"
    }.bind(this));
    Event.observe(A, "mouseout", function(C) {
        var D = $("area_name_" + A.id);
        var E = $("area_prop_" + A.id);
        A.setStyle({zIndex:"6"});
        D.className = "area_name";
        E.className = "area_prop"
    }.bind(this));
    Event.observe(A, "click", function() {
        this.removeMapAreaMarkers();
        this.map.setZoom(14);
        this.map.ajkMap.setCenter(this.map.Point(A.readAttribute("lat"), A.readAttribute("lng")));
        this.doTrack({linkTrackVars:"events",linkTrackEvents:"event11",events:"event11",pVar:"click"})
    }.bind(this))
},showInfoWindow:function(E, D) {
    var A = this.DEF_PROP_WINDOW_WIDTH;
    var F = this.DEF_PROP_WINDOW_HEIGHT;
    var C = parseInt((this.canvasDimension.height - F) / 2);
    var B = parseInt((this.canvasDimension.width - A) / 2);
    this.propwind.setStyle({top:C + "px",left:B + "px",display:"block"})
},hideSuggestion:function() {
    var A = document.getElementsByClassName("SearchSuggestion");
    if (A) {
        A[0].style.display = "none"
    }
},lockMapLayer:function() {
    $("overmap_layer_only").setStyle({display:"block",width:this.cavansElement.getStyle("width"),height:this.cavansElement.getStyle("height")})
},hideMapLayer:function() {
    $("overmap_layer_only").setStyle({display:"none"})
},showCommName:function(A, C, B) {
    this.commname.update(A);
    this.commname.setStyle({top:C - 42 + "px",left:B + 45 + "px",display:"block"})
},showCommNameDefault:function(A, D, C) {
    var B = new Element("div");
    B.className = "map2_commname_default";
    B.update(A);
    B.setStyle({top:D - 42 + "px",left:C + 45 + "px",display:"block"});
    this.cavansElement.appendChild(B)
},hideCommName:function() {
    this.commname.setStyle({display:"none"})
},showCommNameHighLight:function(E, B, D, C, A) {
    this.hideCommName();
    this.commname_heighlight.update(B);
    this.commname_heighlight.setStyle({top:D - 42 + "px",left:C + 45 + "px",display:"block"});
    Event.stopObserving(this.commname_heighlight, "click");
    Event.observe(this.commname_heighlight, "click", function() {
        this.showPropWind(D, C, E, B, A)
    }.bind(this))
},hideCommNameHighLight:function() {
    if (this.currentCommId > 0 && $("prop_num_" + this.currentCommId)) {
        $("prop_num_" + this.currentCommId).parentNode.className = "marker"
    }
    if ($("map2_commname_default_" + this.currentCommId)) {
        $("map2_commname_default_" + this.currentCommId).removeClassName("map2_commname_hover")
    }
    this.currentCommId = 0;
    this.hideCommName();
    this.commname_heighlight.setStyle({display:"none"})
},showWindArrow:function(B, A) {
    if (A < this.DEF_LEFT_LIMIT) {
        this.proparrow.className = "map2_proparrow map2_proparrow_right";
        windowLeft = A
    } else {
        this.proparrow.className = "map2_proparrow map2_proparrow_left";
        windowLeft = A - this.DEF_ARROW_WIDTH - 1
    }
    this.proparrow.setStyle({top:B - 7 + "px",left:windowLeft + "px",display:"block"})
},showPropWind:function(D, C, E, B, A) {
    this.currentCommId = E;
    this.showCommNameHighLight(E, B, D, C, A);
    $("prop_num_" + this.currentCommId).parentNode.addClassName("marker_hover");
    this.setFilter(this.propWindOrder, 0);
    this.propwind_listlink.update(A);
    this.propwind_listlink.href = "/jigou/" + D ;
    this.propwind.select(".map2_comm_brokerlist").first().href = "/jigou/" + encodeURI(E)+ "/shiting";
    this.propwind.select(".map2_comm_moreinfo").first().href = "/jigou/" + E + "/reviews";
    if (this.propwind.select(".map2_comm_fresh").length > 0) {
        this.propwind.select(".map2_comm_fresh").first().href = "/jigou/" + E +"/photos"
    }
    this.propwind_morelink.show();
    this.propCommId = E;
    this.propPage = 1;
    this.propOrder = 41;
    this.propIsHq = 0;
    this.hqbutton.checked = false;
    this.updatePropWind(this.propCommId, this.propPage, this.propOrder, 1, 0);
    this.showInfoWindow(D, C)
},hidePropWind:function() {
    this.proparrow.setStyle({display:"none"});
    this.propwind.setStyle({display:"none"});
    this.clearPropWinCondition();
    if (!this.dragging && this.changedFilter) {
        this.changedFilter = false;
        this.filter.price = this.filter.defaultPrice;
        this.filter.room = this.filter.defaultRoom
    }
},updatePropWind:function(F, E, A, B, D) {
    //打开小窗口
    this.showLoading();
    this.currentClickType = B;
    this.currentClickFrom = D;
    var C = this.buildUrl(F, E, A);
    new Ajax.Request(C, {method:"get",onSuccess:function(I) {
        this.drawPropBox(I.responseJSON);
        //#().innerHtml(I.responseJSON);

        var H = this.propwind.select(".map2_filters_price").first();
        var G = this.propwind.select(".map2_filters_housemodel").first();
        if (H.innerHTML != "" || G != "") {
            this.clearPropWinCondition();
            this.getConditions(I.responseJSON[3])
        }
    }.bind(this)})
},drawPropBox:function(H) {
    this.propwindTable.update("");
    if (this.propBoxes == undefined) {
        this.propNum = this.cavansElement.select(".prop_num").first();
        this.propPriceTrend = this.cavansElement.select(".prop_pricetrend").first()
    }
    var I = 6;
    this.propNum.update(H[0]);
    this.maxPage = H[0] % I == 0 ? parseInt(H[0] / I) : parseInt(H[0] / I) + 1;
    if (this.propPage == 1) {
        this.propwind.select(".page_prev").first().setStyle("visibility:hidden;")
    } else {
        this.propwind.select(".page_prev").first().setStyle("visibility:visible;")
    }
    if (this.propPage < this.maxPage) {
        this.propwind.select(".page_next").first().setStyle("visibility:visible;")
    } else {
        this.propwind.select(".page_next").first().setStyle("visibility:hidden;")
    }
    this.page_info.update(this.propPage + "/" + this.maxPage);
    this.propPriceTrend.update(H[1]);
    var J = H[2];
    if (J.length > 0) {
        $("noprops").hide();
        for (var F = 0; F < I; F++) {
            if (typeof (J[F]) == "undefined") {
                break
            }
            var B = J[F];
            var G = new Element("li");
            var O = new Element("div");
            O.addClassName("proimg");
            var L = new Element("div");
            L.addClassName("proname");
            var M = new Element("div");
            M.addClassName("area");
            var A = new Element("div");
            A.addClassName("price");
            if (B != undefined) {
                var E = new Element("a", {href:"javascript:;",rel:B[5]});
                var D = new Element("img", {border:"0",src:B[1]});
                D.setAttribute("width", 53);
                D.setAttribute("height", 40);
                E.insert(D);
                var K = new Element("p");
                K.addClassName("hq");
                K.update('&nbsp;<img src="../img/icon-more-28x16.gif" alt="" />');
                var C = new Element("p");
                C.addClassName("title");
                C.update('<a rel="' + B[5] + '" href="' + B[5] + '" onclick="return false;" title="' + B[13] + '">' + B[6] + "</a>");
                var N = new Element("p");
                if (this.isrankon) {
                    if (B[12] == 1) {
                        if (0 == B[9]) {
                            N.update(B[2] + "室" + B[8] + "厅，" + B[3] + "平米，共" + B[14] + "层")
                        } else {
                            N.update(B[2] + "室" + B[8] + "厅，" + B[3] + "平米，" + B[9] + "层")
                        }
                    } else {
                        N.update(B[2] + "室" + B[8] + "厅，" + B[3] + "平米，" + B[9] + "层")
                    }
                } else {
                    if (B[12] == 1) {
                        if (0 == B[9]) {
                            N.update(B[2] + "室" + B[8] + "厅，" + B[3] + "平米，共" + B[14] + "层，<span>" + B[11] + "发布</span>")
                        } else {
                            N.update(B[2] + "室" + B[8] + "厅，" + B[3] + "平米，" + B[9] + "层，<span>" + B[11] + "发布</span>")
                        }
                    } else {
                        N.update(B[2] + "室" + B[8] + "厅，" + B[3] + "平米，" + B[9] + "层，<span>" + B[11] + "发布</span>")
                    }
                }
                O.update(E);
                if (parseInt(B[7]) > 0) {
                    C.insert(K)
                }
                L.insert(C);
                L.insert(N);
                M.update(B[3] + "平米");
                A.update(B[4])
            } else {
                O.update(null);
                L.update(null);
                M.update(null);
                A.update(null)
            }
            G.insert(O);
            G.insert(L);
            G.insert(A);
            this.propwindTable.insert(G)
        }
        this.hideLoading()
    } else {
        $("noprops").setStyle("display:block");
        this.propwindLoad.hide();
        this.propwindTable.hide();
        this.propwindNumber.show()
    }
    this.propwindTable.select("li").each(function(P) {
        P.observe("mouseover", function(Q) {
            P.addClassName("list_hover");
            Event.stop(Q)
        }.bind(this));
        P.observe("mouseout", function(Q) {
            P.removeClassName("list_hover");
            Event.stop(Q)
        }.bind(this));
        P.observe("click", function(R) {
            var Q = P.select("a").first().rel;
            this.redirect(Q)
        }.bind(this))
    }.bind(this))
},redirect:function(url) {
    if (!
        /*@cc_on!@*/
        0) {
        window.open(url, "_blank")
    } else {
        var a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        document.body.appendChild(a);
        a.click()
    }
},showLoading:function() {
    if (this.propwindTable == undefined) {
        this.propwindLoad = this.propwind.select(".map2_propwind_load").first();
        this.propwindTable = this.propwind.select(".property_list").first();
        this.propwindNumber = this.propwind.select(".prop_num").first();
        this.propwindPagenav = $("map2_info_page")
    }
    this.propwindLoad.show();
    this.propwindTable.hide();
    this.propwindNumber.hide();
    this.propwindPagenav.hide();
    $("noprops").hide()
},hideLoading:function() {
    this.propwindLoad.hide();
    this.propwindTable.show();
    this.propwindNumber.show();
    this.propwindPagenav.show()
},getJsonMarkers:function() {
    document.fire("tip:loading");
    this.currentClickType = 0;
    this.currentClickFrom = 0;
    this.hideMapLayer();
    var A = this.map.ajkMap.getZoom();
    if (A < 9 || A > 12) {
        this.handleCommunityMarkers()
    } else {
        this.handelAreaMarkers()
    }
},handelAreaMarkers:function() {
    this.hideCommName();
    this.removeMapMarkers();
    this.showAreaMarkers();
    this.updateLocationHref()
},handleCommunityMarkers:function() {
    this.removeMapAreaMarkers();
    var A = this.buildUrl(0, 1, 0);
    this.updateLocationHref();
    if (this.logSearch == 1) {
        this.recordLog()
    }
    this.logSearch = 0;
    new Ajax.Request(A, {method:"get",onSuccess:function(D) {
        var C = D.responseJSON;
        var B = Object.keys(C);
        this.commNum = B.length;
        this.hideLastCommMarker();
        document.fire("tip:finished", {num:this.commNum});
        if (this.commNum == 0) {
            this.removeMapMarkers();
            this.hideCommName();
            this.hideCommNameHighLight();
            this.showNoPropNotice()
        } else {
            if (this.comm_id != 0 && this.comm_id == this.last_comm_id) {
                this.hideFlagMarker()
            }
            this.hideNotice();
            this.handleRecodeMarker(C);
            this.showCommunityMarkers(B, C)
        }
    }.bind(this)})
},showAreaMarkers:function() {
    var A = this.buildAreaUrl();
    new Ajax.Request(A, {method:"get",onSuccess:function(E) {
        var D = E.responseJSON;
        var C = D.length;
        var B = Object.keys(D);
        this.handleAreaMarkers(D);
        B.each(function(I) {
            var H = D[I];
            if (this.mapAreaMarkers.get(I) == undefined) {
                var K = H;
                var F = this.map.Point(K.lat, K.lng);
                var G = this.buildAreaMarker(K, F);
                this.mapAreaMarkers.set(K.id, G);
                var J = this.map.pointToOverlayPixel(F);
                J.x -= 20;
                this.drawAreaMarker(G, J.y, J.x, F)
            }
        }.bind(this))
    }.bind(this)})
},handleAreaMarkers:function(A) {
    this.mapAreaMarkers.each(function(B) {
        var C = A[B.key];
        if (C == undefined || C[1] != B.value.readAttribute("propNum")) {
            if ($("marker_area_" + B.key)) {
                $("marker_area_" + B.key).remove()
            }
            this.mapAreaMarkers.get(B.key).remove();
            this.mapAreaMarkers.unset(B.key)
        } else {
            var E = this.map.Point(C[2], C[3]);
            var D = this.map.pointToOverlayPixel(E);
            this.mapAreaMarkers.get(B.key).remove();
            if ($("map2_commname_default_" + B.key)) {
                $("map2_commname_default_" + B.key).remove()
            }
            this.drawMarker(this.mapAreaMarkers.get(B.key), D.y, D.x, E)
        }
    }.bind(this))
},handleRecodeMarker:function(A) {
    this.mapMarkers.each(function(C) {
        var B = A[C.key];
        if (B == undefined || B[1] != C.value.readAttribute("propNum")) {
            if ($("map2_commname_default_" + C.key)) {
                $("map2_commname_default_" + C.key).remove()
            }
            this.mapMarkers.get(C.key).remove();
            if (this.currentCommId == C.key) {
                this.hidePropWind();
                this.hideCommNameHighLight()
            }
            this.mapMarkers.unset(C.key)
        } else {
            var E = this.map.Point(B[2], B[3]);
            var D = this.map.pointToOverlayPixel(E);
            this.mapMarkers.get(C.key).remove();
            if ($("map2_commname_default_" + C.key)) {
                $("map2_commname_default_" + C.key).remove()
            }
            this.drawMarker(this.mapMarkers.get(C.key), D.y, D.x, E)
        }
    }.bind(this))
},showCommunityMarkers:function(B, C) {
    var A = 0;
    B.each(function(E) {
        var D = C[E];
        if ((this.mapMarkers.get(E) != undefined) && (D[5] != 1)) {
            return
        }
        window.setTimeout(function() {
            var H = this.map.Point(D[2], D[3]);
            if (D[5] == 1) {
                this.showSelectComm(D, E, H);
                return
            }
            if (this.mapMarkers.get(E)) {
                this.mapMarkers.get(E).remove()
            }
            var F = this.buildMarker(D[1], D[0], H, E, D[4]);
            var G = this.map.pointToOverlayPixel(H);
            this.drawMarker(F, G.y, G.x, H);
            this.mapMarkers.set(E, F)
        }.bind(this), A++ * 30)
    }.bind(this))
},showSelectComm:function(B, C, E) {
    if (this.commNum == 1 && B[1] == 0) {
        this.showNoPropNotice()
    }
    if (B[1] == 0) {
        if (this.lat && this.last_comm && (this.comm_id == this.last_comm_id)) {
            var E = this.map.Point(this.lat, this.lng);
            this.drawFlagMarker(E, this.last_comm)
        } else {
            if (this.comm_id != this.last_comm_id) {
                this.last_comm = B[4];
                this.lat = B[2];
                this.lng = B[3];
                this.last_comm_id = this.comm_id;
                this.drawFlagMarker(this.map.ajkMap.getCenter(), this.last_comm)
            }
        }
    } else {
        if (this.mapMarkers.get(C)) {
            this.mapMarkers.get(C).remove()
        }
        var A = this.buildMarker(B[1], B[0], E, C, B[4]);
        var D = this.map.pointToOverlayPixel(E);
        this.drawMarker(A, D.y, D.x, E);
        this.mapMarkers.set(C, A);
        this.setCommFocus(C);
        this.last_comm_id = this.comm_id;
        this.last_comm = B[4];
        if (this.comm_id == C) {
            this.hideFlagMarker()
        }
        this.hideResultNotice()
    }
},setCommFocus:function(D) {
    var E = document.getElementById(D);
    var B = document.getElementById("map2_commname_default_" + D);
    if (E) {
        E.className = "marker marker_hover"
    } else {
        var A = $(document.createElement("div"));
        A.className = "marker marker_hover"
    }
    if (B) {
        B.className = "map2_commname_default map2_commname_hover"
    } else {
        var C = $(document.createElement("div"));
        C.className = "map2_commname_default map2_commname_hover"
    }
},removeMapMarkers:function() {
    this.mapMarkers.each(function(A) {
        if ($("map2_commname_default_" + A.key)) {
            $("map2_commname_default_" + A.key).remove()
        }
        this.mapMarkers.get(A.key).remove();
        this.mapMarkers.unset(A.key)
    }.bind(this))
},removeMapAreaMarkers:function() {
    this.mapAreaMarkers.each(function(A) {
        this.mapAreaMarkers.get(A.key).remove();
        this.mapAreaMarkers.unset(A.key)
    }.bind(this))
},buildUrl:function(D, F, B) {
    var H = this.map.ajkMap.getCenter();
    var G = this.map.ajkMap.getZoom();
    var E = this.comm_id;
    var A = $H({p2:this.DEF_TRADE_TYPE,p3:this.bounds.slatFrom,p4:this.bounds.slatTo,p5:this.bounds.slngFrom,p6:this.bounds.slngTo,p7:this.filter.price,p8:this.filter.area,p9:this.filter.room,p10:this.filter.type,p14:this.filter.fitment,p11:D,p12:F,p13:B,p15:1,p16:1,p17:this.curr_lat,p18:this.curr_lng,p19:this.map.getLat(H),p20:this.map.getLng(H),p21:this.curr_zoom,p22:G,p23:this.filter.customtype,p24:this.filter.customid,p25:this.currentClickType,p26:this.currentClickFrom,is_hq:this.propIsHq,p27:E,p28:this.filter.age,p29:this.filter.type,p30:this.load}).toQueryString();
    var C = "search.php?" + A;
    return C
},buildAreaUrl:function() {
    var B = $H({p1:this.filter.price,p2:this.filter.room,p3:this.filter.area,p4:this.filter.age,p5:this.filter.type,load:this.load}).toQueryString();
    var A = "./getarea.php?" + B;
    return A
},setFilter:function(A, B) {
    this.propWindOrder.each(function(C) {
        C.className = "sort_button";
        if (C.rel == 41) {
            C.className = "sort_button orderdown"
        }
    }.bind(this))
},showNoPropNotice:function() {
    if (this.noPrompt != 1) {
        if (this.notice == undefined) {
            this.notice = this.cavansElement.select(".map2_notice").first();
            var A = this.notice.select(".l4").first();
            A.observe("click", function() {
                this.hideNotice()
            }.bind(this))
        }
        var B = (this.canvasDimension.width - 360) / 2;
        this.notice.setStyle({display:"block",left:B + "px",zIndex:10})
    }
},hideNotice:function() {
    if (this.notice != undefined) {
        if ($("chkNoPrompt").checked == true) {
            this.noPrompt = 1;
            APF.Utils.setCookie("noprmp", 1, 30)
        }
        this.notice.setStyle({display:"none"})
    }
},hideNoResultNotice:function() {
    if (this.noticeNoResult != undefined) {
        if ($("chkNoPromptNoResult").checked == true) {
            this.noPromptNoResult = 1;
            APF.Utils.setCookie("noprmp_norslt", 1, 30)
        }
        this.noticeNoResult.setStyle({display:"none"})
    }
},hideResultNotice:function() {
    if (this.noticeNoResult == undefined) {
        this.noticeNoResult = this.cavansElement.select(".map2_notice_noresult").first();
        var A = this.noticeNoResult.select(".l4").first();
        A.observe("click", function() {
            this.hideNoResultNotice()
        }.bind(this))
    } else {
        this.noticeNoResult.setStyle({display:"none"})
    }
},wlog:function(A) {
    GLog.write(A)
},updateLocationHref:function() {
    var B = document.location.hash.substring(1).toQueryParams();
    var C = this.map.ajkMap.getCenter();
    var A = this.map.ajkMap.getZoom();
    upparams = {};
    upparams.l1 = this.map.getLat(C);
    upparams.l2 = this.map.getLng(C);
    upparams.l3 = A;
    upparams.a1 = this.filter.areaid;
    upparams.a2 = this.filter.blockid;
    upparams.a3 = this.filter.subwayid;
    this.curr_lat = upparams.l1;
    this.curr_lng = upparams.l2;
    this.curr_zoom = upparams.l3;
    B.kw = "";
    upparams.f1 = this.filter.price;
    upparams.f2 = this.filter.area;
    upparams.f3 = this.filter.room;
    upparams.f4 = this.filter.fitment;
    upparams.f5 = this.filter.customtype;
    upparams.f6 = this.filter.customid;
    upparams.f7 = this.filter.age;
    upparams.f8 = this.filter.type;
    upparams.flag = this.flag;
    upparams.flagname = this.flagname;
    upparams.keyword = this.keyword;
    document.location.hash = Object.toQueryString(upparams)
},logging:function(B, A) {
    new Ajax.Request(this.logurl, {method:"get",parameters:{key:B,string:A},onSuccess:function(C) {
    }.bind(this)})
},doTrack:function(B) {
    if (typeof s_account == "undefined") {
        return
    }
    var A = s_gi(s_account);
    if (B.linkTrackVars) {
        A.linkTrackVars = B.linkTrackVars
    }
    if (B.linkTrackEvents) {
        A.linkTrackEvents = B.linkTrackEvents
    }
    if (B.eVar13) {
        A.eVar13 = B.eVar13
    }
    if (B.events) {
        A.events = B.events
    }
    A.tl(this, "o", B.pVar)
},getConditions:function(H) {
    var F = this.propwind.select(".map2_filters_price").first();
    var A = this.propwind.select(".map2_filters_housemodel").first();
    this.propConditions = 0;
    for (i = 0; i < H.price.length; i++) {
        if (H.price[i][3] > 0) {
            this.propConditions++;
            lower_price = this.DEF_TRADE_TYPE == 1 ? H.price[i][1] / 10000 : H.price[i][1];
            upper_price = this.DEF_TRADE_TYPE == 1 ? H.price[i][2] / 10000 : H.price[i][2];
            title = this.DEF_TRADE_TYPE == 1 ? "万" : "元/月";
            var G = new Element("li");
            if (this.filter.price == H.price[i][0]) {
                G.addClassName("selected")
            }
            var D = new Element("a", {id:"price_filter_" + i,priceid:H.price[i][0],href:"javascript:;"});
            if (H.price[i][0] == 0) {
                D.update("不限")
            } else {
                if (lower_price > 0 && upper_price < 10000) {
                    D.update(lower_price + "-" + upper_price + title)
                } else {
                    if (lower_price <= 0) {
                        D.update(upper_price + title + "以下")
                    }
                    if (upper_price >= 10000) {
                        D.update(lower_price + title + "以上")
                    }
                }
            }
            G.insert(D);
            F.insert(G)
        }
    }
    F.select("li").each(function(J) {
        var I = J.select("a").first();
        I.observe("click", function(K) {
            F.select("li").each(function(L) {
                L.removeClassName("selected")
            });
            I.parentNode.addClassName("selected");
            this.propPage = 1;
            this.filter.price = I.readAttribute("priceid");
            this.changedFilter = true;
            this.updatePropWind(this.propCommId, this.propPage, this.propOrder, 2, 7)
        }.bind(this))
    }.bind(this));
    for (j = 0; j < H.housemodel.length; j++) {
        var E = new Array("零", "一", "二", "三", "四", "五", "六");
        if (H.housemodel[j][2] > 0) {
            this.propConditions++;
            var B = new Element("li");
            if (this.filter.room == H.housemodel[j][0]) {
                B.addClassName("selected")
            }
            var C = new Element("a", {hmid:H.housemodel[j][0],href:"javascript:;"});
            if (H.housemodel[j][0] == 0) {
                C.update("不限")
            } else {
                if (H.housemodel[j][1] == E.length - 1) {
                    C.update(E[H.housemodel[j][1] - 1] + "室以上")
                } else {
                    C.update(E[H.housemodel[j][1]] + "室")
                }
            }
            B.insert(C);
            A.insert(B)
        }
    }
    A.select("li").each(function(J) {
        var I = J.select("a").first();
        I.observe("click", function(K) {
            A.select("li").each(function(L) {
                L.removeClassName("selected")
            });
            I.parentNode.addClassName("selected");
            this.propPage = 1;
            this.filter.room = I.readAttribute("hmid");
            this.changedFilter = true;
            this.updatePropWind(this.propCommId, this.propPage, this.propOrder, 2, 8)
        }.bind(this))
    }.bind(this));
    if (this.propConditions > this.propHideLinkCondition) {
        this.propwind_morelink.hide()
    }
    if (this.propConditions >= this.propMaxCondition) {
        this.win_housemodel_list.addClassName("map2_filters_housemodel_float")
    } else {
        this.win_housemodel_list.removeClassName("map2_filters_housemodel_float")
    }
},clearPropWinCondition:function() {
    var B = this.propwind.select(".map2_filters_price").first();
    var A = this.propwind.select(".map2_filters_housemodel").first();
    B.update("");
    A.update("")
},updateHeader:function() {
    this.PageHeaderObj.updateSelectors(this.filter)
},updateListUrl:function() {
    var A = "/sale/W0QQdsmZmm";
    var C = "";
    var B = this.listlink.readAttribute("headParam");
    if (this.filter.price > 0) {
        C += "QQp3Z" + this.filter.price
    }
    if (this.filter.room > 0) {
        C += "QQp5Z" + this.filter.room
    }
    if (this.filter.area > 0) {
        C += "QQp4Z" + this.filter.area
    }
    if (this.filter.age > 0) {
        C += "QQagZ" + this.filter.age
    }
    if (this.filter.type > 0) {
        C += "QQp6Z" + this.filter.type
    }
    if (this.filter.fitment > 0) {
        C += "QQp8Z" + this.filter.range
    }
    if (C != "") {
        this.listlink.writeAttribute("leftParam", C)
    }
    if (B != null) {
        C += B
    }
    this.listlink.href = A + C
},hideFlagMarker:function() {
    if (this.divGeoPointer != undefined) {
        this.divGeoPointer.remove();
        this.divGeoPointer = undefined
    }
},hideLastCommMarker:function() {
    if (this.last_comm_id > 0) {
        return
    }
    var B = document.getElementById(this.last_comm_id);
    var A = document.getElementById("map2_commname_default_" + this.last_comm_id);
    if (B) {
        B.className = "marker";
        if (this.last_comm_id == this.comm_id) {
            this.hideCommName()
        }
    }
    if (A) {
        A.className = "map2_commname_default"
    }
},drawFlagMarker:function(A, B) {
    var F = this.map.pointToOverlayPixel(A);
    var D = F.y;
    var C = F.x;
    var E = "<em>" + B + "</em>";
    if (this.divGeoPointer == undefined) {
        this.divGeoPointer = $(document.createElement("div"));
        this.divGeoPointer.setStyle({display:"none",whiteSpace:"nowrap"});
        this.markerPanel.appendChild(this.divGeoPointer);
        this.divGeoPointer.update(E)
    } else {
        this.divGeoPointer.update(E)
    }
    this.divGeoPointer.className = "mapFinddingCanvasGeoPointer";
    this.divGeoPointer.setStyle({top:D - 35 + "px",left:C - 18 + "px",display:"block"})
},recordLog:function() {
    var B = new Date();
    var A = B.getFullYear() + "-" + (B.getMonth() + 1) + "-" + B.getDate() + " " + B.getHours() + ":" + B.getMinutes() + ":" + B.getSeconds();
    if (this.searchselect == 1) {
        this.searchselect = 0;
        this.logging("map.searchselect", '{"tradetype":"' + this.DEF_TRADE_TYPE + '","keywords":"' + this.logCommName + '","lat":"' + this.lat + '","lng":"' + this.lng + '","search_time":"' + A + '"}')
    } else {
        this.logging("map.searchbox", '{"tradetype":"' + this.DEF_TRADE_TYPE + '","keywords":"' + this.logCommName + '","lat":"' + this.lat + '","lng":"' + this.lng + '","search_time":"' + A + '"}')
    }
}});
APF.Namespace.register("Anjuke.Map2");
Anjuke.Map2.Sidebar = Class.create({initialize:function(A) {
}});
APF.Namespace.register("Anjuke.Map2");
Anjuke.Map2.SidebarFilter = Class.create({initialize:function(E, J) {
    this.map2SidebarFilter = $(E);
    this.hideTimeout = J;
    var O = this.map2SidebarFilter.select(".map2_sidebar_filter_age a");
    var B = this.map2SidebarFilter.select(".map2_sidebar_filter_type a");
    var G = this.map2SidebarFilter.select(".map2_sidebar_filter_area a");
    var N = this.map2SidebarFilter.select(".filter_age").first();
    var L = this.map2SidebarFilter.select(".filter_type").first();
    var I = this.map2SidebarFilter.select(".filter_area_fit").first();
    var D = this.map2SidebarFilter.select(".map2_sidebar_filter_age").first();
    var C = this.map2SidebarFilter.select(".map2_sidebar_filter_type").first();
    var A = this.map2SidebarFilter.select(".map2_sidebar_filter_area").first();
    var M = this.map2SidebarFilter.select(".price dt a");
    if (M.length > 0) {
        M.each(function(P) {
            P.observe("click", function() {
                M.each(function(R) {
                    if ($(R).hasClassName("focus") == true) {
                        $(R).removeClassName("focus");
                        return
                    }
                });
                var Q = P.readAttribute("paramid");
                this.addClassName("focus");
                document.fire("filter:price", {price:Q});
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",events:"event9",eVar13:Q,pVar:"售价"})
            })
        })
    }
    var K = this.map2SidebarFilter.select(".model dt a");
    if (K.length > 0) {
        K.each(function(P) {
            P.observe("click", function() {
                K.each(function(R) {
                    if ($(R).hasClassName("focus") == true) {
                        $(R).removeClassName("focus");
                        return
                    }
                });
                var Q = P.readAttribute("paramid");
                this.addClassName("focus");
                document.fire("filter:model", {model:Q});
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",events:"event9",eVar13:Q,pVar:"房型"})
            })
        })
    }
    this.timeoutHandles = [];
    var H = this;
    var F = [
        [N,D,2],
        [L,C,3],
        [I,A,4]
    ];
    F.each(function(S) {
        var P = S[0];
        var R = S[1];
        var Q = S[2];
        if (P != undefined) {
            P.observe("mouseover", function() {
                window.clearTimeout(this.timeoutHandles[Q]);
                F.each(function(V) {
                    qf = V[1];
                    if (qf != undefined) {
                        var U = this.map2SidebarFilter.select(".map2_sidebar_filters_panel li");
                        U.each(function(W) {
                            W.removeClassName("selected")
                        });
                        qf.setStyle({display:"none"})
                    }
                }.bind(this));
                P.addClassName("selected");
                var T = R.select(".background").first();
                T.setStyle({height:(R.getHeight() - 38) + "px"});
                R.setStyle({display:"block",top:P.offsetTop + "px"})
            }.bind(this));
            P.observe("mouseout", function(T) {
                window.clearTimeout(this.timeoutHandles[Q]);
                this.hideDiv(T, R, J, Q, P)
            }.bind(this))
        }
        if (R != undefined) {
            R.observe("mouseover", function(T) {
                window.clearTimeout(this.timeoutHandles[Q])
            }.bind(this));
            R.observe("mouseout", function(T) {
                window.clearTimeout(this.timeoutHandles[Q]);
                this.hideDiv(T, R, J, Q, P)
            }.bind(this))
        }
    }.bind(this));
    if (O.length > 0) {
        O.each(function(P) {
            P.observe("click", function() {
                var Q = P.readAttribute("paramid");
                D.setStyle({display:"none"});
                N.update('<a href="javascript:;" style="color:#EB6100">' + P.innerHTML + "</a>");
                N.removeClassName("selected");
                document.fire("filter:age", {age:Q});
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",events:"event9",eVar13:Q,pVar:"售价"})
            })
        })
    }
    if (B.length > 0) {
        B.each(function(P) {
            P.observe("click", function() {
                var Q = P.readAttribute("paramid");
                document.fire("filter:type", {type:Q});
                C.setStyle({display:"none"});
                L.update('<a href="javascript:;" style="color:#EB6100">' + P.innerHTML + "</a>");
                L.removeClassName("selected");
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",events:"event9",eVar13:Q,pVar:"类型"})
            })
        })
    }
    if (G.length > 0) {
        G.each(function(P) {
            P.observe("click", function() {
                var Q = P.readAttribute("paramid");
                document.fire("filter:range", {range:Q});
                A.setStyle({display:"none"});
                I.update('<a href="javascript:;" style="color:#EB6100">' + P.innerHTML + "</a>");
                I.removeClassName("selected");
                H.doTrack({linkTrackVars:"eVar13,events",linkTrackEvents:"event9",events:"event9",eVar13:Q,pVar:"面积"})
            })
        })
    }
    document.observe("filter:initPrice", function(P) {
        if (M.length > 0) {
            M.each(function(Q) {
                var R = Q.readAttribute("paramid");
                if (R == P.memo.id) {
                    Q.addClassName("focus")
                } else {
                    if ($(Q).hasClassName("focus") == true) {
                        $(Q).removeClassName("focus");
                        return
                    }
                }
            })
        }
    });
    document.observe("filter:initRoom", function(P) {
        if (K.length > 0) {
            K.each(function(Q) {
                var R = Q.readAttribute("paramid");
                if (R == P.memo.id) {
                    Q.addClassName("focus")
                } else {
                    if ($(Q).hasClassName("focus") == true) {
                        $(Q).removeClassName("focus");
                        return
                    }
                }
            })
        }
    });
    document.observe("filter:initRange", function(P) {
        G.each(function(Q) {
            var R = Q.readAttribute("paramid");
            if (R == P.memo.id) {
                I.update('<a href="javascript:;" style="color:#EB6100">' + Q.innerHTML + "</a>");
                I.removeClassName("selected")
            }
        })
    });
    document.observe("filter:initAge", function(P) {
        O.each(function(Q) {
            var R = Q.readAttribute("paramid");
            if (R == P.memo.id) {
                N.update('<a href="javascript:;" style="color:#EB6100">' + Q.innerHTML + "</a>");
                N.removeClassName("selected")
            }
        })
    });
    document.observe("filter:initType", function(P) {
        B.each(function(Q) {
            var R = Q.readAttribute("paramid");
            if (R == P.memo.id) {
                L.update('<a href="javascript:;" style="color:#EB6100">' + Q.innerHTML + "</a>");
                L.removeClassName("selected")
            }
        })
    })
},hideDiv:function(E, D, C, B, A) {
    if (this.realOut(E, D) == true) {
        window.clearTimeout(this.timeoutHandles[B]);
        this.timeoutHandles[B] = window.setTimeout(function() {
            A.removeClassName("selected");
            D.setStyle({display:"none"})
        }, C)
    }
},realOut:function(A, C) {
    var B = A.explicitOriginalTarget == undefined ? document.activeElement : A.explicitOriginalTarget;
    if (Element.descendantOf(B, C)) {
        return false
    } else {
        return true
    }
},doTrack:function(B) {
    if (typeof s_account == "undefined") {
        return
    }
    var A = s_gi(s_account);
    if (B.linkTrackVars) {
        A.linkTrackVars = B.linkTrackVars
    }
    if (B.linkTrackEvents) {
        A.linkTrackEvents = B.linkTrackEvents
    }
    if (B.eVar13) {
        A.eVar13 = B.eVar13
    }
    if (B.events) {
        A.events = B.events
    }
    A.tl(this, "o", B.pVar)
},updateSelectors:function(D) {
    var C = this.map2SidebarFilter.select(".map2_sidebar_filter_age a");
    var E = this.map2SidebarFilter.select(".map2_sidebar_filter_type a");
    var B = this.map2SidebarFilter.select(".filter_age").first();
    var A = this.map2SidebarFilter.select(".filter_type").first();
    if (filter_age > 0) {
        C.each(function(F) {
            var G = F.readAttribute("paramid");
            if (G == filter_age) {
                B.update('<a href="javascript:;" style="color:#EB6100">' + F.innerHTML + "</a>");
                B.removeClassName("selected")
            }
        }.bind(this))
    }
    if (D.room > 0) {
        E.each(function(F) {
            var G = F.readAttribute("paramid");
            if (G == D.room) {
                A.update('<a href="javascript:;" style="color:#EB6100">' + F.innerHTML + "</a>");
                A.removeClassName("selected")
            }
        }.bind(this))
    }
}});