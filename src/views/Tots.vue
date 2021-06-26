<template>
  <div>
    <div class="card">
      <h5>Tots els gèneres</h5>
      <Chart v-if="mounted" type="bar" :data="basicData" />
    </div>
   
  </div>
</template>

<script>
import Chart from "primevue/chart";

export default {
  components: {
    Chart,
  },
  mounted() {
    self.$http
      .get("https://api.idescat.cat/pob/v1/cerca.json?p=tipus/com")
      .then((res) => {
        res.data.feed.entry.map((comarca) => {
          this.basicData.labels.push(comarca.title);
          this.basicData.datasets[0].data.push(comarca["cross:DataSet"]["cross:Section"]["cross:Obs"][2]['OBS_VALUE']);
          
        });
        this.mounted = true
      });
  },
  data() {
    return {
      mounted: false,
      basicData: {
        labels: [
        ],
        datasets: [
          {
            label: "Habitants",
            backgroundColor: "#42A5F5",
            data: [],
          },
        ],
      },
    
    };
  },
};
</script>