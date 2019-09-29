import React, { useState, Component } from "react";

import "./SelectSymptom.css";
import Container from "../Container/Container.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Picker from "./DatePicker";
import { addDays, subDays } from "date-fns";

import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPos = [];
var dataNeg = [];

class StackedColumn100Chart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Your Moods"
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        fontSize: 16,
        itemclick: this.toggleDataSeries
      },
      toolTip: {
        shared: true,
        content: "{indexLabel}"
      },
      data: [
        {
          type: "stackedColumn100",
          name: "Positive Moods %",
          showInLegend: true,
          color: "#D4AF37",
          dataPoints: dataPos
        },
        {
          type: "stackedColumn100",
          name: "Negative Moods %",
          showInLegend: true,
          color: "#C0C0C0",
          dataPoints: dataNeg
        }
      ]
    };

    return (
      <div>
        <h1></h1>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

const SelectSymptom = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [display, setDisplay] = React.useState(false);

  const MoodData = () => {
    return fetch("/mooddata", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        start: addDays(startDate, 1),
        end: addDays(endDate, 1)
      })
    }) // fetch ends
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(parsed) {
        console.log("Data from the DB:", parsed);
        var results = parsed.rows;
        console.log("Rows from the DB:", results);

        //This functions groups the array items according to date:

        var groupBy = function(xs, key) {
          return xs.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
          }, {});
        };

        var objectOfDays = groupBy(results, "mood_date");
        console.log(objectOfDays);

        //Array of arrays

        const entries = Object.entries(objectOfDays);
        entries.sort();
        console.log(entries);

        entries.forEach(function(element) {
          let moodsPos = [];
          let moodsNeg = [];
          let countPos = 0;
          let countNeg = 0;
          let label = element[0];
          element[1].forEach(function(element) {
            if (
              element.mood == "Happy" ||
              element.mood == "Peaceful" ||
              element.mood == "Thrilled"
            ) {
              console.log(element.mood);
              countPos += 1;
              moodsPos.push(element.mood);
            } else {
              countNeg += 1;
              moodsNeg.push(element.mood);
            }
          });
          console.log(countPos);
          console.log(countNeg);
          let linePos = {
            label: label,
            y: countPos,
            indexLabel: moodsPos.join()
          };
          console.log("LinePos", linePos);
          let lineNeg = {
            label: label,
            y: countNeg,
            indexLabel: moodsNeg.join()
          };
          console.log("LineNeg", linePos);
          dataPos.push(linePos);
          console.log(dataPos);
          dataNeg.push(lineNeg);
          console.log(dataNeg);
        });
      }) //parsed ends
      .then(() => {
        setDisplay(true);
      }); //
  }; // moodData ends

  return (
    <div className="select">
      <div>
        {" "}
        <Picker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>

      <Button function={MoodData} className="green">
        {" "}
        visualize{" "}
      </Button>

      {display ? <StackedColumn100Chart /> : null}
    </div>
  ); // return closes
}; // SelectSymptom ends

export default SelectSymptom;
