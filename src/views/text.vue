<script setup>


const urlParams = new URLSearchParams(window.location.search);

const param1 = urlParams.get("id")

// Output will be null if there is no query param of named "token"
console.log(param1);




</script>


<template>
    <title>Selected text</title>
    <div class="page">
      <div>
    <h1>Page Text avec l'ID: {{ param1 }}</h1>
    "https://drive.google.com/file/d/{{param1}}/preview" 
    <!-- ... -->
    "`https://drive.google.com/file/d/${param1}/preview`"
  </div>
        
        <iframe :src="`https://drive.google.com/file/d/${param1}/preview`"  width="100%" height="1000px" ></iframe>

    </div>
</template>




