!function(t){var a=function(t,a){var o=t.find(".wcf__portfolio .filter button"),n=t.find(".enable-filter .wcf-post");o.on("click",(function(){var t=a(this).data("filter");a(this).addClass("mixitup-control-active").siblings().removeClass("mixitup-control-active"),function(t){var o=Flip.getState(n.toArray());n.each((function(){var o=a(this);"all"===t||o.hasClass(t)?o.show():o.hide()})),Flip.from(o,{duration:.5,ease:"power1.inOut",stagger:.1})}(t)}));var e=a(".pf-load-more a",t),r=a(".load-more-anchor",t).data("e-id"),i=!1,c=a(".load-more-anchor",t).data("page"),d=a(".load-more-anchor",t).data("max-page");e.on("click",(function(t){t.preventDefault(),c<d&&l()}));var l=function(){u(),i&&a(".wcf__btn",t).addClass("loading"),c++;var o=a(".load-more-anchor",t).attr("data-next-page");return fetch(o).then((function(t){return t.text()})).then((function(t){var a=(new DOMParser).parseFromString(t,"text/html");f(a)}))},f=function(o){s();var n=o.querySelectorAll('[data-id="'.concat(r,'"] .wcf-posts > article')),l=o.querySelector('[data-id="'.concat(r,'"] .load-more-anchor')).getAttribute("data-next-page");n.forEach((function(t){return a('[data-id="'.concat(r,'"] .wcf-posts')).append(t)})),a(".load-more-anchor",t).attr("data-page",c),a(".load-more-anchor",t).attr("data-next-page",l),i||a(".wcf__btn",t).removeClass("loading"),c===d&&e.hide()},u=function(){i=!0},s=function(){i=!1}};t(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/wcf--portfolio.default",a)}))}(jQuery);