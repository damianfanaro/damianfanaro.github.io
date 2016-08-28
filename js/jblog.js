//////////////////////
//                  //
// GLOBAL VARIABLES //
//                  //
//////////////////////

var baseURL = window.location.protocol + "//" + window.location.host + "/";
var loadSVG_1 = false;

////////////////////
//                //
// DOCUMENT READY //
//                //
////////////////////

$(document).ready(function () {

    $("table").addClass("table table-bordered");
    checkResourcesToLoad();

});

///////////////
//           //
// FUNCTIONS //
//           //
///////////////

function checkResourcesToLoad() {

    if (loadSVG_1) {
        SVGTree_1("/json/java-collections-interfaces.json", "#core-collection-interfaces", 700);
    }

}

function SVGTree_1(data, domElement, width) {

    var height = width / 2;
    var tree = d3.layout.tree().size([height, width]);
    var diagonal = d3.svg.diagonal().projection(function (d) {
        return [d.y, d.x];
    });
    var svg = d3.select(domElement)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(-50,0)");

    d3.json(data, function (error, json) {
        var nodes = tree.nodes(json),
            links = tree.links(nodes);

        var link = svg.selectAll("path.link")
            .data(links)
            .enter().append("path")
            .attr("class", "link")
            .attr("d", diagonal);

        var node = svg.selectAll("g.node")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            })

        node.append("circle")
            .attr("r", 10);

        node.append("text")
            .attr("dx", 25)
            .attr("dy", 30)
            .attr("text-anchor", function (d) {
                return d.children ? "end" : "start";
            })
            .text(function (d) {
                return d.name;
            });
    });

    d3.select(self.frameElement).style("height", height + "px");

}