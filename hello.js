const htmlReq = [];
const cssReq = []

const startId = 0;
const endId = 0;


const done = new Set();
const validate = (htmlReq = null, cssReq = null, doc) => {
    if (htmlReq) validateHtml(htmlReq, doc);
    if (cssReq) validateCss(cssReq, doc);
    printResults();
}


const validateHtml = (currReq, doc) => {
    for (let entry of currReq) {
        const string = (entry.tag ? entry.tag : "") + (entry.id ? "#" + entry.id : "") + (entry.class ? "." + entry.class : "")
        const element = doc.querySelector(string);
        if (!element) {
            continue;
        } else {
            done.add(entry.reqNo);
        }

        if (entry.nested?.length > 0) {
            validateHtml(entry.nested, element);
        }
    }
}

const validateCss = (cssReq, doc) => {
    for (let entry of cssReq) {
        const string = (entry.tag ? entry.tag : "") + (entry.id ? "#" + entry.id : "") + (entry.class ? "." + entry.class : "")
        const element = doc.querySelector(string);
        if (!element) {
            continue;
        } else {
            const style = window.getComputedStyle(element);
            for (let prop of entry.properties) {
                for (let key in prop) {
                    let toCheck = prop[key];
                    let elStyle = style[key];
                    if (style[key].includes("px")) {
                        let elValue = parseInt(style[key].split("px")[0]);
                        elStyle = elValue + "px";
                    }

                    if (prop[key].includes("vh")) {
                        const height = window.innerHeight;
                        const val = parseInt(prop[key].split("vh")[0]);
                        toCheck = height * val / 100 + "px";
                    }
                    if (prop[key].includes("vw")) {
                        const width = window.innerWidth;
                        const val = parseInt(prop[key].split("vw")[0]);
                        toCheck = width * val / 100 + "px";
                    }
                    if (elStyle != toCheck) {
                        return;
                    }
                }
            }
            done.add(entry.reqNo);
        }

        if (entry.nested?.length > 0) {
            validateCss(entry.nested, element);
        }
    }
}

const printResults = () => {
    for (let i = startId; i <= endId; i++) {
        if (!done.has(i)) {
            console.log("Requirement Not completed " + i);
        } else {
            console.log("Requirement completed " + i);
        }
    }
}



validate(htmlReq, cssReq, document);