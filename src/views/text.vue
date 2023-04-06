<template>
    <title>La mort du prête-plume</title>
    <div class="page">
        
        <iframe src="https://drive.google.com/file/d/1--fs0w6U0c5vqFjf8rF9UGX_Fa9KlXFw/preview" width=100% height=1000px></iframe>

    </div>
</template>

<script setup></script>



export default router;

Dans ce cas, la route pour le PDF est définie comme /pdf/:id, ce qui signifie que l'id de la ligne sera transmise en tant que paramètre nommé id.

Enfin, vous pouvez créer la page PDF qui charge le PDF correspondant en fonction de l'id transmis. Voici un exemple de ce que cela pourrait ressembler:


<template>
  <div class="pdf-page">
    <iframe :src="pdfUrl" width="100%" height="1000px"></iframe>
  </div>
</template>

<script>
export default {
  name: "PdfPage",
  computed: {
    pdfUrl() {
      const id = this.$route.params.id;
      return `https://drive.google.com/file/d/${id}/preview`;
    },
  },
};
</script>


Ici, nous utilisons la propriété params de this.$route pour récupérer l'id de la ligne à partir de l'URL, puis nous construisons l'URL du PDF à l'aide de cet id. Ensuite, nous utilisons cette URL pour charger le PDF dans un iframe.