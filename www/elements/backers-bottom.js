// @ts-check

import {
    createHTMLElement as html,
} from './utils.js';
import {clicker} from './stats.js';

const hURL = 'https://www.joinhoney.com/darkreader';
const tURL = 'https://jointoucan.com/partners/darkreader';
const donateURL = 'https://opencollective.com/darkreader/donate';
const safariURL = 'https://apps.apple.com/us/app/dark-reader-for-safari/id1438243180#?platform=iphone';

const htmlText = `
<div class="support-us">
    <h2>
        Support us
    </h2>
    <p>
        Dark Reader is <strong>free</strong>, but only 1 of 2000 users supports us.
        Become that 2 of 2000, <strong>support us on <a href="${donateURL}">Open Collective</a></strong>.
    </p>
    <p>
        No money? <strong>Use <a href="${hURL}" class="h hl">Honey</a></strong>,
        an official <strong><em>PayPal</em></strong> extension,
        that will automatically find discounts when you purchase online.
    </p>
        Don't have time on learning a new language?
        <strong><a href="${tURL}" class="t tl">Toucan</a> extension</strong>
        will show you foreign words in web pages you browse.
    </p>
    <p>
        Do you have <strong>iPhone, iPad or Mac</strong>?
        Install <strong><a class="d sl" href="${safariURL}">Dark Reader for Safari</a></strong>.
        Good luck!
    </p>
    <p>
        Dark Reader is <strong>not</strong> sponsored by
        <strong><a class="t fl" href="https://fibery.io/anxiety">Fibery</a></strong>,
        <strong><a class="gl" href="https://github.com/">GitHub</a></strong>
        and <strong><a class="ml" href="https://www.mozilla.org/">Mozilla</a></strong>,
        they are just cool!
    </p>
</div>
`;

const cssText = `
h2 {
    color: var(--color-highlight);
}
a {
    color: var(--color-text);
}
a:hover {
    color: var(--color-text-hover);
}
.h {
    color: var(--color-honey-text);
}
.t {
    color: var(--color-toucan-text);
}
.d {
    color: var(--color-highlight);
}
`;

class SupportUsElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        const style = html('style', null, cssText);
        shadowRoot.append(style);
        style.insertAdjacentHTML('afterend', htmlText);

        const qs = (s) => shadowRoot.querySelector(s);
        clicker(qs('.hl'), 'h-bottom');
        clicker(qs('.tl'), 't-bottom');
        clicker(qs('.sl'), 'drsafari-bottom');
        clicker(qs('.fl'), 'fib-bottom');
        clicker(qs('.gl'), 'gh-bottom');
        clicker(qs('.ml'), 'moz-bottom');
    }
}

customElements.define('darkreader-support-us', SupportUsElement);
