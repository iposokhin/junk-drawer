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

  appendNode( ...children ) {
    children.forEach( child => {
      this.node.appendChild( child.node )
      this.children.push( child );
    } );
  }

  removeNode( node ) {
    let nodeIndex = this.children.indexOf( node );

    if ( nodeIndex >= 0 ) {
      this.node.removeChild( this.children[ nodeIndex ].node );
      this.children.splice( nodeIndex, 1 );
    }
  }

  update( state, action ) {

  }
}