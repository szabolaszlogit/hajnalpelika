<template>
    <div class="m-auto px-2 py-2 max-w-xl">
    <div class="bg-white shadow-2xl" >
        <div>
            <img :src="require(`@/assets/${tsrc}`)"/> 
        </div>
        <div class="px-2 md:px-4 py-2 mt-2 bg-white">
            <h2 class="font-bold text-2xl text-gray-800">{{cardtitle}}</h2>
                <p class=" text-lg text-gray-700 px-2 mr-1 my-3">
                    {{ cardtext }}
                </p>
          </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
    tsrc: {
    type: String,
    default: 'istvan.jpg'
  },
    cardtitle: {
    type: String,
    default: 'istvan.jpg'
  },
    cardtext: {
    type: String,
    default: 'Hello'
  }
}
}
</script>