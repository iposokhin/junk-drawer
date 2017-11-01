function createNode ( nameSpaceURI, nodeName, nodeAttrs = {} ) {
  let node = document.createElementNS( nameSpaceURI, nodeName );
  
  for( let attrName in nodeAttrs ) {
    let attrValue = nodeAttrs[ attrName ];
    node.setAttribute( attrName, attrValue );
  }

  return node;
}

function appendNode ( node, parentNode ) {
  parentNode.appendChild( node );
}

function polarToCartesian ( centerX, centerY, radius, angleInDegrees ) {
  let angleInRadians = ( angleInDegrees - 90 ) * Math.PI / 180;
  
  return {
    x: centerX + ( radius * Math.cos( angleInRadians ) ),
    y: centerY + ( radius * Math.sin( angleInRadians ) )
  };      
}

function describeArc ( x, y, radius, startAngle, endAngle ) {
  let start = polarToCartesian( x, y, radius, endAngle ),
      end = polarToCartesian( x, y, radius, startAngle ),
      largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  let d = `M ${ start.x } ${ start.y } A ${ radius } ${ radius }, 0, ${ largeArcFlag }, 0, ${ end.x } ${ end.y }`;

  return d;       
}