class Typer {

    charTypeTime: number;
    nodeList: HTMLElement[];

    constructor(element: HTMLElement, charTypeTime = 70) {

        this.charTypeTime = charTypeTime;

        this._setTyperIds(element);

        let elementCopy = <HTMLElement>element.cloneNode(true);
        this.nodeList = this._getAllNodeChildren(elementCopy);

        this._next(1);

        element.textContent = '';
    }

    _getAllNodeChildren(el: HTMLElement) : HTMLElement[] {
        let listToReturn: HTMLElement[] = [el];
        el.childNodes.forEach((e: HTMLElement) => {
            if (e.nodeType === Node.TEXT_NODE) {
                listToReturn.push(e);
            } else if (e.nodeType === Node.ELEMENT_NODE) {
                let childrenNodes = this._getAllNodeChildren(e);
                listToReturn.push(...childrenNodes);
            }
        });
        return listToReturn;
    }

    _setTyperIds(el: HTMLElement) :void {
        let currentIndex = 0;
        el.setAttribute("typerId", currentIndex as any);
        el.querySelectorAll("*").forEach(e => {
            e.setAttribute("typerId", ++currentIndex as any);
        });
    }

    _next(num: number) : void {
        let waitTime: number = this._addNode(this.nodeList[num]);
        if (num < this.nodeList.length) {
            setTimeout(() => {
                this._next(++num)
            }, waitTime * this.charTypeTime);
        }
    }

    _addNode(node: Node): number {
        if(node.nodeType === Node.ELEMENT_NODE){
            this._addElement(node as HTMLElement);
            return 0;
        } else if(node.nodeType === Node.TEXT_NODE){
            node = this._removeNewLines(node);
            this._addTextNode(node);
            return node.textContent.length;
        }
    }

    _addTextNode(textNode: Node): void {
        let text = textNode.textContent;
        let typerid = textNode.parentElement.getAttribute('typerId');
        let parent = document.querySelector(`[typerId='${typerid}']`);
        for (const i in text as any) {
            setTimeout(() => {
                parent.insertAdjacentHTML('beforeend', text[i]);
            }, (Number(i) + 1) * this.charTypeTime);
        }
    }
    _addElement(element: HTMLElement): void {
        let typerid = element.parentElement.getAttribute('typerId');
        let parent = document.querySelector(`[typerId='${typerid}']`);
        parent.appendChild(element.cloneNode());
    }

    _removeNewLines(textNode: Node) : Node {
        textNode.textContent = textNode.textContent.replace(/\s+/, ' ');
        return textNode;
    }

}