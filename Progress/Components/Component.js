class Component {
  constructor() {
    this.node;
    this.children = [];
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

  appendNode( child ) {
    this.node.appendChild( child.node )
    this.children.push( child );
  }

  update( state ) {
    if ( this.children.length !== 0 ) {
      this.children.forEach( child => child.update( state ) );
    }
  }
}