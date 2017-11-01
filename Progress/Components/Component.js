class Component {
  constructor() {
    this.node;
  }

  createNode( nodeName, ns = "http://www.w3.org/2000/svg" ) {
    this.node = document.createElementNS( ns, nodeName );
  }

  setAttributes( nodeAttrs = {} ) {
    for( let attrName in nodeAttrs ) {
      let attrValue = nodeAttrs[ attrName ];
      this.node.setAttribute( attrName, attrValue );
    }
  }

  appendNode( childNode ) {
    this.node.appendChild( childNode )
  }
}