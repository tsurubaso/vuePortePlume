<template>
  <div class="page">
    <h1>Page d'accueil</h1>
    <span>search value: </span>
    <input type="text" v-model="searchValue" />

    <EasyDataTable
      alternating
      border-cell
      show-index
      :sort-by="sortBy"
      :sort-type="sortType"
      :search-field="searchField"
      :search-value="searchValue"
      :headers="headers"
      :items="items"
      
      @click-row="navigateToPDF"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import type {
  Header,
  Item,
  ClickRowArgument,
  SortType,
} from "vue3-easy-data-table";


const router = useRouter();//
const itemsSelected = ref([]);//

const navigateToPDF = (item: ClickRowArgument) => {
  const id = item['ID'];
  console.log(id)
 // console.log(item.ID)
 // console.log(JSON.stringify(item.ID));
  
  router.push({ name: "Text", params: { id:id } });

  
};

const searchField = ref("Name");
const searchValue = ref("");
const sortBy = "Date";
const sortType: SortType = "desc";

const headers: Header[] = [
  { text: "Name", value: "Name" },
  { text: "Date", value: "Date", sortable: true },
  { text: "Size", value: "Size" },
  //{ text: "ID", value: "ID" },
];

const items: Item[] = [
  {
    Name: "La mort du prête-plume.pdf",
    Date: "4/1/2023 13:29:23",
    Size: "41683",
    ID: "1--fs0w6U0c5vqFjf8rF9UGX_Fa9KlXFw",
  },
  {
    Name: "Lettre ouverte sur l’A.I..pdf",
    Date: "3/31/2023 16:11:53",
    Size: "64056",
    ID: "1e8SYUSptlOeMucQwxY6ZVA5jgYt_GzbF",
  },
  {
    Name: "Les trois géants pétrifiés.pdf",
    Date: "3/31/2023 15:23:59",
    Size: "57426",
    ID: "1RGBUv5478pFoDhlH4xV1FVKJ6w39QUay",
  },
  {
    Name: "Une autre vérité sur les les frameworks.pdf",
    Date: "3/24/2023 11:54:53",
    Size: "61608",
    ID: "1p2RCn6dli8nq2xTHzlmQ9595JDtXe77o",
  },
  {
    Name: "La vérité sur la programmation.pdf",
    Date: "3/24/2023 10:11:57",
    Size: "70259",
    ID: "15fuAhxPqZ8U1OzcHqCQEaU7uhfuiSLBU",
  },
  {
    Name: "Comment devenir dingue facilement.pdf",
    Date: "3/17/2023 17:55:13",
    Size: "66171",
    ID: "1zzdaSX5K6jUjjhCR6dXhkOEojt-1SOym",
  },
  {
    Name: "programmeur du dimanche.pdf",
    Date: "3/17/2023 9:59:53",
    Size: "51694",
    ID: "1a6gfZEc5QFfh8LOaMz3_jc45qnP1Watr",
  },
  {
    Name: "Pirate de bureau.pdf",
    Date: "3/17/2023 9:59:53",
    Size: "38338",
    ID: "169y9wWl5qjG8IcmfzFe6PWl_TE1ExwUG",
  },
  {
    Name: "Emigration du Japon.pdf",
    Date: "3/16/2023 11:40:23",
    Size: "77825",
    ID: "1DASAzQsP0Q_llMHiSDpjCydkRbB9dPem",
  },
  {
    Name: "Des jeux vidéos.pdf",
    Date: "9/16/2022 11:58:11",
    Size: "51398",
    ID: "1op8GjCPjapabl5IP4t7NofaxSgkOZBXA",
  },
  {
    Name: "audrey 2eme partie.pdf",
    Date: "9/16/2022 11:58:09",
    Size: "87713",
    ID: "16fABcQm8RF_jtYpYb8v9WO5w3Cs3TpRE",
  },
  {
    Name: "Audrey.pdf",
    Date: "9/16/2022 11:58:08",
    Size: "118461",
    ID: "1uvpw9RU99Wro--KcXjAHdqQcbgFSWNjB",
  },
  {
    Name: "Elle 8.pdf",
    Date: "9/16/2022 11:58:20",
    Size: "69666",
    ID: "1_ZwfuuzBjnEQ93UyZd-pNsnX6jxo-WEA",
  },
  {
    Name: "Pour obtenir le texte.pdf",
    Date: "9/16/2022 11:58:44",
    Size: "32148",
    ID: "1Kop18lNL2bxXsZgx8RUJttv19VE2g6l_",
  },
  {
    Name: "Rant.pdf",
    Date: "9/16/2022 11:58:46",
    Size: "46230",
    ID: "1nRgV2xMOb3vLlgFMzrelmlWltByOr5Y_",
  },
  {
    Name: "Elle 7 (Hors sujet).pdf",
    Date: "9/16/2022 11:58:20",
    Size: "55238",
    ID: "1bFWMcFKXgcVRqsRoE-3pZZqGqIqnAHUH",
  },
  {
    Name: "Elle 6.pdf",
    Date: "9/16/2022 11:58:16",
    Size: "61056",
    ID: "1jLRHQ6X_Azv_hUM_SUOijhyap0dVmi1Y",
  },
  {
    Name: "Elle 5.pdf",
    Date: "9/16/2022 11:58:14",
    Size: "67652",
    ID: "1CaNIRvPk53Dnel6U_g1hGYBi2RefrzTj",
  },
  {
    Name: "Elle 4.pdf",
    Date: "9/16/2022 11:58:14",
    Size: "53470",
    ID: "1AORGedIlg3OpZIhcvmq59Tr08teOA7EQ",
  },
  {
    Name: "Elle 3.pdf",
    Date: "9/16/2022 11:58:14",
    Size: "62694",
    ID: "1bIIYHYRCWbSa9PlFWJD78D-NhY7ouj1b",
  },
  {
    Name: "Elle 2.pdf",
    Date: "9/16/2022 11:58:14",
    Size: "51249",
    ID: "15LQLhF2xGspeU4yAV7qyQvuzg0reYC9G",
  },
  {
    Name: "Elle.pdf",
    Date: "9/16/2022 11:58:17",
    Size: "53577",
    ID: "16sfDv_2gSXyQjK_3gQjrC8ewDcPAlYNA",
  },
  {
    Name: "Sans sérif 3.pdf",
    Date: "9/16/2022 11:58:51",
    Size: "56394",
    ID: "18ozCsBfc9BAAejIdxghACxGSlhxjhgwp",
  },
  {
    Name: "Sans sérif 2.pdf",
    Date: "9/16/2022 11:58:48",
    Size: "53119",
    ID: "1wu1HaVfz5Bv2Q8j3NBcz3G4hUnbUmMDk",
  },
  {
    Name: "Sans sérif.pdf",
    Date: "9/16/2022 11:58:52",
    Size: "78400",
    ID: "1RaS5VT6q9e-fkZkDI1vbO80Gxc6n1HCH",
  },
];


</script>
