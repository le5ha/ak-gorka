export class ResponsiveLink {
    constructor(selector, mobileHref, desktopHref, breakpoint) {
        this.link = document.querySelectorAll(selector);
        this.mobileHref = mobileHref;
        this.desktopHref = desktopHref;
        this.breakpoint = breakpoint;
        this.updateHref = this.updateHref.bind(this);
        window.addEventListener('resize', this.updateHref);
        this.updateHref();
    }

    updateHref() {
        let width = window.innerWidth;
        this.link.forEach(link => {
            if (width < this.breakpoint) {
                link.setAttribute('href', this.mobileHref);
            } else {
                link.setAttribute('href', this.desktopHref);
            }
        });
    }
}
