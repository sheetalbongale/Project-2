function buildPanel() {
	d3.json(`/category/${category}`).then( data => {
		drawGauge(data);
		});
};

var category = "Bock";
var beer_style = "German Bock";

function init() {


	var selectorOne = d3.select("#selDatasetOne");
	d3.json("/category_names").then((categoryNames) => {
    categoryNames.forEach((category) => {
		selectorOne
        .append("option")
        .text(sample)
        .property("record", category);
    });
	})

	var selectorTwo = d3.select('#selDatasetTwo');
	d3.json("/beerstyle_names").then((sampleBeerstyle) =>{
	Object.keys(sampleBeerstyle[0]).forEach((beerstyle) =>{
		selectorTwo
		.append("option")
		.text(beerstyle)
		.property("record", beerstyle);
	});
	})


	buildPanel()

}

function optionChangedOne(newcategory) {
    category = newcategory;
    buildPanel();
    d3.select('#abvGauge').html(""),
    drawGauge();
  }

  function optionChangedTwo(newbeerstyle) {
    category = newbeerstyle;
    buildPanel();
    d3.select('#abvGauge').html(""),
    drawGauge();
  }


  /*
  function optionChangedTwo(newbeerstyle) {
    country = newCountry;
    buildPanel();
    drawBar();
  }
  */
  
  init();
