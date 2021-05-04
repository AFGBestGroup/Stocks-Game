<template>
  <div>
    <apexchart
      width="300"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import state from "../state";
export default {
  props: ["name"],
  methods: {
    updateChart(amt) {
      this.series = [
        {
          ...this.series[0],
          data: [...this.series[0].data, amt],
        },
      ];
    },
  },
  mounted() {
    setInterval(() => {
      this.updateChart(state.stocks[this.name].cost);
    }, 2000);
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          labels: { show: false },
        },
        yaxis: {
          decimalsInFloat: 2,
        },
        stroke: {
          colors: ["#FFA500"],
          width: 1.5,
        },
      },
      series: [
        {
          name: this.name.toUpperCase(),
          data: [state.stocks[this.name].cost],
        },
      ],
    };
  },
};
</script>
